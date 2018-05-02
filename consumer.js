const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});
const consumer = new Consumer(client, [{topic: 'my-test', partition: 0}], {autoCommit: false});

consumer.on('message', function (message) {
    console.log('Got a message');
    console.log(message);
});