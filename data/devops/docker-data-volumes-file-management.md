---
title: Docker Data Volumes File Management
date: '2022-08-02'
tags: ['docker', 'devops', 'features']
draft: false
comment: Data Volumes 파일관리
code: docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback feedback-node:volumes
---

## Docker Data Volumes File Management

```docker
docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback feedback-node:volumes

feedback:/app/feedback 이라는 경로에 볼륨을 저장한다. 즉 코드에서 작성된 예시를 따라 파일이 저장또는 생성된다.
```

data volumes 파일관리
