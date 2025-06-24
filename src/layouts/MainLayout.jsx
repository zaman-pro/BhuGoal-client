import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <section className="pt-20">
          <Outlet />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
