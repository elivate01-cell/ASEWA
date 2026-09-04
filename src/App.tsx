import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { NewDrop } from '@/components/NewDrop';
import { Collection } from '@/components/Collection';
import { Lagos } from '@/components/Lagos';
import { Lookbook } from '@/components/Lookbook';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <NewDrop />
        <Collection />
        <Lagos />
        <Lookbook />
      </main>
      <Footer />
    </div>
  );
}

export default App;
