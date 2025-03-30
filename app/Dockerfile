FROM node:22

WORKDIR /var/www/html

COPY package.json .

RUN npm install --omit=dev

COPY . .

EXPOSE ${SERVER_PORT}

CMD ["npm", "run", "dev"]
