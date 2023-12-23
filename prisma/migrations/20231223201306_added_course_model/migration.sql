/*
  Warnings:

  - You are about to drop the column `courses` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `courses`;

-- CreateTable
CREATE TABLE `Courses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tittle` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `StudentID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Courses` ADD CONSTRAINT `Courses_StudentID_fkey` FOREIGN KEY (`StudentID`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
