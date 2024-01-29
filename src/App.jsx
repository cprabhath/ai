import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import Maintaince from "./utils/Maintain";

const Home = lazy(() => import("./components/Home"));

function App() {

  const [maintain] = useState(true);
  
  return (
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
          maintain ? <Route path="/" element={<Maintaince />}></Route> : <Route path="/" element={<Home />}></Route>
        }
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <ToastContainer position="top-right" theme="colored" hideProgressBar />
    </Suspense>
  );
}

export default App;
