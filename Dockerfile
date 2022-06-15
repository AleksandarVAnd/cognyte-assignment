# Aleksandar Andonov - 15.06.22

# It is best practice to specify the version
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
ENV candidate_name="Aleksandar Andonov"

# Bundle app
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]