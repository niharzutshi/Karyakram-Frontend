import Navbar from "@src/layouts/Navbar";
import React, { PropsWithChildren } from "react";

type HomeLayoutProps = {
  children: any;
};

const HomeLayout: React.FC<PropsWithChildren<HomeLayoutProps>> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default HomeLayout;
