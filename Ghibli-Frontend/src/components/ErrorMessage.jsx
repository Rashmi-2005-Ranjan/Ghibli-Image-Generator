const ErrorMessage = ({ message, onClose }) => (
  <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-900 to-red-700 border border-red-500 text-white px-5 py-3 rounded-xl shadow-2xl z-50 flex items-center gap-4 animate-fade-in">
    <span className="text-sm sm:text-base font-medium">{message}</span>
    <button
      onClick={onClose}
      className="text-white hover:text-red-200 text-lg font-bold transition duration-200 cursor-pointer"
      aria-label="Close"
    >
      &times;
    </button>
  </div>
);

export default ErrorMessage;
