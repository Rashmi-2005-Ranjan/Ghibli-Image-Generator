import FeatureCard from "./FeatureCard.jsx";
import { Eye, FileClock, Sparkles } from "lucide-react";

const FeaturesSection = () => (
  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6">
    <div className="container mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-white mb-14">
        Key Features of Ghibli AI
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        <FeatureCard icon={<Eye size={26} />} title="Accurate Ghibli-Style Transformation">
          Our advanced algorithms transform your photos into Ghibli-inspired illustrations while preserving key details and personality—just like scenes from your favorite films.
        </FeatureCard>
        <FeatureCard icon={<FileClock size={26} />} title="Lightning-Fast Rendering">
          Experience near-instant Ghibli art generation. Our engine is optimized to deliver high-quality visuals within seconds—no long waits, just fast magic.
        </FeatureCard>
        <FeatureCard icon={<Sparkles size={26} />} title="Magical Visual Fidelity">
          Every piece is rich in Ghibli-style charm. From dreamy lighting to hand-drawn textures, your creations radiate the whimsical warmth of the Ghibli universe.
        </FeatureCard>
      </div>
    </div>
  </div>
);

export default FeaturesSection;
