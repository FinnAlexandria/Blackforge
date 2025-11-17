import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Tokenomics from '../components/Tokenomics';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section className="container py-16">
        <Tokenomics />
        <Roadmap />
      </section>
      <Footer />
    </main>
  );
}
 
