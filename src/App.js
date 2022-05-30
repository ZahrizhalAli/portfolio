import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
const Header = React.lazy(() => import("./header/Header"));
const Footer = React.lazy(() => import("./footer/Footer"));
const Home = React.lazy(() => import("./home/Home"));
const SingleProject = React.lazy(() => import("./projects/SingleProject"));
function App() {
  return (
    <>
      <Header />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<SingleProject />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
