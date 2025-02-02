import React from 'react';

export function Hero() {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Nursing students collaborating"
        />
        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Welcome to Sonivale. A Learning Platform
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          A virtual community supporting authentic, meaningful, and contextualized learning
          for Bachelor of Nursing students. Join us in this innovative learning journey.
        </p>
      </div>
    </div>
  );
}
