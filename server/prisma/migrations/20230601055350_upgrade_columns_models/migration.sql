/*
  Warnings:

  - You are about to drop the column `type` on the `pokemons` table. All the data in the column will be lost.
  - You are about to alter the column `height` on the `pokemons` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `weight` on the `pokemons` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the column `color` on the `typespokemons` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `favoritespokemons` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `color` to the `pokemons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `favoritespokemons` DROP FOREIGN KEY `favoritesPokemons_pokemonId_fkey`;

-- DropForeignKey
ALTER TABLE `favoritespokemons` DROP FOREIGN KEY `favoritesPokemons_userId_fkey`;

-- AlterTable
ALTER TABLE `pokemons` DROP COLUMN `type`,
    ADD COLUMN `color` VARCHAR(191) NOT NULL,
    ADD COLUMN `isFavorite` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `height` INTEGER NOT NULL,
    ALTER COLUMN `updatedAt` DROP DEFAULT,
    MODIFY `weight` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `typespokemons` DROP COLUMN `color`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `name`,
    ADD COLUMN `avatar` VARCHAR(191) NULL,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `isAdmin` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    MODIFY `token` VARCHAR(191) NOT NULL DEFAULT '';

-- DropTable
DROP TABLE `favoritespokemons`;
