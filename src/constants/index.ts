import { Course } from "../types/index";

import { BlogPost } from "@/types";

export const courses:Course[] = [
  {
    id: "1",
    title: "Advanced React Patterns",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 12500,
    duration: "6 weeks",
    category: "development",
    difficulty: "intermediate",
    price: 99.99,
    discountPrice: 79.99,
    thumbnail: "/course-react.jpg",
    lessons: [
      { title: "React Composition vs Inheritance", duration: "45 min", completed: true },
      { title: "Hooks and Custom Hooks", duration: "1h", completed: true },
      { title: "Context API Best Practices", duration: "50 min", completed: false },
      { title: "Render Props & HOCs", duration: "1h 10min", completed: false },
      { title: "Code Splitting and Performance", duration: "1h 20min", completed: false }
    ],
    requirements: [
      "Basic understanding of JavaScript",
      "Previous experience with React",
      "Code editor like VS Code"
    ]
  },
  {
    id: "2",
    title: "Financial Analysis Fundamentals",
    instructor: "Michael Chen",
    rating: 4.6,
    students: 8700,
    duration: "4 weeks",
    category: "business",
    difficulty: "beginner",
    price: 89.99,
    discountPrice: 69.99,
    thumbnail: "/course-finance.jpg",
    lessons: [
      { title: "Introduction to Financial Analysis", duration: "30 min", completed: true },
      { title: "Understanding Financial Statements", duration: "1h", completed: true },
      { title: "Ratio Analysis", duration: "45 min", completed: false },
      { title: "Forecasting Techniques", duration: "50 min", completed: false },
      { title: "Case Study: Company Evaluation", duration: "1h 10min", completed: false }
    ],
    requirements: [
      "No prior experience required",
      "Interest in finance and business",
      "Access to Excel or Google Sheets"
    ]
  },
  {
    id: "3",
    title: "UI/UX Design Masterclass",
    instructor: "Alex Rodriguez",
    rating: 4.9,
    students: 21500,
    duration: "8 weeks",
    category: "design",
    difficulty: "intermediate",
    price: 119.99,
    discountPrice: 89.99,
    thumbnail: "/course-design.jpg",
    lessons: [
      { title: "Principles of UI/UX", duration: "1h", completed: true },
      { title: "Design Thinking Process", duration: "50 min", completed: true },
      { title: "Wireframing & Prototyping", duration: "1h 15min", completed: false },
      { title: "Figma for Designers", duration: "1h 30min", completed: false },
      { title: "Designing for Accessibility", duration: "1h", completed: false }
    ],
    requirements: [
      "Basic graphic design knowledge",
      "Figma account (free or paid)",
      "Creative mindset and attention to detail"
    ]
  },
  {
    id: "4",
    title: "Digital Marketing Strategy",
    instructor: "Emily Wilson",
    rating: 4.7,
    students: 6300,
    duration: "5 weeks",
    category: "marketing",
    difficulty: "beginner",
    price: 79.99,
    discountPrice: 59.99,
    thumbnail: "/course-marketing.jpg",
    lessons: [
      { title: "Digital Marketing Overview", duration: "40 min", completed: true },
      { title: "Social Media Marketing", duration: "1h", completed: true },
      { title: "Email Campaigns", duration: "45 min", completed: false },
      { title: "SEO Basics", duration: "1h 10min", completed: false },
      { title: "Marketing Funnel Strategy", duration: "1h", completed: false }
    ],
    requirements: [
      "No prior experience required",
      "Basic computer skills",
      "Internet connection and email account"
    ]
  },
  {
    id: "5",
    title: "Machine Learning with Python",
    instructor: "David Kim",
    rating: 4.8,
    students: 18200,
    duration: "10 weeks",
    category: "data-science",
    difficulty: "advanced",
    price: 129.99,
    discountPrice: 99.99,
    thumbnail: "/course-ml.jpg",
    description: "Master the latest machine learning techniques with hands-on projects using Python. This comprehensive course covers everything from fundamental concepts to cutting-edge algorithms used in industry today.",
    lessons: [
      { title: "Introduction to Machine Learning", duration: "45 min", completed: true },
      { title: "Python for Data Science", duration: "1h 20min", completed: true },
      { title: "Supervised Learning Algorithms", duration: "2h 10min", completed: false },
      { title: "Neural Networks Fundamentals", duration: "1h 45min", completed: false },
      { title: "Natural Language Processing", duration: "2h 30min", completed: false }
    ],
    requirements: [
      "Basic Python knowledge",
      "Understanding of algebra",
      "Computer with Python 3.7+ installed"
    ]
  },
  {
    id: "6",
    title: "Productivity Mastery",
    instructor: "James Peterson",
    rating: 4.5,
    students: 4200,
    duration: "3 weeks",
    category: "personal-development",
    difficulty: "beginner",
    price: 49.99,
    discountPrice: 29.99,
    thumbnail: "/course-productivity.jpg",
    lessons: [
      { title: "Understanding Productivity", duration: "30 min", completed: true },
      { title: "Time Blocking Techniques", duration: "40 min", completed: true },
      { title: "Habits & Routines", duration: "35 min", completed: false },
      { title: "Overcoming Procrastination", duration: "45 min", completed: false },
      { title: "Building a Productivity System", duration: "50 min", completed: false }
    ],
    requirements: [
      "Willingness to improve personal habits",
      "Notebook or productivity app",
      "Time set aside for daily practice"
    ]
  }
];

