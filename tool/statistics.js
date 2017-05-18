let B = require('../lib/grammar')
let fs = require('fs')
let S = {}

S.statistics = function (file) {
  S.map1 = {}
  S.map2 = {}
  let text = fs.readFileSync(file, 'utf-8')
  let lines = text.split(/\r?\n/)
  for (var line of lines) {
    if (line.trim() !== '') S.doLine(line)
  }
}

S.doLine = function (line) {
  let c0 = '.'
  let c0count = S.map1[c0]
  S.map1[c0] = (c0count != null) ? c0count + 1 : 1
  for (let c1 of line) {
    let c1count = S.map1[c1]
    let c2count = S.map2[c0 + c1]
    S.map1[c1] = (c1count != null) ? c1count + 1 : 1
    S.map2[c0 + c1] = (c2count != null) ? c2count + 1 : 1
    c0 = c1
  }
}

S.pcond = function (b, a) {
  return S.map2[a + b] / S.map1[a]
}

S.print = function () {
  console.log(JSON.stringify(S.map1, null, 1))
  console.log(JSON.stringify(S.map2, null, 1))
  S.P = {}
  for (let ab in S.map2) {
    let a = ab[0]
    let b = ab[1]
    console.log('P(%s|%s)=%d', b, a, S.map2[ab] / S.map1[a])
  }
}

S.statistics(process.argv[2])
S.print()
