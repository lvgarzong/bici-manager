import Reservation from "../models/ReservationModel.js";    

const reservation = async (req, res) => {
    const reservations = await Reservation.find();
    res.send(reservations);
}

const reservationsId = async (req, res) => {
    const reservationId = req.params.id;
    try {
        const reservation = await Reservation.findOne({ id: reservationId });
        if (!reservation) {
            return res.status(404).send();
        }
        res.send(reservation);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
}

const createReservation = async (req, res) => {
    console.log(req.body);
    const newReserv = new Reservation({
        id: req.body.id,
        idUser: req.body.idUser,
        idBike: req.body.idBike
    });
    await newReserv.save()
        .then(result => {
            console.log(result);
            res.send(result);
            const msg = `p|${req.body.idBike}|${req.body.latitude}|${req.body.longitude}`;
        })
        .catch(err => {
            console.log(err);
            res.status(500).type('txt').send('Reservation id already exists or bicycle is already reserved');
        });
}

const updateReservation = async (req, res) => {
    const reservationId = req.params.id;
    const updatedAttributes = {
        id: req.body.id,
        idUser: req.body.idUser,
        idBike: req.body.idBike
    };
    try {
        const oldReserv = await Reservation.findOne({ id: reservationId });
        const updatedReserv = await Reservation.findOneAndUpdate({ id: reservationId }, updatedAttributes, {new: false});
        if (!updatedReserv) {
            return res.status(404).send();
        }
        res.send(updatedReserv);
        
        const msg1 = `u|${req.body.idBike}|${req.body.latitude}|${req.body.longitude}`;
        console.log(` [x] Sent update message: ${msg1}`);

        const msg2 = `d|${oldReserv.idBike}`;
        console.log(` [x] Sent update message: ${msg2}`);
    } catch (e) {
        res.status(500).send();
    }
}

const deleteReservation = async (req, res) => {
    const reservationId = req.params.id;
    try {
        const deletedReserv = await Reservation.findOneAndDelete({ id: reservationId });
        const bikeId = deletedReserv.idBike;
        if (!deletedReserv) {
            return res.status(404).send();
        }
        res.send(deletedReserv);
        const msg = `d|${bikeId}`;
        console.log(` [x] Sent delete message: ${msg}`);
    } catch (e) {
        res.status(500).send();
    }
}


export {
    reservation,
    reservationsId,
    createReservation,
    updateReservation, 
    deleteReservation
}