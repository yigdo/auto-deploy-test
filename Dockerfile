FROM node
LABEL org.opencontainers.image.source="https://github.com/yigdo/autodeploy-test"

WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app


CMD ["npm", "start"]
