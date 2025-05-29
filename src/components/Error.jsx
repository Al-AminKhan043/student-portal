export default function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="flex justify-center mt-6 py-100">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex items-center gap-3">
          <svg
            className="w-6 h-6 text-red-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 5.636l-12.728 12.728m0-12.728l12.728 12.728"
            />
          </svg>
          <p className="text-md font-semibold">{message}</p>
        </div>
      </div>
    </div>
  );
}
