import Header from '@/components/layout/Header';
import { Building, Award, FileText, Users, ChevronRight } from 'lucide-react';

const benefits = [
    {
        title: "Commission Per Student",
        description: "Earn 10% commission for every student enrolled through your institution",
        icon: Award,
        details: [
            "₹1,000 per student",
            "Monthly payments",
            "Transparent tracking",
            "No hidden charges"
        ]
    },
    {
        title: "NAAC Documentation",
        description: "Complete documentation support for NAAC accreditation",
        icon: FileText,
        details: [
            "Industry collaboration proof",
            "Student project reports",
            "Technical training certifications",
            "Partnership certificates"
        ]
    },
    {
        title: "Official Partnership",
        description: "Become our Official Technical Innovation Partner",
        icon: Building,
        details: [
            "Official partnership status",
            "Co-branding opportunities",
            "Joint events and workshops",
            "Technical seminars"
        ]
    },
    {
        title: "Student Benefits",
        description: "Comprehensive support for your students",
        icon: Users,
        details: [
            "Complete project assistance",
            "Technical skill development",
            "Placement preparation",
            "Industry exposure"
        ]
    }
];

export default function CollegesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold mb-4">
                            Partner With Us
                        </h1>
                        <p className="text-xl mb-8">
                            Become our Official Technical Innovation Partner with zero investment
                        </p>
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
                            Partner Now
                            <ChevronRight className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Benefits Grid */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <benefit.icon className="w-8 h-8 text-blue-600 mr-3" />
                                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">{benefit.description}</p>
                            <ul className="space-y-2">
                                {benefit.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Partnership Process */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">How to Partner With Us</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl font-bold">1</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                                <p className="text-gray-600">Reach out to our partnership team</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl font-bold">2</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Sign Agreement</h3>
                                <p className="text-gray-600">Complete partnership formalities</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl font-bold">3</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Start Benefiting</h3>
                                <p className="text-gray-600">Begin earning commissions immediately</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}