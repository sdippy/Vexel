/*
  Warnings:

  - Made the column `description` on table `MarketNews` required. This step will fail if there are existing NULL values in that column.
  - Made the column `topic` on table `MarketNews` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "MarketNews" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "topic" SET NOT NULL;
