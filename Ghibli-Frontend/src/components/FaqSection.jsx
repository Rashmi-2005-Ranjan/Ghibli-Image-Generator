import FaqCard from "./FaqCard.jsx";

const FaqSection = () => (
  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6">
    <div className="container mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-white mb-14">
        Common Questions About Ghibli AI
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <FaqCard question="How does the Ghibli AI Generator work?">
          Our AI platform turns your photos or text prompts into unique artwork styled after beloved Studio Ghibli films. It’s trained to replicate the dreamy aesthetics of Ghibli with precision and creativity.
        </FaqCard>
        <FaqCard question="What can I create using the Ghibli AI?">
          You can transform photos into Ghibli-style illustrations, generate scenes from text, create characters, extend landscapes, and prep animation-style frames—all in that magical Ghibli feel.
        </FaqCard>
        <FaqCard question="Can I choose specific movie styles like Totoro or Mononoke?">
          Yes! Select visual themes inspired by films like *Spirited Away*, *Princess Mononoke*, or *My Neighbor Totoro* to guide the mood, detail, and art direction of your output.
        </FaqCard>
        <FaqCard question="Is it mobile-friendly?">
          Definitely. Ghibli AI works seamlessly on mobile and desktop browsers, so you can create and explore anytime, anywhere.
        </FaqCard>
      </div>
    </div>
  </div>
);

export default FaqSection;
