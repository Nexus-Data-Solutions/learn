"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Enhanced Testimonials Component with Carousel
export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

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
            author: "Sai Murali",
            role: "ML Engineer @ Amazon",
            college: "VIT Vellore, 2024",
            image: "/images/students/murali.jpeg"
        },
        {
            content: "The practical knowledge and industry insights I gained were far beyond regular college curriculum. Highly recommend their programs!",
            author: "Aditya Kumar",
            role: "Full Stack Developer @ Swiggy",
            college: "IIIT Hyderabad, 2024",
            image: "/images/students/swayam.jpeg"
        },
    ];

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Hear from Our Successful Students
                    </p>
                </div>

                <div className="relative mt-16 px-4 sm:px-6 lg:px-8">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg
                                 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-600" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg
                                 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-600" />
                    </button>

                    {/* Testimonials Carousel */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <div className="bg-white shadow-lg rounded-2xl p-8">
                                        <blockquote className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                                            <p>&quot;{testimonial.content}&quot;</p>
                                        </blockquote>
                                        <div className="mt-6 flex items-center gap-x-4">
                                            <img
                                                className="h-12 w-12 rounded-full object-cover"
                                                src={testimonial.image}
                                                alt={testimonial.author}
                                            />
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

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 
                                          ${index === currentIndex ? 'w-4 bg-blue-600' : 'w-2 bg-gray-300'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}