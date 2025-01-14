import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/15" />

            <div className="relative mx-auto max-w-7xl">
                <div className="relative z-10 lg:w-full lg:max-w-2xl">
                    <div className="relative py-24 px-8 sm:py-32 lg:px-16 lg:py-56">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                            <div className="hidden sm:mb-10 sm:flex">
                                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white/20">
                                    A Division of Nexus Data Solutions{' '}
                                    <a href="#" className="font-semibold text-white">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        Learn More <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                Transform Your Technical Career
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-blue-100">
                                Complete project assistance, technical skill development, and placement preparation
                                for engineering students. Join 1000+ successful graduates.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <Link
                                    href="/auth/register"
                                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Get Started
                                </Link>
                                <Link href="/students" className="text-sm font-semibold leading-6 text-white">
                                    Learn more <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50/10 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                    src="/images/students/working.jpg"
                    alt="Students working on projects"
                />
            </div>
        </div>
    );
}