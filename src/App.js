import React from 'react';
import Accordion from './components/Accordion';
import Banner from "./components/Banner"
import {accordionData} from "./utils/content"
import Carousel from './components/carousel';
import SocialMedia from './components/SocialMedia';


const App = () => {
  return (
    <div>
      <h1 className='header text'>Ohio State Football FAQ</h1>
      <div className="accordion">
        <Banner/>
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