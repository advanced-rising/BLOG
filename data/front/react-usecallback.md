---
title: React useCallback
date: '2022-08-04'
tags: ['react', 'front', 'hook']
draft: false
comment: React useCallback
---

## useCallback

### Hooks Api

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

기본 문법

## 예시 1

```jsx
const onCreate = useCallback(
  (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  },
  [data],
);
```

dependency 값에 data라는 값을 넣어야 빈배열로써 초기화가 되지 않고 data위에 추가할수 있게 된다.

```jsx
setData((data) => [newItem, ...data]);
```

그러나 이렇게 setData에 함수 업데이틀 하게 된다면 ,
dependency 갑의 배열안에 아무것도 넣지 않은 빈배열로 두어도 정상적으로 동작이 되는걸 알 수있다.

함수를 저장하는 Hook
함수를 저장해서 재생성하지말라고 하는 Hook
메모리가 Dom 에 저장되고, 비교가 됨.

```jsx
let obj1 = {};
let obj2 = {};

obj1 === opj2; // false

obj2 = obj1;

obj1 === obj2; // true
```

이와 같은것과 비슷하다고 말할수 있다.

## useCallback은 ?

useCallback( ) 에서 두개의 인자를 받아와야 한다.
첫번째로는 내가 저장할 함수, 두번째로는 useEffect와 같이 `[ ]` 배열을 가져오면 된다.
dependency 종속성 배열을 가져오는 것이다. 같은것이라고 봐도 무방하다.
배열안에는 함수에서 사용하는 state props context를 모두 저장해야한다.

```jsx
const [showParagraph, setShowParagraph] = useState(false);

const toggleParagraphHandler = useCallback(() => {
  setShowParagraph((prevShowParagraph) => !prevShowParagraph);
}, [setShowParagraph]);
```

setShowParagraph 이것이 useState 의 state이므로, 배열안에 state값인 setShowParagraph 가 들어간다.

## 왜 ?? useCallback을 사용한가 ?

React.memo를 사용하다보면, 재실행으로 인해, 다른 곳에서도 props가 작동하는데, 이러한 경우때문에 메모리의 할당량이 많아, useCallback 사용하여 하나의 메모리에서 모두 실행하는 조건으로 사용한다는 것이다.

useCallback에 함수를 저장하였기 때문에, props를 사용하는 하위 컴포넌트에서도 재사용을 막아줘 메모리양을 줄일수 있다.

클로저의 대한 의미가 가지므로, 클로저를 알아야 useCallback을 이해하기 쉽다.

```jsx
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
```
