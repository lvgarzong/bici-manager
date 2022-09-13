import Bike from "../models/BikeModel.js";

const bikes = async (req, res) => {
    const bikes = await Bike.find();
    res.send(bikes);
}

const bikesId = async (req, res) => {
    const bikeId = req.params.id;
    try {
        const bike = await Bike.findOne({ id: bikeId });
        if (!bike) {
            return res.status(404).send();
        }
        res.send(bike);
    } catch (e) {
        res.status(500).send();
    }
}

const createNewBike = async (req, res) => {
    console.log(req.body); 
    const newBike = new Bike({
        id: req.body.id,
        marca: req.body.marca,
        tipo: req.body.tipo,
        color: req.body.color,
        estado: req.body.estado,
        latitude: req.body.latitude,
        longitude: req.body.longitude
      });
    await newBike.save()
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

const updateBike = async (req, res) => {
    const bikeId = req.params.id;
    const updatedAttributes = {
        id: req.body.id,
        marca: req.body.marca,
        tipo: req.body.tipo,
        color: req.body.color,
        estado: req.body.estado,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    };
    try {
        const updatedBike = await Bike.findOneAndUpdate({ id: bikeId }, updatedAttributes, {new: true});
        if (!updatedBike) {
            return res.status(404).send();
        }
        res.send(updatedBike);
    } catch (e) {
        res.status(500).send();
    }
}

const deleteBike = async (req, res) => {
    const bikeId = req.params.id;
    try {
        const deletedBike = await Bike.findOneAndDelete({ id: bikeId });
        if (!deletedBike) {
            return res.status(404).send();
        }
        res.send(deletedBike);
    } catch (e) {
        res.status(500).send();
    }
}

export {
    bikes,
    bikesId,
    createNewBike,
    updateBike,
    deleteBike
}