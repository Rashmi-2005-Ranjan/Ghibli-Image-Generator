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
        "Watch our AI breathe Ghibli-style magic into ordinary scenery — this mountain lake becomes a serene, storybook world filled with vibrant colors and mystical charm.",
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
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-white mb-14">
          Ghibli AI Gallery: Magical Worldbuilding in Action
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {topGalleryItems.map((item, index) => (
            <GalleryCard
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
            />
          ))}
        </div>

        {/* Transformation Stories */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 text-center sm:text-left">
                {section.title}
              </h3>
              <p className="text-gray-300 mb-6 text-center sm:text-left max-w-3xl">
                {section.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {section.images.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-64 object-cover border border-gray-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stories Component */}
        <div className="mt-16">
          <GalleryStories />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
