import GlobalStyle from "./styles/GlobalStyle";
import HeroSection from './sections/HeroSection';
import IntroSection from './sections/IntroSection';
import FeatureSection from './sections/FeatureSection';
import KeywordSection from './sections/KeywordSection';
import DetailSection from './sections/DetailSection';
import ProductInfoSection from './sections/ProductInfoSection';
import ProductListSection from './sections/ProductListSection';
import Footer from './sections/Footer';
import Header from "./components/Header";
import FooterScrollProgressBar from "./components/FooterScrollProgressBar";
function App() {
  return (
    <>
    <GlobalStyle />
    <Header />
    <FooterScrollProgressBar />
    <HeroSection />
      <IntroSection />
      <FeatureSection />
      <KeywordSection />
      <DetailSection />
      <ProductInfoSection />
      <ProductListSection />

    
     
      <Footer />
    </>
  );
}

export default App;