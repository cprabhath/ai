import { Tab } from "@headlessui/react";
import Footer from "./Footer";
import { useState } from "react";
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
  const [categories] = useState({
    "AI Grammar Checker": {
      component: <GrammerCheck />,
    },
    "AI Paraphrasing tool": {
      component: <Paraphrase />,
    },
    "AI Text Summarizer": {
      component: <TextSummer />,
    },
});

  return (
    <>
      <div className="container">
        <div className="mt-5 " style={{ overflow: "hidden" }}>
          <h1
            className="text-white d-flex justify-content-center text-center display-6"
            style={{ overflow: "hidden" }}
          >
            Welcome to AI Toolkit
          </h1>
          <p
            className="text-white d-flex justify-content-center text-center"
            style={{ overflow: "hidden" }}
          >
            Our AI powered toolkit will help you to write better and error free.
          </p>
        </div>
        <div className="w-full px-2 py-16 sm:px-0">
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
