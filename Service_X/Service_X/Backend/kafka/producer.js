// import pkg from 'kafkajs';
// const { Kafka, Partitioners } = pkg;

// const kafka = new Kafka({
//     clientId: 'my-app',
//     brokers: ['localhost:9092'],
// });

// // Create the producer with the legacy partitioner
// const producer = kafka.producer({
//     createPartitioner: Partitioners.LegacyPartitioner
// });

// // Function to send a message
// const sendMessage = async (message) => {
//     try {
//         await producer.connect();
//         console.log('Producer connected');

//         const result = await producer.send({
//             topic: 'service_requests',
//             messages: [{ value: message }],
//         });

//         console.log('Message sent:', message);
//         console.log('Send result:', result);  // Log the result for debugging
//     } catch (error) {
//         console.error('Error sending message:', error);
//     } finally {
//         await producer.disconnect();
//         console.log('Producer disconnected');
//     }
// };

// // Example usage (remove or comment this out in production)
// const testMessage = "Hello, Kafka!";
// sendMessage(testMessage);

// export { sendMessage };




import pkg from 'kafkajs';
import readline from 'readline';  // Import readline

const { Kafka, Partitioners } = pkg;

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'],
});

const producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner
});

// Create an interface for reading input from stdin
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to send a message
const sendMessage = async (message) => {
    try {
        await producer.connect();
        console.log('Producer connected');

        const result = await producer.send({
            topic: 'service_requests',
            messages: [{ value: message }],
        });

        console.log('Message sent:', message);
        console.log('Send result:', result);
    } catch (error) {
        console.error('Error sending message:', error);
    } finally {
        await producer.disconnect();
        console.log('Producer disconnected');
    }
};

// Export sendMessage
export { sendMessage };

// Prompt for user input (optional if you're using this file directly)
rl.question('Enter your message: ', async (input) => {
    await sendMessage(input);  // Send the input message
    rl.close();  // Close the readline interface after sending
});
