export default function Features() {
  return (
    <section className="py-20 px-6 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {["Fair Launch", "Meme-Powered", "Community Driven"].map((item, idx) => (
        <div key={idx} className="p-6 bg-white/5 rounded-2xl shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-3">{item}</h2>
          <p className="opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      ))}
    </section>
  );
}
