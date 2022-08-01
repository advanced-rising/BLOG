---
title: Docker None Use Image All Delete
date: '2022-08-01'
tags: ['docker', 'devops', 'features']
draft: false
comment: 사용되지 않는 이미지 모두 삭제
code: docker image prune
---

## Docker None Use Image All Delete

```docker
docker images

docker image prune
```

사용되지 않은 이미지 모두 삭제

docker rmi [image_id] // 이미지 삭제 추가로 뒤에 나열하면 동시 삭제가능
