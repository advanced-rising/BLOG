---
title: NestJS Param decorators
date: '2022-08-03'
tags: ['nestjs', 'back']
draft: false
comment: NestJs Param decorators
code: ['@Param(param?: string)']
---

## Param decorators

Nest는 HTTP 라우트 핸들러와 함께 사용할 수 있는 유용한 매개변수 데코레이터 세트를 제공합니다.
다음은 제공된 데코레이터와 이들이 나타내는 일반 Express(또는 Fastify) 객체의 목록입니다.

```tsx
@Get("/:id")
  getOne(@Param("id") id: string) {
    return `This will return on movie with the id : ${id}`;
  }
```

```tsx
// NestJS

@Param(param?: string)

// ExpressJS

req.params / req.params[param]
```

## why use @Query ?? Instead of @Param

`Query`는 `Query Parameter`를 받아올 때 사용하고,

`(예, /users?id=123)`

`Param`은 `Path Variable`을 받아올 때 사용합니다.

`(예, /users/123)`

`Param`은 요청 주소에 포함되어있는 변수를 담아요.

예를 들어서 `localhost:3000/movie/4546` 과 같은 주소가 있다면 `4546`을 담게 되고,

`Query`는 주소 이후에 `"?"` 뒤에 있는 변수를 담게 됩니다.

예를 들어서 `localhost:3000/movie/search?year=2020`일 경우에 `2020`을 담게 된다.

추가적으로 `Path Variable`과 `Query Parameter`를 어떨때 사용하는지는 아래와 같이 사용하면 베스트라고 하네요.

만약 어떤 `resource`를 식별하고 싶으면 `Path Variable`을 사용하고,

정렬이나 필터링을 한다면 `Query Parameter`를 사용하는 것이 `Best Practice`이다.

https://docs.nestjs.com/custom-decorators#param-decorators
