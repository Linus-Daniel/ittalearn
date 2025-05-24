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
} from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { courses } from "@/constants";
import Link from "next/link";

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [difficulty, setDifficulty] = useState("all");

  // Mock data
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

  // Filter courses based on active filters
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || course.category === activeCategory;
    const matchesDifficulty =
      difficulty === "all" || course.difficulty === difficulty;
    const matchesPrice =
      course.discountPrice >= priceRange[0] &&
      course.discountPrice <= priceRange[1];

    return (
      matchesSearch && matchesCategory && matchesDifficulty && matchesPrice
    );
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile filter dialog */}
        <div className="lg:hidden mb-6">
          <button
            type="button"
            className="flex items-center text-sm font-medium text-gray-300 hover:text-white"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <HiFilter className="mr-2 w-5 h-5" />
            Filters
          </button>

          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-40 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
                  onClick={() => setMobileFiltersOpen(false)}
                ></div>

                <div className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-gray-800 overflow-y-auto">
                  <div className="p-4 flex items-center justify-between border-b border-gray-700">
                    <h2 className="text-lg font-medium">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 w-10 h-10 flex items-center justify-center"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <HiX className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="p-4">
                    <MobileFilters
                      categories={categories}
                      activeCategory={activeCategory}
                      setActiveCategory={setActiveCategory}
                      difficultyLevels={difficultyLevels}
                      difficulty={difficulty}
                      setDifficulty={setDifficulty}
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters sidebar - desktop */}
          <div className="hidden lg:block">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-6">Filters</h2>

              <div className="space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm ${
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
          </div>

          {/* Courses grid */}
          <div className="lg:col-span-3">
            {/* Search bar */}
            <div className="relative mb-8">
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

            {/* Active filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {activeCategory !== "all" && (
                <FilterPill
                  label={`Category: ${
                    categories.find((c) => c.id === activeCategory)?.name
                  }`}
                  onRemove={() => setActiveCategory("all")}
                />
              )}
              {difficulty !== "all" && (
                <FilterPill
                  label={`Level: ${
                    difficultyLevels.find((d) => d.id === difficulty)?.name
                  }`}
                  onRemove={() => setDifficulty("all")}
                />
              )}
              {(priceRange[0] !== 0 || priceRange[1] !== 200) && (
                <FilterPill
                  label={`Price: $${priceRange[0]} - $${priceRange[1]}`}
                  onRemove={() => setPriceRange([0, 200])}
                />
              )}
              {searchQuery && (
                <FilterPill
                  label={`Search: "${searchQuery}"`}
                  onRemove={() => setSearchQuery("")}
                />
              )}
            </div>

            {/* Results count */}
            <div className="mb-6">
              <p className="text-gray-400">
                Showing{" "}
                <span className="text-white">{filteredCourses.length}</span>{" "}
                courses
              </p>
            </div>

            {/* Courses */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <motion.div
                    key={course.id}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-purple-400/30 transition-colors"
                  >
                    <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-teal-900/50 relative">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
                          <HiPlay className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold line-clamp-2">
                          {course.title}
                        </h3>
                        <div className="flex-shrink-0 ml-2">
                          <span className="text-lg font-bold">
                            ${course.discountPrice}
                          </span>
                          {course.discountPrice < course.price && (
                            <span className="text-gray-400 text-sm line-through ml-1">
                              ${course.price}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">
                        By {course.instructor}
                      </p>
                      <div className="flex items-center space-x-4 text-sm mb-4">
                        <div className="flex items-center text-yellow-400">
                          <HiStar className="w-4 h-4 mr-1" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <HiUsers className="w-4 h-4 mr-1" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <HiClock className="w-4 h-4 mr-1" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      <Link href={`/courses/${course.id}`} className="w-full bg-gradient-to-r  from-purple-500 to-teal-500 p-2 rounded">View Course</Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No courses found</h3>
                <p className="text-gray-400">
                  Try adjusting your filters or search query
                </p>
                <Button
                  variant="secondary"
                  className="mt-4"
                  onClick={() => {
                    setActiveCategory("all");
                    setDifficulty("all");
                    setPriceRange([0, 200]);
                    setSearchQuery("");
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile filters component
const MobileFilters = ({
  categories,
  activeCategory,
  setActiveCategory,
  difficultyLevels,
  difficulty,
  setDifficulty,
  priceRange,
  setPriceRange,
}: any) => {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium mb-3">Categories</h3>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category: any) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-2 rounded-md text-sm ${
                activeCategory === category.id
                  ? "bg-purple-900/30 text-purple-400"
                  : "bg-gray-700/50 text-gray-300"
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
        <div className="grid grid-cols-2 gap-2">
          {difficultyLevels.map((level: any) => (
            <button
              key={level.id}
              onClick={() => setDifficulty(level.id)}
              className={`px-3 py-2 rounded-md text-sm ${
                difficulty === level.id
                  ? "bg-purple-900/30 text-purple-400"
                  : "bg-gray-700/50 text-gray-300"
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
  );
};

// Filter pill component
const FilterPill = ({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) => {
  return (
    <div className="flex items-center bg-gray-800/50 border border-gray-700 rounded-full px-3 py-1 text-sm">
      <span>{label}</span>
      <button
        onClick={onRemove}
        className="ml-1 text-gray-400 hover:text-white"
      >
        <HiX className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CoursesPage;
