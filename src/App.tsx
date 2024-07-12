import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import LuxuriousRooms from './components/LuxuriousRooms';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col bg-white ">
        <Header logo="https://cdn.builder.io/api/v1/image/assets/TEMP/05d1a3fd8ad1bbba8e75f243365ac347dcf8fe15e1c1e68a726c170254310c83?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&" />
        <Hero
          title="Paradise View"
          subtitle="Hotel for every moment rich in emotion"
          description="Every moment feels like the first time in paradise view"
          ctaText="Book now"
          heroImage="https://cdn.builder.io/api/v1/image/assets/TEMP/dabe5ca54f5736654debce63efb47b1e0a100f55eb43c2d8891c8d68fea777dc?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&"
        />
        <Facilities />
        <LuxuriousRooms />
        <Testimonials />
        <Footer />
      </div>
    </Router>
  );
}