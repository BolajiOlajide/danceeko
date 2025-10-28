'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-black text-white mb-4">Oops!</h1>
        <p className="text-xl text-gray-400 mb-6">Something went wrong</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
