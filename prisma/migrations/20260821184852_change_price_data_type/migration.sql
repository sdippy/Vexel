/*
  Warnings:

  - Changed the type of `priceData` on the `WatchlistItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "WatchlistItem" DROP COLUMN "priceData",
ADD COLUMN     "priceData" DECIMAL(65,30) NOT NULL;
