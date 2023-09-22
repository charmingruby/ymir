/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `users_profiles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users_profiles_username_key" ON "users_profiles"("username");
