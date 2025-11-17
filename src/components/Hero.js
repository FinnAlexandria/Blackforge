export default function Hero(){
  return (
    <section className="min-h-screen flex items-center justify-center hero-bg" style={{paddingTop: '4.5rem'}}>
      <div className="container text-center py-24">
        <h2 className="text-6xl font-display gold-gradient mb-6">BLACKFORGE</h2>
        <p className="max-w-3xl mx-auto opacity-80 text-lg mb-8">Forged for the elite. A premium meme token crafted with precision — announcement soon.</p>
        <div className="flex items-center justify-center gap-4">
          <button className="btn-gold">Request Invite</button>
          <a href="#" className="text-sm opacity-60 underline">Read Whitepaper</a>
        </div>
      </div>
    </section>
  );
}
