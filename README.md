# Machine Translation

Generate, Learning, Translation

## Install

```
$ npm install mt6
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

```



