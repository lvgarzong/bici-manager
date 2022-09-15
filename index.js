import express from 'express';
import rentingRouter from './routes/rentingRoutes.js';
import reservationRouter from './routes/reservationRoutes.js';  
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import './config/db.js';

dotenv.config({path: '.env'});

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

app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  key: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({mongoUrl: process.env.MONGODB_URI}),
}));

//Routing
app.use('/', reservationRouter);
app.use('/', rentingRouter);

const port = process.env.PORT;
app.listen(port , () => {
    console.log(`Listening on port ${port}`);
});

