FROM node:lts as Builder

WORKDIR /build

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

FROM node:lts-slim

WORKDIR /backend

COPY --from=Builder /build ./

RUN npm install --only=production

EXPOSE 3001

CMD ["npm","start"]