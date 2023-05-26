// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();


// export async function updateFavoritePokemon(id: number) {
//     try {
//         const updatedFavoritePokemon = await prisma.favoritePokemon.update({
//             where: {
//                 id: id
//             },
//             data: {
                
//         });
    
//         return updatedFavoritePokemon;
//     }catch (error) {
//         console.error("Erro ao atualizar o pokemon da lista de favoritos", error);
//         throw error;
//     }
// }