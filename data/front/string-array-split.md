---
title: String Array Split
date: '2022-10-07'
tags: ['vanila', 'front', 'code']
draft: false
comment: 스트링 배열을 하나의 스트링으로 반환
---

```
const lottoArraySplit = (lotto: string) => {
  if (lotto === '') {
    return [];
  } else {
    const arrSplit = lotto.split(/[ ,]+/);
    return arrSplit;
  }
};
```

```
@params ['1','2','3','4','5','6','7']

@return '1 2 3 4 5 6 7'
```
