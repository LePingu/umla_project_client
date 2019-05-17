# base image
FROM node:10-alpine

# modules permissions and directories creation
RUN mkdir -p /umla/app/client/node_modules && chown -R node:node /umla/app/client

# Create app directory
WORKDIR /umla/app/client

# copy package.json into the container at /client
COPY package*.json ./

# specifying user
USER node

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /client
COPY --chown=node:node . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]