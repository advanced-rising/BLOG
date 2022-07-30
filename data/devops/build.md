---
title: Build
date: '2022-07-28'
tags: ['docker', 'devops', 'features']
draft: false
comment: 도커 빌드
code: docker build .
---

## Docker build & run

```docker
docker build .
```

// 도커 빌드

```docker
// Dockerfile

FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app.mjs" ]
```

```docker
docker extension

# Dockerfile

FROM node:14

# npm install 이 저장될 폴더
WORKDIR /app

# 경로 첫번째는 현재 이 폴더, 두번째는 그 파일을 저장하는 이미지 경로
COPY package.json /app

RUN npm install

# 포트 넘버
EXPOSE 80

# 이미지 기반으로 컨테이너가 실행되고 난 뒤에 실행되는 CMD
CMD ["node", "server.js"]
```

```docker
docker ps -a // 컨테이너 확인

docker run -it node // 노드 터미널 접속 가능
```

```docker
# 중지된 도커를 다시 실행하는 방법.

docker run 은 새롭게 만들어지는 것.

docker ps -a 도커이미지 확인

docker start [image_name]
```

```docker
Attached & Detached 컨테이너 이해하기

docker attach [image_name] 재 실행하도록 도커에 다시연결

docker logs -f [image_name]

docker start -a [image_name] start와 attach둘다 동시 실행

docker start -d [image_name] // detached 터미널을 사용할 수 있게 해준다.

```

```docker
도커 이미지 삭제

docker images // 도커 이미지 확인

docker rmi [image_id] // 이미지 삭제 추가로 뒤에 나열하면 동시 삭제가능

docker image prune // 사용되지 않은 이미지 모두 삭제
```

```docker
도커의 컨테이너 자동 제거하기

--rm // 컨테이너가 중지되면 자동으로 제거

-d // detached 모드

docker run -p 3000:80 -d --rm [image_id] // 컨테이너 중지 제거
```

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
