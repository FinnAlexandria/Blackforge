export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center bg-black/50 backdrop-blur-xl fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold tracking-widest">BLACKFORGE</h1>
      <button className="px-4 py-2 bg-red-600 rounded-xl hover:bg-red-700 transition">Join Community</button>
    </nav>
  );
}