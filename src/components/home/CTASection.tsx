import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <div className="bg-blue-600">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    <span className="block">Ready to get started?</span>
                    <span className="block text-blue-100 text-lg mt-2">
                        Join hundreds of students already benefiting from our program.
                    </span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-4">
                    <Link
                        href="/auth/register"
                        className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-blue-50"
                    >
                        Register Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link
                        href="/auth/login"
                        className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-3 text-base font-medium text-white hover:bg-white/10"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}