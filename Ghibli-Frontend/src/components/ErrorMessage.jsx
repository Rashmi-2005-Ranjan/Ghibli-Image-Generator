const ErrorMessage = ({ message, onClose }) => (
  <div
    role="alert"
    className="fixed top-24 left-1/2 -translate-x-1/2 max-w-md w-full bg-red-100 border border-red-400 text-red-700 px-5 py-4 rounded-xl shadow-xl z-50 flex items-start gap-3"
  >
    <svg
      className="w-5 h-5 text-red-600 mt-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.702-1.14 1.197-2.06L13.197 4.94c-.526-.92-1.868-.92-2.394 0L3.885 16.94c-.505.92.143 2.06 1.197 2.06z"
      />
    </svg>
    <span className="flex-1 text-sm sm:text-base">{message}</span>
    <button
      onClick={onClose}
      className="ml-2 text-red-500 hover:text-red-700 text-lg font-bold leading-none"
      aria-label="Close error"
    >
      &times;
    </button>
  </div>
);

export default ErrorMessage;
