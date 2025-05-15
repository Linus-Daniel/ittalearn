import { HiAcademicCap, HiDeviceMobile, HiClock } from 'react-icons/hi';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';

export const Features = () => {
  const features = [
    {
      title: "10,000+ Courses",
      description: "From programming to photography and beyond",
      icon: <HiAcademicCap className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Learn Anywhere",
      description: "Access courses on all your devices",
      icon: <HiDeviceMobile className="w-8 h-8 text-teal-400" />
    },
    {
      title: "At Your Own Pace",
      description: "Lifetime access to all course materials",
      icon: <HiClock className="w-8 h-8 text-pink-400" />
    }
  ];

  return (
    <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
      <SectionTitle 
        title="Why Choose NexusLearn" 
        subtitle="Our platform combines cutting-edge technology with world-class education" 
      />

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="p-8">
            <div className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};