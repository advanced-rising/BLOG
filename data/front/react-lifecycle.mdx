---
title: React Lifecycle
date: '2022-08-04'
tags: ['react', 'front']
draft: false
comment: React Lifecycle
---

## React 컴포넌트의 생애 주기 ( 생명주기 )

- 컴포넌트가 탄생하면서 변화하여 죽음으로 한다는 의미
  탄생 : 화면에 나타나는 것 Mount
  변화 : 업데이트 ( 리렌더 ) Update
  죽음 : 화면에서 사라짐 UnMount
  초기화 작업 → 예외 처리작업 → 메모리 정리 작업

## 클래시 기반에서 사용될수 있는 Lifecycle의 매소드

ComponentDidMount
ComponentDidUpdate
ComponentWillUnmount

그 예시로 react의 useEffect를 활용하여 알려줄수 있다.

## Mount , Update

```jsx
const [count, setCount] = useState(0);
const [text, setText] = useState('');

useEffect(() => {
  console.log('mount!');
}, []);

useEffect(() => {
  console.log('update');
});

useEffect(() => {
  console.log(`count is update : ${count}`);
  if (count > 5) {
    alert('count가 5를 넘었습니다 따라서 1로 초기화 합니다.');
    setCount(1);
  }
}, [count]);

useEffect(() => {
  console.log(`text is update : ${text}`);
}, [text]);
```

배열안에 dependency 종속성의 값이 전달되거나 없거나 빈배열이라면 렌더링은 달라지게 되어 이것이 하나의 Lifecycle 라고 볼수 있다.

## Unmount

```jsx
import React, { useEffect, useState } from 'react';

const UnmountTest = () => {
  useEffect(() => {
    console.log('Mount');

    return () => {
      console.log('Unmount');
    };
  });
  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
```

toggle 이라는 함수를 만들어, 버튼의 onClick 시 on off가 될수 있도록 만들어진 기능이다.
이를 통해서 console에서는 mount와 unmount가 출력이 될 것이다.
