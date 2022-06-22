const { Kafka,Partitioners } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-producer",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner });
const topic = "tweet_app";

const produceMesage = async (value) => {
  if (value === undefined) {
    value = ('Initialized Producer');
  }
  try {
    await producer.send({
      topic, 
      messages: [{ value }],
    });
  } catch (error) {
    console.log(error);
  }
};

const run = async () => {
  // Producing
  await producer.connect();
  produceMesage();
};

run().catch(console.error);

module.exports = produceMesage;
