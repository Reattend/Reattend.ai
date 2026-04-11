export default function RateLimitsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-[#1d1d1d] mb-1">Rate limits</h1>
      <p className="text-sm text-[#6b5f7a] font-light mb-8">
        Rate limits depend on your API key tier. Upgrade to increase limits.
      </p>

      <div className="bg-white/60 border border-[#d4cade] rounded-2xl overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#d4cade]">
              <th className="text-left px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Tier</th>
              <th className="text-left px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Key prefix</th>
              <th className="text-right px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Daily</th>
              <th className="text-right px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Monthly</th>
              <th className="text-right px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Memories</th>
              <th className="text-right px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">File size</th>
              <th className="text-right px-5 py-3.5 font-semibold text-[#6b5f7a] text-xs uppercase tracking-wider">Price</th>
            </tr>
          </thead>
          <tbody className="text-[#6b5f7a]">
            <tr className="border-b border-[#d4cade]/50">
              <td className="px-5 py-3.5 font-medium text-[#1d1d1d]">Test</td>
              <td className="px-5 py-3.5 font-mono text-[13px]">rab_test_*</td>
              <td className="px-5 py-3.5 text-right">100</td>
              <td className="px-5 py-3.5 text-right">1,000</td>
              <td className="px-5 py-3.5 text-right">1,000</td>
              <td className="px-5 py-3.5 text-right">10 MB</td>
              <td className="px-5 py-3.5 text-right text-[#8069af] font-medium">Free</td>
            </tr>
            <tr className="border-b border-[#d4cade]/50">
              <td className="px-5 py-3.5 font-medium text-[#1d1d1d]">Live</td>
              <td className="px-5 py-3.5 font-mono text-[13px]">rab_live_*</td>
              <td className="px-5 py-3.5 text-right">10,000</td>
              <td className="px-5 py-3.5 text-right">100,000</td>
              <td className="px-5 py-3.5 text-right">1,000,000</td>
              <td className="px-5 py-3.5 text-right">100 MB</td>
              <td className="px-5 py-3.5 text-right text-[#8069af] font-medium">Coming soon</td>
            </tr>
            <tr>
              <td className="px-5 py-3.5 font-medium text-[#1d1d1d]">Enterprise</td>
              <td className="px-5 py-3.5 font-mono text-[13px]">Custom</td>
              <td className="px-5 py-3.5 text-right">Unlimited</td>
              <td className="px-5 py-3.5 text-right">Unlimited</td>
              <td className="px-5 py-3.5 text-right">Unlimited</td>
              <td className="px-5 py-3.5 text-right">500 MB</td>
              <td className="px-5 py-3.5 text-right"><a href="https://cal.com/reattend/30min" target="_blank" rel="noopener noreferrer" className="text-[#8069af] font-medium hover:underline">Contact us</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white/60 border border-[#d4cade] rounded-2xl p-6">
        <h2 className="text-base font-semibold text-[#1d1d1d] mb-4">How rate limits work</h2>
        <div className="space-y-3 text-sm text-[#6b5f7a] font-light">
          <p>Rate limits are applied per API key. Each key has independent counters for daily and monthly requests.</p>
          <p>When you exceed your rate limit, the API returns a <code className="font-mono text-[#8069af] bg-[#8069af]/10 px-1.5 py-0.5 rounded">429 Too Many Requests</code> response with a message indicating when the limit resets.</p>
          <p>Test keys are designed for development and testing. For production workloads, use Live keys.</p>
          <p>All tiers include access to all 12 signals, file upload, streaming, and reasoning mode.</p>
        </div>
      </div>
    </div>
  );
}
