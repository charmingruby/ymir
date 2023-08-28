/*
  Warnings:

  - You are about to drop the column `username` on the `users_profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN "username" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users_profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT,
    "roles" TEXT NOT NULL,
    "techonologies" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "users_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_users_profile" ("created_at", "description", "id", "roles", "techonologies", "updated_at", "user_id") SELECT "created_at", "description", "id", "roles", "techonologies", "updated_at", "user_id" FROM "users_profile";
DROP TABLE "users_profile";
ALTER TABLE "new_users_profile" RENAME TO "users_profile";
CREATE UNIQUE INDEX "users_profile_user_id_key" ON "users_profile"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
