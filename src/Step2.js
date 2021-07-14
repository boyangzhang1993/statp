import { Input } from "antd";
import React from "react";

function Step2(props) {
  return (
    <div>
      <p>
        <Input
          addonBefore="Email"
          name="email"
          value={props.getState("email", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        <Input
          addonBefore="Phone"
          name="phone"
          value={props.getState("phone", "")}
          onChange={props.handleChange}
        />
      </p>
    </div>
  );
}

export default Step2;
