---
title: Docker Detach Mode
date: '2022-08-01'
tags: ['docker', 'devops', 'features']
draft: false
comment: 컨테이너를 때어놓은 방법 및 데몬모드 실행
code: docker start -d [image_name]
---

## Docker Detach Mode

```docker
docker attach [image_name]

docker logs -f [image_name]

docker start -d [image_name]
```

detach 터미널을 사용할 수 있게 해준다.
detach는 컨테이너 내부에서 나와도 컨테이너가 실행 중이다
