FROM node:latest

RUN npm i -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV SERVER_PORT=80

EXPOSE 80

# CMD ["node", "app.js"]
CMD ["npm", "run", "dev"]
