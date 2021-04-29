FROM node:14-alpine

WORKDIR /usr/src/

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

