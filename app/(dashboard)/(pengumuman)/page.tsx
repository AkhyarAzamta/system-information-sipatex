'use client';
import Loading from '@/components/ui/loading';
import { useStoreModal } from '@/hooks/use-store-modal';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

export default function PengumumanPage() {
  const { selectedInfo, setSelectedInfo, setRowsInfo, onMounted, isMounted, infoId, setInfoId } = useStoreModal();
  const [loading, setLoading] = useState(false);

  // Fungsi untuk memformat tanggal
  const formatDateWithLocation = (dateString: string | undefined) => {
    if (!dateString) return 'No date available';
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);

    return `Majalaya, ${formattedDate}\nHRD PT. SIPATEX`;
  };

  useEffect(() => {
    onMounted();

    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/info`);
        if (!response.ok) {
          throw new Error(`Failed to fetch info: ${response.statusText}`);
        }

        const data = await response.json();
        setRowsInfo(data.all);

        if (infoId === 0 && data.latest) {
          setInfoId(data.latest.id);
        }
      } catch (error) {
        alert('Failed to fetch info. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [setRowsInfo, infoId, setInfoId, onMounted]);

  useEffect(() => {
    const fetchSelectedInfo = async () => {
      if (infoId === 0) return;

      try {
        setLoading(true);
        const response = await fetch(`/api/info/${infoId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch info by ID: ${response.statusText}`);
        }

        const data = await response.json();
        setSelectedInfo(Array.isArray(data) ? data[0] : data);
      } catch (error) {
        alert('Failed to fetch selected info. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSelectedInfo();
  }, [infoId, setSelectedInfo]);

  if (!isMounted || loading) {
    return <Loading />
  }

  return (
    <div style={{ position: 'relative', padding: '20px' }}>
      <Typography variant="h3" align="center" style={{ color: '#007BFF', fontWeight: 'bold' }}>
        Pengumuman
      </Typography>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        {selectedInfo ? (
          <>
            <Typography variant="h5">{selectedInfo.judul || 'No announcement available'}</Typography>
            <Typography>{selectedInfo.konten || 'No content available'}</Typography>
          </>
        ) : (
          <Typography>No content available</Typography>
        )}
      </div>
      <Typography
        variant="body2"
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          margin: '10px',
          textAlign: 'right',
          whiteSpace: 'pre-line',
          fontSize: '0.9rem',
        }}
      >
        {selectedInfo ? formatDateWithLocation(selectedInfo.date) : 'No date available'}
      </Typography>
    </div>
  );
}
