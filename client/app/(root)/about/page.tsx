import About from "@/components/shared/about/about";
import Image from "next/image";
import { Award, Users, BookOpen, Target, Heart, Star } from "lucide-react";

export const metadata = {
  title: "About Us - Bendonalds International Schools Calabar",
  description:
    "Learn more about Bendonalds International Schools Calabar, its mission, vision, values, and the excellent education provided to students in Calabar, Cross River State.",
  keywords:
    "About Bendonalds International Schools, Calabar school, school mission, school values, education in Calabar, Cross River State",
};

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Holistic Development",
      description: "We nurture every aspect of a child's growth - academic, emotional, social, and physical.",
      color: "from-red-500 to-red-700"
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Combining British, Jolly Phonics, and Nigerian curricula for comprehensive learning.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building a supportive community where every child feels valued and encouraged.",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      icon: Target,
      title: "Future Leaders",
      description: "Preparing students to become confident, capable leaders of tomorrow.",
      color: "from-green-500 to-green-700"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Center for Universal Learning",
      description: "Selected for teacher training program to enhance modern teaching techniques."
    },
    {
      icon: Star,
      title: "Mathematics Excellence",
      description: "Consistent top placements in Royal National Mathematics Competition."
    },
    {
      icon: BookOpen,
      title: "Secondary Expansion",
      description: "Successfully launched secondary education program in September 2022."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <Image
          src="/images/band.jpg"
          alt="Bendonalds International Schools"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About Bendonalds International Schools
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Citadel for Future Leaders
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Excellence in Education Since 2020
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Bendonalds International Schools was founded in 2020 by Mrs. and
                Mrs. Celestine Atsu. Originally a COVID-19 lesson center, it has
                evolved into the thriving institution we know today, dedicated
                to nurturing young minds in a supportive environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Founded during challenging times
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Evolved into comprehensive education
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Dedicated to student success
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/building1.jpg"
                alt="School Building"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Bendonalds International Schools is committed to fostering a
              holistic, globally-oriented education, integrating the British,
              Jolly Phonics, and Nigerian curricula.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Our Motto
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
                &quot;Citadel for Future Leaders&quot;
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
                Our Vision
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>To help the child dream</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Remember the dream</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Actualize the dream</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold  mb-3">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proprietress Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold  mb-6">
              Meet Our Proprietress
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Leading with vision and dedication to educational excellence
            </p>
          </div>

          <div className="backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <Image
                  src="/images/admin.jpg"
                  alt="Mrs. Agiye Esther - Proprietress"
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-2xl mx-auto lg:mx-0"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">Mrs. Agiye Esther</h3>
                <p className="text-xl  leading-relaxed mb-6">
                  Mrs. Agiye Esther brings a wealth of experience to Bendonalds,
                  shaping a future-oriented education for our pupils. Her vision
                  and dedication have been instrumental in creating an
                  environment where every child can thrive and reach their full
                  potential.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Visionary Leadership</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Educational Excellence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Student-Centered Approach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Celebrating milestones and successes that define our commitment to
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16  rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 " />
                </div>
                <h3 className="text-xl font-bold   mb-4">
                  {achievement.title}
                </h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We invite you to join the Bendonalds community for an enriching
              academic experience and holistic development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full font-semibold">
                Excellence in Education
              </span>
              <span className="px-6 py-3 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full font-semibold">
                Future Leaders
              </span>
              <span className="px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full font-semibold">
                Holistic Development
              </span>
            </div>
          </div>
        </div>
      </section>

      <About />
    </div>
  );
};

export default AboutPage;
