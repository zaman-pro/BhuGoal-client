import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  // theme change in toast with theme toggle
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const updateTheme = () => {
      setTheme(localStorage.getItem("theme") || "light");
    };

    window.addEventListener("themeChange", updateTheme);
    return () => window.removeEventListener("themeChange", updateTheme);
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <section className="pt-20 w-11/12 mx-auto">
          <Outlet />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>

      <Toaster
        containerStyle={{
          top: 50,
        }}
        toastOptions={{
          style: {
            background: theme === "dark" ? "#f3f4f6" : "#1f2937",
            color: theme === "dark" ? "#111827" : "#f9fafb",
          },
        }}
      />
    </div>
  );
};

export default MainLayout;
