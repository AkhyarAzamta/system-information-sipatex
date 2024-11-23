import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const pengumuman = await db.pengumuman.findMany();

    if (!pengumuman || pengumuman.length === 0) {
      return NextResponse.json({ message: "No announcements found" }, { status: 404 });
    }

    // Temukan data terbaru berdasarkan tanggal
    const latestData = pengumuman.reduce((latest, current) => {
      return new Date(latest.date) > new Date(current.date) ? latest : current;
    });

    // Hasilkan response dengan data terbaru dan data lengkap
    const response = {
      latest: latestData,
      all: pengumuman,
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const newPengumuman = await db.pengumuman.create({
      data: {
        judul: body.judul,
        konten: body.konten,
        date: new Date(body.date),
      },
    });

    return NextResponse.json(newPengumuman, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const updatedPengumuman = await db.pengumuman.update({
      where: { id: Number(body.id) },
      data: {
        judul: body.judul,
        konten: body.konten,
        date: new Date(body.date),
      },
    });

    return NextResponse.json(updatedPengumuman);
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();

    await db.pengumuman.delete({
      where: { id: Number(body.id) },
    });

    return NextResponse.json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
