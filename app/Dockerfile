FROM node:latest

RUN npm i -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV SERVER_PORT=5500

EXPOSE 5500

# CMD ["node", "app.js"]
CMD ["npm", "run", "dev"]
