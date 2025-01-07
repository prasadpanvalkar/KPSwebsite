
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ServicesPricing from './components/ServicesPricing';
import OurWork from './components/OurWork';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <>
      <div>
        <Header />
        <section
          id="home"
          
        >
          <HeroSection />
        </section>

        <section
          id="aboutus"
          
        >
          <AboutUs />
        </section>
        <section
          id="ourwork"
          
        >
          <OurWork />
        </section>
        <WhyChooseUs />
        <section
          id="services"
          
        >
          <ServicesPricing />
        </section>

        <section
          id="contactus"
          
        >
          <ContactUs />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
