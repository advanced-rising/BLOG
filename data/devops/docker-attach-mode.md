---
title: Docker Attach Mode
date: '2022-08-01'
tags: ['docker', 'devops', 'features']
draft: false
comment: 실행중인 컨테이너에 접속하는 방법
code: docker start -a [image_name]
---

```docker
docker attach [image_name]

docker logs -f [image_name]

docker start -a [image_name]

```

start와 attach둘다 동시 실행
attach 명령어는 컨테이너 내부에서 나오면 컨테이너가 종료된다.
