import { createUserController, getAllUsersController, getByIdUserController, updateUserController, deleteUserController } from "../../controllers/User/userController";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/user/create", createUserController);
userRouter.get("/user/all", getAllUsersController);
userRouter.get("/user/:id", getByIdUserController);
userRouter.put("/user/update/:id", updateUserController);
userRouter.delete("/user/delete/:id", deleteUserController);


export default userRouter;

