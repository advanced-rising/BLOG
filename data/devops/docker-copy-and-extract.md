---
title: Docker Copy And Extract
date: '2022-08-02'
tags: ['docker', 'devops', 'features']
draft: false
comment: 도커복사 및 추출
code: docker cp [복사할려는 폴더 및 파일 test/.] [복사할 컨테이너 image_id:test]
---

## Docker Copy And Extract

```docker
docker cp [복사할려는 폴더 및 파일 test/.] [복사할 컨테이너 image_id:test]

docker cp [복사할 컨테이너 image_id:test] [복사할곳 폴더 및 파일 test/.]
```

첫번째는 복사대상 두번째는 로컬주소
