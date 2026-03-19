import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white dark:bg-[#111111] text-gray-900 dark:text-white rounded-b-2xl mx-8 mt-4 shadow-lg transition-colors duration-300">
      <div className="flex items-center gap-3">
        <div className="flex items-end gap-0.5 text-indigo-500">
          <div className="w-1 h-3 bg-indigo-600 rounded-t-sm" />
          <div className="w-1 h-5 bg-indigo-500 rounded-t-sm" />
          <div className="w-1 h-7 bg-indigo-400 rounded-t-sm" />
          <div className="w-1 h-4 bg-indigo-300 rounded-t-sm" />
          <div className="w-1 h-6 bg-blue-500 rounded-t-sm" />
        </div>
        <span className="text-2xl font-semibold tracking-widest">NAICA</span>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-300">
          <Link href="/" className="hover:text-indigo-600 dark:hover:text-white transition-colors">INICIO</Link>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <Link href="/profile" className="hover:text-indigo-600 dark:hover:text-white transition-colors">ADMINISTRAR PERFIL</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="flex items-center gap-2 bg-gray-100 dark:bg-white text-gray-900 dark:text-black px-3 py-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-100 transition-colors">
            <img 
              src="https://picsum.photos/seed/zoia/32/32" 
              alt="Zoia M." 
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-sm font-medium">Zoia M.</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </nav>
  );
}
