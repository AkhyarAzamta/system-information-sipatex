import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

type Schedule = {
  id: number;
  date: string | Date;
  departement: string;
  keterangan: string;
  weeklyId: number;
  formattedDate?: string;
  day?: string;
};

type GroupedSchedules = Record<string, Schedule[]>;

export async function GET(req: NextRequest, { params }: { params: { weeklyId: string } }) {
  const weeklyId = parseInt(params.weeklyId, 10);

  if (isNaN(weeklyId)) {
    return NextResponse.json({ message: "Invalid ID parameter" }, { status: 400 });
  }

  try {
    const schedules = await db.schedule.findMany({
      where: { weeklyId },
    });

    const schedulesWithDay = schedules.map((schedule) => {
      const date = new Date(schedule.date);
      const formattedDate = date.toLocaleDateString("id-ID");
      const dayName = date.toLocaleDateString("id-ID", { weekday: "long" }).toLowerCase();
      return {
        ...schedule,
        id: Number(schedule.id), // Konversi bigint ke number
        formattedDate,
        day: dayName,
        idSchedule: Number(schedule.id),
      };
    });
    

    const groupedByDay = schedulesWithDay.reduce<GroupedSchedules>((acc, curr) => {
      if (!curr.day) return acc;
      if (!acc[curr.day]) {
        acc[curr.day] = [];
      }
      acc[curr.day].push(curr);
      return acc;
    }, {});

    const groupedWithResetIds = Object.entries(groupedByDay).reduce<GroupedSchedules>(
      (acc, [day, items]) => {
        acc[day] = items.map((item, index) => ({
          ...item,
          id: index + 1, // Set ID mulai dari 1
        }));
        return acc;
      },
      {}
    );
    console.log(groupedWithResetIds);
    return NextResponse.json(groupedWithResetIds);
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
