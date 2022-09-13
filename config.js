let config = {}

config.PORT = process.env.PORT || 3001;
config.DB_NAME = process.env.DB_NAME || 'bikes-db';
config.DB_USER = process.env.DB_USER || 'lvgarzong';
config.DB_PASSWORD = process.env.DB_PASSWORD || 'bikeapp';
config.MONGODB_URI = `mongodb://${config.DB_USER}:${config.DB_PASSWORD}@cluster0-shard-00-00.0bgy1.mongodb.net:27017,cluster0-shard-00-01.0bgy1.mongodb.net:27017,cluster0-shard-00-02.0bgy1.mongodb.net:27017/${config.DB_NAME}?ssl=true&replicaSet=atlas-trketd-shard-0&authSource=admin&retryWrites=true&w=majority`;
config.RABBITMQ_URI = 'amqps://gfhscxlk:ypkKxbAmkZIa3JOAMiA0ZndJ3bXZt3z6@shrimp.rmq.cloudamqp.com/gfhscxlk';

module.exports = config;