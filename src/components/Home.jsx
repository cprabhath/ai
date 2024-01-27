import { Link } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'
import Footer from "./Footer";
import { Fragment, useState } from 'react'

const Home = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog  as="div" className="relative z-10" onClose={closeModal}>
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
                <Dialog.Panel  className="rounded-0 w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                    style={{ overflow: "hidden" }}
                  >
                    What&apos;s new?
                  </Dialog.Title>
                  <div className="mt-2" >
                    <p className="text-sm text-gray-500">
                      We have added a new Accuracy tool for our toolkit. Now you can check the accuracy of your text.
                    </p>
                  </div>

                  <div className="mt-4" style={{ overflow: "hidden" }}>
                    <button
                      type="button"
                      className="rounded-0 inline-flex justify-center rounded-md border-0 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                      style={{ overflow: "hidden" }}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="container">
        <div className="mt-5 " style={{ overflow: "hidden" }}>
          <h1
            className="text-white d-flex justify-content-center text-center display-6"
            style={{ overflow: "hidden" }}
          >
            AI Powered toolkit for everyone!
          </h1>
        </div>
        <div className="mt-2 margin-bottom">
          <div className="row row-padding-2">
            <div className="col">
              {/* Grammer Checker */}
              <div className="card rounded-0">
                <img
                  src="https://th.bing.com/th/id/R.4b779771eb9037d9ddbe506ac8c6a75a?rik=GeubsLIlq5CtRQ&pid=ImgRaw&r=0"
                  className="card-img-top"
                  alt="Fissure in Sandstone"
                  style={{ height: "270px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ overflow: "hidden" }}>
                    AI Grammer Checker <i className="mx-2 fa-solid fa-circle-exclamation text-info"  onClick={openModal}></i>
                  </h5>
                  <p className="card-text" style={{ overflow: "hidden" }}>
                    Our AI powered grammer checker will help you to write better
                    and error free articles.
                  </p>
                  <Link
                    to="/grammar"
                    className="btn btn-primary border-0 shadow-0 mt-4"
                    data-mdb-ripple-init
                  >
                    AI Grammer Checker{" "}
                    <i className="mx-2 fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              {/* end of Grammer Checker */}
            </div>
            <div className="col">
              {/* Paraphersing tool */}
              <div className="card rounded-0">
                <img
                  src="https://www.learnesl.net/wp-content/uploads/2022/03/Paraphrasing-Tool.jpg"
                  className="card-img-top"
                  alt="Fissure in Sandstone"
                  style={{ height: "270px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ overflow: "hidden" }}>
                    AI Paraphrasing tool <i className="mx-2 fa-solid fa-circle-exclamation text-info" onClick={openModal}></i>
                  </h5>
                  <p className="card-text" style={{ overflow: "hidden" }}>
                    Our AI powered paraphrasing tool will help you to write
                    better and error free articles.
                  </p>
                  <Link
                    to="/paraphrasing"
                    className="btn btn-primary border-0 shadow-0 mt-4"
                    data-mdb-ripple-init
                  >
                    AI Paraphrasing tool{" "}
                    <i className="mx-2 fas fa-arrow-right"></i>
                  </Link>
                </div>
                {/* end of Paraphersing tool */}
              </div>
            </div>
            <div className="col margin-bottom">
              {/* Text Summerizer */}
              <div className="card rounded-0">
                <img
                  src="https://www.amritsardigitalacademy.in/blog/wp-content/uploads/2021/12/text-summarizer.png"
                  className="card-img-top"
                  alt="Fissure in Sandstone"
                  style={{ height: "270px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ overflow: "hidden" }}>
                    AI Text Summarizer <i className="mx-2 fa-solid fa-circle-exclamation text-info" onClick={openModal}></i>
                  </h5>
                  <p className="card-text" style={{ overflow: "hidden" }}>
                    Our AI powered text summarizer tool will help you to summarize large texts.
                  </p>
                  <Link
                    className="btn btn-primary border-0 shadow-0 mt-4"
                    data-mdb-ripple-init
                    to="/text"
                  >
                    AI Text Summarizer <i className="mx-2 fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              {/* end of Text Summerizer  */}
            </div>
           
          </div>

          {/* <div className="row row-padding-2">
          <div className="col-4 col-md-4 col-sm">
              <div className="card rounded-0">
                <img
                  src="https://th.bing.com/th/id/OIP.fRdBsqDbUBdL2NaDz2vZegHaD_?rs=1&pid=ImgDetMain"
                  className="card-img-top"
                  alt="Fissure in Sandstone"
                  style={{ height: "270px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ overflow: "hidden" }}>
                    AI PDF Summerizer
                  </h5>
                  <p className="card-text" style={{ overflow: "hidden" }}>
                    Our AI powered PDF summerizer tool will help you to
                    summerize your PDFs.
                  </p>
                  <button
                    className="btn btn-primary border-0 shadow-0"
                    data-mdb-ripple-init
                    disabled={true}
                  >
                    Coming Soon <i className="mx-2 fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
           
            <div className="col">
              <div className="card rounded-0">
                <img
                  src="https://th.bing.com/th/id/OIP.1N8-VymKIqmO4wPXh-lvNgHaFy?w=808&h=632&rs=1&pid=ImgDetMain"
                  className="card-img-top"
                  alt="Fissure in Sandstone"
                  style={{ height: "270px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ overflow: "hidden" }}>
                    AI Content Detection 
                  </h5>
                  <p className="card-text" style={{ overflow: "hidden" }}>
                    Our AI powered content detection tool will help you to detect content.
                  </p>
                  <button
                    className="btn btn-primary border-0 shadow-0"
                    data-mdb-ripple-init
                    disabled={true}
                  >
                    Coming Soon <i className="mx-2 fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card rounded-0">
                <img
                  src="https://techcrunch.com/wp-content/uploads/2019/07/GettyImages-908200362.jpg"
                  className="card-img-top"
                  alt="Fissure in Sandstone"
                  style={{ height: "270px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ overflow: "hidden" }}>
                    AI code hunter
                  </h5>
                  <p className="card-text" style={{ overflow: "hidden" }}>
                    This poweful tool will help you to find or create code any snippets.
                  </p>
                  <button
                    className="btn btn-primary border-0 shadow-0"
                    data-mdb-ripple-init
                    disabled={true}
                  >
                    Coming Soon <i className="mx-2 fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
