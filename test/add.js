function add(a, b) {
  return a + b
}

describe('add', function () {
  it('1+2=3', function () {
    const r = add(1, 2)
    r.should.to.equal(3)
  })
  it('2+3=5', function () {
    add(2, 3).should.to.equal(5)
  })
})
