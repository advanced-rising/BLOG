---
title: Build
date: '2022-07-28'
tags: ['docker', 'devops', 'features']
draft: false
comment: 도커 빌드
code: docker build .
---

## Docker build

```docker
docker build .
```

도커 빌드

```docker
도커의 이미지 검사

docker image inspect [image_id] // 도커의 정보
```

```docker
도커복사 및 추출

docker cp [복사할려는 폴더 및 파일 test/.] [복사할 컨테이너 image_id:test]

docker cp [복사할 컨테이너 image_id:test] [복사할곳 폴더 및 파일 test/.]

첫번째는 복사대상 두번째는 로컬주소
```

```docker
컨테이너 이미지에 이름 지정 및 태그

docker run -p 3000:80 -d --rm --name [이름지정] [image_id]

node:14

name = node

14 = tag

docker build -t [tag_name]:[version_number || string_name] .

ex) docker run -p 3000:80 -d --rm --name example example:1.0.0
```

```docker
도커 이미지 공유 push

docker push [user/repository_name]:tagname

// 이미지 빌드와 이미지 생성
docker build -t [user/repository_name] .

// docker tag 기존이름:태그 새로운이름:태그
docker tag old_repo_name:tag_name new_repo_name:tag_name
ex) docker tag node-demo:latest node-world:evenly
```

```docker
도커 이미지 공유 pull

docker pull

docker logout // 도커 로그아웃

docker pull [user/repository_name] // 최신이미지 가져올 수 있다.

ex) docker run -p 3000:80 -d --rm --name example example:1.0.0

docker run [user/repository_name] // 기기에서 이미지를 검색하여 실행
```

```docker
data volumes 파일관리

docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback feedback-node:volumes

feedback:/app/feedback 이라는 경로에 볼륨을 저장한다. 즉 코드에서 작성된 예시를 따라 파일이 저장또는 생성된다.
```

```docker
익명 볼륨 제거

'--rm' 옵션으로 컨테이너를 시작/실행할 때 발생하게 됩니다.
즉 --rm으로는 익명 볼륨을 제거할 수 없다.

docker volume rm VOL_NAME

docker volume prune

둘중 하나의 코드로 볼륨을 삭제할 수 있다.
```

```docker
바인드 마운트 바로가기 Shortcuts

macOS / Linux: -v $(pwd):/app

Windows: -v "%cd%":/app
```

```docker
docker run -v /app/data...

// 익명의 볼륨 생성

docker run -v data:/app/data ...

// 명명된 볼륨 생성

docker run -v /path/to/code:/app/code ...

// 실제로 호스트 머신의 폴더를 가리키는 절대 경로
```

```docker
다른 볼륨 결합 및 병합하기

```
