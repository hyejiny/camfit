import React, { useState } from "react";
import { Timeline } from 'antd';

function Jandi() {
  return (
    <div style={{marginTop:"100px" , marginRight:"400px", marginLeft:"100px"}}>
       <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>,

    </div>
  );
}

export default Jandi;
