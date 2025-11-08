import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedNavbar from '../components/landing/AnimatedNavbar';
import Hero from '../components/landing/Hero';
import ProblemSection from '../components/landing/ProblemSection';
import AISolution from '../components/landing/AISolution';
import InteractiveDemo from '../components/landing/InteractiveDemo';
import DashboardPreview from '../components/landing/DashboardPreview';
import AIInsight from '../components/landing/AIInsight';
import CTASection from '../components/landing/CTASection';
import FloatingParticles from '../components/landing/FloatingParticles';
import ScrollProgress from '../components/landing/ScrollProgress';

function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-dark-bg text-white overflow-hidden">
      {/* Animated Cursor Glow */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          filter: 'blur(60px)'
        }}
        animate={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      <FloatingParticles />
      <ScrollProgress />
      <AnimatedNavbar />
      
      <main>
        <Hero />
        <ProblemSection />
        <AISolution />
        <InteractiveDemo />
        <DashboardPreview />
        <AIInsight />
        <CTASection />
      </main>

      {/* Contact Section */}
<section className="relative py-20 px-6 bg-dark-card" id="contact">
  <div className="container mx-auto max-w-4xl">
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-cyan">
        Get in Touch
      </h2>
      <p className="text-gray-400">
        Have questions? We'd love to hear from you!
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Contact Info */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-6 bg-dark-bg rounded-xl border border-accent-cyan/20">
          <h3 className="text-xl font-bold mb-4 text-accent-cyan">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent-primary/20 rounded-lg">
                <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:contact@timetableai.com" className="text-accent-cyan hover:underline">
                  contact@timetableai.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent-primary/20 rounded-lg">
                <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+919876543210" className="text-accent-cyan hover:underline">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent-primary/20 rounded-lg">
                <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">Atria University, Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Links or Social */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-6 bg-dark-bg rounded-xl border border-accent-cyan/20">
          <h3 className="text-xl font-bold mb-4 text-accent-cyan">Follow Us</h3>
          
          <div className="space-y-3">
            {[
              { name: 'GitHub', icon: '💻', url: 'https://github.com/rahul200618/CICADA-Hackathon' },
              { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/rahul-a-a5495b317/' },
              { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/yourhandle' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-dark-card rounded-lg hover:bg-accent-primary/10 transition group"
              >
                <span className="text-2xl">{social.icon}</span>
                <span className="text-white group-hover:text-accent-cyan transition">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-accent-primary/20 to-accent-cyan/20 rounded-xl border border-accent-cyan/30">
          <p className="text-sm text-gray-300">
            🎓 <strong>Hackathon Project</strong><br/>
            Atria University 2025<br/>
            Mastersolis Infotech Challenge
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</section>
</div>
 );
}

export default LandingPage;
