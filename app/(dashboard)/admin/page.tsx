"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridRowsProp,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import { SelectChangeEvent } from "@mui/material/Select";
import { useStoreModal } from "@/hooks/use-store-modal";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const initialRows: GridRowsProp = [];

// Fungsi untuk mengakses API
const fetchRows = async (): Promise<GridRowsProp> => {
  const response = await fetch("/api/admin");
  const data = await response.json();
  return data.map((row: any) => ({
    ...row,
    date: row.date ? new Date(row.date) : null,
  }));
};

const saveRowToAPI = async (row: GridRowModel) => {
  const updatedRow = {
    ...row,
    date: row.date instanceof Date ? row.date.toISOString() : row.date,
  };
  await fetch(`/api/admin/${row.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedRow),
  });
};

const deleteRowFromAPI = async (id: GridRowId) => {
  await fetch(`/api/admin/${id}`, {
    method: "DELETE",
  });
};

const addRowToAPI = async (row: GridRowModel) => {
  const newRow = {
    ...row,
    date: row.date instanceof Date ? row.date.toISOString() : row.date,
  };
  await fetch("/api/admin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newRow),
  });
};

function EditToolbar({
  setRows,
  setRowModesModel,
}: {
  setRows: React.Dispatch<React.SetStateAction<GridRowsProp>>;
  setRowModesModel: React.Dispatch<React.SetStateAction<GridRowModesModel>>;
}) {
  const { rowsInfo, setRowsInfo, onOpen, onEdit, setInfoId, infoId } = useStoreModal();

  const handleClick = () => {
    const id = Date.now();
    setRows((oldRows) => [
      ...oldRows,
      { id, weeklyId: "", date: "", departement: "", keterangan: "", isNew: true },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "weeklyId" },
    }));
  };

  const handleModal = () => {
    onOpen();
    setInfoId(0);
  };

  const handleUpdate = () => {
    onOpen();
    onEdit();
  };

  const handleDropdownChange = async (event: SelectChangeEvent<string>) => {
    const selectedId = parseInt(event.target.value, 10);
    setInfoId(selectedId);
  };

  return (
    <Box display="flex" alignItems="center" gap={2} padding={1}>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Schedule
      </Button>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleModal}>
        Add Info
      </Button>
      <Button color="primary" startIcon={<EditIcon />} onClick={handleUpdate}>
        Edit Info
      </Button>
      <FormControl sx={{ margin: 1, padding: 0, width: "100%" }}>
        <InputLabel id="select-title-label">Pilih Judul</InputLabel>
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
    </Box>
  );
}

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState<GridRowsProp>(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

  React.useEffect(() => {
    fetchRows().then(setRows);
  }, []);

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => async () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => async () => {
    if (confirm("Are you sure you want to delete this row?")) {
      try {
        await deleteRowFromAPI(id);
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
        alert("Row successfully deleted.");
      } catch (error) {
        alert("Failed to delete the row. Please try again.");
      }
    }
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow?.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow: GridRowModel) => {
    if (!newRow.date || isNaN(new Date(newRow.date).getTime())) {
      throw new Error("Invalid date value");
    }

    const updatedRow = { ...newRow };

    if (newRow.isNew === true) {
      await addRowToAPI(updatedRow);
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === newRow.id ? { ...updatedRow, isNew: false } : row
        )
      );
    } else {
      await saveRowToAPI(updatedRow);
      setRows((prevRows) =>
        prevRows.map((row) => (row.id === newRow.id ? updatedRow : row))
      );
    }

    return updatedRow;
  };

  const columns: GridColDef[] = [
    {
      field: "weeklyId",
      headerName: "Minggu Ke",
      width: 180,
      editable: true,
      type: "singleSelect",
      valueOptions: [1, 2, 3, 4],
    },
    {
      field: "date",
      headerName: "Tanggal",
      type: "date",
      width: 180,
      editable: true,
    },
    {
      field: "departement",
      headerName: "Department",
      width: 220,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Market", "Finance", "Development"],
    },
    {
      field: "keterangan",
      headerName: "Keterangan",
      width: 220,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Libur", "Masuk"],
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key={`save-${id}`}
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key={`cancel-${id}`}
              icon={<CancelIcon />}
              label="Cancel"
              onClick={handleCancelClick(id)}
            />,
          ];
        }

        return [
          <GridActionsCellItem
            key={`edit-${id}`}
            icon={<EditIcon />}
            label="Edit"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key={`delete-${id}`}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ height: "90vh", width: "100%" }}>
      <EditToolbar setRows={setRows} setRowModesModel={setRowModesModel} />
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={setRowModesModel}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
      />
    </Box>
  );
}
