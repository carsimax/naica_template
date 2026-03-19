import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'NAICA Dashboard',
  description: 'Naica Technologies Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-gray-100 dark:bg-[#1a1a1a] min-h-screen flex flex-col text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Naica Technologies S.A. de C.V. <span className="mx-2">|</span> Términos y condiciones
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
