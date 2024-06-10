import { ToastContainer } from "react-toastify";
import "./App.css";
import { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Maintaince from "./utils/Maintain";

const Hero = lazy(() => import("./components/Hero"));



const App = () => {
  const [maintain] = useState(false);

  return (
    
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Suspense 
            fallback={
              <div
                style={{
                  overflow: "hidden",
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                }}
              >
                <div
                  className="spinner-border text-white border-2"
                  style={{ width: "5rem", height: "5rem", margin: "auto" }}
                  role="status"
                ></div>
              </div>
            }
          >
            <Routes>
              {
                maintain ? (
                  <Route path="/*" element={<Maintaince />} />
                ) : (
                  <Route path="/*" element={<Hero />} />
                )
              }
            </Routes>
          </Suspense>
        </div>
        <ToastContainer position="top-right" theme="colored" hideProgressBar />
        <Footer />
      </main>
  );
};

export default App;
