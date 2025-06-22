import FeatureCard from "./FeatureCard.jsx";
import { Eye, FileClock, Sparkles } from "lucide-react";

const FeaturesSection = () => (
    <section className="bg-[#0e0d0c] text-white py-24 px-6">
        <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                Why Choose Ghibli AI?
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
                <FeatureCard
                    icon={<Eye size={28} className="text-orange-400" />}
                    title="High Accuracy Ghibli Art Generation"
                >
                    Our advanced AI captures the soul of your photo while painting it in authentic Studio Ghibli style. Each piece stays true to your original while feeling straight out of a Miyazaki masterpiece.
                </FeatureCard>

                <FeatureCard
                    icon={<FileClock size={28} className="text-orange-400" />}
                    title="Lightning-Fast Image Processing"
                >
                    Get magical results in seconds. Our optimized engine delivers quick, high-resolution Ghibli transformations without compromising quality.
                </FeatureCard>

                <FeatureCard
                    icon={<Sparkles size={28} className="text-orange-400" />}
                    title="Stunning Studio Ghibli Quality"
                >
                    Every image shines with breathtaking clarity, vivid colors, and signature Ghibli charm — as if it were animated by Studio Ghibli themselves.
                </FeatureCard>
            </div>
        </div>
    </section>
);

export default FeaturesSection;
