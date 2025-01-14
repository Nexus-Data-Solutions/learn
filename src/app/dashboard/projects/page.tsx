import { Plus, FileCode, ChevronRight } from 'lucide-react';

const projects = [
    {
        name: 'E-Commerce Platform',
        description: 'Full-stack e-commerce platform with React and Node.js',
        status: 'In Progress',
        technologies: ['React', 'Node.js', 'MongoDB'],
        completion: 75,
        dueDate: '2024-02-01',
    },
    {
        name: 'ML Classification Model',
        description: 'Machine learning model for image classification',
        status: 'Review',
        technologies: ['Python', 'TensorFlow', 'OpenCV'],
        completion: 90,
        dueDate: '2024-02-15',
    },
    {
        name: 'IoT Dashboard',
        description: 'Real-time IoT device monitoring dashboard',
        status: 'Planning',
        technologies: ['Vue.js', 'Flask', 'PostgreSQL'],
        completion: 20,
        dueDate: '2024-03-01',
    },
];

export default function ProjectsPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
                <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    <Plus className="h-5 w-5 mr-2" />
                    New Project
                </button>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 gap-6">
                {projects.map((project) => (
                    <div key={project.name} className="bg-white rounded-lg shadow">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <FileCode className="h-8 w-8 text-blue-600 mr-3" />
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900">{project.name}</h2>
                                        <p className="text-sm text-gray-500">{project.description}</p>
                                    </div>
                                </div>
                                <ChevronRight className="h-5 w-5 text-gray-400" />
                            </div>

                            <div className="mt-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center space-x-2">
                                        <span
                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                        ${project.status === 'In Progress'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : project.status === 'Review'
                                                        ? 'bg-blue-100 text-blue-800'
                                                        : 'bg-gray-100 text-gray-800'
                                                }`}
                                        >
                                            {project.status}
                                        </span>
                                        <span className="text-sm text-gray-500">Due: {project.dueDate}</span>
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">
                                        {project.completion}% Complete
                                    </span>
                                </div>

                                {/* Progress bar */}
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-blue-600 h-2.5 rounded-full"
                                        style={{ width: `${project.completion}%` }}
                                    ></div>
                                </div>

                                {/* Technologies */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}