import Onboarding from "@/components/shared/home-page/onboarding";
import React from "react";
import AdmissionForm from "./admission-form";
import {
  GraduationCap,
  Users,
  BookOpen,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Admission - Bendonalds International Schools Calabar",
  description:
    "Find out how to apply for admission to Bendonalds International Schools for nursery, primary, and secondary school in Calabar, Cross River State.",
  keywords:
    "Bendonalds International Schools admission, school enrollment, Calabar admissions, education in Cross River State, apply to Bendonalds International Schools",
};

const AdmissionPage = () => {
  const admissionInfo = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description:
        "Join a community committed to academic excellence and holistic development with our comprehensive curriculum.",
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: Users,
      title: "Diverse Community",
      description:
        "Be part of a diverse and inclusive community that celebrates uniqueness and fosters growth.",
      color: "from-yellow-500 to-yellow-700",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Programs",
      description:
        "Choose from our comprehensive programs from crèche to secondary levels with multiple curricula.",
      color: "from-red-500 to-red-700",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
  ];

  const programs = [
    {
      title: "Crèche & Pre-Nursery",
      age: "6 months - 3 years",
      description: "Early childhood development with Jolly Phonics methodology",
      features: [
        "Safe Environment",
        "Play-based Learning",
        "Jolly Phonics",
        "Social Development",
      ],
    },
    {
      title: "Nursery & Primary",
      age: "3 - 11 years",
      description:
        "Comprehensive primary education with British and Nigerian curricula",
      features: [
        "Core Subjects",
        "Creative Arts",
        "Physical Education",
        "Character Building",
      ],
    },
    {
      title: "Secondary Education",
      age: "11 - 18 years",
      description:
        "Advanced secondary program preparing students for university",
      features: [
        "Academic Excellence",
        "Leadership Skills",
        "Career Guidance",
        "University Preparation",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <Image
          src="/images/building1.jpg"
          alt="Bendonalds International Schools"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20  to-blue-900/80" />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full" />
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full" />
          <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-white rounded-full" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Admissions</h1>
            <p className="text-xl md:text-2xl  mb-8">
              Join our community of excellence!
            </p>
            <p className="text-lg  max-w-2xl mx-auto mb-8">
              Begin your child&quot;s journey towards academic excellence and
              personal growth at Bendonalds International Schools Calabar
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold">
                Citadel for Future Leaders
              </span>
              <span className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold">
                Excellence in Education
              </span>
              <span className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold">
                Holistic Development
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Bendonalds International Schools?
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Discover what makes us the preferred choice for quality education
              in Calabar
            </p>
            <div className="w-24 h-1 bg-blue-950  mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {admissionInfo.map((info, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl p-8 ${info.bgColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {info.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Educational Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive education from early childhood to secondary level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {program.age}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                  {program.description}
                </p>
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3  "
                    >
                      <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Section */}

      <Onboarding />

      {/* Admission Form Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <AdmissionForm />
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-950  to-blue-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold t mb-6">
              Have Questions?
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our admission team is here to help you with any questions about
              the application process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-blue-100">+234 XXX XXX XXXX</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-blue-100">admissions@bendonaldschools.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Location
              </h3>
              <p className="text-blue-100">Calabar, Cross River State</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-blue-100 mb-6">
              Ready to begin your child&quot;s educational journey?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-white/20 text-white rounded-full font-semibold">
                Apply Today
              </span>
              <span className="px-6 py-3 bg-white/20 text-white rounded-full font-semibold">
                Schedule a Visit
              </span>
              <span className="px-6 py-3 bg-white/20 text-white rounded-full font-semibold">
                Download Brochure
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;
