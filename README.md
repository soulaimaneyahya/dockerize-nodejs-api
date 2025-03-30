# dockerize-nodejs-api

## Start Docker 🐳

run containers:

```sh
docker build -t dockerize_nodejs_api:v1 .
docker run --name=dockerize_nodejs_api_container1 -d -p 8080:8080 -v $(pwd)/app:/var/www/html -v $(pwd)/app/node_modules:/var/www/html/node_modules dockerize_nodejs_api:v1
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
