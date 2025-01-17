# dockerize-nodejs-api

## Start Docker 🐳

run containers:

```sh
docker build -t dockerize_nodejs_api:v1 .
docker run --name=dockerize_nodejs_api_cont1 -d -p 4000:4000 -v /opt/xdocker/dockerize_nodejs_api/app:/dockerize_nodejs_api -v /dockerize_nodejs_api/node_modules dockerize_nodejs_api:v1
```

run docker-compose:

```sh
docker-compose up -d
```

down:

```sh
docker-compose down --rmi all -v
```
