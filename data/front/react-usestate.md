---
title: React useState
date: '2022-08-04'
tags: ['react', 'front']
draft: false
comment: React useState
code: const [value, setValue] = useState()
---

## state

데이터는 변수에 넣거나 , state에 넣거나

1. 변수 대신 쓰는 데이터 저장공간
2. useState() 를 이용해 만들어야함. es6 변수 배열 방법 destructuring 문법으로 작성 가능

그럼 왜 state를 사용할까 ?

1. state는 변경이 될때 App 처럼 동작하게 만들고 싶어서
2. HTML이 재렌더링이 됨
3. 새로고침 없어도 깔끔하게 변함

state 값 바꾸고 싶으면 deep copy 해서 복사해서 값 바꾸면됨

referenced data type

spread operator 방법으로 deep copy 하면됨 es6 문법

useState은 직접적으로 건드리면 안됨 렌더링 오류남

### 컴포넌트를 변경하기 위해서는 꼭 setState를 사용해서 변경하라

클래스가 제공하는 메소드이기에 컴포넌트의 상태를 변경하기위해 꼭 setState를 사용해야한다.

setState는 기본적으로 비동기 이며, 재 랜더링이기 된다.

## useState에서는 하나의 useState를 사용함

```jsx
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');
const [userInput, setUserInput] = useState({
  enteredTitle: '',
  enteredAmount: '',
  enteredDate: '',
});
const titleChangeHandler = (event) => {
  // setEnteredTitle(event.target.value)
  setUserInput({
    ...userInput,
    enteredTitle: event.target.value,
  });
};

const amountChangeHandler = (event) => {
  // setEnteredAmount(event.target.value)
  setUserInput({
    ...userInput,
    enteredAmount: event.target.value,
  });
};

const dateChangeHandler = (event) => {
  // setEnteredDate(event.target.value)
  setUserInput({
    ...userInput,
    enteredDate: event.target.value,
  });
};
```

하나로 useState를 사용하여, 코드의 양을 줄일 수 있다.
