import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const pengumuman = await db.pengumuman.findMany({
      where: {
        id: Number(id),
      },
    });

    if (!pengumuman) {
      return NextResponse.json({ message: 'No announcements found' }, { status: 404 });
    }

    return NextResponse.json(pengumuman);
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const body = await req.json();
    const { date, judul, konten } = body;

    const schedule = await db.pengumuman.update({
      where: {
        id: Number(id),
      },
      data: {
        date: new Date(date),
      },
    });

    return NextResponse.json(schedule);
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    await db.pengumuman.delete({
      where: {
        id: Number(id),
      },
    }); 

    return NextResponse.json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}