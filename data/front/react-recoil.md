---
title: React Recoil
date: '2022-08-04'
tags: ['react', 'front']
draft: false
comment: React Recoil
code: npm install recoil
---

## React Recoil

```jsx
npm install recoil
```

context 같은 기능임.
props 전달을 텔레포트 하여 건네줌.
redux도 있으나, react 팀에서 만든 상태관리 라이브러리

```jsx
import { atom } from 'recoil';

export const isDarkAtom = atom({
  key: 'isDark',
  default: true,
});
```

recoil 에서는 key 값을 넣어주고 ,defualt 값을 적용시켜준다.
key 값이 isDarkAtom 이 가지게 되는 일종의 변수 같은것이다.

## useRecoilValue

```jsx
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';

const isDark = useRecoilValue(isDarkAtom);
```

atom 을 적용시키는 법은
useRecoilValue 후 , api에 저장되었던 변수명을 호출하고 그것은 선언해주면 된다.

## useSetRecoilState

```jsx
import { isDarkAtom } from '../atoms';

const setterFn = useSetRecoilState(isDarkAtom);

<button onClick={() => setterFn((prev) => !prev)}>Toggle Mode</button>;
```

약간 useState를 사용할때처럼 state를 변경시켜주는것도 가능하다.
저러한 방식으로 사용하게 된다면, Toggle 기능을 사용할 수 있게 가능하다.

```jsx
const setDarkAtom = useSetRecoilState(isDarkAtom);
const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

<button onClick={() => toggleDarkAtom}>Toggle Mode</button>;
```

간단하게 사용하고 싶다면 이렇게 줄일수도 있다.
useState에서 set으로 값을 변경 하는것처럼

## atom selector

```jsx
import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});
```

toDoState 값을 통해 return 할수 있는 것을 보낼수 있다.
지금의 예시에서는 filter를 통하여, 배열로 내보내는것이다.
하나의 배열로 값이 return 되는것이기에 그 배열을 사용할 수 있다.

```jsx
import { useRecoilValue } from 'recoil';
import { toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const ToDoList = () => {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default ToDoList;
```

```jsx
const [toDo, doing, done] = useRecoilValue(toDoSelector);
```

배열 값으로 전달 받았기에 배열로 값을 불러온다.
`[{ },{ },{ }]` 이런식으로 값이 찍히게됨.
배열로 map을 통해 각각의 다른 값을 전달할수 있음.
