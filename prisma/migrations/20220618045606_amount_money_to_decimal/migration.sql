/*
  Warnings:

  - You are about to alter the column `default_amount` on the `biller` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(65,30)`.
  - You are about to alter the column `amount` on the `pay_schedule` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(65,30)`.
  - You are about to alter the column `amount` on the `payment` table. The data in that column could be lost. The data in that column will be cast from `Money` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "biller" ALTER COLUMN "default_amount" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "pay_schedule" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "payday" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "payment" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(65,30);
