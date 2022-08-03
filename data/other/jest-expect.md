---
title: Jest Expect()
date: '2022-08-03'
tags: ['jest', 'test']
draft: false
comment: Jest Expect()
code: it("should be 4" , () => {expect(2+2).toEqual(4)})
---

## Jest Expect()

```ts
it('should be 4', () => {
  expect(2 + 2).toEqual(4);
});
```

값을 테스트할 때마다 expect 함수가 사용됩니다. expect하나만 콜하는 경우는 거의 없을 것입니다.

toBe()는 Object.is를 사용하여 정확한 동등성을 테스트합니다. 객체의 값을 확인하려면 대신 toEqual()을 사용하세요.
