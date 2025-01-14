'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/917032229659"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-105"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="h-6 w-6" />
            <span className="font-medium">Chat with us</span>
        </a>
    );
}