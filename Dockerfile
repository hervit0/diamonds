FROM node:9.11-alpine

WORKDIR /usr/src/app

RUN npm install -g yarn

ADD package.json yarn.lock /usr/src/app/
RUN yarn install

ADD . /usr/src/app

CMD ["/bin/sh", "-c", "yarn compile"]
