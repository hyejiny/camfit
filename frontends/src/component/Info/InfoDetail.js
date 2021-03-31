import React, { useEffect, useState } from "react";
import InfoMain from '../../component/Info/InfoMain';

import { useDispatch } from "react-redux";
import { infodetail } from "../../_actions/index";

function InfoDetail(props) {
  const dispatch = useDispatch();
  const [DetailInfo, setDetailInfo] = useState([]);

  useEffect(() => {
      let infoId = props.match.params.id;
      console.log(infoId,'아이디')
        dispatch(infodetail(infoId))
        .then(res => {
      console.log(res.payload, "payload");
      const infolist = res.payload;
      setDetailInfo(infolist);
      console.log(DetailInfo)

    });
  }, []);

    return (
        <div style={{ width: '100%', margin : '0'}}>
            <InfoMain imgg={DetailInfo.image} content={DetailInfo.content}/>
            
        </div>
    );
}

export default InfoDetail;