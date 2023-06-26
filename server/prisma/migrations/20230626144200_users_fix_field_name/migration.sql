/*
  Warnings:

  - You are about to drop the column `experience` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "experience",
ADD COLUMN     "experiences" TEXT[],
ALTER COLUMN "looking_for_work" DROP NOT NULL,
ALTER COLUMN "profile_image" DROP NOT NULL;
