import express from 'express';
import rentingRouter from './routes/rentingRoutes.js';
import reservationRouter from './routes/reservationRoutes.js';  
import client from './config/db.js'

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

//Routing
app.use('/', reservationRouter);
app.use('/', rentingRouter);

client.connect(err => {
    const collection = client.db("test").collection("devices");  
    client.close();
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

