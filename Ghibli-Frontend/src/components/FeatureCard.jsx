const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 flex flex-col transition-transform hover:scale-[1.02] duration-300">
    <div className="bg-orange-500/20 text-orange-400 w-14 h-14 rounded-full flex items-center justify-center mb-5 shadow-inner">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{children}</p>
  </div>
);

export default FeatureCard;
