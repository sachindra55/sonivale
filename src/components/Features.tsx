import React from 'react';
import { BookOpen, Users, Award, Clock } from 'lucide-react';

const features = [
  {
    name: 'Interactive Learning',
    description: 'Engage with realistic patient scenarios and clinical cases.',
    icon: BookOpen,
  },
  {
    name: 'Community Support',
    description: 'Connect with peers and experienced mentors.',
    icon: Users,
  },
  {
    name: 'Professional Development',
    description: 'Track your progress and earn achievements.',
    icon: Award,
  },
  {
    name: 'Flexible Learning',
    description: 'Learn at your own pace with 24/7 access.',
    icon: Clock,
  },
];

export function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Enhanced Learning Experience
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
