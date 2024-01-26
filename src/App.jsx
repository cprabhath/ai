import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const GrammerChecker = lazy(() => import("./components/grammerChecker"));
const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <Suspense
      fallback={
        <div style={{  overflow: "hidden", width:"100vw", height:"100vh", display:"flex" }}>
        <div
          className="spinner-border text-white"
          style={{  width: "5rem", height: "5rem", margin:"auto"}}
          role="status">
            </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/grammar" element={<GrammerChecker />}></Route>
      </Routes>
      <ToastContainer className="toast-position" position="top-right" />
      
    </Suspense>
  );
}

export default App;
