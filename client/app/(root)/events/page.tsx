'use client';

import { motion } from 'framer-motion';
import EventCard from '@/components/shared/events/event-card';
import { Card, CardContent } from '@/components/ui/card';
import { useGetEventsQuery } from '@/src/features/events/eventApiSlice';
import Image from 'next/image';
import Spinner from '@/components/shared/spinner';
import { Calendar, Clock, Star, Users, MapPin, Filter } from 'lucide-react';
import { useState } from 'react';

const EventPage = () => {
  const { data, isLoading, isError } = useGetEventsQuery();
  const [filter, setFilter] = useState('all');

  const eventCategories = [
    { id: 'all', label: 'All Events', icon: Calendar },
    { id: 'academic', label: 'Academic', icon: Star },
    { id: 'sports', label: 'Sports', icon: Users },
    { id: 'cultural', label: 'Cultural', icon: MapPin }
  ];

  // const upcomingEvents = [
  //   {
  //     id: 1,
  //     title: "Annual Sports Day",
  //     date: "2024-03-15",
  //     time: "9:00 AM",
  //     location: "School Sports Complex",
  //     description: "Join us for our annual sports day featuring various competitions and activities.",
  //     category: "sports",
  //     image: "/images/sport1.jpg"
  //   },
  //   {
  //     id: 2,
  //     title: "Science Fair Exhibition",
  //     date: "2024-03-22",
  //     time: "10:00 AM",
  //     location: "School Auditorium",
  //     description: "Students showcase their innovative science projects and experiments.",
  //     category: "academic",
  //     image: "/images/exam.jpg"
  //   },
  //   {
  //     id: 3,
  //     title: "Cultural Day Celebration",
  //     date: "2024-03-29",
  //     time: "2:00 PM",
  //     location: "School Hall",
  //     description: "Celebrate our diverse cultural heritage with performances and exhibitions.",
  //     category: "cultural",
  //     image: "/images/band.jpg"
  //   }
  // ];

  // const filteredEvents = filter === 'all' ? upcomingEvents : upcomingEvents.filter(event => event.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            width={1920}
            height={1080}
            src="/images/sport1.jpg"
            alt="Events Background"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20  to-blue-900/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <Calendar className="w-20 h-20 mx-auto mb-4 " />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            School Events
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Discover exciting events and activities happening at Bendonalds
            International Schools
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <span className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold">
              Academic Excellence
            </span>
            <span className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold">
              Sports & Activities
            </span>
            <span className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold">
              Cultural Events
            </span>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"
        />
      </motion.div>

      {/* Main Content Section */}
      <div className="relative -mt-20 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-12"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Filter className="w-6 h-6 text-gray-600 dark:text-gray-300 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Filter Events
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {eventCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      filter === category.id
                        ? "bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Loading State */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center items-center py-20"
            >
              <Card className="w-full max-w-md border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Spinner />
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Loading events...
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Error State */}
          {isError && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center items-center py-20"
            >
              <Card className="w-full max-w-md border-red-200 dark:border-red-800 bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                    Unable to Load Events
                  </h3>
                  <p className="text-red-600 dark:text-red-300 text-center">
                    Please try again later or contact support if the problem
                    persists.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Events Grid */}
          {data && data.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-12"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {data.length} Event{data.length !== 1 ? "s" : ""} Found
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((event, idx) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: idx * 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 120,
                    }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <EventCard event={event} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Featured Events */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Mark your calendars for these exciting upcoming events
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: idx * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{ y: -8 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-yellow-500 text-yellow-900 rounded-full text-sm font-semibold">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {event.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* Empty State */}
          {data && data.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center items-center py-20"
            >
              <Card className="w-full max-w-md border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    No Events Available
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Check back later for upcoming events and activities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
