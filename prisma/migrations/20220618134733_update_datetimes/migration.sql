/*
  Warnings:

  - The `first_date` column on the `pay_schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `second_date` column on the `pay_schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "biller" ALTER COLUMN "next_due_date" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "pay_schedule" DROP COLUMN "first_date",
ADD COLUMN     "first_date" DATE,
DROP COLUMN "second_date",
ADD COLUMN     "second_date" DATE,
ALTER COLUMN "next_due_date" SET DATA TYPE DATE;
