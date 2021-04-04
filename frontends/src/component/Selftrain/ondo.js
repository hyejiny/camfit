import React, { useState } from "react";
import { Steps, Popover } from "antd";

function ondo() {
  return (
    <div>
      <Steps current={1} progressDot={customDot}>
        <Step title="Finished" description="You can hover on the dot." />
        <Step title="In Progress" description="You can hover on the dot." />
        <Step title="Waiting" description="You can hover on the dot." />
        <Step title="Waiting" description="You can hover on the dot." />
      </Steps>
    </div>
  );
}

export default ondo;