import { Partner } from "@/types";

export const partners: Partner[] = [
  {
    id: "1",
    name: "Tech University",
    logo: "/partners/tech-university.png",
    description: "Leading technical education provider",
    website: "https://techuniversity.edu",
    featured: true,
  },
  {
    id: "2",
    name: "SkillForward",
    logo: "/partners/skillforward.png",
    description: "Professional skill development",
    website: "https://skillforward.com",
    featured: true,
  },
  {
    id: "3",
    name: "CodeMaster",
    logo: "/partners/codemaster.png",
    description: "Coding bootcamps and developer education",
    website: "https://codemaster.io",
    featured: true,
  },
  {
    id: "4",
    name: "Global Learning Initiative",
    logo: "/partners/global-learning.png",
    description: "Promoting accessible education",
    website: "https://globallearning.org",
  },
  {
    id: "5",
    name: "DesignHub",
    logo: "/partners/designhub.png",
    description: "Creative education for designers",
    website: "https://designhub.edu",
  },
  {
    id: "6",
    name: "DataScience Corp",
    logo: "/partners/datascience-corp.png",
    description: "Data science and AI education",
    website: "https://datasciencecorp.com",
  },
  {
    id: "7",
    name: "Future Skills",
    logo: "/partners/future-skills.png",
    description: "Emerging technology education",
    website: "https://futureskills.com",
  },
  {
    id: "8",
    name: "EduTech Alliance",
    logo: "/partners/edutech-alliance.png",
    description: "Education technology consortium",
    website: "https://edutechalliance.org",
  },
  {
    id: "9",
    name: "LearnSphere",
    logo: "/partners/learnsphere.png",
    description: "Online learning platform",
    website: "https://learnsphere.com",
  },
  {
    id: "10",
    name: "Knowledge Nexus",
    logo: "/partners/knowledge-nexus.png",
    description: "Educational content provider",
    website: "https://knowledgenexus.edu",
  },
  {
    id: "11",
    name: "SkillCraft",
    logo: "/partners/skillcraft.png",
    description: "Vocational training specialists",
    website: "https://skillcraft.org",
  },
  {
    id: "12",
    name: "Academy Online",
    logo: "/partners/academy-online.png",
    description: "Comprehensive digital courses",
    website: "https://academyonline.com",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Online Education in 2023",
    excerpt:
      "Exploring the latest trends and technologies shaping the future of digital learning.",
    date: "May 15, 2023",
    author: "Sarah Chen",
    authorRole: "Head of Education",
    authorAvatar: "/team/sarah-chen.jpg",
    category: "Industry Trends",
    readTime: "6 min read",
  },
  {
    id: "2",
    title: "How Gamification Improves Learning Outcomes",
    excerpt:
      "Discover how game mechanics can increase engagement and knowledge retention in online courses.",
    date: "April 28, 2023",
    author: "James Wilson",
    authorRole: "Content Manager",
    authorAvatar: "/team/james-wilson.jpg",
    category: "Learning Science",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "Building Accessible Online Learning Platforms",
    excerpt:
      "Best practices for creating inclusive educational experiences for all learners.",
    date: "April 10, 2023",
    author: "Priya Patel",
    authorRole: "UX/UI Designer",
    authorAvatar: "/team/priya-patel.jpg",
    category: "Design",
    readTime: "5 min read",
  },
  {
    id: "4",
    title: "The Rise of Microlearning",
    excerpt:
      "Why bite-sized learning modules are becoming the preferred way to acquire new skills.",
    date: "March 22, 2023",
    author: "Emily Zhang",
    authorRole: "Community Lead",
    authorAvatar: "/team/emily-zhang.jpg",
    category: "Learning Methods",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "Tech Stack for Modern Learning Platforms",
    excerpt:
      "A deep dive into the technologies powering today's most effective educational platforms.",
    date: "March 5, 2023",
    author: "Miguel Rodriguez",
    authorRole: "Lead Developer",
    authorAvatar: "/team/miguel-rodriguez.jpg",
    category: "Technology",
    readTime: "10 min read",
  },
  {
    id: "6",
    title: "Measuring Success in Online Education",
    excerpt:
      "Key metrics to track and optimize for better learning outcomes and business growth.",
    date: "February 18, 2023",
    author: "Alex Johnson",
    authorRole: "CEO & Founder",
    authorAvatar: "/team/alex-johnson.jpg",
    category: "Business",
    readTime: "9 min read",
  },
];

