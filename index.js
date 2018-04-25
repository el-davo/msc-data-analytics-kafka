let kafka = require('kafka-node')

const client = new kafka.KafkaClient();
const Producer = kafka.Producer;
const producer = new Producer(client);
const KeyedMessage = kafka.KeyedMessage;

producer.on('ready', () => {
    console.log('Its alive!');

    const keyedMessage = new KeyedMessage('key', 'message');
    const payloads = [
        {topic: 'topic1', messages: 'hi', partition: 0},
        {topic: 'topic2', messages: ['hello', 'world', keyedMessage]}
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