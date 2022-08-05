---
title: React Memoization
date: '2022-08-04'
tags: ['react', 'front']
draft: false
comment: React Helmet
code: React Memoization
---

## React Memoization

useEffect, useMemo, useCallback
셋 모두 디펜던시 어레이를 가지고있다.

React.memo 리액트 메모는
컴포넌트의 리랜더링을 방지하기위해 쓰여서 주로 자식컴포넌트에 컴포넌트단위로 걸어주고
유즈메모는 계산결과가 복잡한 함수의 리턴값을 저장해서 리랜더링을 막고
유즈콜백은 유즈메모처럼 함수에 쓰이지만 함수의 값이아니라 함수를 통째로 메모이제이션해서 리랜더링을 막아준다

결과값이 아닌 실행그자체가 중요한거라 주로 이벤트함수에 자주쓰이죠

예를들어 편의점에가서 물건을 고르고 카드를 내밀면 우리는

알바생한테 이거사셨내요 저거사셨내요 언급하길바라는게 아니라 계산된 값자체가 중요하잖아요? 이거 얼마에요 계산해드릴게요
이때쓰는게 useMemo

여러분들이 애인생일날 선물고를때 선물그자체보다는 이벤트날 챙겨준 행위가 중요하잖아요
그럴때 쓰는게 useCallbak 그래서 이런 메모이제이션을 이용해서 최적화하는 녀석들은

무작정거는게 아니라 알고써야 오작동을 막을 수 있어요

일단 다걸어버리면 내의도와 다르게 작동할 수 있거든요

리액트 메모를 꼭써야하는 경우는

부모에서 자식으로 프롭스를 내려주는게 아니라 자식에서 부모의 state를 바꾸는 딜리게이트 패턴을 이용할때 꼭 걸어주셔야 무분별한 리랜더링이 방지됩니다

### Memoization

: **이전 값을 메모리에 저장**해 동일한 **계산의 반복을 제거**해 **빠른 처리를 가능하게 하는 기술**

*useMemo, useCallback, React.memo* 는 Memoization을 기반으로 작동한다.

## React.memo : component의 결과값을 memoized함.

일반적으로 함수를 직접 감싸서 사용하기도 한다.

```jsx
const Welcome = ({ name }) => {
  return <h1> Hello {name} </h1>;
};

export default React.memo(Welcome);
```

Welcome의 결과를 Memoization해서 이후 props가 변경될때까지 현재 memoized된내용을 그대로 사용해 리렌더링을 막는다.

React.memo가 props를 비교할때 얕은 비교를 진행한다.얕은 비교 : 원시값일때 -> 같은값을 갖는지 확인/ 객체,배열 일때 -> 같은 참조값,같은주소값을 갖는지 확인.

React.memo메서드는`React.memo(component,compFunc)`이 기본형태이다.`compFunc`는 수동으로 비교방식을 수정할 수 있다.

### React.memo는 언제 사용할까?

무조건적인 사용은 지양한다.최적화를 위한 연산이 불필요한 경우에는 비용만 발생시킨다.

React.memo는 아래의 상황에서 사용을 권장한다.

1. Pure Functional Component에서
2. Rendering이 자주 일어날 경우
3. re-rendering이 되는 동안 계속 같은 props값이 전달 될 경우
4. UI element의 양이 많은 컴포넌트의 경우

일반적으로 불필요한 Render가 많이 발생하는 곳에서 사용해라

### React.memo를 사용하지 말아야할 경우

**class기반**의 컴포넌트를 **래핑하는것은 적절하지 않다.**이 경우 memoizatioin을 해야한다면`PureComponent`를 확장해 사용하거나`shouldComponentUpdate()`를 사용하길 권장.

## useMemo : 함수의 결과값을 memoized함.

: 메모리제이션된 값을 반환한다

`useMemo`는 함수 호출 이후의 return값이 memoized된다.두번째 파라미터인 배열의 요소가 변경될때 마다 첫번째 파라미터의 callback함수를 다시 생성하는 방식이다.

## useCallback : 함수를 memoized함.

:메모리제이션된 함수를 반환한다

```jsx
const handleChange = useCallback((e) => {
  setNum(e.target.value);
}, []);
```

useCallback을 통해 memoized된 함수는 eventhandler로 사용되며두번째 인자인 `[]` <- 배열인 요소가 변경될때마다 새로운 함수가 생성된다.
