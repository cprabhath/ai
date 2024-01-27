import { useEffect, useState, Fragment } from "react";
import { useContentGenerator } from "../utils/AIModel";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";

const Parapharsing = () => {
  const [paragraph, setParagraph] = useState("");
  const [generated, setGenerated] = useState("");
  const { loading, generate } = useContentGenerator();
  const [accuracies, setAccuracy] = useState(0);
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    accuracy(paragraph, generated);
  }, [generated, paragraph])

  const prompts =
     "Rewrite the following text with the same meaning in a different way as paragraphs don't use point form. show only Rewrited text. The original paragraph is as follows: ";

  const handleGenerate = () => {
    if(countWords(paragraph) < 30){
      toast.error("Please enter at least 30 words");
      return
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

  const saveTextToFile = () => {
    toast.success("Thank you for your feedback 😍");
    setText("");
    closeModal();
  };

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="rounded-0 w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-3"
                    style={{ overflow: "hidden" }}
                  >
                    Oops! Did we slip up? Let us know how we can make things right!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full rounded-0"
                        placeholder="Type something here..."
                        style={{
                          resize: "none",
                          overflowY: "auto",
                          height: "20vh",
                        }}
                      ></textarea>
                    </p>
                  </div>

                  <div className="mt-4" style={{ overflow: "hidden" }}>
                    <button
                      type="button"
                      className="me-2 rounded-0 inline-flex justify-center rounded-md border-0 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={saveTextToFile}
                      style={{ overflow: "hidden" }}
                    >
                      Send
                    </button>
                    <button
                      type="button"
                      className="rounded-0 inline-flex justify-center rounded-md border-1  px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                      style={{ overflow: "hidden" }}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
                Text Paraphraser 2.0
                <i className=""></i>
              </h2>
              <p className="mb-1">
                Our AI powered Paraphrasing tool will help you to write better
                and error free articles. use at least 30 words paragraph(s).
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
                  height: "70%",
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
                    Your parapharsed paragraphs will appear here. You can copy it to
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
                        height: "55vh",
                      }}
                    ></textarea>
                    <div className="container-2">
                      <div className="d-flex justify-content-between">
                        <p className="m-0">word count : {countWords(generated)}</p>
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
                              title="copy to clipboard"
                            >
                              <i className="fa-regular fa-comment"></i>
                            </button>
                          </div>
                      </div>
                      <p className="text-muted small w-100">
                        Similarity with original: {accuracies.toFixed(2)}%
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
