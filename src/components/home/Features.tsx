import { BookOpen, Users, Award, FileCode, Clock, Briefcase } from 'lucide-react';

const features = [
    {
        name: 'Complete Project Support',
        description: 'End-to-end assistance with backend, frontend, and documentation',
        icon: FileCode,
    },
    {
        name: '24/7 Technical Support',
        description: 'Round-the-clock assistance for all your technical queries',
        icon: Clock,
    },
    {
        name: 'GitHub Portfolio Building',
        description: 'Build an impressive technical portfolio with real projects',
        icon: BookOpen,
    },
    {
        name: 'Placement Preparation',
        description: 'Comprehensive training for technical interviews',
        icon: Briefcase,
    },
];

export default function Features() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything You Need to Succeed
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Comprehensive technical support and skill development for engineering students
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}