export default function Stats() {
    const stats = [
        { name: 'Engineering Colleges in Network', value: '10+' },
        { name: 'Industry Partnerships', value: '5+' },
        { name: 'Technical Mentors', value: '15+' },
        { name: 'Years of Experience', value: '3+' },
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

                    {/* Stats Grid */}
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col bg-gray-50 p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-blue-600">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>

                    {/* Certifications */}
                    <div className="mt-20">
                        <h3 className="text-center text-2xl font-semibold mb-12">Our Certifications & Partnerships</h3>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {certifications.map((cert) => (
                                <div key={cert.name} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                                    <img
                                        className="h-24 w-auto mb-4 object-contain" // Increased height
                                        src={cert.logo}
                                        alt={cert.name}
                                    />
                                    <h4 className="text-lg font-semibold text-gray-900">{cert.name}</h4>
                                    <p className="mt-2 text-sm text-gray-600 text-center">{cert.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* College Network */}
                    <div className="mt-20">
                        <h3 className="text-center text-2xl font-semibold mb-8">Our College Network</h3>
                        <p className="text-center text-gray-600 mb-12">
                            We work with engineering colleges across:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold text-lg mb-2">Hyderabad Region</h4>
                                <p className="text-gray-600">Supporting colleges in HITEC City and surrounding areas</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold text-lg mb-2">Warangal Zone</h4>
                                <p className="text-gray-600">Partnering with engineering institutions in Warangal</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg">
                                <h4 className="font-semibold text-lg mb-2">Andhra Region</h4>
                                <p className="text-gray-600">Expanding network to engineering colleges in Andhra Pradesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

