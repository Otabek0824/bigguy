import React from "react";
import Header from "../header/header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
