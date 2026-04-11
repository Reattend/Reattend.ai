"use client";

export default function BoardPage() {
  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="border-b border-gray-200 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-sm font-semibold text-[#111827]">Board</h1>
          <div className="flex gap-1.5">
            <button className="px-3 py-1 rounded-md text-xs font-medium bg-[#111827] text-white">Graph</button>
            <button className="px-3 py-1 rounded-md text-xs font-medium text-gray-500 hover:bg-gray-100">Map</button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-xs text-gray-500 hover:text-[#111827] border border-gray-200 px-3 py-1.5 rounded-lg">Fit</button>
          <button className="text-xs text-gray-500 hover:text-[#111827] border border-gray-200 px-3 py-1.5 rounded-lg">Center</button>
          <button className="text-xs text-gray-500 hover:text-[#111827] border border-gray-200 px-3 py-1.5 rounded-lg">Full screen</button>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 bg-gray-50 relative overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />

        {/* Empty state */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-[#111827] mb-1">Your knowledge graph</h3>
            <p className="text-xs text-gray-400 max-w-xs">
              As you add memories, Rabbit will automatically detect relationships and build your knowledge graph here. Each memory becomes a node, each connection becomes an edge.
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white border border-gray-200 rounded-lg p-3 text-[10px] text-gray-400">
          <p className="font-semibold text-gray-500 mb-1.5">Legend</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gray-800" /> Memory</div>
            <div className="flex items-center gap-2"><span className="w-4 h-0.5 bg-gray-400" /> Connection</div>
          </div>
        </div>
      </div>
    </div>
  );
}
