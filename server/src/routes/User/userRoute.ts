import { createUserController, getAllUsersController, getByIdUserController, getUserToLoginController,  updateUserController, deleteUserController } from "../../controllers/User/userController";
import { Router } from "express";
import {  } from "../../services/userServices";

const userRouter = Router();

userRouter.post("/users", createUserController);
userRouter.post("/login", getUserToLoginController);
userRouter.get("/users", getAllUsersController);
userRouter.get("/users/:id", getByIdUserController);
userRouter.put("/users/:id", updateUserController);
userRouter.delete("/users/:id", deleteUserController);


export default userRouter;

