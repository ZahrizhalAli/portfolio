import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
const Header = React.lazy(() => import('./header/Header'));
const Footer = React.lazy(() => import('./footer/Footer'));
const Home = React.lazy(() => import('./home/Home'));
const SingleProject = React.lazy(() => import('./projects/SingleProject'));
const SingleProject2 = React.lazy(() => import('./projects/SingleProject2'));
const SingleProject3 = React.lazy(() => import('./projects/SingleProject3'));
const SingleProject4 = React.lazy(() => import('./projects/SingleProject4'));

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/cat-pedigree" element={<SingleProject />} />
          <Route path="/project/nobarkuy" element={<SingleProject2 />} />
          <Route path="/project/foodknows" element={<SingleProject3 />} />
          <Route path="/project/applyin" element={<SingleProject4 />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
