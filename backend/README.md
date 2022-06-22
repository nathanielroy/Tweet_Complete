## Project setup
install dokcer desktop and make sure it's running
Once it's up execute the below command where you have stored your kafka ym file directory:
1)"docker-compose -f docker-compose.yml up -d"
2)docker exec -it kafka /bin/sh
3)kafka-topics.sh --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1 --topic <<topic name>> (This will create a topic)
4)kafka-topics.sh --list --zookeeper zookeeper:2181 (check if your topic is created it will be listed)

```
npm install
```

### Run

```
node server.js
```
