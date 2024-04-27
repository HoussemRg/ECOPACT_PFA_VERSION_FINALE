FROM node:lts as Builder

WORKDIR /build

COPY  package*.json ./

RUN npm i

COPY  . ./

RUN npm run build 

FROM node:lts-slim

WORKDIR /backend

COPY  --from=Builder /build ./

RUN npm i --only=production 

EXPOSE 3004


CMD ["npm","start"]