---
title: NestJS Mapped Types DTO type
date: '2022-08-03'
tags: ['nestjs', 'back']
draft: false
comment: NestJs Mapped types
code: npm i @nestjs/mapped-types
---

# Mapped types

```tsx
npm i @nestjs/mapped-types

or

npm i --save @nestjs/swagger
```

를 통해 PartialType을 가져올 수 있습니다.

## Partial

input validation types(DTO라고도 함)을 빌드할 때 동일한 유형에 대한 create 및 update 변형을 빌드하는 것이 종종 유용합니다. 예를 들어, create에는 모든 필드가 필요할 수 있지만 update는 모든 필드를 선택 사항으로 만들 수 있습니다. Nest는 이 작업을 더 쉽게 만들고 상용구를 최소화하기 위해 PartialType() 유틸리티 함수를 제공합니다. PartialType() 함수는 입력 유형의 모든 속성이 선택 사항으로 설정된 유형(클래스)을 반환합니다.

https://docs.nestjs.com/openapi/mapped-types#partial

## class validator

https://github.com/typestack/class-validator

https://www.npmjs.com/package/class-validator

### Doc에서 제공하는 @IsOptional () 의 내용은 다음과 같습니다.

Checks if given value is empty (=== null, === undefined) and if so, ignores all the validators on the property.

즉 값이 empty(또는 null또는 undefined)일지라도 유효성검사를 무시하게 됩니다.

https://www.npmjs.com/package/class-validator

### @nestjs/swagger

@nestjs/swagger에서 PartialType을 가져와 사용할땐 상속되는(CreateMovieDto) 클래스의 속성에 @ApiProperty
() 데코레이터도 써줘야함
