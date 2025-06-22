import { useState } from "react";
import PhotoToImageSection from "../components/PhotoToImageSection.jsx";
import TextToImageSection from "../components/TextToImageSection.jsx";

const CreatePage = () => {
  const [activeTab, setActiveTab] = useState("photo");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-10 space-x-4 border-b border-gray-700 pb-4">
          <button
            onClick={() => setActiveTab("photo")}
            className={`px-6 py-2 text-lg font-semibold rounded-md transition duration-300 ${
              activeTab === "photo"
                ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-black shadow-md"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
            }`}
          >
            Photo to Art
          </button>
          <button
            onClick={() => setActiveTab("text")}
            className={`px-6 py-2 text-lg font-semibold rounded-md transition duration-300 ${
              activeTab === "text"
                ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-black shadow-md"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
            }`}
          >
            Text to Art
          </button>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
          {activeTab === "photo" && <PhotoToImageSection />}
          {activeTab === "text" && <TextToImageSection />}
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
