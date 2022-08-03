---
title: Jest beforeEach(fn, timeout)
date: '2022-08-03'
tags: ['jest', 'test']
draft: false
comment: Jest beforeEach(fn, timeout)
code: beforeEach(fn, timeout)
---

## Jest beforeEach(fn, timeout)

각각의 테스트가 실행되기 전에 매번 함수를 실행합니다.

각각의 테스트 전에 각 테스트에서 사용할 전역 상태를 재설정하려는 경우에 유용합니다.

함수가 promise을 반환하거나 generator인 경우 Jest는 테스트를 실행하기 전에 해당 promise가 해결될 때까지 기다립니다.

밀리초로 대기할 시간을 지정할 수 있습니다. (기본 시간 5초)

https://jestjs.io/docs/api#beforeeachfn-timeout
