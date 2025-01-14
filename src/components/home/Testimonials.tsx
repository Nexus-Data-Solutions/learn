export default function Testimonials() {
    const testimonials = [
        {
            content: "The project assistance from Nexus Data Solutions was invaluable. They helped me complete my final year project and build a strong portfolio.",
            author: "Rahul Sharma",
            role: "Software Engineer @ Microsoft",
            college: "BITS Pilani, 2023",
            image: "/images/students/jitto.jpeg"
        },
        {
            content: "Their technical mentorship and placement preparation helped me crack my dream job. The personalized attention made all the difference.",
            author: "Priya Patel",
            role: "ML Engineer @ Amazon",
            college: "VIT Vellore, 2023",
            image: "/images/students/murali.jpeg"
        },
        {
            content: "The practical knowledge and industry insights I gained were far beyond regular college curriculum. Highly recommend their programs!",
            author: "Aditya Kumar",
            role: "Full Stack Developer @ Swiggy",
            college: "IIIT Hyderabad, 2023",
            image: "/images/students/swayam.jpeg"
        },
    ];

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Hear from Our Successful Students
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="relative bg-white shadow-lg rounded-2xl p-8">
                                <div className="relative">
                                    <blockquote className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                                        <p>&quot;{testimonial.content}&quot;</p>
                                    </blockquote>
                                    <div className="mt-6 flex items-center gap-x-4">
                                        <img className="h-12 w-12 rounded-full" src={testimonial.image} alt="" />
                                        <div>
                                            <div className="font-semibold">{testimonial.author}</div>
                                            <div className="text-sm text-blue-600">{testimonial.role}</div>
                                            <div className="text-sm text-gray-500">{testimonial.college}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}