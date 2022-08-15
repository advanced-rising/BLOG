---
title: JavaScrip All Click & Select Click
date: '2022-08-15'
tags: ['javasciprt', 'react', 'front', 'tip']
draft: false
comment: JavaScrip All Click & Select Click
---

## All Click & Select Click

전체 라벨을 클릭하거나, 개별적으로 클릭으로 클릭했다 안했다를 알 수 있음.

```jsx

const [selected, setSelected] = React.useState<readonly string[]>([]);

const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.checked) {
    const newSelected = rows.map((n) => n.name);
    setSelected(newSelected);
    return;
  }
  setSelected([]);
};


  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
```
