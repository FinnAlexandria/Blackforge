export default function Tokenomics(){
  return (
    <section className="py-12">
      <h3 className="text-3xl gold-gradient mb-6">Tokenomics</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <h4 className="font-semibold">Total Supply</h4>
          <p className="opacity-75">1,000,000,000</p>
        </div>
        <div className="card">
          <h4 className="font-semibold">Launch Allocation</h4>
          <p className="opacity-75">50% Liquidity • 30% Community • 20% Team (vesting)</p>
        </div>
        <div className="card">
          <h4 className="font-semibold">Fair Launch</h4>
          <p className="opacity-75">No private sale — community driven.</p>
        </div>
      </div>
    </section>
  );
}
