import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const schedules = await db.schedule.findMany();

    const schedulesWithDay = schedules.map((schedule) => {
      const date = new Date(schedule.date);
      const formattedDate = date.toLocaleDateString("id-ID");
      const dayName = date.toLocaleDateString("id-ID", { weekday: "long" }).toLowerCase();

      return {
        ...schedule,
        id: Number(schedule.id), // Mengonversi BigInt ke string
        formattedDate,
        day: dayName,
      };
    });
    return NextResponse.json(schedulesWithDay);
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Buat data schedule baru sesuai dengan model yang ada
    const schedule = await db.schedule.create({
      data: {
        date: new Date(body.date), // Konversi string ke objek Date
        departement: body.departement,
        keterangan: body.keterangan,
        weeklyId: body.weeklyId,
      },
    });

    // Pastikan BigInt diubah menjadi string sebelum dikirimkan dalam respons
    const result = {
      ...schedule,
      id: schedule.id.toString(), // Konversi id yang bertipe BigInt ke String
    };

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
