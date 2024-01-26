import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const GrammerChecker = () => {
    const [paragraph, setParagraph] = useState("");
    const [generated, setGenerated] = useState("");
    const [loading, setLoading] = useState(false);
  
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
  
    const generate = async (paragraph) => {
      if (!paragraph) {
        toast.info("Please add some text to generate");
        return;
      }
      try {
        setLoading(true);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `Corrects the grammar, punctuation, and prepositions in the given paragraph with a target accuracy of 99%. The original paragraph is as follows: ${paragraph}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        if (text.includes("error")) {
          toast.error("Something went wrong");
          return;
        }
        if (text) {
          setLoading(false);
        }
        setGenerated(text);
      } catch (error) {
        toast.error(error.message);
        setGenerated("");
        setLoading(false);
        setParagraph("");
      }
    };
  
    const handleInputChange = (event) => {
      setParagraph(event.target.value);
      event.target.style.height = "auto";
      event.target.style.height = event.target.scrollHeight + "px";
    };
  
    const clear = () => {
      if (!paragraph || !generated) {
        toast.info("Nothing to clear");
        return;
      }
      setGenerated("");
      setParagraph("");
    };
  
    const copyToClipboard = (e) => {
      e.preventDefault();
      const el = document.createElement("textarea");
      el.value = generated;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      toast.success("Copied to clipboard");
    };
  
    const countWords = (str) => {
      return str.trim().split(/\s+/).length;
    };
  
    return (
      <div>
        <div className="row row-padding">
          <div className="col-6">
            <div>
              <div className="wrapper" style={{ height: "80vh" }}>
             
                <h2 className="d-flex justify-content-between"  style={{ overflow:"hidden" }}> 
                <Link to="/">
                <i className="fa-solid fa-arrow-left"></i>

                </Link>
                
                 Free Grammar Correction</h2>
                <p className="mb-1">
                  This tool uses the power of AI to correct your grammar mistakes.
                  Simply enter your text below and click on the generate button.
                </p>
                <textarea
                  value={paragraph}
                  onChange={(e) => handleInputChange(e)}
                  spellCheck="true"
                  placeholder="Type something here..."
                  required
                  style={{ overflow: "hidden", resize: "none", overflowY: "auto", height:"100%"}}
                ></textarea>
                <div className="d-flex justify-content-between inline">
                  <p>word count : {countWords(paragraph)}</p>
                  <div className="d-flex inline-2">
                    <button
                      onClick={() => generate(paragraph)}
                      className="me-2 btn shadow-0 btn-gen"
                      disabled={loading ? true : false}
                    >
                      Check
                    </button>
                    <button
                      onClick={clear}
                      className="me-2 btn shadow-0 btn-clear"
                      disabled={loading ? true : false}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div>
              <div className="wrapper" style={{ height: "80vh" }}>
                <h2 style={{ overflow:"hidden" }}>Corrected Text</h2>
                {
                  !generated && loading == false && 
                  <div style={{  overflow: "hidden", width:"100%", height:"90%", display:"flex", padding:"10%" }}>
                  <p className=" text-muted small" style={{ margin:"auto" }}>
                  Your paragraphs will appear here. You can copy it to clipboard by clicking on the copy button.
                </p>
                </div>
                }
                {
                  loading == true ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ overflow:"hidden" }}> 
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) :  
                  ( generated && <div>
                  <p className="mb-3">{generated}</p>
                  <div className="d-flex justify-content-between">
                  <button
                    onClick={(e) => copyToClipboard(e)}
                    className="btn shadow-0 btn-copy"
                    data-mdb-tooltip-init
                    title="copy to clipboard"
                  >
                    <i className="fa-regular fa-copy"></i>
                  </button>
                  <p>word count : {countWords(generated)}</p>
                </div>
                <p className="text-muted small mt-3">*Sometimes, AI makes mistakes. Please click on the "Generate" button again if you see unusual characters in the paragraphs.</p>
                </div>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default GrammerChecker