---
title: React useMemo
date: '2022-08-04'
tags: ['react', 'front', 'hook']
draft: false
comment: React useMemo
---

## Memoization

이미 계산 해본 연산 결과를 기억해 두었다가
동일한 계산을 시키면, 다시 연산하지 않고 기억 해두 었던 데이터를 반환 시키게 하는 방법

연산최적화를 할수 있는 방법

- 사람은 답을 기억하는 데에 한계가 있으며,
- 답을 외귀 보다는 해결할 수 있는 능력을 키우는 위주로 학습
- 컴퓨터는 용량만큼 충분한 답을 기억할 수 있음. 절대 까먹거나, 헷갈리지 않는다.
- 1나올수 있는 모든 문제의 답을 외워버린다.

## 예시 1

```jsx
const getDiaryAnalysis = useMemo(() => {
  console.log('일기 분석 시작');

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
```

data.length 가 변경이 되면,
useMemo가 실행되는 어찌보면 useEffect와도 비슷하게 볼수 있지만,
useMemo는 컴퓨터내에서 기억을 하고 있다가, 그 값이 변경이 되면 처리해주는 것이기에
메모리적으로 매우 합리한 방법이다.
이곳에서 data란, 각 일기의 개수를 말하는것이다.

## 예시 2

기본적으로 메모할수 있게 도와주는 useMemo 이다.
저장하길 원하는 어떤 종류의 데이터를 저장하는 것이다.
useCallback이 기능을 위해서 해주는 것처럼
useMemo 에 첫 인자는 기능을 적어줘야한다.
저장할 기능을 return
두번째에 들어가는 것은 useCallback과 같이 종속성의 `[]` 배열이 들어가게 된다.

```jsx
const sortedList = useMemo(() => {
  console.log('Items sorted');
  return items.sort((a, b) => a - b);
}, [items]);
```

하나의 값이 변경될때마다, 저장된 값이 업데이트되라고 해준다.
물건이 바뀔때마다 새로운 물거은 가져올때마다 종속해서 업데이트 된다.

그리고 나서 다시 정렬하고 실행한다.
항상 새로운 배열을 생성하기에 다시 실행하는것을 확인할 수 있다.

```jsx
const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
```

그러나 본래의 값에서 useMemo를 사용하게 된다면,
이것은 재실행되지 않고, 그대로 배열의 본질의 순서를 가지게 된다.
useMemo를 사용하면, 계속 메모리에 메모를 하게 되기때문에 많은 저장공간을 가지게 될수 있다.
Callback을 더 많이 사용할것이다.
