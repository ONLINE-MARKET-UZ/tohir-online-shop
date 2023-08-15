import React from "react";
import { Menu } from "antd";
import "./style.scss";
const MenuBar = () => {
  return (
    <div>
      <Menu className="menubar w-[240px] gap-[10px] h-[360px]">
        <Menu.Item className="item text-[16px] hover:bg-[#E5F1FF] active:bg-[#E5F1FF]">Automobiles</Menu.Item>
        <Menu.Item className="item text-[16px] hover:bg-[#E5F1FF] active:bg-[#E5F1FF]">Clothes and wear</Menu.Item>
        <Menu.Item className="item text-[16px] hover:bg-[#E5F1FF] active:bg-[#E5F1FF]">Home interiors</Menu.Item>
        <Menu.Item className="item text-[16px] hover:bg-[#E5F1FF] active:bg-[#E5F1FF]">Computer and tech</Menu.Item>
        <Menu.Item className="item text-[16px] hover:bg-[#E5F1FF] active:bg-[#E5F1FF]">Tools, equipments</Menu.Item>
        <Menu.Item className="item text-[16px] hover:bg-[#E5F1FF] active:bg-[#E5F1FF]">Sports and outdoor</Menu.Item>
        <Menu.Item className="item text-[16px] hover:bg-[#E5F1FF] active:bg-[#E5F1FF]">Animal and pets</Menu.Item>
        <Menu.Item className="item text-[16px] hover:bg-[#E5F1FF] active:bg-[#E5F1FF]">Machinery tools</Menu.Item>
        <Menu.Item className="item text-[16px] hover:bg-[#E5F1FF] active:bg-[#E5F1FF]">More category</Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuBar;
