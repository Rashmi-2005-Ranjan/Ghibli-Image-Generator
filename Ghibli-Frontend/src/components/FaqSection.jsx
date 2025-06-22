import FaqCard from "./FaqCard.jsx";

const FaqSection = () => (
  <div className="bg-[#121212] text-white py-20 px-6">
    <div className="container mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-orange-400 drop-shadow">
        Frequently Asked Questions
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <FaqCard question="What is the Ghibli AI Generator?">
          Ghibli AI is a cutting-edge tool that transforms your photos or text prompts into enchanting artwork inspired by the visual style of Studio Ghibli. Using deep learning and style transfer techniques, it recreates your input with magical, hand-drawn aesthetics.
        </FaqCard>
        <FaqCard question="What are its main features?">
          Features include photo-to-art and text-to-art generation, scene customization, character creation, Ghibli-style background enhancement, and even animation-ready output. It’s all designed to match the iconic look of Ghibli classics.
        </FaqCard>
        <FaqCard question="Can I choose a specific Ghibli movie's style?">
          Yes! Select visual themes from beloved films like *Spirited Away*, *Howl’s Moving Castle*, or *My Neighbor Totoro*. You can tailor the mood, setting, and style to align with your vision.
        </FaqCard>
        <FaqCard question="Is it mobile-friendly?">
          Absolutely. Ghibli AI works seamlessly on both desktop and mobile browsers—no app install required. Just upload your input, and create magical art wherever you are.
        </FaqCard>
      </div>
    </div>
  </div>
);

export default FaqSection;
