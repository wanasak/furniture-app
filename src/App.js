import Hero from "./components/Hero";
import NewItems from "./components/NewItems";
import Features from "./components/Features";
import FeaturesSeconds from "./components/FeaturesSeconds";
import Products from "./components/Products";
import Testinomial from "./components/Testinomial";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Header />
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSeconds />
      <Products />
      <Testinomial />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
