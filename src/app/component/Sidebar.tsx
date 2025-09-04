import React from "react";
import { menuItems } from "./constants";
import ActiveLink from "./common/ActiveLink";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <div className="font-bold text-3xl mb-5">
        <span className="text-amber-400">U</span>
        cademy</div>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          ></MenuItem>
        ))}
      </ul>
    </div>
  );
};

function MenuItem({
  url = "/",
  title = "",
  icon,
}: {
  url: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <ActiveLink url={url} >
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
