-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users_profiles" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "stack" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "users_profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_users_profiles" ("bio", "created_at", "id", "role", "stack", "updated_at", "user_id", "username") SELECT "bio", "created_at", "id", "role", "stack", "updated_at", "user_id", "username" FROM "users_profiles";
DROP TABLE "users_profiles";
ALTER TABLE "new_users_profiles" RENAME TO "users_profiles";
CREATE UNIQUE INDEX "users_profiles_username_key" ON "users_profiles"("username");
CREATE UNIQUE INDEX "users_profiles_user_id_key" ON "users_profiles"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
