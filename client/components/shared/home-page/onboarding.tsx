import React from "react";
import { FaFileAlt, FaCalendarCheck, FaUserCheck } from "react-icons/fa";

const Onboarding = () => {
  return (
    <section className=" py-16 px-4 lg:px-16">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold">
          Your Path to Joining Us
        </p>
        <h1 className="text-4xl font-extrabold  mt-2">
          Start Your Journey with Three Simple Steps
        </h1>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="flex-1 mb-8 md:mb-0  shadow-lg rounded-lg p-8 transition duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-center mb-6">
            <FaFileAlt className="text-4xl " />
          </div>
          <h3 className="text-2xl font-bold  mb-4 text-center">
            1. Complete the Application
          </h3>
          <p className=" text-center">
            Begin by filling out our online application or pick up a form at our
            campus. Make sure to provide accurate information to streamline the
            process.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex-1 mb-8 md:mb-0  shadow-lg rounded-lg p-8 transition duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-center mb-6">
            <FaCalendarCheck className="text-4xl " />
          </div>
          <h3 className="text-2xl font-bold  mb-4 text-center">
            2. Schedule a Visit & Assessment
          </h3>
          <p className=" text-center">
            Once your application is received, arrange for a convenient time for
            an assessment and campus tour to experience our vibrant school
            community.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex-1  shadow-lg rounded-lg p-8 transition duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-center mb-6">
            <FaUserCheck className="text-4xl " />
          </div>
          <h3 className="text-2xl font-bold  mb-4 text-center">
            3. Finalize Enrollment
          </h3>
          <p className=" text-center">
            Complete the enrollment by submitting any required documents and
            fees. We look forward to welcoming you into the Bendonald
            International School family!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
