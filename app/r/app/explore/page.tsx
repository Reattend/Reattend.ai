"use client";

export default function ExplorePage() {
  return (
    <div className="p-6 max-w-6xl">
      <h1 className="text-xl font-bold text-[#111827] mb-6">Explore</h1>

      {/* Top stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <StatCard value="0" label="Memories" color="bg-gray-100" />
        <StatCard value="0" label="Decisions" color="bg-gray-100" />
        <StatCard value="0" label="Entities" color="bg-gray-100" />
        <StatCard value="0" label="Connections" color="bg-gray-100" />
      </div>

      {/* Category stats */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 mb-8">
        <MiniStat icon="📋" value="0" label="Meetings" />
        <MiniStat icon="💡" value="0" label="Insights" />
        <MiniStat icon="📝" value="0" label="Notes" />
        <MiniStat icon="🎯" value="0" label="Decisions" />
        <MiniStat icon="✅" value="0" label="Tasks" />
        <MiniStat icon="📎" value="0" label="Files" />
        <MiniStat icon="🔗" value="0" label="Links" />
        <MiniStat icon="📧" value="0" label="Emails" />
      </div>

      {/* Activity + Memory Types */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Activity chart placeholder */}
        <div className="border border-gray-200 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-[#111827]">Activity (Last 14 Days)</h3>
            <span className="text-xs text-gray-400">Memories created</span>
          </div>
          <div className="h-40 flex items-end justify-between gap-1 px-2">
            {Array.from({ length: 14 }, (_, i) => (
              <div key={i} className="flex-1 bg-gray-100 rounded-t" style={{ height: `${Math.random() * 60 + 5}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-gray-400 px-2">
            <span>14d ago</span>
            <span>7d ago</span>
            <span>Today</span>
          </div>
        </div>

        {/* Memory types donut placeholder */}
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-[#111827] mb-4">Memory Types</h3>
          <div className="flex items-center justify-center h-40">
            <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
              <span className="text-xs text-gray-400">No data yet</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            {["Meetings", "Notes", "Decisions", "Tasks", "Files"].map(t => (
              <span key={t} className="text-[10px] text-gray-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-gray-300" />{t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Recent activity */}
      <div className="border border-gray-200 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-[#111827] mb-4">Recent Activity</h3>
        <div className="text-center py-8 text-gray-400 text-sm">
          No activity yet. Add your first memory to get started.
        </div>
      </div>
    </div>
  );
}

function StatCard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className={`${color} rounded-xl p-4`}>
      <p className="text-2xl font-bold text-[#111827]">{value}</p>
      <p className="text-xs text-gray-500 mt-0.5">{label}</p>
    </div>
  );
}

function MiniStat({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-2.5 text-center">
      <span className="text-sm">{icon}</span>
      <p className="text-sm font-bold text-[#111827] mt-0.5">{value}</p>
      <p className="text-[10px] text-gray-400">{label}</p>
    </div>
  );
}
