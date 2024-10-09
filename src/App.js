import React from 'react';
import AppNavbar from './components/AppNavBar';
import Header from './components/Header';
import TherapySection from './components/TherapySection';
import PeopleSection from './components/PeopleSection';
import DataDrivenSection from './components/DataDrivenSection';
import BalanceSection from './components/BalanceSection';
import QuoteSection from './components/QuoteSection';
import MediaAppearanceSection from './components/MediaAppearanceSection';
import SubmitFormSection from './components/SubmitFormSection';
import Footer from './components/Footer';
import StatsSection from './components/StatSection';
import BenefitSection from './components/BenefitSection';
import { Fade } from 'react-awesome-reveal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 


function App() {
  
    const handleScrollToSectionById = (id) => {
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <div>
      <AppNavbar 
 onScrollToTeam={() => handleScrollToSectionById('people-section')}
 onScrollToContact={() => handleScrollToSectionById('contact-section')}
      />
      <main>
        <Fade triggerOnce>
          <Header />
        </Fade>
        <Fade triggerOnce>
          <StatsSection />
        </Fade>
        <Fade triggerOnce>
          <TherapySection />
        </Fade>
        <Fade triggerOnce>
        <DataDrivenSection />
        </Fade>
        <Fade triggerOnce>
        <QuoteSection />
        </Fade>
        
        <Fade triggerOnce>
        <BalanceSection />
        </Fade>
        
        <Fade triggerOnce>
        <BenefitSection />
        </Fade>
        
        <Fade triggerOnce>
        <PeopleSection />
        </Fade>
        
        <Fade triggerOnce>
        <MediaAppearanceSection />
        </Fade>
        
        <Fade triggerOnce>
        <SubmitFormSection  />
        </Fade>
        
        <Footer />
        
      </main>
    </div>
  );
}



export default App;
