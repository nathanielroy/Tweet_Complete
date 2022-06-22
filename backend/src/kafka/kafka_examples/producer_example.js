const { Kafka } = require("kafkajs");
const Chance = require("chance");

const chance = new Chance();

const kafka = new Kafka({
  clientId: "my-producer",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();
const topic = "animals";

const produceMesage = async () => {
  const value = chance.animal();
  console.log(value);
  try {
    await producer.send({
      topic, //tweet_app
      messages: [{ value }],
    });
  } catch (error) {
    console.log(error);
  }
};

const run = async () => {
  // Producing
  await producer.connect();
  setInterval(produceMesage, 1000);
};

run().catch(console.error);
