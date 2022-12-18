# сборка
FROM node:16.14-alpine as build-stage

RUN mkdir /usr/app
COPY . /usr/app

WORKDIR /usr/app

RUN npm i

RUN npm run build

# развертывание
FROM nginx:alpine

WORKDIR /usr/share/gninx/html

RUN rm -rf ./*

COPY --from=build-stage /usr/app/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
