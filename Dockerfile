FROM node:21-alpine3.18
LABEL authors="Crosbic"

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

ENTRYPOINT ["npm", "run", "start"]

#У некста есть свой пример
#https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile