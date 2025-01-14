import { BookOpen, Play, CheckCircle, Clock } from 'lucide-react';

const courses = [
    {
        name: 'Full Stack Development',
        description: 'Learn modern web development with React and Node.js',
        progress: 60,
        modules: [
            { name: 'HTML & CSS Basics', status: 'completed' },
            { name: 'JavaScript Fundamentals', status: 'completed' },
            { name: 'React Essentials', status: 'in-progress' },
            { name: 'Node.js Backend', status: 'upcoming' },
        ],
    },
    {
        name: 'Machine Learning Basics',
        description: 'Introduction to machine learning algorithms and Python',
        progress: 30,
        modules: [
            { name: 'Python Programming', status: 'completed' },
            { name: 'Data Analysis with Pandas', status: 'in-progress' },
            { name: 'Sklearn Fundamentals', status: 'upcoming' },
            { name: 'Neural Networks Intro', status: 'upcoming' },
        ],
    },
];

const upcomingLessons = [
    {
        name: 'React Hooks Deep Dive',
        date: 'Tomorrow, 2:00 PM',
        duration: '1 hour',
    },
    {
        name: 'Database Design Patterns',
        date: 'Thursday, 3:30 PM',
        duration: '1.5 hours',
    },
];

export default function LearningPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900">Learning Dashboard</h1>
                <p className="mt-2 text-gray-600">Track your progress and upcoming lessons</p>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 gap-6 mb-8">
                {courses.map((course) => (
                    <div key={course.name} className="bg-white rounded-lg shadow">
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900">{course.name}</h2>
                                    <p className="text-sm text-gray-500">{course.description}</p>
                                </div>
                            </div>

                            {/* Progress bar */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-900">Course Progress</span>
                                    <span className="text-sm font-medium text-gray-900">{course.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-blue-600 h-2.5 rounded-full"
                                        style={{ width: `${course.progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Modules */}
                            <div className="space-y-3">
                                {course.modules.map((module) => (
                                    <div key={module.name} className="flex items-center">
                                        {module.status === 'completed' ? (
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                        ) : module.status === 'in-progress' ? (
                                            <Play className="h-5 w-5 text-blue-500 mr-2" />
                                        ) : (
                                            <Clock className="h-5 w-5 text-gray-400 mr-2" />
                                        )}
                                        <span className={`text-sm ${module.status === 'completed'
                                                ? 'text-green-800'
                                                : module.status === 'in-progress'
                                                    ? 'text-blue-800'
                                                    : 'text-gray-600'
                                            }`}>
                                            {module.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Upcoming Lessons */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Lessons</h2>
                <div className="space-y-4">
                    {upcomingLessons.map((lesson) => (
                        <div key={lesson.name} className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-gray-900">{lesson.name}</h3>
                                <p className="text-sm text-gray-500">{lesson.date}</p>
                            </div>
                            <span className="text-sm text-gray-600">{lesson.duration}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}