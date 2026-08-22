/*
  Warnings:

  - Added the required column `color` to the `AssetToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `AssetToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `AssetToken` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `AssetToken` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "AssetToken_symbol_key";

-- AlterTable
ALTER TABLE "AssetToken" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;
