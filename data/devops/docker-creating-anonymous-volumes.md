---
title: Docker Creating Anonymous Volumes
date: '2022-08-02'
tags: ['docker', 'devops', 'features']
draft: false
comment: 익명 볼륨 생성
code: docker run -v /app/data...
---

## Docker Creating Anonymous Volumes

```docker
docker run -v /app/data...
// 익명의 볼륨 생성

docker run -v data:/app/data ...
// 명명된 볼륨 생성

docker run -v /path/to/code:/app/code ...
// 실제로 호스트 머신의 폴더를 가리키는 절대 경로
```