import { TeamMember } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "Education technology enthusiast with 10+ years of experience in online learning platforms.",
    avatar: "/team/alex-johnson.jpg",
    socialLinks: {
      twitter: "https://twitter.com/alexj",
      linkedin: "https://linkedin.com/in/alexjohnson",
    },
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Head of Education",
    bio: "Former university professor passionate about making quality education accessible to all.",
    avatar: "/team/sarah-chen.jpg",
    socialLinks: {
      twitter: "https://twitter.com/sarahc",
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen",
    },
  },
  {
    id: "3",
    name: "Miguel Rodriguez",
    role: "Lead Developer",
    bio: "Full-stack developer specializing in building scalable learning platforms.",
    avatar: "/team/miguel-rodriguez.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/miguelrodriguez",
      github: "https://github.com/miguelr",
    },
  },
  {
    id: "4",
    name: "Priya Patel",
    role: "UX/UI Designer",
    bio: "Creates intuitive learning experiences with a focus on accessibility and engagement.",
    avatar: "/team/priya-patel.jpg",
    socialLinks: {
      twitter: "https://twitter.com/priyap",
      linkedin: "https://linkedin.com/in/priyapatel",
    },
  },
  {
    id: "5",
    name: "James Wilson",
    role: "Content Manager",
    bio: "Curates and develops high-quality educational content across various disciplines.",
    avatar: "/team/james-wilson.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/jameswilson",
    },
  },
  {
    id: "6",
    name: "Emily Zhang",
    role: "Community Lead",
    bio: "Builds and nurtures learning communities to enhance student engagement.",
    avatar: "/team/emily-zhang.jpg",
    socialLinks: {
      twitter: "https://twitter.com/emilyz",
      linkedin: "https://linkedin.com/in/emilyzhang",
    },
  },
];
