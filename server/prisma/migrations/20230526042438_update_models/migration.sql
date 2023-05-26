/*
  Warnings:

  - You are about to drop the `_pokemontotype` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `favorites_pokemons` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `observations_pokemons` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `types_pokemons` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_pokemontotype` DROP FOREIGN KEY `_PokemonToType_A_fkey`;

-- DropForeignKey
ALTER TABLE `_pokemontotype` DROP FOREIGN KEY `_PokemonToType_B_fkey`;

-- DropForeignKey
ALTER TABLE `favorites_pokemons` DROP FOREIGN KEY `favorites_pokemons_pokemonId_fkey`;

-- DropForeignKey
ALTER TABLE `favorites_pokemons` DROP FOREIGN KEY `favorites_pokemons_userId_fkey`;

-- DropForeignKey
ALTER TABLE `observations_pokemons` DROP FOREIGN KEY `observations_pokemons_pokemonId_fkey`;

-- DropForeignKey
ALTER TABLE `observations_pokemons` DROP FOREIGN KEY `observations_pokemons_userId_fkey`;

-- DropForeignKey
ALTER TABLE `pokemons` DROP FOREIGN KEY `pokemons_userId_fkey`;

-- AlterTable
ALTER TABLE `pokemons` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- DropTable
DROP TABLE `_pokemontotype`;

-- DropTable
DROP TABLE `favorites_pokemons`;

-- DropTable
DROP TABLE `observations_pokemons`;

-- DropTable
DROP TABLE `types_pokemons`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `typesPokemons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `favoritesPokemons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `pokemonId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `observationsPokemons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `pokemonId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PokemonToTypePokemon` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PokemonToTypePokemon_AB_unique`(`A`, `B`),
    INDEX `_PokemonToTypePokemon_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pokemons` ADD CONSTRAINT `pokemons_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favoritesPokemons` ADD CONSTRAINT `favoritesPokemons_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favoritesPokemons` ADD CONSTRAINT `favoritesPokemons_pokemonId_fkey` FOREIGN KEY (`pokemonId`) REFERENCES `pokemons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `observationsPokemons` ADD CONSTRAINT `observationsPokemons_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `observationsPokemons` ADD CONSTRAINT `observationsPokemons_pokemonId_fkey` FOREIGN KEY (`pokemonId`) REFERENCES `pokemons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PokemonToTypePokemon` ADD CONSTRAINT `_PokemonToTypePokemon_A_fkey` FOREIGN KEY (`A`) REFERENCES `pokemons`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PokemonToTypePokemon` ADD CONSTRAINT `_PokemonToTypePokemon_B_fkey` FOREIGN KEY (`B`) REFERENCES `typesPokemons`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
