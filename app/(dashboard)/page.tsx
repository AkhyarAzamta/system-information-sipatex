"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  GridColDef,
  DataGrid,
  GridColumnGroupingModel,
  GridCellParams,
  gridClasses
} from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import Pengumuman from "./(pengumuman)/page";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import clsx from 'clsx';
import { useStoreModal } from "@/hooks/use-store-modal";
import Loading from "@/components/ui/loading";

type Schedule = {
  id: number;
  departement: string;
  keterangan?: string;
  formattedDate?: string;
  day?: string;
  idSchedule?: number;
  date: string; // Tanggal asli dari API
};

interface RowData {
  id: number;
  senin?: string;
  selasa?: string;
  rabu?: string;
  kamis?: string;
  jumat?: string;
  sabtu?: string;
  minggu?: string;
  [key: string]: string | number | undefined;
}

export default function HomePage() {
  const { rowsInfo, isMounted, onMounted, setInfoId, infoId } = useStoreModal();
  const [rows, setRows] = useState<RowData[]>([]);
  const [columnGroupingModel, setColumnGroupingModel] = useState<GridColumnGroupingModel>([]);
  const [weeklyId, setWeeklyId] = useState<number>(1); // Nilai default minggu ke-1
  const [dataApi, setDataApi] = useState<Schedule[]>([]);

  
  // Fungsi untuk format tanggal ke lokal
  const formatToLocalDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" }).format(date);
  };

  // Fungsi untuk menangani perubahan minggu
  const handleWeeklyChange = (event: SelectChangeEvent<number>) => {
    setWeeklyId(Number(event.target.value));
  };

  useEffect(() => {
    onMounted();
    const fetchSchedule = async () => {
      try {
        const response = await fetch(`/api/schedule/${weeklyId}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch schedule: ${response.statusText}`);
        }

        const data = await response.json();

        if (typeof data !== "object" || Array.isArray(data)) {
          throw new Error("Invalid data format");
        }

        const groupedData: RowData[] = [];
        const grouping: GridColumnGroupingModel = [];

        Object.entries(data).forEach(([dayKey, schedules]) => {
          if (Array.isArray(schedules)) {
            schedules.forEach((schedule: Schedule) => {
              // Format tanggal ke lokal
              schedule.formattedDate = formatToLocalDate(schedule.date);

              const existingRowIndex = groupedData.findIndex(
                (row) => row.id === schedule.id
              );
              if (existingRowIndex > -1) {
                groupedData[existingRowIndex][dayKey] = schedule.departement;
                groupedData[existingRowIndex].status = schedule.keterangan ?? "";
              } else {
                const newRow: RowData = {
                  id: schedule.id,
                  senin: dayKey === "senin" ? schedule.departement : "",
                  selasa: dayKey === "selasa" ? schedule.departement : "",
                  rabu: dayKey === "rabu" ? schedule.departement : "",
                  kamis: dayKey === "kamis" ? schedule.departement : "",
                  jumat: dayKey === "jumat" ? schedule.departement : "",
                  sabtu: dayKey === "sabtu" ? schedule.departement : "",
                  minggu: dayKey === "minggu" ? schedule.departement : "",
                  status: schedule.keterangan ?? "",
                };
                groupedData.push(newRow);
              }

              if (!grouping.some((group) => group.groupId === schedule.formattedDate)) {
                grouping.push({
                  groupId: schedule.formattedDate ?? "",
                  description: "",
                  children: [{ field: dayKey }],
                });
              }
              setDataApi((prevData) => [...prevData, schedule]);
            });
          }
        });

        setRows(groupedData);
        setColumnGroupingModel(grouping);
      } catch (error) {
        alert("Failed to fetch schedules. Please try again later.");
      }
    };

    fetchSchedule();
  }, [weeklyId, onMounted]);

  const handleDropdownChange = async (event: SelectChangeEvent<string>) => {
    const selectedId = parseInt(event.target.value, 10);
    setInfoId(selectedId); // Set selected info ID for editing
  };

  if (!isMounted) {
    return <Loading />;
  }

  const columns: GridColDef[] = [
    { field: "senin", headerName: "Senin", width: 150 },
    { field: "selasa", headerName: "Selasa", width: 150 },
    { field: "rabu", headerName: "Rabu", width: 150 },
    { field: "kamis", headerName: "Kamis", width: 150 },
    { field: "jumat", headerName: "Jum'at", width: 150 },
    { field: "sabtu", headerName: "Sabtu", width: 150 },
    { field: "minggu", headerName: "Minggu", width: 150 },
  ];

  return (
    <Typography>
      <Pengumuman />
      <div style={{ display: "flex", justifyContent: "center", overflowX: "auto", height: "100vh", padding: 2, width: "100%" }}>
        <Paper elevation={20} sx={{ height: "80%", width: "92%" }}>
          <FormControl sx={{ margin: 1, padding: 0, width: "18ch" }}>
            <InputLabel id="weekly-select-label">Pilih Minggu</InputLabel>
            <Select
              labelId="weekly-select-label"
              id="weekly-select"
              value={weeklyId}
              label="Pilih Minggu"
              onChange={handleWeeklyChange}
            >
              <MenuItem value={1}>Minggu ke 1</MenuItem>
              <MenuItem value={2}>Minggu ke 2</MenuItem>
              <MenuItem value={3}>Minggu ke 3</MenuItem>
              <MenuItem value={4}>Minggu ke 4</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ margin: 1, padding: 0, right: 0, width: "50%" }}>
        <InputLabel id="select-title-label">Info Pengumuman</InputLabel>
        <Select
          labelId="select-title-label"
          id="select-title"
          value={infoId ? String(infoId) : ""}
          onChange={handleDropdownChange}
          label="Pilih Judul"
        >
          {rowsInfo.map((row) => (
            <MenuItem key={row.id} value={String(row.id)}>
              {row.judul}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          <Box
            sx={{
              height: 500,
              width: '100%',
              [`.${gridClasses.cell}.Libur`]: {
                backgroundColor: '#d47483',
                color: '#1a3e72',
                fontWeight: '500',
              },
              [`.${gridClasses.cell}.Masuk`]: {
                backgroundColor: 'rgba(157, 255, 118, 0.49)',
                color: '#1a3e72',
                fontWeight: '500',
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
              pageSizeOptions={[5, 10]}
              columnGroupingModel={columnGroupingModel}
              sx={{ border: 0 }}
              getCellClassName={(params: GridCellParams<any, any, string>) => {
                if (!params.value) {
                  return "";
                }
                const dayData = dataApi.find(item => item.departement === params.value && item.day === params.field);
                if (!dayData) {
                  return ''; // Jika tidak ada data yang cocok untuk hari tersebut, kembalikan string kosong
                }
                // Periksa apakah departemen sesuai dengan nilai dalam sel
                return dayData.keterangan === 'Masuk' ? 'Masuk' : 'Libur';
              }}
            />
          </Box>
        </Paper>
      </div>
    </Typography>
  );
}
