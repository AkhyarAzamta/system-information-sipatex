'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation'; // Import untuk mendapatkan path saat ini
import { AppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react';
import theme from '../theme';
import Loading from '@/components/ui/loading';

const BRANDING = {
  title: 'Sistem Informasi PT. Sipatex',
};

function ProtectedContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isProtected = pathname === '/admin'; // Tentukan apakah halaman harus dilindungi
  const { data: session, status } = useSession({
    required: isProtected, // Hanya wajib login jika halaman dilindungi
    onUnauthenticated() {
      if (isProtected) {
        signIn(); // Redirect ke signIn hanya untuk halaman terlindungi
      }
    },
  });

  if (isProtected && status === 'loading') {
    return <Loading />; // Tampilkan loading jika sedang memeriksa sesi di halaman terlindungi
  }

  return <>{children}</>;
}

function AppContent(props: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  const authentication = React.useMemo(() => {
    return {
      signIn: () => signIn(),
      signOut: () => signOut(),
    };
  }, []);

  if (status === 'loading') {
    return <Loading />;
  }

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <AppProvider
        branding={BRANDING}
        session={session}
        authentication={authentication}
        theme={theme}
      >
        <ProtectedContent>{props.children}</ProtectedContent>
      </AppProvider>
    </AppRouterCacheProvider>
  );
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-toolpad-color-scheme="light" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <AppContent>{props.children}</AppContent>
        </SessionProvider>
      </body>
    </html>
  );
}
