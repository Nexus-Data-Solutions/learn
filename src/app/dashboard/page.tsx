import { FileCode, BookOpen, Users, Award, ChevronRight } from 'lucide-react';

const stats = [
    { name: 'Active Projects', stat: '2', icon: FileCode },
    { name: 'Completed Courses', stat: '4', icon: BookOpen },
    { name: 'Support Tickets', stat: '1', icon: Users },
    { name: 'Certifications', stat: '3', icon: Award },
];

const recentProjects = [
    {
        name: 'E-Commerce Platform',
        status: 'In Progress',
        dueDate: '2024-02-01',
        completion: 75,
    },
    {
        name: 'ML Classification Model',
        status: 'Review',
        dueDate: '2024-02-15',
        completion: 90,
    },
];

const upcomingTasks = [
    {
        name: 'Project Documentation',
        due: 'Tomorrow',
        priority: 'High',
    },
    {
        name: 'Code Review Session',
        due: 'Next Week',
        priority: 'Medium',
    },
    {
        name: 'Technical Interview',
        due: 'Next Month',
        priority: 'Low',
    },
];

export default function DashboardPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Stats */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                    <div
                        key={item.name}
                        className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
                    >
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <item.icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-500">{item.name}</p>
                                <p className="text-xl font-semibold text-gray-900">{item.stat}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Projects and Tasks Grid */}
            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
                {/* Recent Projects */}
                <div className="rounded-lg bg-white shadow">
                    <div className="p-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Projects</h3>
                        <div className="mt-6 flow-root">
                            <ul className="divide-y divide-gray-200">
                                {recentProjects.map((project) => (
                                    <li key={project.name} className="py-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900">{project.name}</p>
                                                <p className="text-sm text-gray-500">Due: {project.dueDate}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                                    {project.status}
                                                </span>
                                                <ChevronRight className="ml-4 h-5 w-5 text-gray-400" />
                                            </div>
                                        </div>
                                        {/* Progress bar */}
                                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded-full"
                                                style={{ width: `${project.completion}%` }}
                                            ></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Upcoming Tasks */}
                <div className="rounded-lg bg-white shadow">
                    <div className="p-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Upcoming Tasks</h3>
                        <div className="mt-6 flow-root">
                            <ul className="divide-y divide-gray-200">
                                {upcomingTasks.map((task) => (
                                    <li key={task.name} className="py-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900">{task.name}</p>
                                                <p className="text-sm text-gray-500">Due: {task.due}</p>
                                            </div>
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                          ${task.priority === 'High'
                                                        ? 'bg-red-100 text-red-800'
                                                        : task.priority === 'Medium'
                                                            ? 'bg-yellow-100 text-yellow-800'
                                                            : 'bg-green-100 text-green-800'
                                                    }`}
                                            >
                                                {task.priority}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}