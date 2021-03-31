import React from 'react'
import '../css/gallery.css';
import img1 from '../images/single1.jpg';
import img2 from '../images/double1.jpg';
import img3 from '../images/executive1.jpg';
import img4 from '../images/birthday.jpg';
import img5 from '../images/marriage.jpg';
import img6 from '../images/reception.jpg';
import img7 from '../images/single2.jpg';
import img8 from '../images/double2.jpg';
import img9 from '../images/executive2.jpg';
import { NavBar } from "../NavBar/NavBar"


const Gallery = () => {
    return (
       
        <div>
<NavBar/>
{/* <!--Gallery start--> */}
<section>
  <div className="container-fluid">
    <h1 className="text-center  pt-3">GALLERY </h1>
     <hr className="w-25 mx-auto pt-5 "/>

   <div className="row "> 
    <div className="  col-lg-4 col-md-2 col-12 mb-4">
      <img src={img1} className="img-fluid" style={{width:"100%",height:"15pc"}}/>
    </div>
    <div className="col-lg-4 col-md-2 col-12 mb-4">
      <img src={img2} className="img-fluid" style={{width:"100%",height:"15pc"}}/>
    </div>
    <div className="col-lg-4 col-md-2 col-12 mb-4">
      <img src={img3} className="img-fluid" style={{width:"100%",height:"15pc"}}/>
    </div>
    <div className="col-lg-4 col-md-2 col-12 mb-4">
      <img src={img4} className="img-fluid" style={{width:"100%",height:"15pc"}}/>
    </div>
    <div className="col-lg-4 col-md-2 col-12 mb-4">
      <img src={img5} className="img-fluid" style={{width:"100%",height:"15pc"}}/>
    </div>
    <div className="col-lg-4 col-md-2 col-12 mb-4">
      <img src={img6} className="img-fluid" style={{width:"100%",height:"15pc"}}/>
    </div>
    <div className="col-lg-4 col-md-2 col-12 mb-4">
      <img src={img7} className="img-fluid"style={{width:"100%",height:"15pc"}}/>
    </div>
    <div className="col-lg-4 col-md-2 col-12 mb-4">
      <img src={img8} className="img-fluid"style={{width:"100%",height:"15pc"}}/>
    </div>
    <div className="col-lg-4 col-md-2 col-12 mb-4">
      <img src={img9} className="img-fluid"style={{width:"100%",height:"15pc"}}/>
    </div>
   </div>
  </div> 
</section>
{/* <!-- gallery end --> */}
            
        </div>
        
    )
}

export default Gallery
