/*
  Warnings:

  - You are about to drop the column `description` on the `users_profile` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users_profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "bio" TEXT,
    "roles" TEXT NOT NULL,
    "techonologies" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "users_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_users_profile" ("created_at", "id", "roles", "techonologies", "updated_at", "user_id", "username") SELECT "created_at", "id", "roles", "techonologies", "updated_at", "user_id", "username" FROM "users_profile";
DROP TABLE "users_profile";
ALTER TABLE "new_users_profile" RENAME TO "users_profile";
CREATE UNIQUE INDEX "users_profile_user_id_key" ON "users_profile"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
