import mongoose from "mongoose";

const bikeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
          }
    },
    marca: String,
    tipo: String,
    color: String,
    estado: {
        type: String,
        default: "disponible"
    },
    latitude: Number,
    longitude: Number
}, {
    collection: 'bikes',
    versionKey: false
});

export default mongoose.model('Bike', bikeSchema);