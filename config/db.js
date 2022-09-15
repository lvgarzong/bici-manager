import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config({path: '.env'});

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose has connected successfully');
})
