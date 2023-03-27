import React, { Component } from "react";
import Slider from "react-slick";
import "./carusel.scss"

export default class Carusel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carusel ">
        <Slider {...settings}>
          <div>
            <p className="title_up">LEANGROUP - тубы и этикетки</p>
            <h4 className="title">Ламинатные тубы</h4>
            <p className="text">Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY Do-it-Yourself.</p>
            <button className="btn">Каталог</button>
          </div>
          <div>
            <p className="title_up">LEANGROUP - тубы и этикетки</p>
            <h4 className="title">Ламинатные тубы</h4>
            <p className="text">Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY Do-it-Yourself.</p>
            <button className="btn">Каталог</button>
          </div>
          <div>
            <p className="title_up">LEANGROUP - тубы и этикетки</p>
            <h4 className="title">Ламинатные тубы</h4>
            <p className="text">Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY Do-it-Yourself.</p>
            <button className="btn">Каталог</button>
          </div>
     
        </Slider>
      </div>
    );
  }
}