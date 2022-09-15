import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
          }
    },
    idUser: {
        type: String
    },
    idBike: {
        type: Number,
        unique: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
          }
    }
}, {
    collection: 'reservations',
    versionKey: false
});

export default mongoose.model('Reservation',reservationSchema);