FROM node:latest

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install bash

# Directory base path
# ARG basePath=/srv/www/docker-mern-01/

# # Create app directory
# # RUN mkdir -p $basePath
# VOLUME $basePath
# WORKDIR $basePath
# RUN mkdir /srv/www/docker-mern-01/node_modules

# # Install the React App Creator
# # RUN npm install create-react-app

# # Install all dependencies of the current project.
# COPY package.json package.json
# COPY npm-shrinkwrap.json npm-shrinkwrap.json

# # RUN ls -la
# # RUN ls -la $basePath
# # Install app dependencies
# # COPY ./package.json $basePath
# RUN npm install

# # Bundle app source
# #COPY . $basePath


# # Expose the port
# EXPOSE 3000
# CMD [ "npm", "start" ]
# # CMD [ "ping", "google.com" ]