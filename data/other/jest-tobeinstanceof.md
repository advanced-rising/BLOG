---
title: Jest toBeInstanceOf()
date: '2022-08-03'
tags: ['jest', 'test']
draft: false
comment: Jest toBeInstanceOf()
code: .toBeInstanceOf(Class)
---

## Jest toBeInstanceOf()

```ts
expect(() => moviesService.getMovie(999)).toThrow();

expect(() => moviesService.getMovie(999)).toThrowError();

expect(() => moviesService.getMovie(999)).toThrow('Not Found Movie: 999');

expect(() => moviesService.getMovie(999)).toThrow(/Not Found Movie: 999/g);
```

.toBeInstanceOf(Class)를 사용하여 객체가 클래스의 인스턴스인지 확인하십시오.

https://jestjs.io/docs/expect#tobeinstanceofclass

Exceptions

영화를 못 찾았을 때, 던지는 404 에러를 아래와 같이 테스트할 수도 있습니다.

https://jestjs.io/docs/using-matchers#exceptions
