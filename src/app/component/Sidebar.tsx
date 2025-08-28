import React from "react";
import IconPlay from "./icons/IconPlay";
import IconExplore from "./icons/IconExplore";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <div className="font-bold text-3xl mb-5">Ucademy</div>
      <ul>
        <MenuItem url="/" title="khu vực 1" icon= {<IconPlay className="size-5" />}></MenuItem>
        <MenuItem url="/" title="khu vực 2" icon = {<IconExplore className="size-5"/>}></MenuItem>
        <MenuItem url="/" title="khu vực 3"></MenuItem>
        <MenuItem url="/" title="khu vực 4"></MenuItem>

      </ul>
    </div>
  );
};

function MenuItem({ url = "/", title = "", icon }: { url: string; title: string, icon?: React.ReactNode }) {
  return (
    <li>
      <a className="p-2 round-md flex items-center" href={url}>{icon} {title} </a>
    </li>
  );
}

export default Sidebar;
