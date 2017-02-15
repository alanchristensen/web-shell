FROM node:latest

WORKDIR /app

ADD . /app

CMD [ "npm", "start" ]
