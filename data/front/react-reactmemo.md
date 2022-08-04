---
title: React React.memo
date: '2022-08-04'
tags: ['react', 'front', 'hoc']
draft: false
comment: React React.memo
---

## React.memo

React.memo는 고차 컴포넌트 이다
고차 컴포넌트는 컴포넌트를 가져와 새로 컴포넌트를 반환하는 함수이다.

```jsx
const EnhancedComponet = higherOrderComponent(WarppedComponent);
```

```jsx
const MYcoponent = React.memo(MyComponent(props) => {
	// props를 사용하여 렌더링
})
```

컴포넌트가 동일한 props로 동일한 결과를 렌더링한다면 React.memo를 호출하고 결과를 메모이징 하도록 래핑하여 경우에 따라 성능 향상을 누릴 수 있다.

## 예시 1

```jsx
const TextView = React.memo(({ text }) => {
  useEffect(() => {
    console.log('text');
  }, []);
  return <div>{text}</div>;
});
const CountView = React.memo(({ count }) => {
  useEffect(() => {
    console.log('count');
  }, []);
  return <div>{count}</div>;
});
```

```jsx
<div style={{ padding: 50 }}>
  <div>
    <h2>count</h2>
    <CountView count={count} />
    <button onClick={() => setCount(count + 1)}>+</button>
  </div>
  <div>
    <h2>text</h2>
    <TextView text={text} />
    <input value={text} onChange={(e) => setText(e.target.value)} />
  </div>
</div>
```

만약 React.memo를 사용하지 않았다면,
text가 변경될때도 count가 변경이 되고,
count가 변경이 될때도 text가 변경이 되니 메모리가 계속 사용이 되고 있는것이다.
React.memo를 사용하게 되면, text가 바뀔때만 호출이 되므로, 메모리 사용에 매우 관리성이 좋아지는 이유이기도 하다.

## 예시 2

```jsx
import React, { useEffect, useState } from 'react';

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update - count : ${count}`);
  });
  return <div>{count}</div>;
});
const CounterB = React.memo(({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update - obj : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <CounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }>
          B button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
```

전체적인 코드내용에서 , CounterA는 setCount로 count값만 출력되게 해놓고,
상태변환은 주지 않았다.
이렇게 되어서 CounterA에서는 상태변화가 없기에 console.log에 출력되지 않는다.

반면에 CounterB는 객체형식으로 state값을 전달 받고 있기때문에 상태변화가 계속 이루어지고 있으므로, console.log에 찍어도 출력이 되는걸 알수 있다.

Js에서는 객체를 전달받을때는 얉은 복사형식으로 전달받기에 계속 출력해주는 이유이다.

### 그러나 이러한 얉은 복사를 대신해서 달리하여 값을 전달하기 위해서..

```jsx
const areEqual = (prevProps, nextProps) => {
  if (prevProps.obj.count === nextProps.obj.count) {
    return true;
    // 이전 프롭스 현재 프롭스 같다 => 리렌더링을 일으키지 않게됨
  }
  return false;
  // 이전과 현재가 다르다 => 리렌더링을 일으킴
};

const MemoizedCounterB = React.memo(CounterB, areEqual);
```

한번 조건문을 거쳐서 React.memo를 전달해주면 얉은복사를 했을때 값이 변경되는것을 막아준다.
저러한 결과로 retrun true로 보내주기 때문에 렌더링을 일으키지 않는다.
함수형 컴포넌트에게 업데이트 조건을 거는기능

```jsx
export default React.memo(Button);
```

보통 이렇게 export 하는곳에 적어준다.
왜 이 React.memo를 사용하냐 ?
재렌더링을 막기 위해서이다.
리랜더링을 방지하여 컴포넌트의 리랜더링 서능 최적화를 해줄 수 있는 함수이다.
이 함수를 사용하면, 컴포넌트에서 필요한 상황에서만 리렌더링이 될수 있도록 설정해줄수 있다.
만약 내가 하위컴포넌트를 가지고 있는데 그 하위 컴포넌트의 props에서는 사용을 금물 하고 싶다면, React.memo를 사용하여 하위 props에는 랜더링을 막을수 있다.
그러나 이런 React.memo는 성능을 실제로 잡아줄수 있는 컴포넌트에만 사용하는것을 허락한다.
