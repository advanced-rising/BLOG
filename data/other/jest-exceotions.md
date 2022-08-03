---
title: Jest Exceptions
date: '2022-08-03'
tags: ['jest', 'test']
draft: false
comment: Jest Exceptions
code: expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
---

## Jest Exceptions

특정 함수가 호출될 때 오류가 발생하는지 테스트하려면 toThrow를 사용하십시오.

예외를 발생시키는 함수는 래핑 함수 내에서 호출해야 합니다. 그렇지 않으면 toThrow 어설션이 실패합니다.

```ts
expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
```

https://jestjs.io/docs/getting-started
