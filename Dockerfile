FROM node:alpine
WORKDIR /usr/app/resourcemanager
COPY package*.json ./
RUN npm install

COPY . . 

EXPOSE 3003

CMD ["npm", "start" ]