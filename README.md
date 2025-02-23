# dockerize-nodejs-api

## Start Docker 🐳

run containers:

```sh
docker build -t dockerize_nodejs_api:v1 .
docker run --name=dockerize_nodejs_api_container1 -d -p 5500:5500 -v /opt/xdocker/dockerize_nodejs_api/app:/dockerize_nodejs_api -v /dockerize_nodejs_api/node_modules dockerize_nodejs_api:v1
```

docker hub image
```sh
docker pull soulaimaneyhcodpartner/dockerize_nodejs_api:v1
```

run docker-compose:

```sh
docker-compose up -d
```

down:

```sh
docker-compose down --rmi all -v
```
