'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, DollarSign, FileText } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'MI PERFIL', href: '/profile', icon: Home },
  { name: 'DATOS DE CONTACTO', href: '/profile/contact', icon: User },
  { name: 'MIS BANCOS', href: '/profile/banks', icon: DollarSign },
  { name: 'COMPROBANTES', href: '/profile/documents', icon: FileText },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 flex-shrink-0 flex flex-col gap-2 relative">
      <div className="absolute right-0 top-0 bottom-0 w-px bg-indigo-200 dark:bg-purple-600/30" />
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href === '/profile' && pathname === '/profile');
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-4 px-6 py-4 rounded-l-lg text-sm font-medium transition-colors relative z-10",
              isActive 
                ? "bg-indigo-600 dark:bg-[#8b5cf6] text-white" 
                : "text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-[#2a2a2a] hover:text-gray-900 dark:hover:text-white"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
