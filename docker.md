本文翻译自[https://docs.docker.com/docker-for-mac/](https://docs.docker.com/docker-for-mac/)
#一、Mac下安装运行Docker
下载地址：[https://download.docker.com/mac/stable/Docker.dmg](https://download.docker.com/mac/stable/Docker.dmg)

1.双击Docker.dmg，拖动docker.dmg至Applications

2.安装完毕后，双击docker图标，启动docker

3.Mac菜单栏单击docker图标查看相关属性

4.单击about docker选项查看版本

#二、查看Docker Engine、Compose、Machine版本
```
$ docker --version
Docker version 1.12.0, build 8eab29e

$ docker-compose --version
docker-compose version 1.8.0, build f3628c7

$ docker-machine --version
docker-machine version 0.8.0, build b85aac1
```

#三、运行

1.打开命令行工具terminal，运行docker相关命令查看docker是否正确运行

1]查看是否是最新版本docker
```
docker version
```

2]docker 运行信息
```
docker ps
```

3]运行hello-world
```
docker run hello-world
```

2.对于复杂项目，需要启动Dockerized web服务器
```
docker run -d -p 80:80 --name webserver nginx
```

然后运行：http://127.0.0.1/


3.运行docker ps  查看运行的web服务器的详情
```
    CONTAINER ID        IMAGE                COMMAND                  CREATED              STATUS              PORTS                              NAMES
    56f433965490        nginx                "nginx -g 'daemon off"   About a minute ago   Up About a minute   0.0.0.0:80->80/tcp, 443/tcp   webserver
```

4.Stop or remove containers and images.

1]停止运行webserver
```
docker stop webserver
```

2]启动webserver
```
docker start webserver
```

3]删除webserver
```
docker rm -f webserver
```


4]查看docker下所有镜像
```
docker images
```

5]删除镜像
```
docker rmi <imageID>|<imageName>
docker rmi nginx
```

