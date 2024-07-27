import React from "react";
import Header from "./Header";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
