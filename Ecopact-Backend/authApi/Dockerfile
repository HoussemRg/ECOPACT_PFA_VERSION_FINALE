FROM node:lts as Builder

WORKDIR /build

COPY  package*.json ./

RUN npm i

COPY  . ./

RUN npm run build 

FROM node:lts-slim

WORKDIR /build

COPY  --from=Builder /build .

RUN npm i --only=production 

EXPOSE 3002


CMD ["npm","start"]