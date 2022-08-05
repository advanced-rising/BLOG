---
title: React dangerouslySetInnerHTML
date: '2022-08-04'
tags: ['react', 'front']
draft: false
comment: React dangerouslySetInnerHTML
---

## **dangerouslySetInnerHTML**

?? 이게 무엇을 의미했는지 모르고 있었으나,

과제 시험 전형에서 데이터를 <span>불라불라</span> 이런식으로 html의 형식으로 가지고 오기에 많은 고민을 하게 되었다.

음 .. ?? 어떻게 하지 ??

검색을 하다보니 **dangerouslySetInnerHTML** 을 \*\*\*\*사용해서 javascript에서 innerHTML을 사용하는것처럼 사용할수 있었던 것이였다.

### 리액트 공식문서에 의하면,

`dangerouslySetInnerHTML`은 브라우저 DOM에서 `innerHTML`을 사용하기 위한 React의 대체 방법입니다. 일반적으로 코드에서 HTML을 설정하는 것은 [사이트 간 스크립팅](https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EA%B0%84_%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8C%85) 공격에 쉽게 노출될 수 있기 때문에 위험합니다. 따라서 React에서 직접 HTML을 설정할 수는 있지만, 위험하다는 것을 상기시키기 위 `dangerouslySetInnerHTML`을 작성하고 `__html` 키로 객체를 전달해야 합니다. 아래는 예시입니다.

```jsx
function createMarkup() {
  return { __html: 'First &middot; Second' };
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

나는 과제 구현에 있어 이렇게 코드 구현을 했음.

```jsx
const termsTitle = `${data?.terms?.title}`;
const termsContent = `${data?.terms?.content}`;
const signTitle = `${data?.sign?.title}`;
const signContent = `${data?.sign?.content}`;
...

return
...

<div dangerouslySetInnerHTML={{ __html: termsTitle }} />
<div dangerouslySetInnerHTML={{ __html: termsContent }} />

...
```

이렇게 보니 ... 좀 간편한거 같기도 하고 ???

만약에 이런식으로 온다고 하더라도 **dangerouslySetInnerHTML** 을 설정한 부분에서 className을 적어주게 된다면, 그 아래로 오는 태그들도 CSS는 정상으로 작동이 된다.

그러나 이름에 맞게 매우매우 댄저러스 하나보다 .

사이트 간 스크립팅 공격에 쉽게 노출이 되기 때문인가보다.

**사이트 간 스크립팅 공격 과 크로스 사이트 스크립팅 (XSS, cross-site scripting)**

- 웹 애플리케이션의 취약점 중 하나
- 관리자가 아닌 이가 페이지에 악성 스크립트를 삽입할 수 있는 취약점
- 악성 스크립트를 통해 사용자의 정보(쿠키, 세션등)를 탈취하거나 비정상적인 기능을 수행
- 주로 다른 웹 사이트와 정보를 교환하는 식으로 작동하므로 사이트 간 스크립팅이라고 함
- 취약점을 방지하기 위해서는 사용자의 입력 값을 검사하고 사용해야함

# dangerouslySetInnerHTML

dangerouslySetInnerHTML은 브라우저 DOM에서 innerHTML을 사용하기 위한 React의 대체 방법입니다. 일반적으로 코드에서 HTML을 설정하는 것은 사이트 간 스크립팅 공격에 쉽게 노출될 수 있기 때문에 위험합니다.

따라서 React에서 직접 HTML을 설정할 수는 있지만, 위험하다는 것을 상기시키기 위해 dangerouslySetInnerHTML을 작성하고 \_\_html 키로 객체를 전달해야 합니다.

```tsx
function MyComponent() {
  return <div dangerouslySetInnerHTML={{ __html: '< div>pizza< /div>' }} />;
}
```

https://ko.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
