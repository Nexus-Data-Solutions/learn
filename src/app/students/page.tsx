import Header from '@/components/layout/Header';
import { FileCode, Users, Award, BookOpen, ChevronRight } from 'lucide-react';

const services = [
    {
        title: "Project Development",
        description: "Complete end-to-end project development including frontend, backend, and database",
        icon: FileCode,
        benefits: [
            "Custom project development",
            "Technical documentation",
            "Project presentation",
            "Source code with explanation"
        ]
    },
    {
        title: "Technical Skills",
        description: "Comprehensive technical skill development program",
        icon: Users,
        benefits: [
            "GitHub portfolio building",
            "Coding practice sessions",
            "Latest technology training",
            "Industry expert mentoring"
        ]
    },
    {
        title: "Placement Support",
        description: "Complete placement preparation and support",
        icon: Award,
        benefits: [
            "Interview preparation",
            "Resume building",
            "Mock interviews",
            "Technical assessment"
        ]
    },
    {
        title: "Learning Resources",
        description: "Access to comprehensive learning materials",
        icon: BookOpen,
        benefits: [
            "Video tutorials",
            "Practice problems",
            "Industry projects",
            "Technical documentation"
        ]
    }
];

export default function StudentsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold mb-4">
                            Transform Your Technical Career
                        </h1>
                        <p className="text-xl mb-8">
                            Get complete project assistance and skill development support
                        </p>
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
                            Enroll Now
                            <ChevronRight className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <ul className="space-y-2">
                                {service.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Simple, Transparent Pricing</h2>
                        <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                            <div className="text-center">
                                <span className="text-4xl font-bold text-blue-600">₹10,000</span>
                                <span className="text-gray-600 ml-2">one-time payment</span>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <h4 className="font-semibold mb-2">Everything you need:</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                                            Complete project development
                                        </li>
                                        <li className="flex items-center">
                                            <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                                            24/7 technical support
                                        </li>
                                        <li className="flex items-center">
                                            <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                                            GitHub portfolio building
                                        </li>
                                        <li className="flex items-center">
                                            <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                                            Placement preparation
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="w-full bg-blue-600 text-white rounded-lg py-3 mt-8 hover:bg-blue-700 transition-colors">
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}