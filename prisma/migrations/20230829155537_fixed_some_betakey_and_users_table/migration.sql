/*
  Warnings:

  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.
  - Added the required column `username` to the `users_profile` table without a default value. This is not possible if the table is not empty.
  - Made the column `senderId` on table `beta_keys` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users_profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
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
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "githubUser" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_users" ("country", "created_at", "email", "githubUser", "id", "last_name", "name", "password", "updated_at") SELECT "country", "created_at", "email", "githubUser", "id", "last_name", "name", "password", "updated_at" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE TABLE "new_beta_keys" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hash" TEXT NOT NULL,
    "acceptedAt" DATETIME,
    "senderId" TEXT NOT NULL,
    "valid_until" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "beta_keys_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_beta_keys" ("acceptedAt", "created_at", "hash", "id", "senderId", "valid_until") SELECT "acceptedAt", "created_at", "hash", "id", "senderId", "valid_until" FROM "beta_keys";
DROP TABLE "beta_keys";
ALTER TABLE "new_beta_keys" RENAME TO "beta_keys";
CREATE UNIQUE INDEX "beta_keys_hash_key" ON "beta_keys"("hash");
CREATE UNIQUE INDEX "beta_keys_senderId_key" ON "beta_keys"("senderId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
