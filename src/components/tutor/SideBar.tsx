"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  HiHome,
  HiBookOpen,
  HiUsers,
  HiChartBar,
  HiVideoCamera,
  HiDocumentText,
  HiCog,
  HiAcademicCap
} from 'react-icons/hi';

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname()

  const navItems = [
    {
      name: 'Dashboard',
      href: '/tutor/dashboard',
      icon: HiHome,
    },
    {
      name: 'My Courses',
      href: '/tutor/courses',
      icon: HiBookOpen,
    },
    {
      name: 'Students',
      href: '/tutor/students',
      icon: HiUsers,
    },
    {
      name: 'Analytics',
      href: '/tutor/analytics',
      icon: HiChartBar,
    },
    {
      name: 'Content',
      href: '/tutor/content',
      icon: HiVideoCamera,
    },
    {
      name: 'Assignments',
      href: '/tutor/assignments',
      icon: HiDocumentText,
    },
    {
      name: 'Certificates',
      href: '/tutor/certificates',
      icon: HiAcademicCap,
    },
    {
      name: 'Settings',
      href: '/tutor/settings',
      icon: HiCog,
    },
  ];

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-800 bg-gray-900">
        <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="flex-1 px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center px-2 py-3 text-sm font-medium rounded-md ${
                  pathname === item.href
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <item.icon
                  className={`mr-3 flex-shrink-0 h-6 w-6 ${
                    pathname === item.href
                      ? 'text-purple-400'
                      : 'text-gray-500 group-hover:text-gray-400'
                  }`}
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};