import { create } from "zustand";
interface InfoData {
  id: number;
  judul?: string;
  konten?: string;
  date?: string;
}
interface Session {
  user?: {
      id?: string | null;
      name?: string | null;
      image?: string | null;
      username?: string | null;
  };
}

interface useStoreModalStore {
  isOpen: boolean;
  isEdit: boolean;
  isMounted: boolean;
  rowsInfo: InfoData[]; // Menyimpan array data
  selectedInfo: InfoData | null; // Menyimpan data terpilih
  infoId: number;
  session: Session | null;
  onOpen: () => void;
  onClose: () => void;
  onEdit: () => void;
  onMounted: () => void;
  setSession: (data: Session | null) => void;
  setRowsInfo: (data: InfoData[]) => void; // Mengupdate rowsInfo
  setSelectedInfo: (data: InfoData | null) => void; // Mengupdate selectedInfo
  setInfoId: (data: number) => void;
  setEdit: () => void;
}

export const useStoreModal = create<useStoreModalStore>((set) => ({
  isOpen: false,
  isEdit: false,
  isMounted: false,
  rowsInfo: [], // Inisialisasi rowsInfo dengan array kosong
  selectedInfo: null, // Inisialisasi dengan null
  infoId: 0,
  session: null,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, isEdit: false }),
  onEdit: () => set({ isEdit: true }),
  onMounted: () => set({ isMounted: true }),
  setRowsInfo: (data) => set({ rowsInfo: data }), // Mengupdate rowsInfo
  setSelectedInfo: (data) => set({ selectedInfo: data }), // Mengupdate selectedInfo
  setInfoId: (data) => set({ infoId: data }),
  setEdit: () => set({ isEdit: false }),
  setSession: (data) => set({ session: data }),
}));
