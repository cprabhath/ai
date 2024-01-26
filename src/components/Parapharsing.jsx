import { useEffect, useState } from "react";
import { useContentGenerator } from "../utils/AIModel";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Parapharsing = () => {
  const [paragraph, setParagraph] = useState("");
  const [generated, setGenerated] = useState("");
  const { loading, generate } = useContentGenerator();
  const [accuracies, setAccuracy] = useState(0);

  useEffect(() => {
    accuracy(paragraph, generated);
  }, [generated, paragraph])

  const prompts =
    "Rewrite the following text with the same meaning in a different way. show only Rewrited text. The original paragraph is as follows: ";

  const handleGenerate = () => {
    generate(paragraph, setGenerated, setParagraph, prompts);
  };



  const handleInputChange = (event) => {
    setParagraph(event.target.value);
  };

  const clear = () => {
    setGenerated("");
    setParagraph("");
  };

  const accuracy = (original, generated) => {
    let count = 0;
    let originalWords = original.split(" ");
    let generatedWords = generated.split(" ");
    for (let i = 0; i < originalWords.length; i++) {
      if (originalWords[i] == generatedWords[i]) {
        count++;
      }
    }
    setAccuracy((count / originalWords.length) * 100);
    return
  };

  const copyToClipboard = (e) => {
    e.preventDefault();
    const el = document.createElement("textarea");
    el.value = generated;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    toast.success("Copied to clipboard 😎");
  };

  const countWords = (str) => {
    return str.trim().split(/\s+/).length;
  };

  return (
    <div>
      <div className="row row-padding">
        <div className="col-6">
          <div>
            <div className="wrapper rounded-0">
              <h2
                className="d-flex justify-content-between"
                style={{ overflow: "hidden" }}
              >
                <Link to="/">
                  <i className="fa-solid fa-arrow-left"></i>
                </Link>
                Text Paraphraser
                <i className=""></i>
              </h2>
              <p className="mb-1">
                Our AI powered Paraphrasing tool will help you to write better
                and error free articles.
              </p>
              <textarea
                value={paragraph}
                className="rounded-0"
                onChange={(e) => handleInputChange(e)}
                spellCheck="true"
                placeholder="Type something here..."
                required
                style={{
                  overflow: "hidden",
                  resize: "none",
                  overflowY: "auto",
                  height: "100%",
                }}
              ></textarea>
              <div className="d-flex justify-content-between inline">
                <p>word count : {countWords(paragraph)}</p>
                <div className="d-flex inline-2">
                  <button
                    onClick={() => handleGenerate()}
                    className="me-2 btn shadow-0 btn-gen rounded-0"
                    disabled={loading ? true : false}
                  >
                    Paraphrase
                  </button>
                  <button
                    onClick={clear}
                    className="btn shadow-0 btn-clear rounded-0"
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
            <div className="wrapper rounded-0">
              <h2 style={{ overflow: "hidden" }}>Paraphrased Text</h2>
              {!generated && loading == false && (
                <div
                  style={{
                    overflow: "hidden",
                    width: "100%",
                    height: "90%",
                    display: "flex",
                    padding: "10%",
                  }}
                >
                  <p className=" text-muted small" style={{ margin: "auto" }}>
                    Your paragraphs will appear here. You can copy it to
                    clipboard by clicking on the copy button.
                  </p>
                </div>
              )}
              {loading == true ? (
                <div
                  style={{
                    overflow: "hidden",
                    width: "100%",
                    height: "90%",
                    display: "flex",
                    padding: "10%",
                  }}
                >
                  <div
                    className="spinner-border text-info"
                    role="status"
                    style={{ margin: "auto" }}
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                generated && (
                  <div>
                    <textarea
                      className="border-0 rounded-0"
                      value={generated}
                      onChange={(e) => setGenerated(e.target.value)}
                      spellCheck="true"
                      placeholder="Type something here..."
                      required
                      style={{
                        resize: "none",
                        overflowY: "auto",
                        height: "100vh",
                      }}
                    ></textarea>
                    <div className="container-2">
                      <div className="d-flex justify-content-between">
                        <p>word count : {countWords(generated)}</p>
                        <button
                          onClick={(e) => copyToClipboard(e)}
                          className="btn btn-sm shadow-0"
                          data-mdb-tooltip-init
                          title="copy to clipboard"
                        >
                          <i className="fa-regular fa-copy"></i>
                        </button>
                      </div>
                      <p className="text-muted small w-100">
                        Similarity with original: {accuracies.toFixed(2)}%
                      </p>
                      <p className="text-muted small w-100">
                        *Sometimes, AI makes mistakes. Please click on the
                        &quot;check&quot; button again if you see unusual
                        characters in the paragraphs. This tool is still in
                        beta.
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parapharsing;
