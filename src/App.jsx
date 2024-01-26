import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const GrammerChecker = lazy(() => import("./components/grammerChecker"));
const Paraphrasing = lazy(() => import("./components/Parapharsing"));
const PDFSummerizer = lazy(() => import("./components/PDFSummerizer"));
const TextSummerizer = lazy(() => import("./components/TextSummerizer"));
const AicontentDetection = lazy(() => import("./components/AicontentDetection"));
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
        <Route path="/paraphrasing" element={<Paraphrasing />}></Route>
        <Route path="/pdf" element={<PDFSummerizer />}></Route>
        <Route path="/text" element={<TextSummerizer />}></Route>
        <Route path="/ai" element={<AicontentDetection />}></Route>
      </Routes>
      <ToastContainer className="toast-position" position="top-right" />
      
    </Suspense>
  );
}

export default App;
