import React from "react";
import Sidebar from "../component/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper grid grid-cols-[300px_minmax(0,1fr)] h-screen">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default layout;
