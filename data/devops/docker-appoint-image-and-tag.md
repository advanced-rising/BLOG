---
title: Docker Appoint Image And Tag
date: '2022-08-02'
tags: ['docker', 'devops', 'features']
draft: false
comment: 컨테이너 이미지에 이름 지정 및 태그
code: docker build -t [tag_name]:[version_number || string_name] .
---

## Docker Appoint Image And Tag

```docker
docker run -p 3000:80 -d --rm --name [이름지정] [image_id]

node:14

name = node

14 = tag

docker build -t [tag_name]:[version_number || string_name] .

ex) docker run -p 3000:80 -d --rm --name example example:1.0.0
```

컨테이너 이미지에 이름 지정 및 태그
