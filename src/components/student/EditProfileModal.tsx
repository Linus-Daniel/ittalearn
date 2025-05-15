import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { Button } from '../common/Button';
import Image from 'next/image';

type EditProfileModalProps = {
  isOpen: boolean;
  onClose: () => void;
  user: {
    name: string;
    email: string;
    bio: string;
    avatar: string;
  };
};

export const EditProfileModal = ({ isOpen, onClose, user }: EditProfileModalProps) => {
  const [formData, setFormData] = useState({
    name: user.name,
    bio: user.bio
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save profile logic
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-xl p-6">
          <Dialog.Title className="text-xl font-bold mb-6">Edit Profile</Dialog.Title>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-500 mb-4">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <button 
                type="button"
                className="text-sm text-purple-400 hover:text-purple-300"
              >
                Change Photo
              </button>
            </div>
            
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
            
            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-700">
              <Button 
        
                variant="secondary"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button >
                Save Changes
              </Button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};