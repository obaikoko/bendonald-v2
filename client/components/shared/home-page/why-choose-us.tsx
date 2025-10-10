import React from "react";

const WhyChooseUs = () => {
  return (
    <div className=" py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold ">
          Why Choose Bendonalds School?
        </h1>
        <p className="text-lg italic  max-w-3xl mx-auto mt-4">
          Discover our commitment to nurturing excellence, creativity, and
          character.
        </p>
      </div>

      {/* Section 1 - Academic Excellence */}
      <section className="mb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between  shadow-lg rounded-lg overflow-hidden">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="images/exam.jpg"
              alt="Academic Excellence at Bendonald School"
              className="w-full h-full object-cover rounded"
            />
          </div>
          {/* Text */}
          <div className="lg:w-1/2 p-8">
            <h2 className="text-3xl font-semibold mb-4 ">
              Academic Excellence
            </h2>
            <p className="text-lg ">
              At Bendonalds School, we foster a love for learning through a
              rigorous academic curriculum that encourages critical thinking,
              creativity, and resilience. Our dedicated teachers ensure that
              every student reaches their highest potential.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Holistic Development */}
      <section className="mb-16">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between  shadow-lg rounded-lg overflow-hidden">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="images/holistic_development.jpg"
              alt="Holistic Development at Bendonald School"
              className="w-full h-full object-cover rounded"
            />
          </div>
          {/* Text */}
          <div className="lg:w-1/2 p-8">
            <h2 className="text-3xl font-semibold mb-4 ">
              Holistic Development
            </h2>
            <p className="text-lg 0">
              We believe in nurturing well-rounded individuals. Through our
              arts, sports, and leadership programs, students gain the
              confidence, skills, and empathy needed to excel in all areas of
              life.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Community and Values */}
      <section className="mb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between  shadow-lg rounded-lg overflow-hidden">
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="images/community_values.jpg"
              alt="Community and Values at Bendonald School"
              className="w-full h-full object-cover rounded"
            />
          </div>
          {/* Text */}
          <div className="lg:w-1/2 p-8">
            <h2 className="text-3xl font-semibold mb-4 ">
              Strong Community and Values
            </h2>
            <p className="text-lg ">
              Bendonalds Schools is built on a foundation of respect, integrity,
              and inclusivity. We cultivate a supportive environment where
              students feel valued, empowered, and motivated to contribute
              positively to their community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
