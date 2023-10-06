/*
  Warnings:

  - You are about to drop the `users_profiles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "users_profiles";
PRAGMA foreign_keys=on;
