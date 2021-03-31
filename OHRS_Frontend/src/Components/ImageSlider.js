import React from 'react'
import  "../index.css";
import Carousel from "react-bootstrap/Carousel"
import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import slider4 from '../images/slider4.jpg'

const ImageSlider = () => {
return (
 <div>
   <Carousel>
     <Carousel.Item>
 <img className=" img img-fluid d-flex w-100" src={slider2} 
      alt="first" style={{ height:"80vh" }}
     />
      {/* <Carousel.Caption>
     <h3> first label</h3>  <p>homeslider1</p>
         </Carousel.Caption> */}
     </Carousel.Item>  
     {/* ///////////////////// */}
     <Carousel.Item>
<img className="img img-fluid d-flex w-100" src={slider1} 
      alt="second" style={{ height:"80vh",width:"100%" }}
     />
      {/* <Carousel.Caption>
     <h3> second label</h3> <p>homeslider2</p>
         </Carousel.Caption> */}
     </Carousel.Item>  
      {/* ///////////////////// */}
     <Carousel.Item>
 <img className="img img-fluid d-flex w-100" src={slider3} 
      alt="third" style={{ height:"80vh" }}
     />
      {/* <Carousel.Caption>
     <h3> third label</h3> <p>homeslider3</p>
         </Carousel.Caption> */}
     </Carousel.Item>  
     {/* ///////////////////// */}
     <Carousel.Item>
<img className="img img-fluid d-flex w-100" src={slider4} 
      alt="second" style={{ height:"80vh" }}
     />
      {/* <Carousel.Caption>
     <h3> forth label</h3> <p>homeslider4</p>
         </Carousel.Caption> */}
     </Carousel.Item>  
      {/* ///////////////////// */}
   </Carousel>         
 </div>
 )
}
export default ImageSlider
