"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiSearch,
  HiFilter,
  HiStar,
  HiUsers,
  HiClock,
  HiX,
  HiPlay,
  HiChevronRight,
} from "react-icons/hi";
import { Button } from "@/components/ui/button";

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [difficulty, setDifficulty] = useState("all");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "development", name: "Development" },
    { id: "business", name: "Business" },
    { id: "design", name: "Design" },
    { id: "marketing", name: "Marketing" },
    { id: "data-science", name: "Data Science" },
    { id: "personal-development", name: "Personal Development" },
  ];

  const difficultyLevels = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" },
  ];

  // Mock data (same as before)
  // ...

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Improved Sidebar */}
          <motion.aside
            className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden transition-all duration-300
              ${sidebarCollapsed ? "lg:w-20" : "lg:w-72"}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="p-4 flex justify-between items-center border-b border-gray-700">
              {!sidebarCollapsed && (
                <h2 className="text-xl font-bold">Filters</h2>
              )}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 rounded-md hover:bg-gray-700/30 text-gray-400 hover:text-white"
              >
                <HiChevronRight
                  className={`w-5 h-5 transition-transform ${
                    sidebarCollapsed ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <div className={`p-4 ${sidebarCollapsed ? "hidden" : ""}`}>
              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${
                          activeCategory === category.id
                            ? "bg-purple-900/30 text-purple-400"
                            : "text-gray-300 hover:bg-gray-700/30"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Difficulty */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Difficulty</h3>
                  <div className="space-y-2">
                    {difficultyLevels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setDifficulty(level.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                          difficulty === level.id
                            ? "bg-purple-900/30 text-purple-400"
                            : "text-gray-300 hover:bg-gray-700/30"
                        }`}
                      >
                        {level.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price range */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Price Range</h3>
                  <div className="px-2">
                    <input
                      type="range"
                      min="0"
                      max="200"
                      step="10"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-400">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Collapsed view */}
            <div className={`p-2 ${sidebarCollapsed ? "" : "hidden"}`}>
              <div className="space-y-1">
                {categories.slice(0, 3).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full p-2 rounded-md flex items-center justify-center ${
                      activeCategory === category.id
                        ? "bg-purple-900/30 text-purple-400"
                        : "text-gray-300 hover:bg-gray-700/30"
                    }`}
                    title={category.name}
                  >
                    {category.name.charAt(0)}
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Courses grid - Main content */}
          <div className="flex-1">
            {/* Search and filters bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiSearch className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses or instructors..."
                  className="block w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700/50"
                >
                  <HiFilter className="mr-2 w-5 h-5" />
                  Filters
                </button>

                <Button
                  variant="outline"
                  className="hidden lg:flex items-center gap-2"
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                >
                  <HiFilter className="w-5 h-5" />
                  {sidebarCollapsed ? "Show Filters" : "Hide Filters"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
