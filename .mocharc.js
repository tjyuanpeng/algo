module.exports = {
  bail: false,
  'check-leaks': true,
  ui: 'bdd',
  require: ['@babel/register', './src/before.js'],
  'watch-files': ['test/**/*.js'],
}
