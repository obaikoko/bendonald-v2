'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const images = [
    { src: '/images/chemistry1.jpg', title: 'Chemistry Laboratory', category: 'Laboratory', description: 'Students conducting chemistry experiments in our state-of-the-art laboratory.' },
    { src: '/images/chemistry2.jpg', title: 'Advanced Chemistry', category: 'Laboratory', description: 'Advanced chemistry experiments showcasing student innovation.' },
    { src: '/images/computer1.jpg', title: 'Computer Lab Session', category: 'Technology', description: 'Students learning computer skills in our modern computer laboratory.' },
    { src: '/images/lab7.jpg', title: 'Physics Laboratory', category: 'Laboratory', description: 'Physics experiments demonstrating scientific principles.' },
    { src: '/images/lab1.jpg', title: 'Biology Laboratory', category: 'Laboratory', description: 'Biology students exploring the wonders of life sciences.' },
    { src: '/images/lab2.jpg', title: 'Science Research', category: 'Laboratory', description: 'Students engaged in scientific research and discovery.' },
    { src: '/images/lab3.jpg', title: 'Laboratory Work', category: 'Laboratory', description: 'Hands-on laboratory experience for practical learning.' },
    { src: '/images/bus2.jpg', title: 'School Transportation', category: 'Transportation', description: 'Safe and reliable transportation for our students.' },
    { src: '/images/class1.jpg', title: 'Modern Classroom', category: 'Academic', description: 'Well-equipped classrooms designed for effective learning.' },
    { src: '/images/class3.jpg', title: 'Learning Environment', category: 'Academic', description: 'Conducive learning environment for academic excellence.' },
    { src: '/images/creche1.jpg', title: 'Early Years Program', category: 'Early Years', description: 'Nurturing environment for our youngest learners.' },
    { src: '/images/assemble1.jpg', title: 'Morning Assembly', category: 'School Life', description: 'Daily morning assembly fostering community spirit.' },
    { src: '/images/assemble2.jpg', title: 'School Community', category: 'School Life', description: 'Building a strong school community through shared experiences.' },
    { src: '/images/building1.jpg', title: 'School Campus', category: 'Campus', description: 'Beautiful campus environment for learning and growth.' },
    { src: '/images/building2.jpg', title: 'School Facilities', category: 'Campus', description: 'Modern facilities supporting educational excellence.' },
    { src: '/images/building3.jpg', title: 'Learning Spaces', category: 'Campus', description: 'Diverse learning spaces for different educational needs.' },
  ];

  const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/building1.jpg"
          alt="Bendonalds International Schools Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20  to-blue-900/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <Camera className="w-20 h-20 mx-auto mb-6 " />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Explore the vibrant moments and facilities that make Bendonalds International Schools 
              a special place for learning and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="px-6 py-3 bg-blue-500 rounded-full font-semibold">
                Academic Excellence
              </span>
              <span className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold">
                Modern Facilities
              </span>
              <span className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold">
                Student Life
              </span>
            </div>
          </div>
        </div>
          </div>

      {/* Filter and View Controls */}
      <div className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-yellow-400 to-red-500 text-white shadow-lg'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                {category}
              </Button>
            ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-lg"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-lg"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square relative">
                <Image
                  width={400}
                  height={400}
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-blue-200">{image.category}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Camera className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-64 h-48 md:h-auto">
                    <Image
                      width={400}
                      height={300}
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-yellow-500 text-yellow-900 rounded-full text-sm font-semibold">
                        {image.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {image.description}
                    </p>
                    <div className="mt-4 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <Camera className="w-4 h-4" />
                      <span>Click to view full size</span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">No Images Found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              No images found in the selected category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="relative">
              <Image
                width={1000}
                height={700}
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-blue-200 mb-2">
                  {filteredImages[selectedImage].category}
                </p>
                <p className="text-gray-200">
                  {filteredImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
