import '@fontsource/lobster';
import '@fontsource-variable/inter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryListing from './components/CategoryListing';
import RecipeListing from './components/RecipeListing';

import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AnnouncementBar from './components/AnnouncementBar';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Navbar />
      
      
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
            <AnnouncementBar text={"Tiffin Service is also Available for Noida Sector-76"} />
              <Hero />
              <CategoryListing />
              <RecipeListing />
              {/* <CallToAction /> */}
              <Newsletter />
              <Footer />
              <WhatsAppButton />
            </>
          }
        />

        {/* Menu Page */}
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
