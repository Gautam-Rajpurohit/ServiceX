// consumer.js
import kafka from 'kafka-node'; // Use ES module syntax

const Consumer = kafka.Consumer;
const Client = kafka.KafkaClient;

// Set up your Kafka client and consumer
const client = new Client({ kafkaHost: 'localhost:9092' });
const consumer = new Consumer(
    client,
    [{ topic: 'service_requests', partition: 0 }], // Ensure this matches your topic name
    { autoCommit: true, fromOffset: false }
);

consumer.on('message', function (message) {
    console.log('Received message:', message.value); // Display only the message value
});

consumer.on('error', function (err) {
    console.error('Error:', err);
});
