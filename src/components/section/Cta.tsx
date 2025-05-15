import { motion } from 'framer-motion';
import { Button } from '../common/Button';

export const CTA = () => {
  return (
    <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-900/50 to-teal-900/50 border border-gray-700 rounded-2xl p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your career?</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Join over 500,000 learners worldwide and gain the skills that matter in today's job market.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button>
            Get Started for Free
          </Button>
          <Button variant="outline" >
            Schedule a Demo
          </Button>
        </div>
      </motion.div>
    </section>
  );
};