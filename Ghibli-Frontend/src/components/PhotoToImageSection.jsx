import Spinner from "./Spinner.jsx";
import UploadIcon from "./UploadIcon.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import { useRef, useState } from "react";
import { Download, PlusCircle } from "lucide-react";

const PhotoToImageSection = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const isCreateDisabled = isLoading || !uploadedFile;

  const onBrowseClick = () => fileInputRef.current.click();

  const handleFileChange = (file) => {
    if (file && file.type.startsWith("image/")) {
      setUploadedFile(file);
      setUploadedImage(URL.createObjectURL(file));
      setGeneratedImage(null);
      setError(null);
    } else {
      setError("Please upload a valid image file.");
      setUploadedImage(null);
      setUploadedFile(null);
    }
  };

  const handleGenerate = async () => {
    if (!uploadedFile) {
      setError("Please upload an image first!");
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", uploadedFile);
    formData.append("prompt", prompt);

    try {
      const API_URL = "http://localhost:8080/api/v1/generate";
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Network response was not ok. Status: ${response.status}. Message: ${errorText}`
        );
      }

      const resultBlob = await response.blob();
      setGeneratedImage(URL.createObjectURL(resultBlob));
    } catch (error) {
      console.error("Error generating image:", error);
      setError(
        "Failed to generate image. Please ensure the backend is running and check the console."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = `ghibli-art-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCreateAnother = () => {
    setUploadedFile(null);
    setUploadedImage(null);
    setGeneratedImage(null);
    setPrompt("");
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white">
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}

      {/* Upload & Prompt Panel */}
      <div className="bg-[#1a1918]/80 backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col">
        <h2 className="text-[20px] font-semibold mb-6 text-orange-400">Turn Your Photo into a Ghibli Masterpiece</h2>

        <div className="flex-grow border-2 border-dashed border-gray-600 rounded-xl flex flex-col justify-center items-center text-center p-6 transition-colors">
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded preview"
              className="max-h-80 w-auto rounded-lg object-contain"
            />
          ) : (
            <div>
              <UploadIcon />
              <p className="text-gray-400">Drop your image here to begin your magical journey</p>
              <p className="text-gray-500 text-sm my-2">or</p>
              <button
                onClick={onBrowseClick}
                className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
              >
                Upload from device
              </button>
              <input
                ref={fileInputRef}
                onChange={(e) => handleFileChange(e.target.files[0])}
                type="file"
                className="hidden"
                accept="image/*"
              />
            </div>
          )}
        </div>

        {!generatedImage && (
          <>
            <div className="mt-6">
              <label htmlFor="prompt-photo" className="text-md font-semibold block mb-2 text-white">
                Customize the Scene (Optional)
              </label>
              <textarea
                id="prompt-photo"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full p-3 bg-[#262524] border border-gray-700 rounded-lg text-white"
                rows="2"
                placeholder="Describe mood, setting, or elements (e.g., foggy forest, flying creatures)..."
              ></textarea>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isCreateDisabled}
              className="mt-6 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed w-full cursor-pointer"
            >
              {isLoading ? "Crafting Ghibli Art..." : "Generate Ghibli-Style Artwork"}
            </button>
          </>
        )}

        {generatedImage && (
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleDownload}
              className="flex-1 bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download size={20} /> Save Artwork
            </button>
            <button
              onClick={handleCreateAnother}
              className="flex-1 bg-orange-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <PlusCircle size={20} /> Start New Creation
            </button>
          </div>
        )}
      </div>

      {/* Output Panel */}
      <div className="bg-[#1a1918]/80 backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center">
        <div className="w-full h-full flex justify-center items-center border-2 border-gray-700 rounded-xl bg-[#121110] min-h-[400px]">
          {isLoading ? (
            <Spinner />
          ) : generatedImage ? (
            <img
              src={generatedImage}
              alt="Final Ghibli art"
              className="max-h-[32rem] w-auto rounded-lg object-contain"
            />
          ) : (
            <p className="text-center text-gray-500 max-w-sm">
              Your magical Ghibli-style image will be displayed here after generation.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoToImageSection;
