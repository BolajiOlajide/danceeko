export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-black text-white mb-4">404</h1>
        <p className="text-xl text-gray-400">Page not found</p>
        <a href="/" className="mt-6 inline-block text-blue-400 hover:text-blue-300">
          Go back home
        </a>
      </div>
    </div>
  );
}
