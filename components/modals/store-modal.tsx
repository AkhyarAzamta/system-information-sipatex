"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useStoreModal } from "@/hooks/use-store-modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { isOpen, isEdit, onClose, infoId, setInfoId, setSelectedInfo, rowsInfo, setRowsInfo } = useStoreModal();
  const [judul, setJudul] = React.useState<string>("");
  const [konten, setKonten] = React.useState<string>("");
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const [currentId, setCurrentId] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (isEdit && infoId !== 0) {
      const selectedData = rowsInfo.find((row) => row.id === infoId);
      if (selectedData) {
        setCurrentId(selectedData.id);
        setJudul(selectedData.judul || ""); // Fallback ke string kosong jika undefined
        setKonten(selectedData.konten || ""); // Fallback ke string kosong jika undefined
        setDate(selectedData.date ? dayjs(selectedData.date) : dayjs()); // Fallback ke tanggal saat ini jika undefined
      }
    } else if (!isEdit) {
      setCurrentId(null);
      setJudul("");
      setKonten("");
      setDate(dayjs());
    }
  }, [isEdit, infoId, rowsInfo]);
  
  const handleSubmit = async () => {
    const formattedDate = date?.format("YYYY-MM-DDTHH:mm:ssZ");
    const payload = {
      id: currentId,
      judul,
      konten,
      date: formattedDate,
    };

    try {
      const response = await fetch(`/api/info`, {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${isEdit ? "update" : "create"} data`);
      }

      const result = await response.json();
      console.log("API Response:", result);
      // alert(`Data berhasil ${isEdit ? "diperbarui" : "ditambahkan"}!`);
    setSelectedInfo(result);
      onClose();
    } catch (error: any) {
      alert(`Gagal ${isEdit ? "memperbarui" : "menambahkan"} data: ${error.message}`);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <TextField
            fullWidth
            label="Judul"
            id="judul"
            margin="normal"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
          <TextField
            id="outlined-multiline-static"
            label="Konten"
            multiline
            fullWidth
            rows={4}
            value={konten}
            onChange={(e) => setKonten(e.target.value)}
            margin="normal"
          />
          <DatePicker
            label="Pilih Tanggal"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            disablePast
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleSubmit}
          >
            {isEdit ? "Update" : "Submit"}
          </Button>
        </Box>
      </Modal>
    </LocalizationProvider>
  );
}
