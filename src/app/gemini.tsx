"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateAIResponse = async (prompt: string): Promise<string> => {
  const genAI = new GoogleGenerativeAI(
    process.env.GOOGLE_API_KEY || ""
  );
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};
