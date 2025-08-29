import React, { useState, useEffect } from "react";
import dataset from "./alpie_frontend_dataset.json";

export default function MiniAIWorkspace() {
  const [notes, setNotes] = useState(dataset);
  const [search, setSearch] = useState("");
  const [memory, setMemory] = useState(() => {
    const saved = localStorage.getItem("memory");
    return saved ? JSON.parse(saved) : notes.filter((n) => n.pinned);
  });

  // persist memory
  useEffect(() => {
    localStorage.setItem("memory", JSON.stringify(memory));
  }, [memory]);

  const togglePin = (note) => {
    if (memory.find((m) => m.id === note.id)) {
      setMemory(memory.filter((m) => m.id !== note.id));
    } else {
      setMemory([...memory, note]);
    }
  };

  const filtered = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.description.toLowerCase().includes(search.toLowerCase()) ||
      n.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col p-4">
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <div className="space-y-4 overflow-y-auto">
          {filtered.map((note) => (
            <div
              key={note.id}
              className="p-4 bg-white shadow rounded-xl flex justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">{note.title}</h2>
                <p className="text-sm text-gray-600">{note.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {note.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs bg-gray-200 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => togglePin(note)}
                className={`px-3 py-1 rounded ${
                  memory.find((m) => m.id === note.id)
                    ? "bg-yellow-400"
                    : "bg-gray-200"
                }`}
              >
                📌
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Memory Panel */}
      <div className="w-80 border-l bg-white p-4 overflow-y-auto">
        <h2 className="font-bold mb-4">Memory</h2>
        {memory.length === 0 && (
          <p className="text-gray-500 text-sm">No pinned notes yet.</p>
        )}
        {memory.map((m) => (
          <div key={m.id} className="mb-3 p-2 border rounded bg-gray-50">
            <h3 className="text-sm font-semibold">{m.title}</h3>
            <p className="text-xs text-gray-600">{m.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
