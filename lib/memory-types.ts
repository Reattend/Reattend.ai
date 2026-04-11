export const MEMORY_TYPES: Record<string, { label: string; icon: string }> = {
  meeting: { label: "Meeting", icon: "👥" },
  decision: { label: "Decision", icon: "⚖️" },
  note: { label: "Note", icon: "📝" },
  task: { label: "Task", icon: "✅" },
  idea: { label: "Idea", icon: "💡" },
  insight: { label: "Insight", icon: "🔍" },
  context: { label: "Context", icon: "📄" },
  report: { label: "Report", icon: "📊" },
  email: { label: "Email", icon: "📧" },
  transcript: { label: "Transcript", icon: "🎙️" },
  "": { label: "Memory", icon: "🧠" },
};

export function getMemoryType(type: string) {
  return MEMORY_TYPES[type] || MEMORY_TYPES[""];
}

export function timeAgo(ts: number) {
  const now = Date.now() / 1000;
  const diff = now - ts;
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 172800) return "yesterday";
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return new Date(ts * 1000).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function groupByDate(memories: { created_at: number }[]) {
  const now = Date.now() / 1000;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const todayTs = today.getTime() / 1000;
  const yesterdayTs = todayTs - 86400;
  const weekTs = todayTs - 604800;

  const groups: { label: string; items: typeof memories }[] = [
    { label: "Today", items: [] },
    { label: "Yesterday", items: [] },
    { label: "This week", items: [] },
    { label: "Earlier", items: [] },
  ];

  for (const m of memories) {
    if (m.created_at >= todayTs) groups[0].items.push(m);
    else if (m.created_at >= yesterdayTs) groups[1].items.push(m);
    else if (m.created_at >= weekTs) groups[2].items.push(m);
    else groups[3].items.push(m);
  }

  return groups.filter(g => g.items.length > 0);
}
