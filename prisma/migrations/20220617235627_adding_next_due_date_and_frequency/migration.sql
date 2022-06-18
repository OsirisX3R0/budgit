/*
  Warnings:

  - You are about to drop the column `day_of_month` on the `biller` table. All the data in the column will be lost.
  - You are about to drop the column `next_occur` on the `pay_schedule` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `pay_schedule` table. All the data in the column will be lost.
  - Added the required column `frequency` to the `biller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frequency` to the `pay_schedule` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "frequency" AS ENUM ('onetime', 'weekly', 'biweekly', 'semimonthly', 'monthly');

-- AlterTable
ALTER TABLE "biller" DROP COLUMN "day_of_month",
ADD COLUMN     "frequency" "frequency" NOT NULL,
ADD COLUMN     "next_due_date" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "pay_schedule" DROP COLUMN "next_occur",
DROP COLUMN "type",
ADD COLUMN     "frequency" "frequency" NOT NULL,
ADD COLUMN     "next_due_date" TIMESTAMP(3);

-- DropEnum
DROP TYPE "schedule_type";
