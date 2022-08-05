---
title: React Hook Form
date: '2022-08-04'
tags: ['react', 'front']
draft: false
comment: React Hook Form
code: npm install react-hook-form
---

## React Hook Form

[Home](https://react-hook-form.com/)

```jsx
npm install react-hook-form
```

## 원래 코드

```jsx
function ToDoList() {
  const [toDo, setToDo] = useState('');
  const [toDoError, setToDoError] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError('');
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError('To do should be longer');
    }
    console.log('submit');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder='Write a to do' />
        <button>Add</button>
        {toDoError !== '' ? toDoError : null}
      </form>
    </div>
  );
}
```

너무나도 길고, 적어야 할것도 많다.

그러나 react form hook 을 사용하게 되면, 이러한 기능들을 모두 알아서 처리해주기 때문에 우리는 option 만 설정해주면 되는것이다.

```jsx
import { useForm } from 'react-hook-form';

const ToDoList = () => {
  const { register, watch } = useForm();
  return (
    <div>
      <form>
        <input {...register('Email')} placeholder='Email' />
        <button>Add</button>
      </form>
    </div>
  );
};
```

기본적인 회원가입 창을 만들때, register라는 만들어진 기능을 활용할 수 있다.

이것을 사용하면 onChnage, onBlur 등 여러가지가 들어가, 우리가 직접 많은 코드를 적어도 되지 않아도 된다.

이렇게 해도 , 객체로 잘 저장된다.

```jsx
interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <
  IForm >
  {
    defaultValues: {
      email: '@naver.com',
    },
  };
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onValid)}>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: 'Only naver.com emails allowed',
            },
          })}
          placeholder='Email'
        />
        <span>{errors?.email?.message}</span>
        <input {...register('firstName', { required: 'write here' })} placeholder='First Name' />
        <span>{errors?.firstName?.message}</span>
        <input {...register('lastName', { required: 'write here' })} placeholder='Last Name' />
        <span>{errors?.lastName?.message}</span>
        <input {...register('username', { required: 'write here', minLength: 10 })} placeholder='Username' />
        <span>{errors?.username?.message}</span>
        <input {...register('password', { required: 'write here', minLength: 5 })} placeholder='Password' />
        <span>{errors?.password?.message}</span>
        <input
          {...register('password1', {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Your password is too short.',
            },
          })}
          placeholder='Password1'
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
```

required는 input 의 html에 내장되어있지만 누군가가 필요로 하기에 이것은 필수로 넣어주는것이 좋다고 생각한다.

만약에 input안에 value를 넣지 않고 버튼을 클릭하여 submit 하였을때 빈 공간을 직접 찾아가준다.

이러한 기능도 ref 를 사용해서 foucs를 주어야하는데 대신 다 해준다.

`formState` 은 input에 value가 입력되지 않았다면, 그 에러를 확인해주는 용도로 쓰인다.

`message: "Your password is too short."` 을 통해서 조건값이 일치 하지 않으면 message를 보내줄수도 있다.

required 에 필요한 내용을 적고, 만약에 formState 가 작동된다면 span에 있는 태그가 보여질것이다.

```jsx
<input
  {...register('email', {
    required: 'Email is required',
    pattern: {
      value: /^[A-Za-z0-9._%+-]+@naver.com$/,
      message: 'Only naver.com emails allowed',
    },
  })}
  placeholder='Email'
/>
```

정규표현식을 사용하여, email의 양식을 맞춰주며, `@naver.com` 이라는 것이 포함이 되어야 하는 input 조건을 걸어둔것이다.

interface로 type을 지정하여, data의 any 타입이 아니라 정의된 타입이 오게하고,

```jsx
defaultValues: {
      email: "@naver.com",
    },
```

useForm 에 deufaultValues를 지정하여 input 태그안에 기본적으로 내장된 value를 적어둘수도 있다.
