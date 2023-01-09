import React, { useState } from "react";
import {
  ContactsTwoTone,
  CodeTwoTone,
  ContainerTwoTone,
  ShopOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "./HeaderLow.css";

const items = [
  {
    label: "Шлюз",
    key: "mail",
    icon: <ShopOutlined />,
  },
  {
    label: "Сервисы",
    key: "SubMenu",
    icon: <ShoppingOutlined />,
    children: [
      {
        type: "group",
        label: "Google Pay Gate",
        children: [
          {
            label: "Подключение сервиса банкам, кредитным организациям",
            key: "setting:1",
          },
          {
            label: "Подключение авторасщепления банкам, кредитным организациям",
            key: "setting:2",
          },
          {
            label: "Международные платежи банкам, кредитным организациям",
            key: "setting:3",
          },
        ],
      },
      {
        type: "group",
        label: "Другие сервисы",
        children: [
          {
            label: "Подключение к My ID",
            key: "setting:4",
          },
          {
            label: "Разработка мобильных решений",
            key: "setting:5",
          },
        ],
      },
    ],
  },
  {
    label: "Лицензии",
    key: "app",
    icon: <ContainerTwoTone />,
    disabled: true,
  },
  {
    label: "Разработчикам",
    key: "app",
    icon: <CodeTwoTone />,
    disabled: true,
  },
  {
    label: "Контакты",
    key: "app",
    icon: <ContactsTwoTone />,
    disabled: true,
  },
];

const HeaderLow = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      sx={{ border: "none" }}
      className="HeaderLow"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default HeaderLow;
