import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full bg-gradient-to-br from-[#0c0a09] via-[#1f1d1b] to-[#121212] text-white py-24 lg:py-40 px-6 overflow-hidden">
            {/* Subtle starry overlay or abstract backdrop */}
            <div className="absolute inset-0 bg-[url('/ghibli-dark-bg.png')] bg-cover bg-center opacity-20 pointer-events-none" />

            <div className="container mx-auto flex flex-col items-center justify-center text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-fade-in">
                    Reimagine Your World <br className="hidden md:block" />
                    in Ghibli-Inspired Magic
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10 animate-fade-in delay-100">
                    Turn your favorite moments into enchanting Ghibli-style art using our advanced AI generator.
                    All you need is a photo—and a little imagination.
                </p>

                <button
                    onClick={() => navigate('/create')}
                    className="bg-orange-600 hover:bg-orange-500 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl transition-transform transform hover:scale-105 flex items-center gap-2 animate-fade-in delay-200 cursor-pointer"
                >
                    <Sparkles className="w-5 h-5" />
                    Try Ghibli AI Now
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
