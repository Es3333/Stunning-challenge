'use client';

import { useState } from "react";

export default function Home() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sections, setSections] = useState<string[] | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSections(null);
    try {
      const res = await fetch("http://localhost:3001/sections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });
      if (!res.ok) throw new Error("Failed to create sections");
      const data = await res.json();
      // Fetch the stored section by id
      const getRes = await fetch(`http://localhost:3001/sections/${data._id}`);
      if (!getRes.ok) throw new Error("Failed to fetch stored sections");
      const getData = await getRes.json();
      setSections(getData.sections);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">Website Idea to Sections</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          value={idea}
          onChange={e => setIdea(e.target.value)}
          placeholder="Enter your website idea..."
          className="border rounded px-3 py-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Sections"}
        </button>
      </form>
      {error && <div className="text-red-600 mt-4">{error}</div>}
      {sections && (
        <div className="mt-8 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <ul className="list-disc pl-6">
            {sections.map((section, i) => (
              <li key={i}>{section}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
