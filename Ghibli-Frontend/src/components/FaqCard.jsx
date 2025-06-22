const FaqCard = ({ question, children }) => (
  <div className="bg-[#1e1e1e] border border-gray-700 p-6 sm:p-8 rounded-2xl shadow-xl transition duration-300 hover:shadow-2xl">
    <h3 className="text-lg sm:text-xl font-semibold text-orange-400 mb-3">{question}</h3>
    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
      {children}
    </p>
  </div>
);

export default FaqCard;
