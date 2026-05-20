-- CreateEnum
CREATE TYPE "TopicType" AS ENUM ('BULLISH', 'BEARISH', 'NEUTRAL');

-- CreateTable
CREATE TABLE "MarketIntelligence" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "timeToRead" TEXT NOT NULL,
    "typeTopic" "TopicType" NOT NULL,
    "timeCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imageUrl" TEXT,

    CONSTRAINT "MarketIntelligence_pkey" PRIMARY KEY ("id")
);
