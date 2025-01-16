import Image from "next/image";

export default function AITeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Meet your AI Team</h2>
        <p className="mt-4 text-gray-600">
          AI-driven tools to transform your business.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Example card */}
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <Image
              src="/ai-team-1.jpg"
              alt="AI Team"
              className="w-full h-48 rounded-md object-cover"
              width={100}
              height={100}
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-700">
              AI Assistant
            </h3>
            <p className="mt-2 text-gray-600">
              Enhance customer interactions with AI.
            </p>
            <button className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Learn More
            </button>
          </div>
          {/* Repeat for other cards */}
        </div>
      </div>
    </section>
  );
}
