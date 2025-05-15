"use client"
import { DashboardLayout } from '@/components/student/DashBoardLayout';
import { useState } from 'react';
import { Button } from '@/components/common/Button';
import { Switch } from '@/components/common/Switch';

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    bio: 'Frontend developer passionate about learning new technologies',
    notifications: {
      courseUpdates: true,
      newMessages: true,
      promotional: false
    },
    privacy: {
      profilePublic: true,
      showCourses: true,
      showAchievements: true
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value
      }
    }));
  };

  const handlePrivacyChange = (key: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [key]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save settings logic
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-400 mb-1">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={3}
                value={formData.bio}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div className="pt-4 border-t border-gray-700">
              <Button >
                Save Profile Changes
              </Button>
            </div>
          </form>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Course Updates</h3>
                <p className="text-sm text-gray-400">Get notified about new content and updates in your enrolled courses</p>
              </div>
              <Switch
                checked={formData.notifications.courseUpdates}
                onChange={(checked) => handleNotificationChange('courseUpdates', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">New Messages</h3>
                <p className="text-sm text-gray-400">Receive notifications when you get new messages</p>
              </div>
              <Switch
                checked={formData.notifications.newMessages}
                onChange={(checked) => handleNotificationChange('newMessages', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Promotional Offers</h3>
                <p className="text-sm text-gray-400">Get occasional offers and promotions</p>
              </div>
              <Switch
                checked={formData.notifications.promotional}
                onChange={(checked) => handleNotificationChange('promotional', checked)}
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Public Profile</h3>
                <p className="text-sm text-gray-400">Make your profile visible to other users</p>
              </div>
              <Switch
                checked={formData.privacy.profilePublic}
                onChange={(checked) => handlePrivacyChange('profilePublic', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Show Enrolled Courses</h3>
                <p className="text-sm text-gray-400">Display courses you're taking on your profile</p>
              </div>
              <Switch
                checked={formData.privacy.showCourses}
                onChange={(checked) => handlePrivacyChange('showCourses', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Show Achievements</h3>
                <p className="text-sm text-gray-400">Display your unlocked achievements on your profile</p>
              </div>
              <Switch
                checked={formData.privacy.showAchievements}
                onChange={(checked) => handlePrivacyChange('showAchievements', checked)}
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Account Actions</h2>
          
          <div className="space-y-4">
            <button className="w-full text-left px-4 py-3 bg-red-900/20 border border-red-700/30 rounded-lg hover:bg-red-900/30 transition-colors">
              <h3 className="font-medium text-red-400">Delete Account</h3>
              <p className="text-sm text-red-400/70">Permanently remove your account and all associated data</p>
            </button>
            
            <button className="w-full text-left px-4 py-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg hover:bg-yellow-900/30 transition-colors">
              <h3 className="font-medium text-yellow-400">Export Data</h3>
              <p className="text-sm text-yellow-400/70">Download all your personal data from our platform</p>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}