---
title: React Fragment
date: '2022-08-04'
tags: ['react', 'front']
draft: false
comment: React Fragment
code: [<Fragment></Fragment>]
---

```tsx
<Fragment>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</Fragment>
```

기본적인 내용은<> </> 기본꺽새를 사용하는게 무의미 하므로,

Wrapper 라는 가상의 div 요소를 만들어 사용한다 .

return props.children 으로 하위 요소에게 props를 전달할수 있다 .

그러나 이제는 Fragment라는 것을 사용하여, Wrapper라는것을 직접적으로 만들지 않고 사용이 가능하다 .
