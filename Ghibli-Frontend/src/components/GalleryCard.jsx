const GalleryCard = ({ imageSrc, title }) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-orange-500/20 bg-[#1e1d1c] border border-gray-700">
      {/* Image container with consistent aspect ratio */}
      <div className="w-full h-56 md:h-64 lg:h-72 overflow-hidden bg-[#2a2a29] flex items-center justify-center">
        <img
          src={imageSrc}
          alt={title || "Ghibli styled artwork"}
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x300/1e1d1c/ffffff?text=Image+Unavailable";
          }}
        />
      </div>
      {title && (
        <div className="p-4 text-center text-gray-300 text-sm border-t border-gray-700 bg-[#1e1d1c]">
          {title}
        </div>
      )}
    </div>
  );
};

export default GalleryCard;
