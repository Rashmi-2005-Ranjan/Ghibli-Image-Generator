import { useState } from "react";
import ErrorMessage from "./ErrorMessage.jsx";
import Spinner from "./Spinner.jsx";
import { Download, FileText, PlusCircle } from "lucide-react";
import GhibliStyleDropdown from "./GhibliStyleDropdown.jsx";

const TextToImageSection = () => {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("general");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const isCreateDisabled = isLoading || !prompt.trim();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a scene description to continue.");
      return;
    }

    setIsLoading(true);
    setError(null);

    const payload = { prompt, style };

    try {
      const API_URL = "http://localhost:8080/api/v1/generate-from-text";
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${errorText}`);
      }

      const resultBlob = await response.blob();
      setGeneratedImage(URL.createObjectURL(resultBlob));
    } catch (error) {
      console.error("Error generating image:", error);
      setError("Image generation failed. Please check the backend or your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = `ghibli-ai-text-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCreateAnother = () => {
    setGeneratedImage(null);
    setPrompt("");
    setStyle("general");
    setError(null);
  };

  return (
    <div className="relative">
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}

      <div className="bg-gradient-to-br from-[#1e1e2f] to-[#2c2c3a] p-8 rounded-2xl shadow-2xl flex flex-col max-w-4xl mx-auto text-white backdrop-blur-md border border-white/10">
        <h2 className="text-xl font-semibold mb-4 text-white">Describe & Create Ghibli Art</h2>

        <div className="w-full h-80 flex justify-center items-center border-2 border-dashed border-white/20 rounded-xl bg-black/20 mb-6">
          {isLoading ? (
            <Spinner />
          ) : generatedImage ? (
            <img
              src={generatedImage}
              alt="Generated Ghibli art"
              className="h-full w-full rounded-lg object-contain p-2"
            />
          ) : (
            <div className="text-center text-gray-400">
              <FileText size={48} className="mx-auto mb-4" />
              <p>Your AI-crafted Ghibli scene will appear here.</p>
            </div>
          )}
        </div>

        {!generatedImage && (
          <>
            <div className="space-y-4">
              <GhibliStyleDropdown value={style} onChange={(e) => setStyle(e.target.value)} />
              <div>
                <label htmlFor="prompt-text" className="text-md font-semibold mb-2 block text-white">
                  Scene Description
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  id="prompt-text"
                  className="w-full p-3 bg-[#101010] text-white border border-white/20 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-700"
                  rows="3"
                  placeholder="Describe your magical scene — e.g., a cozy cottage by a lake under moonlight..."
                />
              </div>
            </div>
            <button
              onClick={handleGenerate}
              disabled={isCreateDisabled}
              className="mt-6 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed w-full cursor-pointer"
            >
              {isLoading ? "Creating..." : "Generate Ghibli Artwork"}
            </button>
          </>
        )}

        {generatedImage && (
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleDownload}
              className="flex-1 bg-white text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download size={20} /> Download
            </button>
            <button
              onClick={handleCreateAnother}
              className="flex-1 bg-orange-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <PlusCircle size={20} /> Create Another
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextToImageSection;
