FROM node:12.13.0-alpine3.9

WORKDIR /app/react-todo

COPY package*.json ./

RUN npm install 

COPY . .

CMD npm run start