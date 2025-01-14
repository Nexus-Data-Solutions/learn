import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                        <span className="block">Transform Your</span>
                        <span className="block">Technical Career</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-lg text-xl text-blue-100 sm:max-w-3xl">
                        Complete project assistance, technical skill development, and placement preparation
                        for engineering students.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/auth/register"
                            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 sm:w-auto"
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            href="/auth/login"
                            className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-3 text-base font-medium text-white hover:bg-white/10 sm:w-auto"
                        >
                            Sign In
                        </Link>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 flex justify-center space-x-6 text-white">
                        <div className="text-center">
                            <div className="text-3xl font-bold">100+</div>
                            <div className="text-sm">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">50+</div>
                            <div className="text-sm">College Partners</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">1000+</div>
                            <div className="text-sm">Students Trained</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Optional: Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-blue-800/20 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
                }}>
            </div>
        </div>
    );
}