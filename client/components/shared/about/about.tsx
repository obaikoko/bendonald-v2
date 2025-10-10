import Link from "next/link";

const About = () => {
  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold  mb-4">
          School Life at Bendonalds International Schools
        </h1>
        <p className="text-lg  font-medium">
          A Vibrant, Enriching Experience for Every Student
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className=" shadow-md rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-semibold  mb-6">
            Unlocking Potential Beyond the Classroom
          </h2>

          <p className=" leading-relaxed text-base md:text-lg mb-8">
            At Bendonalds International School Calabar, we believe that
            education is a holistic experience. Our students enjoy a dynamic
            school life filled with opportunities to engage in sports, music,
            arts, and leadership activities. With a variety of clubs, societies,
            and community projects, we encourage each child to develop new
            skills, nurture personal passions, and become an active part of our
            school community.
          </p>

          <Link
            href="/admission"
            className="inline-block bg-blue-950 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full shadow-lg hover:bg-blue-900 transition duration-300"
          >
            Join Our School Community
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
