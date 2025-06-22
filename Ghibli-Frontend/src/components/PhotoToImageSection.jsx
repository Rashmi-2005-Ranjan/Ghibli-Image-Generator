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
      setError("Only valid image files are supported.");
      setUploadedImage(null);
      setUploadedFile(null);
    }
  };

  const handleGenerate = async () => {
    if (!uploadedFile) {
      setError("Upload a photo before generating!");
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", uploadedFile);
    formData.append("prompt", prompt);

    try {
      const response = await fetch("http://localhost:8080/api/v1/generate", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Status: ${response.status}. Message: ${errorText}`);
      }

      const resultBlob = await response.blob();
      setGeneratedImage(URL.createObjectURL(resultBlob));
    } catch (error) {
      console.error("Image generation error:", error);
      setError("Generation failed. Ensure the backend is active.");
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
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
      <div className="bg-black/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl flex flex-col text-gray-200">
        <h2 className="text-xl font-semibold mb-4">Upload Your Image</h2>

        <div className="flex-grow border-2 border-dashed border-gray-700 rounded-xl flex flex-col justify-center items-center text-center p-6 transition-colors">
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded preview"
              className="max-h-80 w-auto rounded-lg object-contain"
            />
          ) : (
            <div>
              <UploadIcon />
              <p className="text-gray-400">Drop your image here</p>
              <p className="text-gray-500 text-sm my-2">or</p>
              <button
                onClick={onBrowseClick}
                className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition cursor-pointer"
              >
                Browse Files
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
              <label htmlFor="prompt-photo" className="block mb-2 font-semibold">
                Describe the Mood or Scene
              </label>
              <textarea
                id="prompt-photo"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500"
                rows="3"
                placeholder="e.g., a misty forest with glowing spirits..."
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={isCreateDisabled}
              className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg w-full transition disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? "Transforming..." : "Generate Ghibli Art"}
            </button>
          </>
        )}

        {generatedImage && (
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleDownload}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download size={20} /> Download
            </button>
            <button
              onClick={handleCreateAnother}
              className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <PlusCircle size={20} /> Try Another
            </button>
          </div>
        )}
      </div>

      <div className="bg-black/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center border-2 border-gray-700 rounded-xl bg-black/20 min-h-[400px]">
          {isLoading ? (
            <Spinner />
          ) : generatedImage ? (
            <img
              src={generatedImage}
              alt="Generated Ghibli Art"
              className="max-h-[32rem] w-auto rounded-lg object-contain"
            />
          ) : (
            <p className="text-center text-gray-400 max-w-sm px-4">
              Once your Ghibli masterpiece is ready, it'll appear right here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoToImageSection;
