FROM node:20.10.0-bullseye-slim

# create app folder with correct rights for node user
RUN mkdir /app && chown -R node:node /app

# set workdir
WORKDIR /app

# set node as user
USER root

# add node_modules binaries and local-bin to PATH variable
ENV PATH="${PATH}:/app/node_modules/.bin:~/.local/bin"

RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
    ca-certificates \
    git


# copy necessary files and change owner to node
COPY package.json package-lock.json  ./

# install dependencies
RUN npm install


