import { createUserController, getAllUsersController, getByIdUserController, updateUserController, deleteUserController } from "../../controllers/User/userController";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/users", createUserController);
userRouter.get("/users", getAllUsersController);
userRouter.get("/users/:id", getByIdUserController);
userRouter.put("/users/:id", updateUserController);
userRouter.delete("/users/:id", deleteUserController);


export default userRouter;

