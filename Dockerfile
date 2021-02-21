FROM node:14.15.5 as build

WORKDIR /app
COPY . /app
RUN \ 
		&& npm install \
		&& npm run build
