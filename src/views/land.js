import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import AppWorks from '../components/home/works';
import AppFaq from '../components/home/faq';
import AppOurBoard from '../components/home/OurBoard';
import AppContact from '../views/contact';
import TheCarousel from "../components/home/historicCarousel";
import MemberGallery from '../components/home/MembersGallery';




function AppLand() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>   
   
      <AppWorks/>
      <AppFaq/>
      <AppOurBoard/>
      <AppContact/>
       <TheCarousel />
       <div
        className="container"
        style={{
          backgroundColor: "wight",
          padding: "50px",
          paddingTop: "30px",
          marginTop: "50px",
          marginBottom: "90px",
          display: "block",
        }}
      >
        <MemberGallery />
      </div>
        
       <AppFeature />
      
    </div>
  );
}

export default AppLand;