import React from 'react'
import img1 from '../images/single1.jpg';
import img2 from '../images/double1.jpg';
import img3 from '../images/executive1.jpg';
import img4 from '../images/birthday.jpg';
import img5 from '../images/marriage.jpg';
import img6 from '../images/reception.jpg';

const Services = () => {
  return (
    <div>
      <br/>
      <div className="container-fluid">
        <h1 className="text-center  pt-3">SERVICES</h1>
        <hr className="w-25 mx-auto pt-2  " />
        <h2 className="text-center  pt-2">Rooms</h2>
        <hr className="w-25 mx-auto pt-2 " />

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-20 mx-auto">
              <div className="row">
                <div className="col-md-4 col-10 mx-auto">
                  <div className="card" >
                    <img src={img1} className="card-img-top" alt="single" style={{ height: "250px", width: "50" }} />
                    <div className="card-body">
                      <h5 className="card-title text-center" >Single Room</h5>

                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-10 mx-auto">
                  <div className="card" >
                    <img src={img2} className="card-img-top" alt="..." style={{ height: "250px", width: "50" }} />
                    <div className="card-body">
                      <h5 className="card-title text-center">Double Room</h5>

                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-10 mx-auto">
                  <div className="card" >
                    <img src={img3} className="card-img-top" alt="..." style={{ height: "250px", width: "50" }} />
                    <div className="card-body">
                      <h5 className="card-title text-center" >Executive Room</h5>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ********************* */}
            <div className="container-fluid">

              <h2 className="text-center  pt-5">Events</h2>
              <hr className="w-25 mx-auto pt-2 " />

              <div className="container-fluid mb-5">
                <div className="row">
                  <div className="col-20 mx-auto">
                    <div className="row">
                      <div className="col-md-4 col-10 mx-auto">
                        <div className="card" >
                          <img src={img4} className="card-img-top" alt="single" style={{ height: "250px", width: "50" }} />
                          <div className="card-body">
                            <h5 className="card-title text-center" >Birthday</h5>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-10 mx-auto">
                        <div className="card" >
                          <img src={img5} className="card-img-top" alt="..." style={{ height: "250px", width: "50" }} />
                          <div className="card-body">
                            <h5 className="card-title text-center">Marriage</h5>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-10 mx-auto">
                        <div className="card" >
                          <img src={img6} className="card-img-top" alt="..." style={{ height: "250px", width: "50" }} />
                          <div className="card-body">
                            <h5 className="card-title text-center" >Reception</h5>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Services
