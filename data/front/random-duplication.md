---
title: Random Duplication Num Array
date: '2022-10-07'
tags: ['vanila', 'front', 'code']
draft: false
comment: 중복 없는 랜덤 숫자 배열 생성
---

```
const randomLottoNum = (): any => {
  let randomIndexArray = [];
  let i;
  for (i = 0; i < 7; i++) {
    //check if there is any duplicate index
    const randomNum = Math.floor(Math.random() * 50);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      //if the randomNum is already in the array retry
      i--;
    }
  }
  return randomIndexArray;
};
```
