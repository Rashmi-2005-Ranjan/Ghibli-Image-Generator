import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black py-24 lg:py-40 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-wide drop-shadow-lg">
          Reimagine Your Photos<br /> in a World of Ghibli Wonder
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Step into a storybook with our Ghibli-style AI image generator—where every photo becomes a cinematic moment from a magical universe.
        </p>
        <button
          onClick={() => navigate("/create")}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-xl shadow-md transition-transform transform hover:scale-105 cursor-pointer"
        >
          Begin Your Journey
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
