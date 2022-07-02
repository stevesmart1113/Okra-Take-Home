/*
  Warnings:

  - You are about to drop the column `userId` on the `CustomerGeoLocation` table. All the data in the column will be lost.
  - Added the required column `customerId` to the `CustomerGeoLocation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CustomerGeoLocation" DROP CONSTRAINT "CustomerGeoLocation_userId_fkey";

-- AlterTable
ALTER TABLE "CustomerGeoLocation" DROP COLUMN "userId",
ADD COLUMN     "customerId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "CustomerGeoLocation" ADD CONSTRAINT "CustomerGeoLocation_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
