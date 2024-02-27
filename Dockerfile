FROM node:21
LABEL authors="OLEG YACKEVICH"

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

ENTRYPOINT ["yarn", "start"]