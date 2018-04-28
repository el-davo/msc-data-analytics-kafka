FROM node

COPY package.json .

RUN npm install

COPY . .

ENV CLOUDKARAFKA_BROKERS ark-01.srvs.cloudkafka.com:9094,ark-02.srvs.cloudkafka.com:9094,ark-03.srvs.cloudkafka.com:9094
ENV CLOUDKARAFKA_USERNAME ark
ENV CLOUDKARAKFA_PASSWORD pnQIJFL9U2crAXBLogSlCYD6Znmz1zas
ENV CLOUDKARAFKA_TOPIC_PREFIX ark-

EXPOSE 8080
CMD ["npm", "start"]