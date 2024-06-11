FROM node:22-alpine

ENV NODE_ENV development

WORKDIR /app/server

COPY tsconfig.json ./
COPY .env* ./
COPY package.json ./
COPY package-lock.json ./

RUN npm install

EXPOSE 3000

CMD  ["npm","start"]
