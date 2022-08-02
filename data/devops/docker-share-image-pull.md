---
title: Docker Share Image Pull
date: '2022-08-02'
tags: ['docker', 'devops', 'features']
draft: false
comment: 도커 이미지 공유 PULL
code: docker start [image_name]
---

## Docker Share Image Pull

```docker
docker pull

docker logout // 도커 로그아웃

docker pull [user/repository_name] // 최신이미지 가져올 수 있다.

ex) docker run -p 3000:80 -d --rm --name example example:1.0.0

docker run [user/repository_name] // 기기에서 이미지를 검색하여 실행
```

도커 이미지 공유 PULL
