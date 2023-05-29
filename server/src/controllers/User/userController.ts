import { createUser, getAllUsers, getByIdUser, getUserToLogin, updateUser, deleteUser  } from "../../services/userServices";
import { Request, Response } from "express";

export const createUserController = async (req: Request, res: Response) => {
    try {
        const userData = req.body;

        const createdUser = await createUser(userData)

        if (!userData.name || !userData.email || !userData.password) {
            return res.status(400).json({
                message: "Todos os campos devem ser preenchidos!"
            });
        }

        if(createdUser){
            res.status(201).json({
                message: "Usuario criado com sucesso!",
                data: createdUser
            })
        }else{
            res.status(400).json({
                message: "Erro ao criar usuário!",
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers()

        if(users){
            res.status(200).json({
                // message: "Usuários encontrados com sucesso!",
                data: users
            })
        }else{
            res.status(404).json({
                message: "Nenhum usuário encontrado!",
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const getByIdUserController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const userId = parseInt(id); 

        if (isNaN(userId)) {
            res.status(400).json({
                message: "ID inválido! O ID deve ser um número.",
            });
            return;
        }

        const user = await getByIdUser(userId)

        if(user){
            res.status(200).json({
                message: "Usuário encontrado com sucesso!",
                data: user
            });
        }else{
            res.status(404).json({
                message: "Usuário não encontrado!",
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        });
    }
}

export const getUserToLoginController = async (req: Request, res: Response) => {

    try {
        const userData = req.body;
        const { email, password } = userData;
        
        if (!email || !password) {
            return res.status(400).json({
                message: "Todos os campos devem ser preenchidos!"
            });
        }

        const user = await getUserToLogin(userData)
        if(user){
            res.status(200).json({
                message: "Usuário encontrado com sucesso!",
                data: user
            });
        }else{
            res.status(404).json({
                message: "Usuário não encontrado!",
            });
        }
        
    } catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        });
    }
}

export const updateUserController = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const userData = req.body;
  
      const userId = parseInt(id);
  
      if (isNaN(userId)) {
        res.status(400).json({
          message: "ID inválido! O ID deve ser um número.",
        });
        return;
      }
  
      const updatedUser = await updateUser(userId, userData);
  
      if (updatedUser) {
        res.status(200).json({
          message: "Usuário atualizado com sucesso!",
          data: updatedUser,
        });
      } else {
        res.status(404).json({
          message: "Usuário não encontrado!",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Erro interno do servidor!",
        error,
      });
    }
  }

export const deleteUserController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const userId = parseInt(id); 

        if (isNaN(userId)) {
            res.status(400).json({
                message: "ID inválido! O ID deve ser um número.",
            });
            return;
        }

        const deletedUser = await deleteUser(userId)

        if(deletedUser){
            res.status(200).json({
                message: "Usuário deletado com sucesso!",
                data: deletedUser
            });
        }else{
            res.status(404).json({
                message: "Usuário não encontrado!",
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        });
    }
}