import React, { useEffect } from "react";
import { ThemeProvider } from "./ThemeContext";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/homepage/Homepage";
import ScrollToTopButton from "./components/ScrollToTopButton";


function App() {
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  return (
    <div className="app-wrapper">
      <ThemeProvider>
        <Header />
        <Homepage/>
        <ScrollToTopButton/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
