# Base layer
FROM node:12
# Set working directory
WORKDIR /usr/src/app

#copy package.json
COPY package*.json ./

# install dependencies
RUN npm install

#copy node_modules and all other files
COPY . .

# start by by triggerring npm start
CMD ["npm", "start"]