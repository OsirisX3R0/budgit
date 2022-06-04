-- CreateEnum
CREATE TYPE "schedule_type" AS ENUM ('onetime', 'weekly', 'biweekly', 'semimonthly', 'monthly');

-- CreateEnum
CREATE TYPE "biller_category" AS ENUM ('electricity', 'water', 'gas', 'phone', 'internet', 'auto');

-- CreateTable
CREATE TABLE "pay_schedule" (
    "id" SERIAL NOT NULL,
    "type" "schedule_type" NOT NULL,
    "amount" MONEY NOT NULL,
    "day_of_week" INTEGER,
    "day_of_month" INTEGER,
    "next_occur" INTEGER,
    "first_date" INTEGER,
    "second_date" INTEGER,

    CONSTRAINT "pay_schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "biller" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "category" "biller_category",
    "day_of_month" TEXT NOT NULL,
    "default_amount" INTEGER,

    CONSTRAINT "biller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payday" (
    "id" SERIAL NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "payday_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" SERIAL NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "amount" MONEY NOT NULL,
    "biller_id" INTEGER NOT NULL,
    "payday_id" INTEGER NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_biller_id_fkey" FOREIGN KEY ("biller_id") REFERENCES "biller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_payday_id_fkey" FOREIGN KEY ("payday_id") REFERENCES "payday"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
