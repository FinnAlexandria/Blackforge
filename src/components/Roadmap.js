export default function Roadmap(){
  const items = [
    {title:'Phase I — Forge',desc:'Seed community, teaser, early access.'},
    {title:'Phase II — Ignite',desc:'Launch, partnerships, listings.'},
    {title:'Phase III — Ascend',desc:'Ecosystem, NFTs, utilities.'}
  ];
  return (
    <section className="py-12">
      <h3 className="text-3xl gold-gradient mb-6">Roadmap</h3>
      <div className="flex flex-col gap-6">
        {items.map((it,idx)=>(
          <div key={idx} className="card flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center font-bold text-black">{idx+1}</div>
            <div>
              <h4 className="font-semibold">{it.title}</h4>
              <p className="opacity-75">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
