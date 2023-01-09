import React from "react";
import "./HeaderHigh.css";
import label from "./../labelGP.png";
import { PhoneOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Contacts from "./Contacts";
import { Button as ButtonMUI } from "@mui/material";

const HeaderHigh = () => {
  return (
    <div className="HeaderHigh">
      <div className="label">
        <img src={label} alt="label" />
      </div>
      <div className="buttons">
        <Button type="primary" disabled>
          Google solutions
        </Button>
        <Button type="primary" disabled>
          Google ID
        </Button>
        <Button type="primary">Google Pay</Button>
      </div>
      <div className="contacts">
        <div>
          <Contacts />
        </div>
        <div>
          <ButtonMUI sx={{ padding: "3px", bgcolor: "white" }}>
            <PhoneOutlined />
            Позвонить
          </ButtonMUI>
        </div>
      </div>
    </div>
  );
};

export default HeaderHigh;
