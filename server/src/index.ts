// import { PrismaClient } from "@prisma/client";
// import { z } from "zod";
// import { userSchema } from "./schemas/User/userSchema";



// const prisma = new PrismaClient();
// const validatedUser = userSchema.parse(prisma.user)

// async function createUser() {

//     try{
//         const user = await prisma.user.create({
//             data: {
//                 name: validatedUser.name,
//                 email: validatedUser.email,
//                 password: validatedUser.password,
//             }
//         })
//     }catch(err){
//         console.error("Erro na criação de usúario", err)
//     }
// }

// async function createPokemon() {

//     const allUsers = await prisma.user.findMany({
//        include:{
//             Pokemons: true
//        }

//     })
//     const allPokemons = await prisma.pokemon.findMany()
//     const allObservations = await prisma.observation.findMany()

//     const findUserById = await prisma.user.findUnique({
//         where: {
//             id: 1
//         }
//     })
 

//     console.log(JSON.stringify(allUsers, null, 2))

// }

// main()

// .then(async () => {
//     await prisma.$disconnect()
// })
// .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
// })
       