---
title: React Redux
date: '2022-08-04'
tags: ['react', 'front', 'redux']
draft: false
comment: React Redux
code: npm install redux redux-promise redux-thunk react-redux --save
---

## 기본 설치 방법

```jsx
npm install redux redux-promise redux-thunk react-redux --save
```

다양한 Provider를 사용하기 위해 redux를 사용하는 이유가 있다
리덕스는 바닐라 자바스크립트에서도 사용할수 있다.
간단한 redux를 npm으로 설치후

```jsx
const redux = require('redux');

const counterReducer = (state, action) => {};

const store = redux.createStore();
```

초기 설정값은 이러하다 .
리듀서는 두개의 배개변수를 받는다 . state와 dispatch
리듀서의 함수는 순수함수여야 한다.

## 기본적인 모던 자바스크립트에서의 Redux

```jsx
const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
```

type 을 지정하여 해당하는 type이 일치하면 조건을 실행하는 redux의 개념을 볼수 있다.

모던자바스크립트 안에서는 파일내부안에서 dispatch를 작동시켰지만, react에서는 dispatch를 따로 불러와 만들어낼것이다.

## React에서의 redux의 기본 counter 문법

```jsx
import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
```

그럼 이것을 어떻게 컴포넌트에서 사용할수 있을까 ?

```jsx
import { useSelector, connect } from 'react-redux';
또는;
import { useStore, connect } from 'react-redux';
```

그러나 보통의 경우에는 useSelector 를 더 많이 사용한다.
왜냐? 자동으로 선택해주기에 편리함을 가지고 있기 때문이지롱
connect 는 함수가 래퍼로 사용될 수 있도록 도우미 역할이다. 연결고리 역할

## 그러면 이제는 진짜 어떻게 사용할까 ?

```jsx
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```

이렇게 사용한다면, 된다 !! 정말쉽다

## 그러면 하드코딩을 안하고 payload라는것을 사용해보자 .

payload가 뭐냐면, redux에서 action 을 설정해줄수 있다.

```jsx
import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
```

이때

```jsx
if (action.type === 'increase') {
  return {
    counter: state.counter + action.amount,
  };
}
```

액션의 값에서 하나의 payload를 만들어줘 , redux 의 store를 사용하고 있는 파일 내부에서

```jsx
const increaseHandler = () => {
  dispatch({ type: 'increase', amount: 10 });
};
```

이렇게 설정을 해주게 된다면,
하나의 payload가 생성되어 설정이 된다.
이때 type의 명은 임의의 사용자 명이므로, 사용자가 알기 쉽게 만들어내면 된다.

## 그러면 상태관리를 위해 하나의 태그를 toggle 하는 방법은 ?

```jsx
if (action.type === 'toggle') {
  return {
    showCounter: !state.showCounter,
    counter: state.counter,
  };
}
```

! 느낌표 하나면 된다.
아니다 맞다를 보여주면 되는것이므로 , toggle의 원리와 같다고 보면된다.
