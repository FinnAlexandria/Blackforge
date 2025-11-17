export default function Navbar(){
  return(
    <nav className='p-4 flex justify-between items-center bg-black/70 backdrop-blur-xl fixed top-0 left-0 w-full z-50 border-b border-white/10'>
      <h1 className='text-3xl font-extrabold text-forgePink drop-shadow-lg'>BLACKFORGE</h1>
      <button className='px-4 py-2 bg-forgeYellow text-black font-bold rounded-xl hover:scale-105 transition'>Join Community</button>
    </nav>
  );
}
