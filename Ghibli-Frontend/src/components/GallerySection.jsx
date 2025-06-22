import GalleryCard from "./GalleryCard.jsx";
import { assets } from "../assets/assets.js";
import GalleryStories from "./GalleryStories.jsx";

const GallerySection = () => {
  const topGalleryItems = [
    {
      imageSrc: assets.grid_1,
      title: "Whimsical Forest Dweller",
    },
    {
      imageSrc: assets.grid_2,
      title: "Sky Pirate's Retreat",
    },
    {
      imageSrc: assets.grid_3,
      title: "Spirited River Journey",
    },
    {
      imageSrc: assets.grid_4,
      title: "Enchanted Garden Spirit",
    },
  ];

  const sections = [
    {
      title: "Mountain Lake Ghibli Transformation",
      description:
        "Watch our Ghibli AI breathe new life into a simple mountain lake, transforming it into a dreamlike Ghibli world — filled with serenity, charm, and hand-drawn magic.",
      images: [
        {
          src: "https://placehold.co/400x300/A0D9B5/000000?text=Original+Lake",
          alt: "Original Mountain Lake",
        },
        {
          src: "https://placehold.co/400x300/87CEEB/000000?text=Ghibli+Lake",
          alt: "Ghibli Mountain Lake Transformation",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#0e0e0e] text-white py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-orange-400 drop-shadow-lg">
          Step Into a Ghibli-Inspired World
        </h2>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {topGalleryItems.map((item, index) => (
            <GalleryCard key={index} imageSrc={item.imageSrc} title={item.title} />
          ))}
        </div>

        {/* Transformation Stories */}
        <div className="space-y-16 sm:space-y-20">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-[#1b1a1a] border border-gray-700 rounded-xl p-8 shadow-xl transition hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">{section.title}</h3>
              <p className="text-gray-400 mb-6">{section.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {section.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className="rounded-lg border border-gray-600 object-cover w-full h-64"
                  />
                ))}
              </div>
            </div>
          ))}

          {/* External Stories */}
          <GalleryStories />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
