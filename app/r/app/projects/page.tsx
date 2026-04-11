"use client";

import Link from "next/link";
import { useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  memories: number;
  created: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function createProject() {
    if (!name.trim()) return;
    setProjects(prev => [...prev, {
      id: `proj_${Date.now()}`,
      name: name.trim(),
      description: desc.trim(),
      memories: 0,
      created: new Date().toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }),
    }]);
    setName("");
    setDesc("");
    setShowCreate(false);
  }

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold text-[#111827]">Projects</h1>
        <button
          onClick={() => setShowCreate(true)}
          className="bg-[#111827] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition"
        >
          + Add Project
        </button>
      </div>
      <p className="text-sm text-gray-500 mb-6">Create projects to organize your memories. Start by adding a project, then create memories inside it.</p>

      {/* Create modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50" onClick={() => setShowCreate(false)}>
          <div className="bg-white border border-gray-200 rounded-xl p-6 w-full max-w-md shadow-xl" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-semibold text-[#111827] mb-4">New project</h2>
            <input
              type="text"
              placeholder="Project name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:border-[#111827] mb-3"
              autoFocus
            />
            <textarea
              placeholder="Description (optional)"
              value={desc}
              onChange={e => setDesc(e.target.value)}
              rows={2}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:border-[#111827] mb-4 resize-none"
            />
            <div className="flex gap-3 justify-end">
              <button onClick={() => setShowCreate(false)} className="px-4 py-2 text-sm text-gray-500 hover:text-[#111827]">Cancel</button>
              <button onClick={createProject} disabled={!name.trim()} className="bg-[#111827] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-black disabled:opacity-50">Create</button>
            </div>
          </div>
        </div>
      )}

      {/* Project grid */}
      {projects.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-xl p-12 text-center">
          <p className="text-gray-400 text-sm mb-4">No projects yet</p>
          <button onClick={() => setShowCreate(true)} className="text-sm text-[#111827] font-medium hover:underline">
            Create your first project
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map(p => (
            <Link key={p.id} href={`/app/projects/${p.id}`} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                  {p.name[0].toUpperCase()}
                </div>
                <h3 className="font-semibold text-[#111827] text-sm">{p.name}</h3>
              </div>
              {p.description && <p className="text-xs text-gray-400 mb-3 line-clamp-2">{p.description}</p>}
              <p className="text-xs text-gray-400">{p.memories} memories</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
