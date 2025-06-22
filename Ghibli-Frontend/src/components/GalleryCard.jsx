const GalleryCard = ({ imageSrc, title }) => {
  return (
    <div className="rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/20 bg-gray-900 border border-gray-800">
      {/* Image container */}
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden flex items-center justify-center bg-gray-800">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x300/1f2937/94a3b8?text=Image+Unavailable`;
          }}
        />
      </div>
      {/* Optional: Title below image */}
      <div className="px-4 py-3 text-center bg-gray-950 text-gray-300 text-sm font-medium">
        {title}
      </div>
    </div>
  );
};

export default GalleryCard;
