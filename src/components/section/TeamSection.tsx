import { TeamMember } from '@/types';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import Image from 'next/image';
import { LinkedinIcon, TwitterIcon, GithubIcon } from '../common/SocialIcons';
import { teamMembers } from '@/constants/index';

type TeamSectionProps = {
  team: TeamMember[];
};

export const TeamSection = () => {
  return (
    <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto bg-gray-800/30 backdrop-blur-sm">
      <SectionTitle 
        title="Meet Our Team" 
        subtitle="The passionate educators and technologists building the future of learning" 
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.slice(0,4).map(member => (
          <Card key={member.id} className="text-center p-8 hover:shadow-teal-500/10">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden relative border-2 border-purple-500/20">
              <Image 
                src={member.avatar} 
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-purple-400 mb-4">{member.role}</p>
            <p className="text-gray-400 mb-6">{member.bio}</p>
            <div className="flex justify-center space-x-4">
              {member.socialLinks.twitter && (
                <a href={member.socialLinks.twitter} className="text-gray-400 hover:text-white">
                  <TwitterIcon className="w-5 h-5" />
                </a>
              )}
              {member.socialLinks.linkedin && (
                <a href={member.socialLinks.linkedin} className="text-gray-400 hover:text-white">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              )}
              {member.socialLinks.github && (
                <a href={member.socialLinks.github} className="text-gray-400 hover:text-white">
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};