---
title: Jest it()
date: '2022-08-03'
tags: ['jest', 'test']
draft: false
comment: Jest it()
code: it("should be 4" , () => {expect(2+2).toEqual(4)})
---

## Jest it()

```ts
it('should be 4', () => {
  expect(2 + 2).toEqual(4);
});
```

테스트 클로저를 생성합니다.

it()대신 test()도 사용 가능
