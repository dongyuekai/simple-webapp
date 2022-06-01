# simple-webapp
这是一个帮助你构建Docker的应用 

## 1、使用docker ps 查看正在运行的Web容器 Web实例
docker ps
docker rm -f {NAME} 删掉某个容器
docker start xx 重启容器
docker stop xx 停止运行中的容器
docker restart xx 重启容器xx
docker run -d --name redis1 -p 6379:6379 redis 运行容器redis取名为redis1

## 2、dockerfile文件 用于创建docker 镜像（images）
```
FROM node:alpine
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ['npm','start']

```
## 3、docker-compose.yml文件 用于构建容器实例 Containers
```
version: '2'
services:
  fuckthisshitL:
     image: 'dyk/simple2'
     port:
       - '9702:7777'
     environment:
       PORT: 7777
```
## 4、构建步骤
  docker build -t dyk/simple2
  docker-compose up
  docker run -p 9702:9722 dyk/simple2
  
Image可以理解为一个系统镜像，Container是Image在运行时的一个状态。
如果拿虚拟机作一个比喻的话，Image就是关机状态下的磁盘文件，Container就是虚拟机运行时的磁盘文件，包括内存数据。
Image 是系统一般来源是官方资源，或者比较稳定成熟的资源
Container 是启动系统后的运行时环境， 包括磁盘 + 运行的其他软件 + 环境配置
他们之间可以互相转换

使用docker启动一个容器比虚拟机要快（前提是image已经拉取下来了）
docker run  -it -rm centos:7.5.1804 bash

