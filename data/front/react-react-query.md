---
title: React Query
date: '2022-08-04'
tags: ['react', 'front']
draft: false
comment: React Query
code: npm install react-query
---

## React Query

```jsx
npm install react-query
```

```jsx
import { QueryClient, QueryClientProvider } from 'react-query';

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>;
```

사용법 .

```jsx
export const fetchCoins = () => {
  return fetch('https://api.coinpaprika.com/v1/coins').then((response) => response.json());
};
```

하나의 기능을 api 형식으로 제작

```jsx
const { isLoading, data } = useQuery('allCoins', fetchCoins);
```

useQuery 를 불러오고, fetchCoins 라는 api도 함께 불러온다.
isLoading은 fetchCoins가 로딩중일때 표시해주고 ,
data는 로딩이 끝난뒤 그 해당되는 data 값이다.

```jsx
const [coins, setCoins] = useState<CoinInterface[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  (async () => {
    const response = await fetch("https://api.coinpaprika.com/v1/coins");
    const json = await response.json();
    setCoins(json.slice(0, 100));
    setLoading(false);
  })();
}, []);
```

원래 사용하려고 하였던 useEffect를 통한 fetch 기능이였으나,
매우 매우 쉽게 loading 기능와 data값을 둘다 할수 있는 react - query 이다.
react query를 사용해야하는 이유 .
데이터를 불러오고 난 뒤에는 react query가 캐시데이터를 저장해 두기때문에 loading 이 빠르다.

## 다른 예시

```jsx
const { isLoading: infoLoading, data: infoData } =
  useQuery < InfoData > (['info', coinId], () => fetchCoinInfo(coinId));
const { isLoading: tickersLoading, data: tickersData } =
  useQuery < PriceData > (['tickers', coinId], () => fetchCoinTickers(coinId));
```

```jsx
export const fetchCoinInfo = (coinId: string) => {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json());
};
export const fetchCoinTickers = (coinId: string) => {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => response.json());
};
```

로딩이 2개다 ... 어떻게 해야할까 ?

```jsx
const loading = infoLoading || tickersLoading;
```

요러코롬 하면 된다.
그전 코드를 알려주자면,

```jsx
const [loading, setLoading] = useState(true);
const [info, setInfo] = useState<InfoData>();
const [priceInfo, setPriceInfo] = useState<PriceData>();
useEffect(() => {
  (async () => {
    const infoData = await (
      await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
    ).json();
    const priceData = await (
      await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
    ).json();
    setInfo(infoData);
    setPriceInfo(priceData);
    setLoading(false);
  })();
}, [coinId]);
```

위와같은 코드가 저렇게 줄여들게 되니 얼마나 좋은것인가 !!!

## 번외 devtools 확인법

```jsx
import { ReactQueryDevtools } from 'react-query/devtools';

<ReactQueryDevtools initialIsOpen={true} />;
```

<center>

![react-query](/static/images/front/react-query.png)

</center>

이렇게 query를 제어 하고 확인 할수 있는 공간이 생김
