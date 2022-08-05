---
title: React Redux Thunk
date: '2022-08-04'
tags: ['react', 'front', 'redux']
draft: false
comment: React Redux Thunk
code: npm install redux redux-promise redux-thunk react-redux --save
---

## React Redux Thunk

액션을 무언가가 끝날때까지 미뤄지게 할 수 있다.
액션 객체를 바로 return을 하지 않고,
다른 함수를 return 해서 액션까지 return 해준다.
우리가 실제로 생성할려했던 값을 dispatch 해준다.

## 원래의 코드

```jsx
useEffect(() => {
  const sendCartData = async () => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }),
    );
    const response = await fetch('https://react-http-6b4a6.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });

    if (!response.ok) {
      throw new Error('Sending cart data failed.');
    }

    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      }),
    );
  };

  if (isInitial) {
    isInitial = false;
    return;
  }

  sendCartData().catch((error) => {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      }),
    );
  });
}, [cart, dispatch]);
```

## redux thunk 라는 기능을 사용한 코드

```jsx
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }),
    );
    const sendRequest = async () => {
      const response = await fetch('https://react-http-f8edd-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        }),
      );
    }
  };
};
```

컴포넌트내에 로직을 가지고 추가할수 있다.

이럼으로써 컴포넌트를 lean 하게 유지하고 너무 많은 로직을 가지는 것을 줄일 수 있는 방법이기도 하다.

추후 적용시에는

```jsx
let isInitial = true;
useEffect(() => {
  if (isInitial) {
    isInitial = false;
    return;
  }

  dispatch(sendCartData(cart));
}, [cart, dispatch]);
```

이렇게 useEffect 내부 안에서 dispatch를 통하여 sendCartData의 reducer를 thunk 하여, 액션 생성자로 사용 할 수 있게 된다.

그러나 이제는 장바구니 안에서 수량을 마이너스 플러스하고, 그 데이터를 firebase에 보내는 방법과, 가져오는 방법을 알아야 한다.

그러므로, actions slice를 따로 만들어서 제공해주어야 한다.

```jsx
import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://react-http-f8edd-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        }),
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }),
    );

    const sendRequest = async () => {
      const response = await fetch('https://react-http-f8edd-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        }),
      );
    }
  };
};
```

다른 코드는 일치하지만 여기 중요하게 볼것은

```jsx
try {
  const cartData = await fetchData();
  dispatch(
    cartActions.replaceCart({
      items: cartData.items || [],
      totalQuantity: cartData.totalQuantity,
    }),
  );
} catch (error) {
  dispatch(
    uiActions.showNotification({
      status: 'error',
      title: 'Error!',
      message: 'Fetching cart data failed!',
    }),
  );
}
```

이 부분에서 try시 key 값을 가져와야 한다는 것이다.
그러므로 dispatch 이후 , items과 totalQuantity의 키값을 가져오나.
items 에서는 cartData.items 가 참인경우에 제공하며, 거짓인 경우에는 빈배열 값으로 받아
항상 cart.json에는 배열이 존재하게끔 유지해준다.
App.js에서는

```jsx
useEffect(() => {
  dispatch(fetchCartData());
}, [dispatch]);

useEffect(() => {
  if (isInitial) {
    isInitial = false;
    return;
  }

  if (cart.changed) {
    dispatch(sendCartData(cart));
  }
}, [cart, dispatch]);
```

한번더 useEffect로 fetch의 데이터를 가져와, 상태관리를 해주어야 한다.
