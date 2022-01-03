import React from  'react'; 
import { DescriptionSection, Greeting, GroomAndBride,Home,LoveStory,  Navigation, People, Whenwhere, Rsvp, GallerySec, Footer } from './containers/'

function App() {
  return (
    <div className="App">  
      <Navigation/>
      
      <Home/>
      <GroomAndBride/>
      <DescriptionSection/>
      <LoveStory/>
      <Greeting/>
      <People/>
      <Whenwhere/>
      <Rsvp/>
      <GallerySec/>
      <Footer/>
    </div>
  );
}

export default App;
