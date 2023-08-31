/*
  Warnings:

  - You are about to drop the `beta_keys` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "beta_keys";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "access_keys" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hash" TEXT NOT NULL,
    "acceptedAt" DATETIME,
    "senderId" TEXT NOT NULL,
    "valid_until" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "access_keys_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "access_keys_hash_key" ON "access_keys"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "access_keys_senderId_key" ON "access_keys"("senderId");
