/*
  Warnings:

  - Added the required column `level` to the `educationLevels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearSchedule` to the `educationLevels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `schools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "educationLevels" ADD COLUMN     "level" INTEGER NOT NULL,
ADD COLUMN     "yearSchedule" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "schools" ADD COLUMN     "name" TEXT NOT NULL;
