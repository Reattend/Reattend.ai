"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  memories: number;
  created: string;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("reattend_projects");
    if (saved) {
      try {
        const projects: Project[] = JSON.parse(saved);
        const found = projects.find(p => p.id === projectId);
        if (found) setProject(found);
      } catch { /* ignore */ }
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="p-6">
        <p className="text-gray-500 text-sm">Project not found.</p>
        <Link href="/app/projects" className="text-sm text-[#111827] font-medium hover:underline mt-2 inline-block">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
        <Link href="/app/projects" className="hover:text-[#111827] transition">Projects</Link>
        <span>/</span>
        <span className="text-[#111827]">{project.name}</span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-[#111827]">{project.name}</h1>
          {project.description && <p className="text-sm text-gray-500 mt-1">{project.description}</p>}
        </div>
        <Link href="/app/memories/new" className="bg-[#111827] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition">
          + Add Memory
        </Link>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="border border-gray-200 rounded-xl p-4">
          <p className="text-2xl font-bold text-[#111827]">{project.memories}</p>
          <p className="text-xs text-gray-500">Memories</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <p className="text-2xl font-bold text-[#111827]">0</p>
          <p className="text-xs text-gray-500">Connections</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <p className="text-sm text-gray-500">{project.created}</p>
          <p className="text-xs text-gray-400">Created</p>
        </div>
      </div>

      <div className="border border-dashed border-gray-300 rounded-xl p-12 text-center">
        <p className="text-gray-400 text-sm mb-4">No memories in this project yet</p>
        <Link href="/app/memories/new" className="text-sm text-[#111827] font-medium hover:underline">
          Add your first memory
        </Link>
      </div>
    </div>
  );
}
