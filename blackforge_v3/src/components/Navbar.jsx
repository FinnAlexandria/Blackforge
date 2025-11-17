export default function Navbar(){
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <img src="/assets/logo_luxury.png" alt="Blackforge" className="h-10 w-10 object-contain rounded-md shadow-sm"/>
          <h1 className="text-lg font-serif gold-gradient">BLACKFORGE</h1>
        </div>
        <div>
          <button className="btn-gold">Join Private</button>
        </div>
      </div>
    </header>
  );
}
