import React, { Component } from "react";
import Slider from "react-slick";
import "./sertfikat_carusel.scss"
import img from "../../assets/images/image7.png";

export default class Sercarusel extends Component {
  render() {
 var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1040,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
         {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="sertfikat">
        <Slider {...settings}>
          <div>
<img src={img} alt="" />
          </div>
           <div>
<img src={img} alt="" />
          </div>
              <div>
<img src={img} alt="" />
          </div>
              <div>
<img src={img} alt="" />
          </div>
              <div>
<img src={img} alt="" />
          </div>
              <div>
<img src={img} alt="" />
          </div>
         
     
        </Slider>
      </div>
    );
  }
}