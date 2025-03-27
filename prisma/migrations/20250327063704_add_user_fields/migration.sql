/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "department" TEXT NOT NULL DEFAULT 'Abteilung',
ADD COLUMN     "firstName" TEXT NOT NULL DEFAULT 'Vorname',
ADD COLUMN     "lastName" TEXT NOT NULL DEFAULT 'Nachname';
