#  Dockerfile for Node Express Backend

FROM node:14-slim

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./
COPY . .


RUN npm install
RUN npm run build

# Exports
EXPOSE 4000

CMD ["npm","run","start"]