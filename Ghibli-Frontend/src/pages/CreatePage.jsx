import { useState } from "react";
import PhotoToImageSection from "../components/PhotoToImageSection.jsx";
import TextToImageSection from "../components/TextToImageSection.jsx";

const CreatePage = () => {
  const [activeTab, setActiveTab] = useState("photo");

  return (
    <div className="min-h-screen bg-[#121212] bg-gradient-to-b from-[#1a1a1a] to-[#0e0e0e] text-white py-12 px-4 sm:px-8">
      {/* Tab Selector */}
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-10 border-b border-gray-700">
          <button
            onClick={() => setActiveTab("photo")}
            className={`px-6 py-3 text-lg font-semibold transition-all duration-300 border-b-2 cursor-pointer ${
              activeTab === "photo"
                ? "border-orange-500 text-orange-400"
                : "border-transparent text-gray-400 hover:text-orange-300"
            }`}
          >
            🖼️ Photo to Art
          </button>
          <button
            onClick={() => setActiveTab("text")}
            className={`px-6 py-3 text-lg font-semibold transition-all duration-300 border-b-2 cursor-pointer ${
              activeTab === "text"
                ? "border-orange-500 text-orange-400"
                : "border-transparent text-gray-400 hover:text-orange-300"
            }`}
          >
            ✍️ Text to Art
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-[#1b1b1b] backdrop-blur-sm shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-800">
          {activeTab === "photo" && <PhotoToImageSection />}
          {activeTab === "text" && <TextToImageSection />}
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
