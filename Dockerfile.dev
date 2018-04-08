FROM node:9.11-alpine

WORKDIR /usr/src/app

RUN apk add --update bash
RUN npm install -g @angular/cli@1.7.4
ADD . /usr/src/app

WORKDIR /usr/src/app/diamonds
EXPOSE 4200
RUN npm install
