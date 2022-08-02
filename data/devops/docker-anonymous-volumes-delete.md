---
title: Docker Anonymous Volumes Delete
date: '2022-08-02'
tags: ['docker', 'devops', 'features']
draft: false
comment: 익명 볼륨 제거
code: docker volume rm VOL_NAME
---

## Docker Anonymous Volumes Delete

```docker
'--rm' 옵션으로 컨테이너를 시작/실행할 때 발생하게 됩니다.
즉 --rm으로는 익명 볼륨을 제거할 수 없다.

docker volume rm VOL_NAME

docker volume prune

둘중 하나의 코드로 볼륨을 삭제할 수 있다.
```

익명 볼륨 제거
