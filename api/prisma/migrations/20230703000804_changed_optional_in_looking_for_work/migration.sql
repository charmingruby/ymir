/*
  Warnings:

  - Made the column `looking_for_work` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "looking_for_work" SET NOT NULL;
