---
title: Docker None Use Image Delete
date: '2022-08-01'
tags: ['docker', 'devops', 'features']
draft: false
comment: 사용되지 않는 이미지 개별 및 동시 삭제
code: docker rmi [image_id]
---

## Docker None Use Image Delete

```docker
docker images

docker rmi [image_id] [image_id] [image_id] [image_id]
```

이미지 삭제 추가로 뒤에 나열하면 동시 삭제가능
