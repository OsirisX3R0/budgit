/*
  Warnings:

  - The `day_of_month` column on the `pay_schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "day_of_month" AS ENUM ('firstbusiness', 'lastbusiness', 'firstfriday', 'lastfriday', 'secondwed', 'thirdwed', 'fourthwed', 'specific');

-- AlterTable
ALTER TABLE "pay_schedule" ADD COLUMN     "day" INTEGER,
DROP COLUMN "day_of_month",
ADD COLUMN     "day_of_month" "day_of_month";
