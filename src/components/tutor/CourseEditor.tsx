import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { HiStar } from 'react-icons/hi';
import { CourseSidebarProps } from '../student/courseSideBar';



export const CourseEditor = ({ course }: CourseSidebarProps) => {
  const [formData, setFormData] = useState({
    title: course.title,
    description: course.description,
    price: course.price
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
      {/* Course Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-600 focus:border-purple-500 focus:outline-none w-full max-w-2xl"
            />
          </h1>
          <div className="flex items-center space-x-4">
            <Badge color={course.status === 'Published' ? 'green' : 'yellow'}>
              {course.status}
            </Badge>
            <div className="flex items-center text-sm text-gray-400">
              <HiStar className="w-4 h-4 text-yellow-400 mr-1" />
              {course.rating}
            </div>
            <div className="text-sm text-gray-400">
              {course.students} students
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Thumbnail */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-400 mb-2">Course Thumbnail</label>
          <div className="relative aspect-video bg-gray-700 rounded-lg overflow-hidden">
            <Image
              src={course.thumbnail as string
              }
              alt={course.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <button className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                Change Thumbnail
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label htmlFor="price" className="block text-sm font-medium text-gray-400 mb-2">
            Price (USD)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">$</span>
            </div>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-8 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};