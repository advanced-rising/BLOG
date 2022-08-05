---
title: TypeScript Path 변경
date: '2022-08-05'
tags: ['typescript', 'front']
draft: false
comment: TypeScript Path 변경
---

## TypeScript Path 변경

#### tsconfig.json

```jsx
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@libs/*": ["libs/*"],
      "@components/*": ["components/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

해당된 config.json 파일안에서 이러하게 설정을 바꿔주면 된다. 지금은 ts 기준

```jsx
"baseUrl": ".",
"paths": {
      "@libs/*": ["libs/*"],
      "@components/*": ["components/*"]
    }
```

이렇게 되면 @가 붙게되는 @libs 와 @components 로 바뀌어 ../ ../ 를 안적어도 된다.
