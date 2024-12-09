import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { CallToAction } from '../components/CallToAction';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CallToAction />
    </>
  );
}