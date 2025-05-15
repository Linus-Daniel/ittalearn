import { Partner } from '@/types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';

type PartnersSectionProps = {
  partners: Partner[];
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'compact';
};

export const PartnersSection = ({
  partners,
  title = "Our Trusted Partners",
  subtitle = "Collaborating with industry leaders to deliver exceptional learning experiences",
  variant = 'default'
}: PartnersSectionProps) => {
  const featuredPartners = partners.filter(p => p.featured);
  const regularPartners = partners.filter(p => !p.featured);

  return (
    <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
      {variant === 'default' && (
        <SectionTitle 
          title={title} 
          subtitle={subtitle} 
        />
      )}

      {featuredPartners.length > 0 && (
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-300">
            Featured Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center"
              >
                <a 
                  href={partner.website || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 w-full h-full flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/10 transition-all"
                >
                  <div className="relative w-full h-16">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100px, 150px"
                    />
                  </div>
                </a>
                <div className="mt-4 text-center">
                  <h4 className="font-medium">{partner.name}</h4>
                  <p className="text-sm text-gray-400 mt-1">{partner.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {variant === 'default' && regularPartners.length > 0 && (
        <>
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-300">
            Our Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {regularPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="w-40 h-40 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg flex items-center justify-center p-4 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
              >
                <a 
                  href={partner.website || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative w-full h-full"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-2"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {variant === 'compact' && (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg flex items-center justify-center p-4 aspect-square hover:shadow-lg hover:shadow-purple-500/10 transition-all"
            >
              <a 
                href={partner.website || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative w-full h-full"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain p-2"
                />
              </a>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};