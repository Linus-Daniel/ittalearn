"use client";
import { AnimatedBackground } from '@/components/common/AnimatedBackground';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Globe, GraduationCap, Laptop } from 'lucide-react';
import { FaHandshake } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Supervisor",
      image: "https://ui-avatars.com/api/?name=John+Doe&background=6b46c1&color=fff",
      bio: "Education visionary with 15+ years transforming learning experiences through innovative pedagogy."
    },
    {
      name: "Jane Smith",
      position: "Project Manager",
      image: "https://ui-avatars.com/api/?name=Jane+Smith&background=319795&color=fff",
      bio: "Learning architect who designs curriculum pathways for optimal student success."
    },
    {
      name: "Mark Johnson",
      position: "Lead Developer",
      image: "https://ui-avatars.com/api/?name=Mark+Johnson&background=805ad5&color=fff",
      bio: "Tech innovator building the next generation of interactive learning platforms."
    },
    {
      name: "Emily Davis",
      position: "UI/UX Designer",
      image: "https://ui-avatars.com/api/?name=Emily+Davis&background=2c7a7b&color=fff",
      bio: "Learning experience designer crafting intuitive educational interfaces."
    },
    {
      name: "Michael Brown",
      position: "Marketing Specialist",
      image: "https://ui-avatars.com/api/?name=Michael+Brown&background=dd6b20&color=fff",
      bio: "Storyteller connecting learners worldwide with transformative educational opportunities."
    }
  ];
  

  const features = [
    {
      title: "World-Class Instruction",
      description: "Our faculty comprises industry leaders and academic experts who bring real-world experience into every lesson. With an average of 12 years teaching experience, they're committed to mentoring the next generation of professionals.",
      icon:GraduationCap
    },
    {
      title: "Industry-Recognized Certifications",
      description: "Our programs carry accreditation from leading professional bodies, ensuring your credentials are valued by employers worldwide. Graduates join an elite network of alumni at top global companies.",
      icon: Globe
    },
    {
      title: "Flexible Digital Learning",
      description: "Access cutting-edge courses anytime, anywhere through our immersive online platform. Interactive modules, live virtual classrooms, and on-demand resources adapt to your schedule and learning style.",
      icon: Laptop
    },
    {
      title: "Comprehensive Support",
      description: "From enrollment to career placement, our dedicated success team provides personalized guidance. Benefit from 1:1 coaching, career services, and lifelong learning resources.",
      icon: FaHandshake 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-300"
          >
            Redefining Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            We're building the future of learning through innovative technology, expert instruction, and proven career pathways that transform students' lives.
          </motion.p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-300"
            >
              Why Learn With Us?
            </motion.h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our proven approach combines academic rigor with practical skills development, delivering measurable results for learners at every stage.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <div className="text-4xl mb-4">{<feature.icon size={35} className='text-purple-400' /> }</div>
                <h3 className="text-2xl font-bold mb-4 text-transparent w-fit bg-clip-text bg-gradient-to-r from-purple-400 to-teal-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-300">
              Meet Our Educators
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Passionate experts committed to your success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-purple-500/20 transition-all"
              >
                <div className="aspect-square bg-gray-700 relative">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.position}</p>
                  <p className="text-sm text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/40 to-blue-600/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Start Your Transformation Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 text-gray-200"
          >
            Join our community of 250,000+ learners across 90 countries.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            Begin Your Journey →
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default About;