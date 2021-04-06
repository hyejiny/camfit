import React from "react";
import { API_BASE_URL } from "../../constants";
import "./info.css";
import { Layout, Divider } from "antd";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import infolike from "../../_actions/index";
import { useDispatch } from "react-redux";
function InfoMain(props) {
  const dispatch = useDispatch();
  const { Content } = Layout;
  var dat = props.updated;
  var st = String(dat);
  var shot_d = st.substring(0, 10);

  // const like = () => {
  //   dispatch(infolike())
  // }

  return (
    <div className="outer">
      <div
        className="jb-wrap img contrast"
        style={{
          background: `linear-gardient(to bottom,rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('${API_BASE_URL + props.imgg}'), #*1c1c1c`,
          backgroundImage: `url(${API_BASE_URL + props.imgg})`,
          height: "250px",
          backgroundSize: "100%, cover",
          backgroundPosition: "center, center",
          width: "100%",
          position: "relative",
        }}
      >
      </div>
        <div className="inner multi">
          <h1 style={{ color: "white" }}>{props.title}</h1>
          <div style={{ color: "white" }}>발행일 : {shot_d}</div>
        </div>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          {props.content}
          <Divider className="ant-divider" />
          {/* <AiOutlineHeart
            onClick="like"
            class="innerleft"
            size="30"
            color="red"
          />
          <AiFillHeart className="innerleft" size="30" color="red" /> */}
        </div>
      </Content>
    </div>
  );
}

export default InfoMain;
