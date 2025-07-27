export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="text-yellow-500 underline">Return</a>
    </div>
  );
}
