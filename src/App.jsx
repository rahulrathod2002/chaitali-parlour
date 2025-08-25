import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import BookAppointment from './pages/BookAppointment';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Offers from './pages/Offers';
import NotFound from './pages/NotFound';
import { Box } from '@mui/material';
import { AppProvider } from './context/AppContext'; // Will create this below

function App() {
  return (
    <AppProvider> {/* Wrap the entire application with the AppContext */ }
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <AboutUs /> } />
          <Route path="/services" element={ <Services /> } />
          <Route path="/gallery" element={ <Gallery /> } />
          <Route path="/book" element={ <BookAppointment /> } />
          <Route path="/testimonials" element={ <Testimonials /> } />
          <Route path="/blog" element={ <Blog /> } />
          <Route path="/blog/:blogSlug" element={ <Blog /> } /> {/* For single blog post */ }
          <Route path="/contact" element={ <ContactUs /> } />
          <Route path="/offers" element={ <Offers /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
        <FloatingWhatsApp />
        <Footer />
      </Box>
    </AppProvider>
  );
}

export default App;
