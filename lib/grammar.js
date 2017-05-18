let R = require('./random')
let B = module.exports = {mode: 'tag'}
/*
S = NP?'VP?
NP = A*"N
VP = ((A* V) NP?)?
N = 人 | 屋 | 魚
V = 愛 | 食
A = 大 | 小 | 紅
X = any words
*/

B.map = {
  N: ['人', '魚'],
  V: ['愛', '食'],
  A: ['藍', '小']
}

B.P = {
  S: 0.7, V: 0.7, VO: 0.6, NA: 0.4, VA: 0.4,
  '藍人': 0.1, '藍魚': 0.9,
  '小人': 0.4, '小魚': 0.6,
}

B.S = function () {
  var result = ''
  B.state = 'S'
  result += B.repeats(B.NP, '?', B.P.S) + '\''
  result += B.repeats(B.VP, '?', B.P.V)
  return result.trim()
}

B.NP = function () {
  return B.repeats(B.A, '*', B.P.NA) + B.N()
}

B.VP = function () {
  var result = ''
  B.state = 'V'
  result += B.V() + '"'
  B.state = 'O'
  result += B.repeats(B.NP, '?', B.P.VO)
  B.state = '.'
  return result
}

B.sample = function (a) {
  B.word = R.sample(a)
  return B.word
}

B.V = function () { return (B.mode === 'tag') ? 'V' : R.sample(B.map.V) }

B.N = function () {
  if (B.mode === 'tag') return 'N'
  var AN = B.word + '人'
  var N = (R.random(0, 1) < B.P[AN]) ? '人' : '魚'
  B.word = N
  return N
}

B.A = function () { return (B.mode === 'tag') ? 'A' : R.sample(B.map.A) }

B.repeats = function (f, pattern, prob) {
  var list = []
  if (pattern === '+') {
    list.push(f())
  } else if (pattern === '?') {
    if (R.random(0, 1) < prob) list.push(f())
  }
  if (pattern !== '?') {
    for (let x = f(); R.random(0, 1) < prob; x = f()) {
      list.push(x)
    }
  }
  return list.join('')
}

B.gen = function (n) {
  for (let i = 0; i < n; i++) {
    console.log(B.S())
  }
}
