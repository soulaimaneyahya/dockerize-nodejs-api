FROM node:latest

RUN npm i -g nodemon

# run all commands on xapi dir
WORKDIR /xapi

COPY package.json .

RUN npm install

COPY . .

ENV SERVER_PORT=4000

EXPOSE 4000

# CMD ["node", "app.js"]
CMD ["npm", "run", "dev"]
