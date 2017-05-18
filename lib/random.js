var R = module.exports = {}

R.random = function (a, b) {
  return a + (Math.random() * (b - a))
}

R.randInt = function (a, b) {
  return Math.floor(R.random(a, b))
}

R.sample = function (a) {
  return a[R.randInt(0, a.length)]
}
