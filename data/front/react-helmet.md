---
title: React Helmet
date: '2022-08-04'
tags: ['react', 'front']
draft: false
comment: React Helmet
code: npm install react-helmet @types/react-helmet
---

## React Helmet

```jsx
npm install react-helmet @types/react-helmet
```

```jsx
<Helmet>
  <title>text</title>
</Helmet>
```

title을 변경해주는 react 라이브러리

좋은 기능

state 값으로도 title을 변경이 가능하다. /:coinId

```jsx
<Helmet>
  <title>{state?.name ? state.name : loading ? 'Loading...' : infoData?.name}</title>
</Helmet>
```
