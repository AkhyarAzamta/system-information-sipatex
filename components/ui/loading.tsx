import { Skeleton } from '@mui/material';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div style={{ padding: '5px', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <Skeleton variant="rounded" width={310} height={60} />
        <Skeleton variant="text" sx={{ fontSize: '0.9rem', marginTop: '10px', width: '20%' }} />
        <Skeleton variant="rectangular" width="100%" height={150} sx={{ marginTop: '20px' }} />
      </div>
  );
}