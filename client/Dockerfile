FROM node:22-alpine

ENV NODE_ENV development

WORKDIR /app/frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]