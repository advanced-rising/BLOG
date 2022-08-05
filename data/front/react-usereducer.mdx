---
title: React useReducer
date: '2022-08-04'
tags: ['react', 'front', 'hook']
draft: false
comment: React useReducer
---

## useReducer

데이터 생성 상태변화 로직

테이터 수정 상태변화 로직

데이터 삭제 상태변화 로직

이 3가지를 상태변화 처리 함수로 따로 분리하여 관리한다.

## 예시 1

```jsx
import { useRef, useEffect, useMemo, useCallback, useReducer } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case 'REMOVE': {
      return state.filter((it) => it.id !== action.targetId);
    }
    case 'EDIT': {
      return state.map((it) => (it.id === action.targetId ? { ...it, content: action.newContent } : it));
    }
    default:
      return state;
  }
};

// https://jsonplaceholder.typicode.com/comments
function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    dispatch({ type: 'INIT', data: initData });
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: { author, content, emotion, id: dataId.current },
    });
    dataId.current += 1;
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ type: 'REMOVE', targetId });
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: 'EDIT', targetId, newContent });
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return {
      goodCount,
      badCount,
      goodRatio,
    };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className='App'>
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio || 0}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
```

### 전체코드

```jsx
const [data, dispatch] = useReducer(reducer, []);
```

reducer를 선언하는 방법

그후 reducer라는 함수를 불러와서 기능을 처리해줘야 한다.

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case 'REMOVE': {
      return state.filter((it) => it.id !== action.targetId);
    }
    case 'EDIT': {
      return state.map((it) => (it.id === action.targetId ? { ...it, content: action.newContent } : it));
    }
    default:
      return state;
  }
};
```

if문을 사용해도 되지만,

여러개의 기능을 분리하기 위해서 switch 문을 활용하여 각기능별로 분리를 해주었다.

```jsx
dispatch({tpye : 'type' , 실행할 기능})
```

이정도로 하여 타입으로 기능이 무엇인지 판단하여 reducer에서 기능을 동작하게 해준다.

왜 이러한 기능을 사용하는가 하면, 똑같은 기능을 사용하지먼, 살짝살짝 다른 기능들이 무수히 많기 따름이다. 그러므로 똑같은 기능끼리는 묶어주고, 다른기능들을 분리하여 코드의 가독성과

성능향상을 위해서 사용하는것이다.

## 에시 2

주로 사용하는것은 useState다. 거의 useState로 사용하고 useState만 사용해도 된다.

state update가 쉽고, 변경하는 케이스가 많지 않을때 사용한다.

그러나 state가 많아지고, 더 복잡한 state updating을 useReducer로 만들수 있다.

useReducer를 사용하다보면 더 재미있는 코드를 짤수 있다.

단지 state값은 바꾸는거라면 useReducer의 사용을 줄이는게 좋다.

form input state를 변경할때나 useReducer 를 사용하곤 한다.

useState보다 더 강하긴 하나 , useReducer는 사용하기에 번거로운 과정이 많다.

const [ state , dispatchFn ] = useReducer(reducerFn, initialstate, initFn );

첫번째 배열 요소에는 기존의 state 값을 가져온다.

두번째 배열 요소는 업데이트 함수의 작동.

하나의 액션을 dispatch 하게 된다.

dispatchFn은 reducerFn 으로 전달받게 된다.

initialstate 은 추가로 초기설정을 설정할 수있고,

initFn 에는 HTTP 리퀘스트등의 결과에 대비해 값이 전달된다.

```jsx
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};
```

이메일과 패스워드를 useReducer로 묶어보았음.

그러나 이것을 컴포넌트 바깥에 존재하게 됨

```jsx
const [emailState, dispatchEmail] = useReducer(emailReducer, {
  value: '',
  isValid: null,
});
const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
  value: '',
  isValid: null,
});
```

useReducer를 선언할때
본래의 목적이라면, reducerFn 자리에 () ⇒ {} 함수가 와야 하는데
컴포넌트 바깥에서 함수를 선언하여 호출하는 방식으로 useReducer에 첨부를 하였음.
이때 하나의 객체를 만들어 reducerFn에서 정의된 value값과 isValid값을 선언한다.

이에 useReducer를 사용할때에는
emailState.value || emailState.isVaild 로 사용함으로써 useState에서 사용했듯이
dispatchFn 을 통해 state 값을 변경시켜줄수 있다 이말이다.
그러나 이 useReducer 같은 경우에는 매우 복잡한 부분이 없지않아 매우 크므로,
일반적인 useState를 사용하는것도 좋다.

그러나 이것을 사용하게 된다면, 코드가 줄어드는것을 ?
확인하지는 못해도 하나의 묶음으로 처리함으로써 가독성에 좋아질거라 생각한다.
