import { useState } from "react";
import ErrorMessage from "./ErrorMessage.jsx";
import Spinner from "./Spinner.jsx";
import { Download, FileText, PlusCircle } from "lucide-react";
import GhibliStyleDropdown from "./GhibliStyleDropdown.jsx";

const TextToImageSection = () => {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('general');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const isCreateDisabled = isLoading || !prompt.trim();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please describe your Ghibli-inspired scene before generating.");
      return;
    }

    setIsLoading(true);
    setError(null);

    const payload = { prompt, style };

    try {
      const API_URL = 'http://localhost:8080/api/v1/generate-from-text';
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Status: ${response.status} – ${errorText}`);
      }

      const resultBlob = await response.blob();
      setGeneratedImage(URL.createObjectURL(resultBlob));
    } catch (error) {
      console.error('Text-to-image generation failed:', error);
      setError("Oops! Couldn't generate the image. Is your backend running?");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `ghibli-text-art-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCreateAnother = () => {
    setGeneratedImage(null);
    setPrompt('');
    setStyle('general');
    setError(null);
  };

  return (
    <div className="relative px-4 sm:px-8 py-12">
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
      <div className="bg-[#1e1d1c]/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-4xl mx-auto text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-400">
          Text to Ghibli-Style Art
        </h2>

        {/* Display Canvas */}
        <div className="w-full h-80 flex justify-center items-center border-2 border-gray-700 rounded-xl bg-[#2b2a28] mb-6">
          {isLoading ? (
            <Spinner />
          ) : generatedImage ? (
            <img
              src={generatedImage}
              alt="Generated Ghibli Art"
              className="h-full w-full rounded-lg object-contain p-2"
            />
          ) : (
            <div className="text-center text-gray-400 px-6">
              <FileText size={44} className="mx-auto mb-4 text-orange-300" />
              <p className="text-sm">Describe a magical moment, and we’ll bring it to life—Studio Ghibli style.</p>
            </div>
          )}
        </div>

        {/* Prompt Form */}
        {!generatedImage && (
          <>
            <div className="space-y-5">
              <GhibliStyleDropdown
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              />

              <div>
                <label
                  htmlFor="prompt-text"
                  className="text-sm font-medium mb-1 block text-gray-300"
                >
                  Describe Your Scene
                </label>
                <textarea
                  id="prompt-text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full p-3 rounded-lg bg-[#2c2b29] border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-700"
                  rows="3"
                  placeholder="Example: A peaceful forest with floating lanterns and a spirited creature in the distance..."
                />
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isCreateDisabled}
              className="mt-6 w-full bg-orange-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-800 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? "Generating..." : "Generate My Ghibli Artwork"}
            </button>
          </>
        )}

        {/* Action Buttons */}
        {generatedImage && (
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleDownload}
              className="flex-1 bg-gray-200 cursor-pointer text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 flex items-center justify-center gap-2"
            >
              <Download size={20} /> Download
            </button>
            <button
              onClick={handleCreateAnother}
              className="cursor-pointer flex-1 bg-orange-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-800 flex items-center justify-center gap-2"
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
