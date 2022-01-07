const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

const resolvePromise = (promise, result, resolve, reject) => {
  if (promise === result) {
    return reject(new TypeError('Chaining cycle detected for promise!'))
  }

  if (typeof result !== 'function' || typeof result.then !== 'function') {
    resolve(x)
    return
  }

  let thenCalledOrThrow = false
  try {
    result.then(
      value => {
        if (thenCalledOrThrow) return
        thenCalledOrThrow = true
        resolvePromise(promise, value, resolve, reject)
      },
      error => {
        if (thenCalledOrThrow) return
        thenCalledOrThrow = true
        reject(error)
      },
    )
  } catch (error) {
    if (thenCalledOrThrow) return
    thenCalledOrThrow = true
    reject(error)
  }
}

class promise {
  status = PENDING
  value = null
  reason = null
  onFulfilledCallbacks = []
  onRejectedCallbacks = []

  constructor(excutor) {
    const resolve = function (value) {
      if (value instanceof Promise) {
        value.then(resolve, reject)
      }

      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.onFulfilledCallbacks.forEach(cb => cb())
      }
    }

    const reject = function (error) {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.error = error
        this.onRejectedCallbacks.forEach(cb => cb())
      }
    }

    try {
      excutor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFufilled, onRejected) {
    onFufilled = typeof onFufilled === 'function' ? onFufilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : e => {throw e} // prettier-ignore

    const promise = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            const result = onFufilled(this.value)
            resolvePromise(promise, result, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            const result = onRejected(this.reason)
            resolvePromise(promise, result, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }

      if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const result = onFufilled(this.value)
              resolvePromise(promise, result, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const result = onRejected(this.reason)
              resolvePromise(promise, result, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })

    return promise
  }
}
