---
title: React.lazy
date: '2022-08-04'
tags: ['react', 'front']
draft: false
comment: React.lazy
---

## React.lazy

코드 분할을 하게 해주며, 분할은 앱을 지연로딩 하게 도와주고, 사용자들에게 획기적인 성능 향상을 하게 해준다.

```jsx
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
```

React.lazy를 사용하게 되면, 꼭 필요할때만 사용을 하게 해주고 , 코드양을 줄이지 않고도 사용자가 필요하지 않은 코드를 불러오지 않게 하며, 앱의 초기화 로딩에 필요한 비용을 줄여준다.

React.lazy는 아직 서버 사이드렌더링을 하지 못해, 서버사이드 랜더링을 하기 위해서는 Loadable Components를 추천한다.

하지만 React.lazy를 사용하는 경우 React는 이것을 사용하고 싶을때 사용한다는 의미이기에 , 다운로드 하기 위해 몇초동안을 다운로드 해야하는데 이때 React는 잠시 멈추게 되고, 컴포넌트는 로딩할 수 없는 상태에 진입하게 된다.

그러므로, 다운로드가 조금 오래 걸릴 경우 표시되는 하나의 React 기능을 사용하여야 한다.

```jsx
import React, { Suspense } from 'react';
```

라이브러리 자체에서 제공되는 컴포넌트 ,

사용하는 법은 .

```jsx
const NewQuote = React.lazy(() => import('./pages/NewQuote'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}
```

하나의 Suspense로 감싸주어야 한다.

또한, Suspense는 fallback prop을 필수로 가지기에, fallback prop은 로딩 표시기로 사용할 컴포넌트를 받기에 항상 써주어야 한다.

모든 사용자가 아닌, 특정 사용자가 어디를 클릭해서 페이지를 보는것을 알수 없으므로, 사용자가 원할대만 해당페이지를 느리게 로딩하게 하는것이 React.lazy 이다 .

페이지가 많고, 많은 로직의 복합적인 페이지에서 웹을 매우 빠르게 만들어준다.

원할때만 빼서 코드를 다운로드를 하게 만들기 때문이다.
