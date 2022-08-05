---
title: React useImperativeHandle
date: '2022-08-04'
tags: ['react', 'front', 'hook']
draft: false
comment: React useImperativeHandle
---

컴포넌트나 컴포넌트 내부를 명령형으로 사용할수 있게 해줌
일반적인 state나 props를 거치지 않고 컴포넌트에서 바로 명령하여 사용이 가능하다.

그러나 사용이 드믈다.
자주쓰면 안좋음
외부에서도 접근이 가능하게 만들어줘야 한다.

```jsx
import React, { useImperativeHandle, useRef } from 'react';

import classes from './input.module.css';
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});
export default Input;
```

여기 전체 코드가 있다.

이때 . useImperativeHandle 라는 Hook을 사용했는데 이때는
우리가 useRef 를 사용했을 경우 명령으로 다른 컴포넌트에서 불러올수 있게하도록 하는 Hook이다.

React.forwardRef 를 선언시에 같이 써줘서 전체의 Input component가 Ref 될수 있도록 해주었다.
그러나 이러한 useImperativeHandle 는 . 잦은 사용은 매우 금물이다.
하지만 focus , scroll 를 줄때에는 적극적으로 사용해도 괜찮은 조합이다.

```jsx
useImperativeHandle(ref, () => {
  return {
    focus: activate,
  };
});
```

여기서 focus 는 작명이다. 무슨 이름이 와도 상관이 없지만, 지금은 focus를 주기 위해서 이름은 focus로 작명한 이유이며,

```jsx
const activate = () => {
  inputRef.current.focus();
};
```

activate 라는 함수는 focus를 주기위한 함수이므로,
useImperativeHandle에서 activate를 불러온것을 확인 할 수 있다.

```jsx
useImperativeHandle(ref, () => {
  return {
    focus: activate,
  };
});
```

useImperativeHandle 는 두개의 매개변수를 가지게 되는데 하나는
component에서 props로 불러온 ref 데이터가 필요하다 .
혹은 서로 연동될수 있는 이벤트 핸들러 장치가 필요하다 .

```jsx
<Input
  ref={emailInputRef}
  id="email"
  label="E-Mail"
  type="email"
  isValid={emailIsValid}
  value={emailState.value}
  onChange={emailChangeHandler}
  onBlur={validateEmailHandler}
/>
<Input
  ref={passwordInputRef}
  id="password"
  label="Password"
  type="password"
  isValid={passwordIsValid}
  value={passwordState.value}
  onChange={passwordChangeHandler}
  onBlur={validatePasswordHandler}
/>
```

이러한 ref에 이벤트 state값을 주어 props가 가능하도록 하여 서로의 정보를 교환하여 명령질 할 수 있다.
