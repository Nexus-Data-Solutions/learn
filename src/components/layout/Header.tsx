'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, LogOut, ChevronDown, MessageCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
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
        <header className="bg-white">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Left side spacing holder */}
                    <div className="flex-shrink-0 w-40">
                        <Link href="/" className="text-xl font-semibold text-gray-900">
                            Nexus Learn
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
                        <div className="flex items-center space-x-8">
                            <Link
                                href="/students"
                                className="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 rounded-md inline-flex items-center"
                            >
                                For Students
                                <ChevronDown className="ml-1 h-4 w-4 opacity-60" />
                            </Link>

                            <Link
                                href="/colleges"
                                className="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 rounded-md inline-flex items-center"
                            >
                                For Colleges
                                <ChevronDown className="ml-1 h-4 w-4 opacity-60" />
                            </Link>

                            <div className="relative">
                                <button
                                    onClick={() => setIsContactOpen(!isContactOpen)}
                                    className="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 rounded-md inline-flex items-center"
                                >
                                    Contact
                                    <ChevronDown className="ml-1 h-4 w-4 opacity-60" />
                                </button>

                                {/* Contact Dropdown */}
                                {isContactOpen && (
                                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                            <Link
                                                href="/contact"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Contact Form
                                            </Link>
                                            <a
                                                href="https://wa.me/917032229659"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                <span className="flex items-center">
                                                    <MessageCircle className="w-4 h-4 mr-2 text-green-500" />
                                                    WhatsApp Chat
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-4">
                            {isLoggedIn ? (
                                <>
                                    <Link
                                        href="/dashboard"
                                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100"
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="inline-flex items-center px-3 py-2 text-sm text-gray-700 hover:text-blue-600"
                                    >
                                        <LogOut className="h-4 w-4 mr-2" />
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/auth/login"
                                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/auth/register"
                                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-gray-600 hover:text-gray-900"
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
                    <div className="md:hidden py-2 border-t border-gray-100">
                        <div className="space-y-1">
                            <Link
                                href="/students"
                                className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                For Students
                            </Link>
                            <Link
                                href="/colleges"
                                className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                For Colleges
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact Form
                            </Link>
                            <a
                                href="https://wa.me/917032229659"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <MessageCircle className="w-5 h-5 mr-2 text-green-500" />
                                WhatsApp Chat
                            </a>
                            {isLoggedIn ? (
                                <>
                                    <Link
                                        href="/dashboard"
                                        className="block px-3 py-2 text-base text-white bg-blue-600 hover:bg-blue-700"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="flex w-full items-center px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                    >
                                        <LogOut className="h-5 w-5 mr-2" />
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/auth/login"
                                        className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/auth/register"
                                        className="block px-3 py-2 text-base text-white bg-blue-600 hover:bg-blue-700"
                                        onClick={() => setIsMobileMenuOpen(false)}
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