# dockerize-nodejs-api

## Start Docker 🐳

run containers:

```sh
docker build -t xapi:v1 .
docker run --name=xapi_cont1 -d -p 4000:4000 -v /opt/xdocker/xapi/app:/xapi -v /xapi/node_modules xapi:v1
```

run docker-compose:

```sh
docker-compose up -d
```

down:

```sh
docker-compose down --rmi all -v
```
