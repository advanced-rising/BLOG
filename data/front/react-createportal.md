---
title: React createPortal
date: '2022-08-04'
tags: ['react', 'front']
draft: false
comment: ReactDOM.createPortal()
---

## React createPortal

사용하다보면, index.js 에서

```jsx
ReactDOM.render(<App />, document.getElementById('root'));
```

이러한 문구를 볼수 있다. 이것또한 ReactDOM 라이브러리를 사용한 Portal 기능이다.
react 에서 제공하는 ReactDom 라이브러리를 사용하여 Portal 기능을 사용 할 수 있다.

```tsx
ReactDOM.createPortal();
```

createPortal 메소드는 2개의 인수가 필요하다.
첫번째는 렌더링 되어야 하는 리액트 노드,
jsx 방식으로 불러와 지는데, 이때 다른 이벤트 핸들러를 적용시킬수 있다.

두번째 인수는 포인터라는 곳이다.
포인터는 요소들이 렌더링 되어야 하는 컨테이너를 가르킨다.
특정요소의 아이디값을 두번째 인수로 받아오면 된다.

```tsx
ReactDOM.createPortal(children, element);
```
