FROM node:21
LABEL authors="Crosbic"

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

ENTRYPOINT ["yarn", "start"]