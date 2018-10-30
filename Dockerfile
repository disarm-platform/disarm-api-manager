# build stage
FROM node:10-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# production stage
EXPOSE 3000
CMD ["npm start"]