# MSC Scalable Microservices Kafka

NOTE You need to have docker and docker-compose installed for this to work. docker-compose needs to support version 3. Tested on windows 10 Professional with native docker

To create a local kafka cluster run the following command

```
docker-compose up
```

This will create a 3 node kafka cluster and 1 zookeeper instance. You can see this running using a tool called "kafka tool" downloaded from - http://www.kafkatool.com/

You need to install dependencies for this project using the command below

```
npm install
```

To create a new topic run the command

```
node producer.js
```

To subscribe to and display messages in a consumer run the following

```
node consumer.js
```