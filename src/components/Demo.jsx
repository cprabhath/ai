import React, { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { toast } from "react-toastify";
import Model from "./Model";
import { useContentGenerator } from "../utils/AIModel";

const Demo = () => {
  const [article, setArticle] = useState("");
  const [url, setUrl] = useState("");
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, generate } = useContentGenerator();

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/;

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }

    const existingArticle = allArticles.find((item) => item.url === url);

    if (article && url && !existingArticle && url.match(validUrl)) {
      let updatedArticles = [...allArticles, { url, article }];

      if (updatedArticles.length > 5) {
        updatedArticles = updatedArticles.slice(-5);
      }
      setAllArticles(updatedArticles);
      localStorage.setItem("articles", JSON.stringify(updatedArticles));
    }
  }, [article]);

  const prompts =
    "Go through the provided URL and Summarize that article of which I provided to you. show as paragraphs clearly don't use point form. don't show symbols including astric, hash etc.. in the paragraph.. The website link is as follows: ";

  const handleGenerate = () => {
    generate(url, setArticle, setUrl, prompts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url.match(validUrl)) {
      toast.error("Wait! That's not a valid URL 😅");
      return;
    }

    const existingArticle = allArticles.find((item) => item.url === url);

    if (existingArticle) {
      setArticle(existingArticle.article);
    } else {
      handleGenerate();
    }
  };

  const copyToClipboard = (e) => {
    e.preventDefault();
    const el = document.createElement("textarea");
    el.value = article;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    toast.success("Copied to clipboard 😎");
  };

  const countWords = (str) => {
    return str.trim().split(/\s+/).length;
  };

  // copy the url and toggle the icon for user feedback
  const handleCopy = (copyUrl, e) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  function openModal() {
    setIsModalOpen(!isModalOpen);
  }

  const clearArticle = () => {
    setArticle("");
    setUrl("");
  };

  return (
    <>
      <Model isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <div className="wrapper">
        {/* Search */}
        <h2
          className="d-flex justify-content-center text-center"
          style={{ overflow: "hidden" }}
        >
          Turn website article into a summary
          <span className="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            New
          </span>
        </h2>
        <p className="mb-1 text-center ">
          Enter the link of the article you want to summarize
        </p>
        <div className="flex flex-col w-full gap-2 pl-8 pr-8">
          <form
            className="relative flex justify-center items-center"
            onSubmit={handleSubmit}
          >
            <img
              src={linkIcon}
              alt="link-icon"
              className="absolute left-0 my-2 ml-3 w-5 mt-3"
            />

            <input
              type="url"
              placeholder="Paste the article link"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={handleKeyDown}
              className="url_input peer mt-2" // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
            />
            <button
              type="submit"
              className="submit_btn border-0 text-black mt-3"
            >
              <p>↵</p>
            </button>
          </form>

          {/* Browse History */}
          <div className="flex flex-col gap-1 max-h-50 overflow-y-auto">
            {allArticles.reverse().map((item, index) => (
              <div
                key={`link-${index}`}
                onClick={(e) => handleCopy(item.url, e)}
                className="link_card"
              >
                <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                  <img
                    src={copied === item.url ? tick : copy}
                    alt={copied === item.url ? "tick_icon" : "copy_icon"}
                    className="w-[40%] h-[40%] object-contain"
                  />
                </div>
                <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                  {item.url}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Display Result */}
        <div className="mt-4 max-w-full flex justify-center items-center pl-8 pr-8">
          {loading ? (
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
          ) : article == "" ? (
            <p className=" text-muted small mt-44">
              Your summarized Article will appear here. You can copy it to
              clipboard by clicking on the copy button.
            </p>
          ) : (
            article && (
              <>
                <div className="flex flex-col gap-3">
                  <div className="summary_box h-96">
                    <p className="font-inter font-medium text-sm text-gray-700 text-justify">
                      {article}
                    </p>
                  </div>
                  <div className="container-2">
                    <div className="d-flex justify-content-between">
                      <p className="m-0 text-muted small">word count : {countWords(article)}</p>
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
                          onClick={() => clearArticle()}
                          className="me-2 btn btn-sm shadow-0"
                          data-mdb-tooltip-init
                          title="Clear"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                        <button
                          onClick={openModal}
                          className="btn btn-sm shadow-0 "
                          data-mdb-tooltip-init
                          title="Feedback"
                        >
                          <i className="fa-regular fa-comment"></i>
                        </button>
                      </div>
                    </div>
                    <p className="text-muted small w-100 mb-0 pb-0 mt-2">
                      *Sometimes, AI makes mistakes. Please click on the
                      &quot;check&quot; button again if you see unusual
                      characters in the paragraphs. This tool is still in beta.
                    </p>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Demo;
