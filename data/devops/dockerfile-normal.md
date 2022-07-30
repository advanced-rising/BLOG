---
title: Dockerfile Normal
date: '2022-07-30'
tags: ['docker', 'devops', 'features']
draft: false
comment: 도커 기본 코드
---

## Dockerfile Normal

```docker
FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app.mjs" ]
```
