import React from 'react';
import rightImg1 from '../../images/slider-img-1.png';
import rightImg2 from '../../images/slider-img-2.png';
import playbtn from '../../images/playStore.png';
import applebtn from '../../images/apple.png';


export default function Section1() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="d-flex justify-content-center">
                    <div className="heading-left-side">
                      <h1>Looking for a Party ?</h1>
                      <p className="mt-3">
                        Draft is a revolutionary mobile app built to help you manage your business easily and save you money.
                      </p>

                      <div className="source-icon d-flex justify-content-start">
                        <a href="/">
                          <img className='mt-3' src={playbtn} alt="playbtn" />
                        </a>
                        <a href="/">
                          <img className='mt-3 mx-4' src={applebtn} alt="playbtn" />
                        </a>
                      </div>
                    </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="side-image-right d-flex justify-content-center">
                  <div className="right-img1">
                    <img src={rightImg1} alt="rightImg1" />
                  </div>
                  <div className="right-img2">
                    <img src={rightImg2} alt="rightImg1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
