import React from "react";
import { GraduationCap, BookOpen, Users, Award, Brain, Globe } from "lucide-react";

const Services = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Crèche & Pre-Nursery",
      description: "Early childhood development with Jolly Phonics methodology, fostering creativity and foundational learning.",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      icon: GraduationCap,
      title: "Nursery & Primary",
      description: "Comprehensive primary education combining British and Nigerian curricula for holistic development.",
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Award,
      title: "Secondary Education",
      description: "Advanced secondary program preparing students for university and future leadership roles.",
      color: "from-red-500 to-red-700",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    }
  ];

  const stats = [
    { number: "250+", label: "Students Enrolled", icon: Users },
    { number: "15+", label: "Qualified Teachers", icon: Brain },
    { number: "3", label: "Curriculum Programs", icon: Globe },
    { number: "100%", label: "Success Rate", icon: Award }
  ];

  return (
    <>
      {/* Programs Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Educational Programs for Every Age Group
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Empowering learners at each stage with a curriculum designed to
              inspire growth, curiosity, and academic success.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl p-8 ${program.bgColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {program.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {program.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-950  to-blue-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact in Numbers
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our thriving community of learners and educators committed to
              excellence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </h2>
                <p className="text-blue-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Our Mission
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            "To help the child dream, remember the dream, and actualize the
            dream" - We are committed to fostering a holistic, globally-oriented
            education that integrates the British, Jolly Phonics, and Nigerian
            curricula across all levels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200   rounded-full font-semibold">
              Citadel for Future Leaders
            </span>
            <span className="px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full font-semibold">
              Excellence in Education
            </span>
            <span className="px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full font-semibold">
              Holistic Development
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
