---
title: React useEffect
date: '2022-08-04'
tags: ['react', 'front', 'hook']
draft: false
comment: React useEffect
---

## useEffect

```jsx
useEffect(()=>{
	//todo
},[])

//todo =>
Callback 함수

배열에는 Dependency Array 의존성 배열
이 배열 내에 들어있는 값이 변화하면 콜백함수가 수행된다.
```

```jsx
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

  if (storedUserLoggedInInformation === '1') {
    setIsLoggedIn(true);
  }
}, []);

const loginHandler = (email, password) => {
  // We should of course check email and password
  // But it's just a dummy/ demo anyways
  localStorage.setItem('isLoggedIn', '1');
  setIsLoggedIn(true);
};

const logoutHandler = () => {
  localStorage.removeItem('isLoggedIn');
  setIsLoggedIn(false);
};
```

기본적으로는 useEffect는 브라우저가 재 실행될때 1번만 사용하게끔 하는 Hook 요소 이다.
그러나 배열을 집어넣지 않는다면, 계속 실행되는것을 알 수 있을 것이다.
가장 사용하는 예시로.
로그인을 하였으면, 그 로그인 기록이 남아, 로그인 유지가 되어야 한다.
그러므로 localStorage에서 로그인된 값을 getItem 으로 가져와
일치하면 true로 내보내어 유지하게 한다.
만약 삭제하고 싶다면 .

```jsx
const logoutHandler = () => {
  localStorage.removeItem('isLoggedIn');
  setIsLoggedIn(false);
};
```

localStorage.removeItem(’ 작명한 이름 ‘) 으로 해당 value 값을 삭제시킬수 있다.

## 그러나 하나의 동작이 바뀔때마다 동작하게 하고 싶다면?

```jsx
const [enteredEmail, setEnteredEmail] = useState('');
const [emailIsValid, setEmailIsValid] = useState();
const [enteredPassword, setEnteredPassword] = useState('');
const [passwordIsValid, setPasswordIsValid] = useState();
const [formIsValid, setFormIsValid] = useState(false);

useEffect(() => {
  setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
}, [setFormIsValid, enteredEmail, enteredPassword]);
```

`[]` 배열 요소에 useState 값을 넣어 동작할때마다 다시 재랜더가 되도록 할 수 있다.
배열안에 있는 요소가 모두 변경이 되어야만, useEffect는 다시 실행될것이다.
이것은 종속성에 의해 결정되는 것이므로, 잘 보고 판단을 해야한다.

## cleanup function ?

```jsx
useEffect(() => {
  const identifier = setTimeout(() => {
    console.log('checking');
    setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
  }, 500);

  return () => {
    console.log('clean');
    clearTimeout(identifier);
  };
}, [enteredEmail, enteredPassword]);
```

setTimeout 을 통해 키가 입력될때마다 그 값을 전달받는걸
계속 useEffect로 보내주고 있으나,

useEffect에 마지막 `[]` 을 집어 넣지 아니하면, 1회성으로 실행되기에
마침내, 종속성을 잃게 되는 현상이 발현된다.
A가 바뀜으로써 B가 변경되므로 이것을 종속성이라 부른다 . (Dependency)

useEffect는 useState를 빼면 React에서 가장 중요한 Hook 이다.
구조분해할당 (Destructuring) 으로 선언한 값을 useState값으로 사용해서
useEffect를 작동시키면, 최적화에 좋으며, 불필요한 Effect의 수행을 막을수 있고,
다른 props가 변경될때마다 변경되지 않게 할 수 있다.
특히 중요할점은 , effect 함수는 단일속성이 아니기 때문에 ,
2개의 인자를 배열에서 받아와야 한다.

```jsx
useEffect(() => {
  // code that only uses someProperty ...
}, [someObject.someProperty]);
```

```jsx
useEffect(() => {
  // code that only uses someProperty ...
}, [someObject]);
```

이런식으로 2개의 속성이 따라와야하지 ,
단일속성으로만 오게 되면, 렌더링이 무한으로 돌게된다.
그러므로 , 최적화에 안성맞춤이라는 안성탕면 이야기이다.
