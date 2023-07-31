import React from 'react';
import Accordion from './components/Accordion';
import Banner from "./components/Banner"
import {accordionData} from "./utils/content"
import Carousel from './components/carousel';
import SocialMedia from './components/SocialMedia';


const App = () => {
  return (
    <div>
      <nav className='navbar background'>
        
        <ul className='nav-list'>
        <div className='logo'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ohio_State_Buckeyes_logo.svg/1200px-Ohio_State_Buckeyes_logo.svg.png"/>
        </div>
        </ul>
        <h1>Ohio State Fan Page</h1>
      </nav>
      {/* <h1 className='header text'>
        Ohio State Football FAQ & Image Gallery</h1> */}
      
      <div className="accordion flexbox">
        <img src="https://content.sportslogos.net/logos/33/791/full/ohio_state_buckeyes_logo_mascot_2022_sportslogosnet-8160.png" className='ohiostate'/>
        {/* <Banner/> */}
        <Carousel/>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content}/>
          
        
         ))}
        <SocialMedia/>
        
      </div>
    </div>
  );
};

export default App;