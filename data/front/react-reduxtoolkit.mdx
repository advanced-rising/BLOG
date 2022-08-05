---
title: React Redux Toolkit
date: '2022-08-04'
tags: ['react', 'front', 'redux']
draft: false
comment: React Redux Toolkit
code: npm install @reduxjs/toolkit
---

```jsx
npm install @reduxjs/toolkit
```

```jsx
import { createSlice } from '@reduxjs/toolkit';
```

createSlice 는 객체를 인자로서 생성을 한다. createSlice({})

```jsx
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = counterReducer;
```

이러해진 코드를

```jsx
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = createStore(counterSlice.reducer);
```

이렇게 확 줄일수 있따.

다만 이제 configureStore라는 것을 이용하여, 리듀서 프로퍼티를 정할수 있다.

## 그러면 리듀서를 어떻게 내보내서 사용을 하게 만들것인가 ?

```jsx
const store = configureStore({
  reducer: counterSlice.reducer,
});
```

이렇게 reducer가 하나만 존재한다면 단일로 다이렉트 형식으로 바로 보낼수 있다.
그러면 우리가 여러개의 reducer가 존재한다면 어떻게 대응할것인가 ?

```jsx
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
```

이렇게 한다면 , 여러개의 reducer를 객체를 통하여 보낼수도 있다.
병합을 해줄수 있는 방법이다.

## 마이그레이션

그러나 이러한 방법을 제외해서 나의 것으로 마이그레이션을 적용할 수 있다.

```jsx
import { createSlice, configureStore } from '@reduxjs/toolkit';
const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.action;
export default store;
```

적용하는것은 그리 어렵지가 않다.

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload : 10 }
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```

## 그렇다면 , 다중으로 슬라이스를 사용하는 경우에는 어떻게 ?

다중으로 사용할 경우에는 store의 reducer를 객체로 반환시켜주면 된다.

```jsx
import { createSlice, configureStore } from '@reduxjs/toolkit';
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const initialAuthState = {
  isAuthenticate: false,
};
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticate = true;
    },
    logout(state) {
      state.isAuthenticate = false;
    },
  },
});
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
```

그러면 하나의 reducers에 counter와 auth 가 합쳐져서 자동으로 분배하게 할것이다.
그러면 다중슬라이스를 사용했으니 이것을 또 사용해 봐야겟지 ?

## 로그인과 로그아웃

```jsx
import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store';
const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
```

간단하게 설명하자면,
authActions라는 redux에서 store로 reducer를 받아와 값을 뿌리게 할수 있음

이를 통해서 Header에서는 로그아웃이라는 버튼이 보이기에 logout을 할 수 있게한다.
그냥 오로지 true false로만.

```jsx
import { useDispatch } from 'react-redux';

import classes from './Auth.module.css';
import { authActions } from '../store/index';
const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
```

Auth 컴포넌트에서는 로그인을 가능하게 해준다.
똑같이 redux에서 reducer로 authActions를 받아와 값을 넣어주면 된다.

## redux toolkit을 사용했으면, 파일을 조각내어보자.

store의 폴더안에서 counter.js 의 파일형식으로 따로 관리 할 수 있다.
auth.js의 파일형식으로 따로 관리 할 수 있다.
그리고 나서 index.js에 몰아 넣어주면 된다.

어떻게 ?

## counter.js

```jsx
import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
```

## auth.js

```jsx
import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
```

counter, auth .js 에서 똑같이
export를 해주는데, reducer로 보내주면 된다.
또한 reducer로 보내주는 이유는 리듀서로 사용되기 때문이다.

## index.js

```jsx
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
```

index.js 에서 counter.js와 auth.js를 불러오는데, 이때 , reducer로 사용할것이니까,
import를 counterReducer로 작명한 이유이다.

또한

```jsx
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});
```

이부분에서 본래는 counter.counter.reducer 라고 적혀져 있었으나,
reducer로 export하였기 때문이고, export 대상이 1개로 조각으로 되어있으니,
counterReducer로 적어도 된다 이말이다.

## redux 안에서 reducer의 동기 비동기

reducer 안에서는 동기든, 비동기는 절대 내부안에서 사용하면 안된다.
일반적으로 reducer안에서 비동기 를 실행하면 안된다.
이러한 방법을 컴포넌트에서 실행하게 하고, action으로 실행하게 하면된다.

비동기를 사용할려면 Thunk , Saga 를 사용해야한다.
