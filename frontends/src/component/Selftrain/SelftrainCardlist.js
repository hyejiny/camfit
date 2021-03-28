import React, { useEffect, useState } from "react";
import "../component.css";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { useDispatch, useStore } from "react-redux";
import { selftrainlist } from "../../_actions/index";
import { API_BASE_URL } from "../../constants";

function SelftrainCardlist(props) {
  const dispatch = useDispatch();
//   const store = useStore();
  const [TrainInfo, setTrainInfo] = useState([]);
  useEffect(() => {
    dispatch(selftrainlist())
    .then((res) =>{
        const tmp_list = res.payload
        setTrainInfo(tmp_list);
    });
  }, [dispatch]);
//   console.log(store.getState().selftrainlist.list, "dlrj");
//   setTrainInfo(store.getState().selftrainlist.list);
  console.log(TrainInfo,'traininfo');

  const infocard = TrainInfo.map((train) => (
    <Card style={{ width: "18rem", margin:'auto' }} key={train.id}>
      <Card.Img width='300px' height='200px' variant="top" src={API_BASE_URL + train.thumbnail} />
      <Card.Body>
        <Card.Title>{train.title}</Card.Title>

        <Button href={`/selftrain/detail/${train.id}`} variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  ));
  return (<div className="SelftrainCardlist">
      {infocard}
  </div>);
}

// const mapStateToProps = state => {
//     return {
//       newlist : state.Selftrainlist
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         selftrainlist : () => dispatch(selftrainlist())
//     }
//   }
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(SelftrainCardlist)
export default SelftrainCardlist;
