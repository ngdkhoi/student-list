/*
  Warnings:

  - Added the required column `role` to the `teachers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `teachers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "teachers" ADD COLUMN     "role" INTEGER NOT NULL,
ADD COLUMN     "schoolId" INTEGER NOT NULL;
