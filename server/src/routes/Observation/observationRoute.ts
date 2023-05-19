import { createObservationController, getAllObservationController, getByIdObservationController, updateObservationController, deleteObservationController } from "../../controllers/Observation/observationController";
import { Router } from "express";

const observationRouter = Router();

observationRouter.post("/observation/create", createObservationController);
observationRouter.get("/observation/all", getAllObservationController);
observationRouter.get("/observation/:id", getByIdObservationController);
observationRouter.put("/observation/update/:id", updateObservationController);
observationRouter.delete("/observation/delete/:id", deleteObservationController);

export default observationRouter;