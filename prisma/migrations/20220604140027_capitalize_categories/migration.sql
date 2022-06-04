/*
  Warnings:

  - The values [electricity,water,gas,phone,internet,auto] on the enum `biller_category` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "biller_category_new" AS ENUM ('Electricity', 'Water', 'Gas', 'Phone', 'Internet', 'Auto');
ALTER TABLE "biller" ALTER COLUMN "category" TYPE "biller_category_new" USING ("category"::text::"biller_category_new");
ALTER TYPE "biller_category" RENAME TO "biller_category_old";
ALTER TYPE "biller_category_new" RENAME TO "biller_category";
DROP TYPE "biller_category_old";
COMMIT;
