---
title: React Framer Motion
date: '2022-08-04'
tags: ['react', 'front']
draft: false
comment: React Framer Motion
code: npm install framer-motion
---

## React Framer Motion

```bash
npm install framer-motion
```

[framer-motion](https://www.npmjs.com/package/framer-motion)

[Production-Ready Animation Library for React | Framer Motion](https://www.framer.com/motion/)

[https://github.com/framer/motion](https://github.com/framer/motion)

## 기본적인 motion 사용법

```jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      <Box transition={{ duration: 3 }} animate={{ borderRadius: '100px' }} />

      <motion.div></motion.div>
    </Wrapper>
  );
}

export default App;
```

스타일드 컴포넌트와 같이 사용할수 있도록 구성함

## variants 사용법

```jsx
const myVars = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: {
      type: 'spring',
      damping: 10,
    },
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={myVars} initial='start' animate='end' />
    </Wrapper>
  );
}

export default App;
```

## variants 을 재대로 사용

```jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial='start' animate='end'>
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
```

![variants.gif](/static/images/front/variants.gif)

## Click, Drag

```jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: '100px' },
  drag: { backgroundColor: 'rgb(46, 204, 113)', transition: { duration: 10 } },
};

function App() {
  return (
    <Wrapper>
      <Box drag variants={boxVariants} whileHover='hover' whileDrag='drag' whileTap='click' />
    </Wrapper>
  );
}

export default App;
```

![variants drag.gif](/static/images/front/variants_drag.gif)

## Drag를 상자안에 가두기

```jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: '100px' },
};

function App() {
  const biggerBoxRef = useRef < HTMLDivElement > null;
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover='hover'
          whileTap='click'
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
```

![variants drag2.gif](/static/images/front/variants_drag2.gif)

## Drag 시 좌표값으로 scale 변경 되게 하기

```jsx
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  return (
    <Wrapper>
      <Box style={{ x, scale }} drag='x' dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
```

![variants drag3.gif](/static/images/front/variants_drag3.gif)

## background 을 바꾸면서 회전하는 법

```jsx
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect } from 'react';

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      'linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))',
      'linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))',
    ],
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag='x' dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
```

![variants drag4.gif](/static/images/front/variants_drag4.gif)

## Path 랜더링

```jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const svg = {
  start: { pathLength: 0, fill: 'rgba(255, 255, 255, 0)' },
  end: {
    fill: 'rgba(255, 255, 255, 1)',
    pathLength: 1,
  },
};

function App() {
  return (
    <Wrapper>
      <Svg focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
        <motion.path
          variants={svg}
          initial='start'
          animate='end'
          transition={{
            default: { duration: 5 },
            fill: { duration: 1, delay: 3 },
          }}
          d='M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z'></motion.path>
      </Svg>
    </Wrapper>
  );
}

export default App;
```

[Font Awesome](https://fontawesome.com/)

![variants drag5.gif](/static/images/front/variants_drag5.gif)

## 에니메이션으로 slider 를 만들어보기

```jsx
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 1 },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box custom={back} variants={box} initial='entry' animate='center' exit='exit' key={visible}>
              {visible}
            </Box>
          ) : null,
        )}
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
}

export default App;
```

![variants slider1.gif](/static/images/front/variants_slider1.gif)

```jsx
<AnimatePresence exitBeforeEnter custom={back}>
```

애니메이션이 다 끝난뒤에 상자가 불러와지는 법

![variants slider2.gif](/static/images/front/variants_slider2.gif)
