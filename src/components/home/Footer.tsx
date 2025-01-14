'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-semibold">Nexus Learn</h3>
                        <p className="text-sm">Your Complete Technical Project & Placement Partner</p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-sm hover:text-white">About Us</Link>
                            </li>
                            <li>
                                <Link href="/students" className="text-sm hover:text-white">For Students</Link>
                            </li>
                            <li>
                                <Link href="/colleges" className="text-sm hover:text-white">For Colleges</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:text-white">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li className="text-sm hover:text-white cursor-pointer">Technical Training</li>
                            <li className="text-sm hover:text-white cursor-pointer">Project Development</li>
                            <li className="text-sm hover:text-white cursor-pointer">Placement Assistance</li>
                            <li className="text-sm hover:text-white cursor-pointer">Career Guidance</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5" />
                                <a href="tel:+917032229659" className="text-sm hover:text-white">+91 7032229659</a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5" />
                                <a href="mailto:ismail@nexusdatasolution.org" className="text-sm hover:text-white">ismail@nexusdatasolution.org</a>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 mt-1" />
                                <p className="text-sm">Sanathnagar, Hyderabad <br />Telangana , 500018, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="text-sm text-center">
                        © {new Date().getFullYear()} Nexus Learn. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}