import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center text-center py-20 bg-blue-50">
      <h1 className="text-4xl font-extrabold text-gray-800 md:text-6xl">
        Your Stores AI Concierge
      </h1>
      <p className="mt-4 text-lg text-gray-600 md:text-xl">
        Elevate your storefront with AI-powered solutions.
      </p>
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Learn More
        </button>
        <button className="px-6 py-3 text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50">
          Get Started
        </button>
      </div>
      <Image
        src="/hero-image.jpg"
        alt="Hero Image"
        className="absolute bottom-0 w-full max-w-6xl"
        width={1920}
        height={1080}
      />
    </section>
  );
}
