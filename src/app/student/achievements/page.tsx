import { DashboardLayout } from "@/components/student/DashBoardLayout";
import {  HiStar,  HiCheckCircle, HiAcademicCap } from 'react-icons/hi';
import {  HiBolt, HiTrophy} from 'react-icons/hi2';


const achievements = {
  unlocked: [
    {
      id: '1',
      title: 'Fast Learner',
      description: 'Completed 3 lessons in one day',
      icon: HiBolt,
      date: 'May 15, 2023',
      rarity: 'common',
      xp: 50
    },
    {
      id: '2',
      title: 'Course Completer',
      description: 'Finished your first course',
      icon: HiCheckCircle,
      date: 'May 10, 2023',
      rarity: 'rare',
      xp: 200
    },
    {
      id: '3',
      title: '5-Day Streak',
      description: 'Learned for 5 consecutive days',
      icon: HiStar,
      date: 'May 5, 2023',
      rarity: 'uncommon',
      xp: 100
    }
  ],
  locked: [
    {
      id: '4',
      title: 'Master of React',
      description: 'Complete all React courses with 90%+ score',
      icon: HiAcademicCap,
      rarity: 'epic',
      xp: 500
    },
    {
      id: '5',
      title: 'Perfect Week',
      description: 'Learn every day for 7 days straight',
      icon: HiStar,
      rarity: 'rare',
      xp: 250
    },
    {
      id: '6',
      title: 'Community Helper',
      description: 'Answer 10 questions in the community',
      icon: HiTrophy,
      rarity: 'uncommon',
      xp: 150
    }
  ],
  stats: {
    totalXP: 350,
    level: 2,
    nextLevelXP: 650,
    achievementsUnlocked: 3,
    totalAchievements: 15
  }
};

const rarityColors = {
  common: 'bg-gray-500',
  uncommon: 'bg-green-500',
  rare: 'bg-blue-500',
  epic: 'bg-purple-500',
  legendary: 'bg-yellow-500'
};

export default function AchievementsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Level</h3>
            <p className="text-2xl font-bold">{achievements.stats.level}</p>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Total XP</h3>
            <p className="text-2xl font-bold">{achievements.stats.totalXP}</p>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Achievements</h3>
            <p className="text-2xl font-bold">
              {achievements.stats.achievementsUnlocked}/{achievements.stats.totalAchievements}
            </p>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Next Level</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ 
                    width: `${(achievements.stats.totalXP / achievements.stats.nextLevelXP) * 100}%` 
                  }}
                ></div>
              </div>
              <span className="text-xs text-gray-400">
                {achievements.stats.nextLevelXP - achievements.stats.totalXP} XP needed
              </span>
            </div>
          </div>
        </div>

        {/* Unlocked Achievements */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Your Achievements</h2>
          {achievements.unlocked.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.unlocked.map((achievement) => (
                <AchievementCard 
                  key={achievement.id} 
                  achievement={achievement} 
                  unlocked={true} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">No achievements unlocked yet. Keep learning!</p>
            </div>
          )}
        </div>

        {/* Locked Achievements */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Available Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.locked.map((achievement) => (
              <AchievementCard 
                key={achievement.id} 
                achievement={achievement} 
                unlocked={false} 
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

const AchievementCard = ({ achievement, unlocked }: { achievement: any, unlocked: boolean }) => {
  const Icon = achievement.icon;
  const rarityColor = rarityColors[achievement.rarity as keyof typeof rarityColors] || 'bg-gray-500';

  return (
    <div className={`border rounded-xl p-5 transition-all ${
      unlocked 
        ? 'border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20' 
        : 'border-gray-700 bg-gray-800/30 hover:bg-gray-700/50'
    }`}>
      <div className="flex items-start">
        <div className={`w-12 h-12 ${rarityColor} rounded-lg flex items-center justify-center mr-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{achievement.title}</h3>
          <p className="text-sm text-gray-400 mt-1">{achievement.description}</p>
          {unlocked && achievement.date && (
            <p className="text-xs text-gray-500 mt-2">Unlocked: {achievement.date}</p>
          )}
        </div>
        <div className={`text-xs font-medium px-2 py-1 rounded ${
          unlocked ? 'bg-purple-500/20 text-purple-400' : 'bg-gray-700/50 text-gray-400'
        }`}>
          +{achievement.xp} XP
        </div>
      </div>
      {!unlocked && (
        <div className="mt-4 pt-3 border-t border-gray-700/50 flex items-center">
          <span className="text-xs text-gray-500">Locked</span>
          <div className="ml-auto w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center">
            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};