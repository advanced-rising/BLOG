---
title: Dockerfile Extension
date: '2022-07-30'
tags: ['docker', 'devops', 'features']
draft: false
comment: 도커 기본 코드
---

## Dockerfile Extension

```docker
# Dockerfile

FROM node:14

# npm install 이 저장될 폴더
WORKDIR /app

# 경로 첫번째는 현재 이 폴더, 두번째는 그 파일을 저장하는 이미지 경로
COPY package.json /app

RUN npm install

# 포트 넘버
EXPOSE 80

# 이미지 기반으로 컨테이너가 실행되고 난 뒤에 실행되는 CMD
CMD ["node", "server.js"]
```
