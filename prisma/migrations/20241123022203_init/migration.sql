-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" BIGSERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "departement" TEXT NOT NULL,
    "keterangan" TEXT NOT NULL,
    "weeklyId" INTEGER NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pengumuman" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "judul" TEXT NOT NULL,
    "konten" TEXT NOT NULL,
    "createAt" TEXT NOT NULL DEFAULT 'admin',

    CONSTRAINT "Pengumuman_pkey" PRIMARY KEY ("id")
);
