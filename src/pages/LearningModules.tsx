import React from 'react';
import { BookOpen, FileText, Video, Activity } from 'lucide-react';

const modules = [
  {
    title: 'Clinical Assessment Fundamentals',
    description: 'Learn the basics of patient assessment and vital signs monitoring.',
    icon: Activity,
    duration: '4 weeks',
    level: 'Beginner',
  },
  {
    title: 'Patient Care Documentation',
    description: 'Master the art of accurate and effective medical documentation.',
    icon: FileText,
    duration: '3 weeks',
    level: 'Intermediate',
  },
  {
    title: 'Emergency Response Protocols',
    description: 'Handle critical situations with confidence and precision.',
    icon: BookOpen,
    duration: '5 weeks',
    level: 'Advanced',
  },
  {
    title: 'Healthcare Communication',
    description: 'Develop essential communication skills for healthcare settings.',
    icon: Video,
    duration: '3 weeks',
    level: 'Intermediate',
  },
];

export function LearningModules() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Learning Modules
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Explore our comprehensive nursing education modules
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {modules.map((module) => (
            <div
              key={module.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <module.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {module.title}
                    </h3>
                    <div className="mt-1 flex space-x-4">
                      <span className="text-sm text-gray-500">
                        Duration: {module.duration}
                      </span>
                      <span className="text-sm text-gray-500">
                        Level: {module.level}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{module.description}</p>
                <div className="mt-6">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Start Module
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}