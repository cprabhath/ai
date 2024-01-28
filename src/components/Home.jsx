import { Tab } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";
import Footer from "./Footer";
import { useState, Fragment } from "react";
import GrammerChecker from "./grammerChecker";
import Paraphrasing from "./Parapharsing";
import TextSummerizer from "./TextSummerizer";

const GrammerCheck = () => <GrammerChecker />;
const Paraphrase = () => <Paraphrasing />;
const TextSummer = () => <TextSummerizer />;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const [isOpen, setIsOpen] = useState(localStorage.getItem("feedback") !== "true" ? true : false);
  const [categories] = useState({
    "AI Grammar Checker": {
      component: <GrammerCheck />,
    },
    "AI Text Paraphraser": {
      component: <Paraphrase />,
    },
    "AI Text Summarizer": {
      component: <TextSummer />,
    },
});

function closeModal() {
  setIsOpen(false);
  localStorage.setItem("feedback", "true");
}

  return (
    <>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-3"
                    style={{ overflow: "hidden" }}
                  >
                    What&apos;s New?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <ul className="list-disc">
                        <li>Completely Redesign UI</li>
                        <li>Optimize Grammar Correction Tool</li>
                        <li>Added new Accuracy Tool</li>
                      </ul>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="overflow-hidden me-2 inline-flex justify-center rounded-md border-0 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Ok! Got it
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
            Start Your Adventure with AI Toolkit!
          </h1>
          <p
            className="text-white d-flex justify-content-center text-center"
            style={{ overflow: "hidden" }}
          >
            Our Super powered toolkit will help you to write better and error free and It&apos;s free and easy to use 🤩
          </p>
        </div>
        <div className="w-full px-2 py-8 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category, index) => (
                <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 p-2",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white text-blue-700 shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
             {
                Object.values(categories).map((category, index) => (
                  <Tab.Panel
                  key={index}
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  {category.component}
                </Tab.Panel>
                ))
             } 
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
