FROM node:8.11-alpine
MAINTAINER Greg Walters <Gregory.Walters@gmail.com>

ENV INSTALL_PATH='/home/node/api'
WORKDIR $INSTALL_PATH

RUN mkdir -p $INSTALL_PATH \
	&& npm install -g express forever

COPY . $INSTALL_PATH

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
