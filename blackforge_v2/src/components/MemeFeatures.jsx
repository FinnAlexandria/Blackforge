export default function MemeFeatures(){
  const items=[
    {title:'Meme Powered',desc:'Kekuatan komunitas + humor = win.'},
    {title:'Chaos Energy',desc:'Semakin absurd semakin cuan.'},
    {title:'Degen Spirit',desc:'No roadmap, just vibes.'}
  ];
  return(
    <section className='py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10'>
      {items.map((x,i)=>(
        <div key={i} className='bg-white/5 p-8 rounded-2xl shadow-xl border border-white/10 hover:scale-105 transition'>
          <h2 className='text-3xl font-bold text-forgeYellow mb-3'>{x.title}</h2>
          <p className='opacity-75'>{x.desc}</p>
        </div>
      ))}
    </section>
  );
}
