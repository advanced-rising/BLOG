---
title: React useContext
date: '2022-08-04'
tags: ['react', 'front', 'hook']
draft: false
comment: React useContext
---

## useContext

```jsx
const MyContext = React.createContext(defaultValue);

<MyContext.Provider value={전역으로 전달하고자 하는 값}>

 { // 이 context 안에 위치할 자식 컴포넌트를 }

</MyContext.Provider>
```

기본적인 `Context` 생성과
`Context Provider` 를 통한 데이터 공급 방법

## 예시 1

```jsx
export const DiaryStateContext = React.createContext();
```

- `export`를 하여 `DiaryStateContxt`라는 `Context`를 하나 생성하여 이것을

```jsx
return (
  <DiaryStateContext.Provider value={data}>
    <div className='App'>
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio || 0}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  </DiaryStateContext.Provider>
);
```

최상위 컴포넌트인 App.js || index.js 에서 App.js 를 감싸주면 되는것이다.

이렇게 하여 value에 data를 집어 넣은 결과로 props 에서는 data를 전역에 펼쳐주고 있는 상태가 되어, 어느 컴포넌트에서도 Provider를 사용하여 value의 data를 props로 바로 가져올수가 있는 상태가 된다.

```jsx
const diaryList = useContext(DiaryStateContext);
```

사용하는 방법으로는 하나의 변수를 만들어 useContext를 사용하고 export 하였던 Context를 사용하여 props를 전달받으면 된다.

```jsx
const { props1, props2 } = useContext(DoStateContext);
```

이런식으로 두가지를 객체형식으로 받아볼수도 있다.

## 예시 2

```jsx
import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
```

기본적인 개념으로 defualt 값을 가지고 있는다 .
아래는 사용한 예시이다 .

```jsx
<AuthContext.Consumer>
  {(ctx) => {
    return (
      <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href='/'>Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href='/'>Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    );
  }}
</AuthContext.Consumer>
```

이런식으로 Context의 개념을 알수 있다.
그러나 이러한 방식은 매우 번거럽고, 사용하기가 껄끄럽다
그래서 !! useContext라는 것을 사용할 수 있다.

```jsx
const ctx = useContext(AuthContext);
```

이런식으로 말이지...
useContext를 사용하면 앱이 매우 가벼워지는게 장점이다.

```jsx
import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
```

기존에 props로 데이터를 전달받았다면,
이렇게 핸들러 함수값을 가져와 auth-context에 집어넣어
useContext를 사용할수 있게 하며 , 이를 적용시킬시에는

```jsx
function App() {
  const ctx = useContext(AuthContext);
  return (
    <Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
```

이런식으로 useContext에 AuthContext 라는 매개변수를 가져와 적용시킬수 있다.
선언시, ctx라는 변수명으로 적었으니,
props 대신에 ctx를 붙여 ctx.isLoggedIn 하면 props대신에 핸들러값이 불러와진다.
또한 index.js 에서도 모든 component에게 전달을 하기 위해

```jsx
ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root'),
);
```

이런식으로 App을 감싸 모든 component에게 전달받은 값들을 모두 사용할수 있게 해준다 .
자주바뀌는 state에서는 context를 사용할 이유가 없다.
너무 불편하다. 그러므로 props를 사용하는게 좋으나, redux라는 기능이 있다.
모든 state를 props로 대체할 필요하 없고, 너무나도 긴 props를 context 할 필요가 있다.
