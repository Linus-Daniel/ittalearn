
export interface Lesson {
  title: string;
  duration: string;
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  price: number;
  discountPrice: number;
  thumbnail: string;
  description?: string;
  lessons: Lesson[];
  requirements: string[];
}


export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  category: string;
  readTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}
export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website?: string;
  featured?: boolean;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
}
export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}


export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  date?: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  xp: number;
};

export type NotificationSettings = {
  courseUpdates: boolean;
  newMessages: boolean;
  promotional: boolean;
};

export type PrivacySettings = {
  profilePublic: boolean;
  showCourses: boolean;
  showAchievements: boolean;
};

export type UserProfile = {
  name: string;
  email: string;
  bio: string;
  joinDate: string;
  avatar: string;
  stats: {
    coursesCompleted: number;
    totalHours: number;
    currentStreak: number;
    achievements: number;
  };
};

export type UserActivity = {
  date: string;
  action: string;
  course: string;
};