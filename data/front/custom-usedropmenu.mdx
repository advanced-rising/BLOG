---
title: useDropMenu Custom Hook
date: '2022-08-04'
tags: ['react', 'front', 'custom-hook']
draft: false
comment: useDropMenu Custom Hook
---

## useDropMenu

```tsx
import React from 'react';

const useDropMenu = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const [show, setShow] = React.useState(false);

  function assertIsNode(event: EventTarget | null): asserts event is Node {
    if (!event || !('nodeType' in event)) {
      throw new Error(`Node expected`);
    }
  }
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      assertIsNode(event.target);
      if (!container.current!.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [show, container]);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (!show) return;

      if (event.key === 'Escape') {
        setShow(false);
      }
    };

    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [show]);

  return { show, setShow, container };
};

export default useDropMenu;
```

## usage

```tsx
import useDropMenu from '@libs/client/hooks/useDropMenu';

const DropMenu = () => {
  const { container, show, setShow } = useDropMenu();

  return (
    <div ref={container}>
      <button onClick={() => setShow(!show)}>Hello Drop Menu</button>
      {show && <div>Hello</div>}
    </div>
  );
};

export default DropMenu;
```
