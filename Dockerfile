FROM node:latest

# Directory base path
ARG basePath=/srv/www/docker-mern-01

# Create app directory
RUN mkdir -p $basePath
WORKDIR $basePath

# Install the React App Creator
RUN npm install -g create-react-app

# Install app dependencies
#COPY package.json $basePath/
#RUN npm install

# Bundle app source
#COPY . $basePath

VOLUME ["$basePath"]

# Expose the port
#EXPOSE 8080
#CMD [ "npm", "start" ]
CMD [ "ping", "google.com" ]