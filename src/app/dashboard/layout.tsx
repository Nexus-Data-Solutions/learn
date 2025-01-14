'use client';

import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home, BookOpen, Users, FileCode, Settings, LogOut } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface DashboardLayoutProps {
    children: ReactNode;
}

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Projects', href: '/dashboard/projects', icon: FileCode },
    { name: 'Learning', href: '/dashboard/learning', icon: BookOpen },
    { name: 'Support', href: '/dashboard/support', icon: Users },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                <div className="flex min-h-0 flex-1 flex-col bg-blue-600">
                    <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                        <div className="flex flex-shrink-0 items-center px-4">
                            <Link href="/" className="text-xl font-bold text-white">
                                TechPro Academy
                            </Link>
                        </div>
                        <nav className="mt-5 flex-1 space-y-1 px-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="group flex items-center px-2 py-2 text-sm font-medium text-white hover:bg-blue-700 rounded-md"
                                >
                                    <item.icon className="mr-3 h-6 w-6" />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    {/* Logout Button */}
                    <div className="flex flex-shrink-0 border-t border-blue-700 p-4">
                        <button
                            onClick={handleLogout}
                            className="group flex w-full items-center px-2 py-2 text-sm font-medium text-white hover:bg-blue-700 rounded-md"
                        >
                            <LogOut className="mr-3 h-6 w-6" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile header */}
            <div className="md:hidden bg-blue-600 text-white p-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold">
                        TechPro Academy
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="flex items-center px-3 py-2 bg-blue-700 rounded-md hover:bg-blue-800"
                    >
                        <LogOut className="h-5 w-5 mr-2" />
                        Logout
                    </button>
                </div>
            </div>

            {/* Main content */}
            <div className="md:pl-64 flex flex-col flex-1">
                <main className="flex-1">
                    <div className="py-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;