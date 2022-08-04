---
title: React Custom Hooks
date: '2022-08-04'
tags: ['react', 'front', 'hook']
draft: false
comment: React Custom Hooks
---

## React Custom Hooks

리액트의 훅은 항상 use로 시작한다.
리액트 훅은 리액트 함수에만 사용해야 한다.
컴포넌트 함수나, 맞춤으로 Custom Hook. 에만 사용이 가능하다.
리액트 훅은 컴포넌트 함수나 커스텀 훅에서 block으로 사용하면 안된다.
리액트 훅에서 리액트 훅을 다시 사용하는것은 안된다.
Custom Hook top level 에서만 사용해야 한다.
nested function 에서 사용이 금하다.
useEffect에서는 종속성을 가져야 한다. dependency
