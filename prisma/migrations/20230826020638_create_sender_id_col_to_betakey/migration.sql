/*
  Warnings:

  - You are about to drop the column `userId` on the `beta_keys` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_beta_keys" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hash" TEXT NOT NULL,
    "valid_until" DATETIME,
    "senderId" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "beta_keys_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_beta_keys" ("created_at", "hash", "id", "valid_until") SELECT "created_at", "hash", "id", "valid_until" FROM "beta_keys";
DROP TABLE "beta_keys";
ALTER TABLE "new_beta_keys" RENAME TO "beta_keys";
CREATE UNIQUE INDEX "beta_keys_hash_key" ON "beta_keys"("hash");
CREATE UNIQUE INDEX "beta_keys_senderId_key" ON "beta_keys"("senderId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
