import React from "react";
import Togglebutton from "./togglebutton";
import {
  PlusCircleOutlined,
  SearchOutlined,
  InboxOutlined,
  CalendarOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Menu, Avatar } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Add task", "1", <PlusCircleOutlined />),
  getItem("Search", "2", <SearchOutlined />),
  getItem("Inbox", "3", <InboxOutlined />),
  getItem("Today", "4", <CalendarOutlined />),
];
const Menubar = ({ toggleCollapsed }) => {
  return (
    <>
      <div
        style={{
          width: 256,
        }}
        className="bg-pink-200 h-screen"
      >
        <div className="flex justify-between mx-5 pt-5">
          <div>
            <Avatar size={34} icon={<UserOutlined />} />{" "}
            <span className="text-gray-600">Archana</span>
          </div>

          <Togglebutton toggleCollapsed={toggleCollapsed} />
        </div>

        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
          className="bg-pink-200 mt-10"
        />
      </div>
    </>
  );
};
export default Menubar;
