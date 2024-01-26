import { useState } from "react";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import { toast } from "react-toastify";

export const useContentGenerator = () => {
  const [loading, setLoading] = useState(false);
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ];

  const generate = async (paragraph, setGenerated, setParagraph, prompts) => {
    if (!paragraph) {
      toast.info("Please add some text to generate 😒");
      return;
    }
    try {
      setLoading(true);
      const model = genAI.getGenerativeModel({
        model: "gemini-pro",
        safetySettings,
      });
      const prompt = `${prompts} + ${paragraph}`;
      const result = await model.generateContentStream(prompt);
      const response = await result.response;
      const text = await response.text();
      if (!text) {
        toast.error("Something went wrong ☹️");
        return;
      }
      setGenerated(text);
    } catch (error) {
      toast.error(error.message + " " + error.code + " 😲");
      setGenerated("");
      setParagraph("");
    } finally {
      setLoading(false);
    }
  };

  return { loading, generate };
};
