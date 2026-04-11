"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const COLORS = ["#111827", "#374151", "#6b7280", "#9ca3af", "#475569", "#64748b", "#334155", "#1e293b"];

interface Project {
  id: string;
  name: string;
  description: string;
  color: string;
  memories: number;
  created: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState(COLORS[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("reattend_projects");
    if (saved) try { setProjects(JSON.parse(saved)); } catch { /* ignore */ }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem("reattend_projects", JSON.stringify(projects));
  }, [projects, loaded]);

  function createProject() {
    if (!name.trim()) return;
    setProjects(prev => [...prev, {
      id: `proj_${Date.now()}`,
      name: name.trim(),
      description: desc.trim(),
      color,
      memories: 0,
      created: new Date().toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }),
    }]);
    setName(""); setDesc(""); setColor(COLORS[0]); setShowCreate(false);
  }

  function deleteProject(id: string) {
    setProjects(prev => prev.filter(p => p.id !== id));
  }

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold text-[#111827]">Projects</h1>
        <button onClick={() => setShowCreate(true)} className="bg-[#111827] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition">
          + Add Project
        </button>
      </div>
      <p className="text-sm text-gray-500 mb-6">Create projects to organize your memories.</p>

      {/* Create modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50" onClick={() => setShowCreate(false)}>
          <div className="bg-white border border-gray-200 rounded-xl p-6 w-full max-w-md shadow-xl" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-semibold text-[#111827] mb-1">Create Project</h2>
            <p className="text-sm text-gray-500 mb-5">Group related memories into a project.</p>

            <div className="mb-3">
              <label className="text-xs text-gray-500 block mb-1">Name</label>
              <input type="text" placeholder="e.g., Product Development" value={name} onChange={e => setName(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:border-[#111827]" autoFocus />
            </div>
            <div className="mb-4">
              <label className="text-xs text-gray-500 block mb-1">Description</label>
              <input type="text" placeholder="Optional description" value={desc} onChange={e => setDesc(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:border-[#111827]" />
            </div>
            <div className="mb-5">
              <label className="text-xs text-gray-500 block mb-2">Color</label>
              <div className="flex gap-2">
                {COLORS.map(c => (
                  <button key={c} onClick={() => setColor(c)} className={`w-8 h-8 rounded-full transition ${color === c ? "ring-2 ring-offset-2 ring-gray-400" : "hover:scale-110"}`} style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setShowCreate(false)} className="px-4 py-2 text-sm text-gray-500 hover:text-[#111827]">Cancel</button>
              <button onClick={createProject} disabled={!name.trim()} className="bg-[#111827] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-black disabled:opacity-50">Create Project</button>
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      {projects.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-xl p-16 text-center">
          <p className="text-gray-400 text-sm mb-4">No projects yet</p>
          <button onClick={() => setShowCreate(true)} className="text-sm text-[#111827] font-medium hover:underline">Create your first project</button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map(p => (
            <div key={p.id} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition relative group">
              <Link href={`/app/projects/${p.id}`} className="block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: p.color }}>
                    {p.name[0].toUpperCase()}
                  </div>
                  <h3 className="font-semibold text-[#111827] text-sm">{p.name}</h3>
                </div>
                {p.description && <p className="text-xs text-gray-400 mb-3 line-clamp-2">{p.description}</p>}
                <p className="text-xs text-gray-400">{p.memories} memories</p>
              </Link>
              <button onClick={() => deleteProject(p.id)} className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition p-1" title="Delete project">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
