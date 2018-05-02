NOTE You need to have docker and docker-compose installed for this to work. docker-compose needs to support version 3

To create a local kafka cluster run the following command

docker-compose up

This will create a 3 node kafka cluster and 1 zookeeper instance

To create a new topic run the command

node producer.js

To subscribe to and display messages in a consumer run the following

node consumer.js