---
title: NestJS Validation Pipe
date: '2022-08-03'
tags: ['nestjs', 'back', 'Validation Pipe']
draft: false
comment: NestJs ValidationPipe
code: npm i --save class-validator class-transformer
---

## Validation Pipe

내장 ValidationPipe사용을 위한 class-validator, class-transformer설치

npm i --save class-validator class-transformer

## Validation

웹 애플리케이션으로 전송되는 데이터의 검증을 도와줍니다.

들어오는 요청을 자동으로 검증하기 위해 Nest는 즉시 사용할 수 있는 여러 파이프를 제공합니다.

ValidationPipe는 강력한 클래스 유효성 검사기 패키지와 선언적 유효성 검사 데코레이터를 사용합니다. ValidationPipe는 들어오는 모든 클라이언트 페이로드에 대해 유효성 검사 규칙을 적용하는 편리한 접근 방식을 제공합니다.

https://docs.nestjs.com/techniques/validation

## 자동 검증

애플리케이션 수준에서 ValidationPipe를 바인딩하는 것으로 시작하겠습니다.

따라서 모든 엔드포인트가 잘못된 데이터를 수신하지 못하도록 보호됩니다.

https://docs.nestjs.com/techniques/validation

### whitelist

true로 설정하면 유효성 검사기는 class-validator의 유효성 검사 데코레이터를 적어도 하나라도 사용하지 않은 모든 속성 객체를 제거합니다.

### forbidNonWhitelisted

true로 설정하면 화이트리스트에 없는 속성을 제거하는 대신 유효성 검사기가 예외를 throw합니다.

### transform (자동 형변환)

네트워크를 통해 들어오는 payload는 일반 JavaScript 객체입니다. ValidationPipe는 payload를 DTO 클래스에 따라 유형이 지정된 객체로 자동 변환할 수 있습니다. 자동 변환을 활성화하려면 transform을 true로 설정하십시오. 이 동작을 전역적으로 활성화하려면 전역 파이프에서 옵션을 설정합니다.

```ts
app.useGlobalPipes(
  new ValidationPipe({
    transform: true,
  }),
);
```

https://docs.nestjs.com/techniques/validation#transform-payload-objects

1. whitelist: true

클라이언트 측에서 전송한 데이터가 다음과 같을 경우

```ts
{
"title": "Tenet",
"year": 2020,
"genres": ["Action", "Sci-Fi"],
"hack": "by me"
}
```

whitelist: true 로 설정했을 때 아래와 같이 데코레이터가 없는 속성("hack")은 제거되어 저장됩니다.

```ts
{
id: 1,
title: 'Tenet',
year: 2020,
genres: ['Action', 'Sci-Fi'],
}
```

2. forbidNonWhitelisted: true

클라이언트 측에서 전송한 데이터가 다음과 같을 경우

```ts
{
"title": "Tenet",
"year": 2020,
"genres": ["Action", "Sci-Fi"],
"hack": "by me"
}
```

"hack"이라는 속성은 화이트리스트에 존재하지 않으므로 HttpException 을 던집니다.

response :

```ts
{
"statusCode": 400,
"message": [ "property hack should not exist" ],
"error": "Bad Request"
}
```
