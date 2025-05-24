"use client"

import { useState } from 'react';
import Head from 'next/head';
import { AnimatedBackground } from '@/components/common/AnimatedBackground';
import { Header } from '@/components/layout/Header';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { Footer } from '@/components/layout/Footer';
import { Features } from '@/components/section/Features';
import { FeatureShowcase } from '@/components/section/FeatureShowCase';
import { Courses } from '@/components/section/Courses';
import { CTA } from '@/components/section/Cta';
import { NavItem } from '@/types';
import { Hero } from '@/components/section/Hero';
import { ContactSection } from '@/components/section/Contact';
import { TeamSection } from '@/components/section/TeamSection';
import { ExploreCourses } from '@/components/section/Explore';
import { CourseBrowser } from '@/components/section/Categories';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Courses', href: '#courses' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
   
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans overflow-x-hidden">
      <Head>
        <title>NexusLearn | Future of Education</title>
        <meta name="description" content="Learn in-demand skills from industry experts" />
      </Head>

      <AnimatedBackground />

      <main>
        <Hero />
        <Features />
        <FeatureShowcase />
        <CourseBrowser />
        <Courses  />
        <ExploreCourses />
        <TeamSection  />
        <CTA />
        <ContactSection />

      </main>
    </div>
  );
}