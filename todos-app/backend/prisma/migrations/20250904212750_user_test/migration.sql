-- AlterTable
ALTER TABLE "User" ADD COLUMN     "provider" TEXT NOT NULL DEFAULT 'Belance',
ALTER COLUMN "password" DROP NOT NULL;
