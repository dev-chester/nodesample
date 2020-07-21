# Base layer
FROM node:12.18.2-alpine
# Set working directory
WORKDIR /usr/src/app
#copy package.json
COPY package*.json ./
# install dependencies
RUN npm install
# port for API
EXPOSE 3000
#copy node_modules and all other files
COPY . .
# start by by triggerring npm start
CMD ["node", "server"]

