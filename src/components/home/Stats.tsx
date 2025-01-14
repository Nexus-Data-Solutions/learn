import { Award, Building, Users, Clock } from 'lucide-react';

// Stats Component with animations and icons
export default function Stats() {
    const stats = [
        {
            name: 'Engineering Colleges in Network',
            value: '10+',
            icon: Building,
            description: 'Leading institutions across regions'
        },
        {
            name: 'Industry Partnerships',
            value: '5+',
            icon: Award,
            description: 'Top tech companies'
        },
        {
            name: 'Technical Mentors',
            value: '15+',
            icon: Users,
            description: 'Industry experts'
        },
        {
            name: 'Years of Experience',
            value: '3+',
            icon: Clock,
            description: 'Of excellence in education'
        },
    ];

    const certifications = [
        {
            name: 'ISO 9001:2015',
            description: 'Quality Management System Certified',
            logo: '/images/logos/iso-logo.png'
        },
        {
            name: 'MSME Registered',
            description: 'Government of India Recognition',
            logo: '/images/logos/msme-logo.png'
        },
        {
            name: 'Startup Telangana',
            description: 'Recognized Startup by Govt of Telangana',
            logo: '/images/logos/Emblem_of_Telangana.svg.png'
        },
        {
            name: 'TASK Partner',
            description: 'Telangana Academy for Skill and Knowledge',
            logo: '/images/logos/task-logo.png'
        }
    ];

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Trusted Technical Education Partner
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Serving engineering students across Telangana and Andhra Pradesh
                        </p>
                    </div>

                    {/* Enhanced Stats Grid with Icons and Hover Effects */}
                    <dl className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.name}
                                className="flex flex-col bg-white p-8 rounded-xl shadow-sm border border-gray-100 
                                         hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                            >
                                <dt className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                                    <stat.icon className="h-5 w-5 text-blue-500" />
                                    {stat.name}
                                </dt>
                                <dd className="order-first text-3xl font-bold text-blue-600">
                                    {stat.value}
                                </dd>
                                <p className="mt-2 text-sm text-gray-500">{stat.description}</p>
                            </div>
                        ))}
                    </dl>

                    {/* Enhanced Certifications Section */}
                    <div className="mt-20">
                        <h3 className="text-center text-2xl font-bold mb-12">Our Certifications & Partnerships</h3>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {certifications.map((cert) => (
                                <div
                                    key={cert.name}
                                    className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100
                                             hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                                >
                                    <div className="h-24 w-24 flex items-center justify-center mb-4 bg-gray-50 rounded-lg p-4">
                                        <img
                                            className="h-full w-auto object-contain"
                                            src={cert.logo}
                                            alt={cert.name}
                                        />
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 text-center">{cert.name}</h4>
                                    <p className="mt-2 text-sm text-gray-600 text-center">{cert.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced College Network Section */}
                    <div className="mt-20">
                        <h3 className="text-center text-2xl font-bold mb-8">Our College Network</h3>
                        <p className="text-center text-gray-600 mb-12">
                            We work with engineering colleges across:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    region: 'Hyderabad Region',
                                    description: 'Supporting colleges in HITEC City and surrounding areas',
                                    icon: Building
                                },
                                {
                                    region: 'Warangal Zone',
                                    description: 'Partnering with engineering institutions in Warangal',
                                    icon: Building
                                },
                                {
                                    region: 'Andhra Region',
                                    description: 'Expanding network to engineering colleges in Andhra Pradesh',
                                    icon: Building
                                }
                            ].map((region) => (
                                <div
                                    key={region.region}
                                    className="p-6 bg-white rounded-xl shadow-sm border border-gray-100
                                             hover:shadow-lg hover:border-blue-500 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <region.icon className="h-6 w-6 text-blue-500" />
                                        <h4 className="font-semibold text-lg">{region.region}</h4>
                                    </div>
                                    <p className="text-gray-600">{region.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}