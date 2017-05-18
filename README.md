# Machine Translation

Model, Generate, Learning, Translation

## Install

```
$ npm install mt6
```

## Model

[lib/grammar.js](lib/grammar.js)

```js
/*
S = NP?'VP?
NP = A* /N
VP = (V NP?)?
N = 人 | 魚
V = 愛 | 食
A = 藍 | 紅
*/
...

B.P = { NP: 0.7, VP: 0.7, VP_NP: 0.6, NP_A: 0.4, 
        '藍人': 0.1, '藍魚': 0.9, 
        '小人': 0.4, '小魚': 0.6 }

...
```

## Generate 

```
D:\Dropbox\github\mt6\tool>node gen 10 tag
'
N'
N'V/
AAN'V/
'
N'V/
'
N'V/AN
N'V/
'V/

D:\Dropbox\github\mt6\tool>node gen 10
人'食/
小小人'食/
小魚'愛/
魚'食/
'食/魚
人'
魚'食/魚
'食/魚
'愛/小人
'

D:\Dropbox\github\mt6\tool>node gen 10000 > word.10000.bak
D:\Dropbox\github\mt6\tool>node gen 10000 tag > tag.10000.bak
D:\Dropbox\github\mt6\tool>node statistics tag.10000.bak
{
 "'": 10000,
 "V": 6950,
 "/": 6950,
 "N": 11200,
 "A": 7587
}
{
 ".'": 2987,
 "'V": 6950,
 "V/": 6950,
 "/N": 2534,
 ".A": 2819,
 "AA": 3115,
 "AN": 4472,
 "N'": 7013,
 "/A": 1653,
 ".N": 4194
}
P('|.)=NaN
P(V|')=0.695
P(/|V)=1
P(N|/)=0.36460431654676256
P(A|.)=NaN
P(A|A)=0.41057071306181625
P(N|A)=0.5894292869381837
P('|N)=0.6261607142857143
P(A|/)=0.23784172661870503
P(N|.)=NaN


D:\Dropbox\github\mt6\tool>node statistics word.10000.bak
{
 "魚": 7804,
 "'": 10000,
 "愛": 3476,
 "/": 6986,
 "人": 3213,
 "小": 3701,
 "食": 3510,
 "藍": 3666
}
{
 ".魚": 2048,
 "魚'": 4084,
 "'愛": 3476,
 "愛/": 3476,
 ".人": 2099,
 "人'": 2809,
 ".'": 3107,
 ".小": 1385,
 "小小": 761,
 "小魚": 1308,
 "/魚": 2486,
 "'食": 3510,
 "食/": 3510,
 "/藍": 811,
 "藍小": 728,
 "小藍": 746,
 "藍魚": 1962,
 ".藍": 1361,
 "藍藍": 748,
 "/小": 827,
 "小人": 886,
 "藍人": 228
}
P(魚|.)=NaN
P('|魚)=0.5233213736545361
P(愛|')=0.3476
P(/|愛)=1
P(人|.)=NaN
P('|人)=0.8742608154372861
P('|.)=NaN
P(小|.)=NaN
P(小|小)=0.2056201026749527
P(魚|小)=0.3534179951364496
P(魚|/)=0.35585456627540796
P(食|')=0.351
P(/|食)=1
P(藍|/)=0.11608932150014314
P(小|藍)=0.19858156028368795
P(藍|小)=0.20156714401513104
P(魚|藍)=0.5351882160392799
P(藍|.)=NaN
P(藍|藍)=0.20403709765411893
P(小|/)=0.11837961637560836
P(人|小)=0.23939475817346664
P(人|藍)=0.062193126022913256

```



