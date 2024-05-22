FROM node:16
WORKDIR /usr/src/app
COPY packsge*.json ./
RUN npm install
COPY . .
EXPOSE 4002
CMD ["node", "Index.js"]