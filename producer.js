let kafka = require('kafka-node');

const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});
const Producer = kafka.Producer;
const producer = new Producer(client);
const KeyedMessage = kafka.KeyedMessage;

producer.on('ready', () => {
    const keyedMessage = new KeyedMessage('key', 'Ahoy!!');
    const payloads = [
        {topic: 'my-test', messages: 'hi', partition: 0},
        {topic: 'my-test', messages: ['hello', 'world', keyedMessage]}
    ];

    producer.send(payloads, (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(data);
    });
});

producer.on('error', (err) => {
    console.error(err);
});