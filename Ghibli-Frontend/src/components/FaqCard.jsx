const FaqCard = ({ question, children }) => (
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-2xl border border-gray-700 transition-all duration-300 hover:shadow-yellow-500/10">
    <h3 className="text-2xl font-bold mb-4 text-yellow-400">{question}</h3>
    <p className="text-gray-300 leading-relaxed text-base">{children}</p>
  </div>
);

export default FaqCard;
