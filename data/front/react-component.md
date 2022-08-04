---
title: React Component
date: '2022-08-04'
tags: ['react', 'front']
draft: false
comment: React Component
code: [style={ { color : 'blue' , fontSize : "16px" } }]
---

## Component

```jsx
function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
```

component 만들때 , 첫글자는 대문자로 사용하는것을 권장함. 파스칼케이스

```tsx
<div> 여러가지 태그와 내용 </div>
```

return() 안에 있는것 태그 하나로 묶어야함.

return() 안에 div로 묶는게 싫다면 최상단, 최하단을 <> </> 이러한 꺽새를 넣어야함

Component 는 관리하기가 편해지지만, 너무 많이 만들면 좀 힘들어짐 ...

그러나 ,, state 사용할때 좀 많이 불편함

상위 component를 사용할때 prop을 사용해서 state 사용 하게 해야함.

## JSX

jsx 에는 if는 사용하지 못하지만, 삼항연산자는 가능하다.

삼항연산자를 {} 중괄호로 감싸줘야함
