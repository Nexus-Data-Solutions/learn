'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, LogOut } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check auth status
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setIsLoggedIn(!!session);
        };

        checkAuth();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setIsLoggedIn(false);
        router.push('/');
    };

    return (
        <header className="bg-white shadow-sm">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            TechPro Academy
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/students" className="text-gray-700 hover:text-blue-600">
                            For Students
                        </Link>
                        <Link href="/colleges" className="text-gray-700 hover:text-blue-600">
                            For Colleges
                        </Link>

                        {/* Auth Buttons */}
                        {isLoggedIn ? (
                            <>
                                <Link
                                    href="/dashboard"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center text-gray-700 hover:text-blue-600"
                                >
                                    <LogOut className="h-5 w-5 mr-2" />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/auth/login"
                                    className="bg-white text-blue-600 px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-50"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/auth/register"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-gray-700 p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open menu</span>
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link
                                href="/students"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                            >
                                For Students
                            </Link>
                            <Link
                                href="/colleges"
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                            >
                                For Colleges
                            </Link>
                            {isLoggedIn ? (
                                <>
                                    <Link
                                        href="/dashboard"
                                        className="block px-3 py-2 text-base font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-md"
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="flex w-full items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                                    >
                                        <LogOut className="h-5 w-5 mr-2" />
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/auth/login"
                                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/auth/register"
                                        className="block px-3 py-2 text-base font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-md"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}