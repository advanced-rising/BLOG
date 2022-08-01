---
title: Docker Auto Container Delete
date: '2022-08-01'
tags: ['docker', 'devops', 'features']
draft: false
comment: 도커의 컨테이너 자동 제거하기
code: docker run -p 3000:80 -d --rm [image_id]
---

```docker
docker run -p 3000:80 -d --rm [image_id]
```

`--rm` 컨테이너가 중지되면 자동으로 제거

도커의 컨테이너 중지와 자동 제거하기
