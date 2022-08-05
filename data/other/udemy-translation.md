---
title: Udemy Translation
date: '2022-08-05'
tags: ['udemy']
draft: false
comment: Udemy Translation
---

## 유데미 한글 번역 자막

```jsx
if (typeof window.i === 'undefined') {
  clearInterval(window.i);
} else {
  let lastText = '';
  function check() {
    let toEl = $('.well--container--2edq4 span');
    let fromEl = $('p[data-purpose="transcript-cue-active"] span');
    let currentText = fromEl.html();
    if (lastText !== currentText) {
      toEl.html(currentText);
    }
    lastText = fromEl.html();
  }
  window.i = setInterval(check, 200);
}
```

현재 내가 보고 있는 화면에서 console 창을 열어서 입력을 해주면 된다.
CC 누르고 자막설정에서 동영상 아래표시 ON 으로 설정을 하고서 변경하면 정상적으로 된다.

이런거 설치하지말고. 그냥 크롬 익스텐션 확장자 프로그램에서 `유데미 한글자막` 설치하면된다.
