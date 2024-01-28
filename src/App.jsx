import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./components/Home"));

function App() {
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
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <ToastContainer position="top-right" theme="colored" hideProgressBar />
    </Suspense>
  );
}

export default App;
