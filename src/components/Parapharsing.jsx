import { useEffect, useState, Fragment } from "react";
import { useContentGenerator } from "../utils/AIModel";
import { toast } from "react-toastify";
import Model from "./Model";
import { countWords } from "../utils/wordCount";

const Parapharsing = () => {
  const [paragraph, setParagraph] = useState("");
  const [generated, setGenerated] = useState("");
  const { loading, generate } = useContentGenerator();
  const [accuracies, setAccuracy] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(!isModalOpen);
  }

  useEffect(() => {
    accuracy(paragraph, generated);
  }, [generated, paragraph]);

  const prompts =
    "Rewrite the following text with the same meaning in a different way as paragraphs don't use point form. show only Rewrited text. Don't use advanced words. The original paragraph is as follows: ";

  const handleGenerate = () => {
    if (countWords(paragraph) < 30) {
      toast.error("I Think you don't have enough word count to parapharse 🙄");
      return;
    }
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
    return;
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

  return (
    <div>
      <Model isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <div className="row row-padding">
        <div className="col-6">
          <div>
            <div className="wrapper">
              <h2
                className="d-flex justify-content-center text-center"
                style={{ overflow: "hidden" }}
              >
                AI Text Paraphraser
              </h2>
              <p className="mb-1 text-center ">
                Our AI powered Paraphrasing tool will help you to write better
                and error free articles. use at least 30 words paragraph(s).
              </p>
              <textarea
                value={paragraph}
                className="rounded-xl"
                onChange={(e) => handleInputChange(e)}
                spellCheck="true"
                placeholder="Type something here..."
                required
                style={{
                  overflow: "hidden",
                  resize: "none",
                  overflowY: "auto",
                  height: "75%",
                }}
              ></textarea>
              <div className="d-flex justify-content-between inline">
                {countWords(paragraph) > 0 ? (
                  <p className="text-muted small">
                    word count : {countWords(paragraph)}
                  </p>
                ) : (
                  <div>{""}</div>
                )}
                <div className="d-flex inline-2">
                  <button
                    onClick={() => handleGenerate()}
                    className="me-2 btn shadow-0 btn-gen  rounded-xl"
                    disabled={loading ? true : false}
                  >
                    Paraphrase
                  </button>
                  <button
                    onClick={clear}
                    className="btn shadow-0 btn-clear  rounded-xl"
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
                    Your parapharsed paragraphs will appear here. You can copy
                    it to clipboard by clicking on the copy button.
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
                    className="spinner-border text-primary border-1"
                    role="status"
                    style={{ width: "4rem", height: "4rem", margin: "auto" }}
                  ></div>
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
                        height: "65vh",
                      }}
                    ></textarea>
                    <div className="container-2">
                      <div className="d-flex justify-content-between">
                        <p className="m-0 text-muted small">
                          word count : {countWords(generated)}
                        </p>
                        <div className="d-flex inline-2">
                          <button
                            onClick={(e) => copyToClipboard(e)}
                            className="me-2 btn btn-sm shadow-0"
                            data-mdb-tooltip-init
                            title="copy to clipboard"
                          >
                            <i className="fa-regular fa-copy"></i>
                          </button>
                          <button
                            onClick={openModal}
                            className="btn btn-sm shadow-0"
                            data-mdb-tooltip-init
                            title="Feedback"
                          >
                            <i className="fa-regular fa-comment"></i>
                          </button>
                        </div>
                      </div>
                      <p className="text-muted small w-100">
                        {
                        accuracies > 100
                          ? "Something not right. Please try again"
                          : `Similarity with original: ${accuracies.toFixed(
                              2
                            )}%`
                        }
                      </p>
                      <p className="text-muted small w-100 mb-0 pb-0">
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
