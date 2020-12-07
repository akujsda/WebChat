FROM node:12.13-alpine

# создание директории приложения
WORKDIR /usr/src/app


COPY . /usr/src/app
RUN npm install


EXPOSE 8080
CMD [ npm start ]
