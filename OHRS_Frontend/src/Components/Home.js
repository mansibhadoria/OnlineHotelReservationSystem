import React from 'react'
import ImageSlider from './ImageSlider'
import NavBar from '../NavBar/NavBar'
import Services from './Services'


function Home() {
     return (
          <div>
               <NavBar/>
               <br/>
             <ImageSlider />    
             <Services/>  
               </div>
     )
}

export default Home
