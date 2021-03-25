import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import InfoCardList from "./InfoCardList";
import InfoCardS from "./InfoCardS";





// import imga from './캡처.JPG'

// import { connect } from 'react-redux';

// function mapStateToProps(state) {
//     return {

//     };
// }



class InfoCard extends Component {
  render() {
    var settings = {
      dots: true, // 캐러셀의 점을 보여줄 것인지
      infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
      speed: 500, // 넘어가는 속도는 몇으로 할 것인지
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "60px",
      rows: 2,
      slidesPerRow: 3,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <div style={{ width: 250, height: 250 }}>
        
            <InfoCardList />
          </div>
          </div>

          <div style={{ width: 250, height: 250 }}>
            <InfoCardS />
          </div>

          <div style={{ width: 250, height: 250 }}>
            <InfoCardS />
          </div>

          <div>4</div>

          <div style={{ width: 250, height: 250 }}>
            <InfoCardS />
          </div>

          <div style={{ width: 250, height: 250 }}>
            <InfoCardS />
          </div>

          <div>
          <div style={{ width: 250, height: 250 }}>
            <InfoCardList />
          </div>
          </div>

          <div style={{ width: 250, height: 250 }}>
            <InfoCardS />
          </div>

          <div style={{ width: 250, height: 250 }}>
            <InfoCardS />
          </div>

          <div>4</div>

          <div style={{ width: 250, height: 250 }}>
            <InfoCardS />
          </div>

          <div style={{ width: 250, height: 250 }}>
            <InfoCardS />
          </div>



        </Slider>
      </div>
    );
  }
}

export default InfoCard;

// connect(
//     mapStateToProps,
// )(InfoCard);
