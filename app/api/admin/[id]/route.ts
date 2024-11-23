import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// Handler GET untuk ID tertentu
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
  }

  try {
    const schedule = await db.schedule.findUnique({
      where: { id: Number(id) },
    });

    if (!schedule) {
      return NextResponse.json({ message: 'Schedule not found' }, { status: 404 });
    }

    return NextResponse.json(schedule);
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// Handler PUT untuk ID tertentu
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, date, departement, keterangan, weeklyId } = body;

    // Konversi ID menjadi string untuk menghindari masalah serialisasi
    const idString = id.toString(); // Jika id adalah BigInt

    // Lakukan pembaruan jadwal
    const updatedSchedule = await db.schedule.update({
      where: { id: idString },
      data: { date, departement, keterangan, weeklyId },
    });

    // Pastikan ID dalam hasil juga dikonversi ke string
    const result = {
      ...updatedSchedule,
      id: updatedSchedule.id.toString(), // Mengonversi id yang bertipe BigInt ke String
    };

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}


// Handler DELETE untuk ID tertentu
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ message: 'Invalid ID' }, { status: 400 });
  }

  try {
    await db.schedule.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: 'Schedule deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
