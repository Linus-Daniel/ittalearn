import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { HiMail, HiPhone, HiMap } from 'react-icons/hi';

export const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
      <SectionTitle 
        title="Get In Touch" 
        subtitle="We'd love to hear from you. Contact us for any questions or partnerships." 
      />

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-500/10 p-3 rounded-lg mr-4">
                  <HiMail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-300">Email</h4>
                  <a href="mailto:hello@nexuslearn.com" className="text-gray-400 hover:text-white transition-colors">
                    hello@nexuslearn.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-500/10 p-3 rounded-lg mr-4">
                  <HiPhone className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-300">Phone</h4>
                  <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-pink-500/10 p-3 rounded-lg mr-4">
                  <HiMap className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-300">Address</h4>
                  <p className="text-gray-400">
                    123 Education St, Suite 100<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <Button  className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};