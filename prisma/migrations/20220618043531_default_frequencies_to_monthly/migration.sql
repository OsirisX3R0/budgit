-- AlterTable
ALTER TABLE "biller" ALTER COLUMN "frequency" SET DEFAULT E'monthly';

-- AlterTable
ALTER TABLE "pay_schedule" ALTER COLUMN "frequency" SET DEFAULT E'monthly';
