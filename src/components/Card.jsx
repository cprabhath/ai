import { Tab } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import Parapharsing from "./Parapharsing";
import GrammerChecker from "./grammerChecker";
import TextSummerizer from "./TextSummerizer";
import Demo from "./Demo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Card = () => {
  const [categories] = useState({
    "AI Grammar Checker": {
      component: <GrammerChecker />,
    },
    "AI Text Paraphraser": {
      component: <Parapharsing />,
    },
    "AI Text Summarizer": {
      component: <TextSummerizer />,
    },
    "Article Summarizer": {
      component: <Demo />,
    },
  });

  return (
    <div className="w-full px-2 py-8 sm:px-0">
    
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 p-2",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none",
                  selected
                    ? "bg-white text-black font-bold"
                    : "text-gray-900 hover:bg-white/[0.15] hover:text-gray-700"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((category, index) => (
            <Tab.Panel
              key={index}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none shadow-lg"
              )}
            >
              {category.component}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

    </div>
  );
};

export default Card;
