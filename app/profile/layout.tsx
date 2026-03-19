import { Sidebar } from '@/components/Sidebar';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-8 max-w-7xl mx-auto w-full mt-8 px-8">
      <Sidebar />
      <div className="flex-1 bg-white dark:bg-[#f4f4f5] rounded-2xl p-8 min-h-[600px] shadow-2xl relative overflow-hidden transition-colors duration-300">
        {/* Subtle gradient overlay for the card */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/40 dark:from-white/40 to-transparent pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
