/*
  Warnings:

  - You are about to drop the column `created_at` on the `pokemons` table. All the data in the column will be lost.
  - You are about to drop the column `is_caught` on the `pokemons` table. All the data in the column will be lost.
  - You are about to drop the column `is_favorite` on the `pokemons` table. All the data in the column will be lost.
  - You are about to drop the column `is_seen` on the `pokemons` table. All the data in the column will be lost.
  - You are about to drop the column `masterId` on the `pokemons` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `pokemons` table. All the data in the column will be lost.
  - You are about to drop the `observations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `baseExperience` to the `pokemons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `pokemons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `pokemons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `pokemons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `pokemons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `pokemons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `pokemons` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `observations` DROP FOREIGN KEY `observations_masterId_fkey`;

-- DropForeignKey
ALTER TABLE `observations` DROP FOREIGN KEY `observations_pokemonId_fkey`;

-- DropForeignKey
ALTER TABLE `pokemons` DROP FOREIGN KEY `pokemons_masterId_fkey`;

-- AlterTable
ALTER TABLE `pokemons` DROP COLUMN `created_at`,
    DROP COLUMN `is_caught`,
    DROP COLUMN `is_favorite`,
    DROP COLUMN `is_seen`,
    DROP COLUMN `masterId`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `baseExperience` INTEGER NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `height` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `userId` INTEGER NOT NULL,
    ADD COLUMN `weight` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `observations`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `types_pokemons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `favorites_pokemons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `pokemonId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `observations_pokemons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `pokemonId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PokemonToType` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PokemonToType_AB_unique`(`A`, `B`),
    INDEX `_PokemonToType_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pokemons` ADD CONSTRAINT `pokemons_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favorites_pokemons` ADD CONSTRAINT `favorites_pokemons_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favorites_pokemons` ADD CONSTRAINT `favorites_pokemons_pokemonId_fkey` FOREIGN KEY (`pokemonId`) REFERENCES `pokemons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `observations_pokemons` ADD CONSTRAINT `observations_pokemons_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `observations_pokemons` ADD CONSTRAINT `observations_pokemons_pokemonId_fkey` FOREIGN KEY (`pokemonId`) REFERENCES `pokemons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PokemonToType` ADD CONSTRAINT `_PokemonToType_A_fkey` FOREIGN KEY (`A`) REFERENCES `pokemons`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PokemonToType` ADD CONSTRAINT `_PokemonToType_B_fkey` FOREIGN KEY (`B`) REFERENCES `types_pokemons`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
