"use client";
import { useState } from "react";
import { generateAIResponse } from "./gemini";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await generateAIResponse(input);
    setResponse(result);
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-400">AIチャット</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="メッセージを入力してください"
            className="flex-grow p-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          />
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition duration-300">送信</button>
        </div>
      </form>
      {response && (
        <div className="bg-gray-800 p-4 rounded-md shadow-md border border-gray-700">
          <h2 className="text-xl font-semibold mb-2 text-purple-400">応答:</h2>
          <p className="text-gray-300 whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
}
