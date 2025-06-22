const FeatureCard = ({ icon, title, children }) => (
    <div className="bg-[#1a1918] p-8 rounded-2xl shadow-md border border-gray-700 hover:shadow-orange-500/20 transition-all duration-300 group">
        <div className="bg-orange-500/10 text-orange-400 w-12 h-12 rounded-full flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
            {icon}
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
            {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
            {children}
        </p>
    </div>
);

export default FeatureCard;