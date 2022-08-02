---
title: Docker Share Image Push
date: '2022-08-02'
tags: ['docker', 'devops', 'features']
draft: false
comment: 도커 이미지 공유 PUSH
code: docker push [user/repository_name]:tagname
---

## Docker Share Image Push

```docker
docker push [user/repository_name]:tagname

docker build -t [user/repository_name] .

docker tag 기존이름:태그 새로운이름:태그
docker tag old_repo_name:tag_name new_repo_name:tag_name
ex) docker tag node-demo:latest node-world:evenly
```

도커 이미지 공유 PUSH
