import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import InfoCardList from './InfoCardList'

import { useDispatch } from "react-redux";
import { infolist } from "../../_actions/index";
// import {ACCESS_TOKEN} from '../../constants'

function InfoCard(props) {
  const dispatch = useDispatch();
  const [FirstInfo, setFirstInfo] = useState([]);

  useEffect(() => {
    dispatch(infolist()).then(res => {
      console.log(res.payload, "payload");
      const infoinfo = res.payload;
      setFirstInfo(infoinfo);
      console.log(FirstInfo, "firstinfo");
      console.log(typeof FirstInfo);
    });
  }, []);

  const infocard = FirstInfo.map((info) => (
    <div>
     
     {FirstInfo ? 
    <InfoCardList content={info.content} title={info.title} imgg={info.image} id={info.id} /> 
    : <InfoCardList />}
      
      </div>
      
   
    ));
   

  var settings = {
    dots: true, // 캐러셀의 점을 보여줄 것인지
    infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
    speed: 500, // 넘어가는 속도는 몇으로 할 것인지
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    rows: 2,
    slidesPerRow: 2,
  };




  return (
    <div>
      <Slider {...settings}>
      {infocard}
      </Slider>

    </div>
  );
}

export default InfoCard;
