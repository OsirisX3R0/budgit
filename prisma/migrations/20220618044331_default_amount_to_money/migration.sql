/*
  Warnings:

  - The `default_amount` column on the `biller` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "biller" DROP COLUMN "default_amount",
ADD COLUMN     "default_amount" MONEY;
