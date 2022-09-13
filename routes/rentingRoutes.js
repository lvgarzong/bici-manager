import express from "express";
import { bikes, bikesId, createNewBike, updateBike, deleteBike} from "../controllers/rentingController.js";

const rentingRouter = express.Router();


rentingRouter.get('/bikes', bikes );

rentingRouter.get('/bikes/:id', bikesId );

rentingRouter.post('/bikes', createNewBike);

rentingRouter.put('/bikes/:id', updateBike);

rentingRouter.delete('/bikes/:id', deleteBike);

rentingRouter.get('*', (req, res) => {
    res.status(404);
    res.type('txt').send('Page not found');
});

export default rentingRouter;