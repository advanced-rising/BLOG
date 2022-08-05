---
title: useCounter Custom Hook
date: '2022-08-04'
tags: ['react', 'front', 'custom-hook']
draft: false
comment: useCounter Custom Hook
---

## useCounter

```jsx
import { useState, useEffect } from 'react';

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};
export default useCounter;
```

## Usage

```jsx
import useCounter from '../hook/use-counter';

const Counter = () => {
  const counter = useCounter();
  return <div>{counter}</div>;
};

export default Counter;
```
