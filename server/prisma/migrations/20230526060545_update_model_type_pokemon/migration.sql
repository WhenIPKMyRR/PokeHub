/*
  Warnings:

  - Added the required column `color` to the `typesPokemons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pokemons` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `typespokemons` ADD COLUMN `color` VARCHAR(191) NOT NULL;
