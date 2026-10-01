function Hero() {
  return (
    <section className="text-center py-24">
      <h1 className="text-6xl font-bold">
        Build Something{" "}
        <span className="text-blue-600">Awesome</span>
      </h1>

      <p className="text-gray-500 mt-6 text-lg">
        A simple React JS website created using reusable
        React components and Tailwind CSS.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </button>

        <button className="border px-6 py-3 rounded-lg hover:bg-gray-100">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;