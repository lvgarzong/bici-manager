import express from "express";
import { reservation,  reservationsId, createReservation, updateReservation, deleteReservation } from "../controllers/reservationController.js";

const reservationRouter = express.Router();

reservationRouter.get('/reservations', reservation);

reservationRouter.get('/reservations/:id', reservationsId);

reservationRouter.post('/reservations', createReservation);

reservationRouter.put('/reservations/:id', updateReservation);

reservationRouter.delete('/reservations/:id', deleteReservation);

export default reservationRouter;