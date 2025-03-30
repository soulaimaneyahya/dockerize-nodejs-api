FROM node:latest

WORKDIR /var/www/html

COPY package.json .

RUN npm install

COPY . .

EXPOSE ${SERVER_PORT}

CMD ["npm", "run", "dev"]
