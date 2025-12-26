import Hero from './Hero';
import RecommendedDishes from './RecommendedDishes';
import MenuSection from './MenuSection';
import ReservationSection from './ReservationSection';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
       <div id="home">
          <Hero />
       </div>

       <RecommendedDishes />
       
       <div id="menu">
          <MenuSection />
       </div>

       <div id="reservation">
          <ReservationSection />
       </div>

       <Testimonials/>

       <div id="about">
          <AboutUs />
       </div>
       
       <div id="contact">
          <Footer />
       </div>
    </div>
  );
};

export default Home;