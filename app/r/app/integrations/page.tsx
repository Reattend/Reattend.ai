"use client";

import { useState } from "react";

const categories = ["All", "Communication", "Email & Calendar", "Docs & Knowledge", "Project & Dev", "CRM & Support", "Storage", "Analytics & Data", "Productivity"];

const integrations = [
  { name: "Gmail", category: "Email & Calendar", desc: "Capture decisions, commitments, and follow-ups from emails.", available: false },
  { name: "Google Calendar", category: "Email & Calendar", desc: "Sync calendar events and meeting notes into memory.", available: false },
  { name: "Slack", category: "Communication", desc: "Capture key messages from Slack channels and DMs.", available: false },
  { name: "Microsoft Teams", category: "Communication", desc: "Ingest meeting notes, chat messages, and shared files.", available: false },
  { name: "Notion", category: "Docs & Knowledge", desc: "Sync pages and databases from your Notion workspace.", available: false },
  { name: "Google Drive", category: "Storage", desc: "Process documents, spreadsheets, and presentations.", available: false },
  { name: "GitHub", category: "Project & Dev", desc: "Remember commits, PRs, issues, and code reviews.", available: false },
  { name: "Jira", category: "Project & Dev", desc: "Track tickets, sprints, and project decisions.", available: false },
  { name: "Linear", category: "Project & Dev", desc: "Sync issues, projects, and team workflows.", available: false },
  { name: "Figma", category: "Docs & Knowledge", desc: "Capture design decisions and feedback.", available: false },
  { name: "Discord", category: "Communication", desc: "Monitor Discord servers for important discussions.", available: false },
  { name: "Zoom", category: "Communication", desc: "Auto-capture meeting transcripts and recordings.", available: false },
  { name: "Google Meet", category: "Communication", desc: "Transcribe and remember meeting discussions.", available: false },
  { name: "Outlook", category: "Email & Calendar", desc: "Sync emails and calendar from Microsoft 365.", available: false },
  { name: "Confluence", category: "Docs & Knowledge", desc: "Sync wiki pages and knowledge base articles.", available: false },
  { name: "Dropbox", category: "Storage", desc: "Process files from your Dropbox.", available: false },
  { name: "OneDrive", category: "Storage", desc: "Sync documents from Microsoft OneDrive.", available: false },
  { name: "Asana", category: "Project & Dev", desc: "Track tasks, milestones, and project updates.", available: false },
  { name: "Trello", category: "Project & Dev", desc: "Sync boards, cards, and checklists.", available: false },
  { name: "Hubspot", category: "CRM & Support", desc: "Remember customer interactions and deal history.", available: false },
  { name: "Salesforce", category: "CRM & Support", desc: "Sync CRM records, deals, and contacts.", available: false },
  { name: "Intercom", category: "CRM & Support", desc: "Capture customer conversations and support tickets.", available: false },
  { name: "Zendesk", category: "CRM & Support", desc: "Sync support tickets and customer communications.", available: false },
  { name: "Airtable", category: "Analytics & Data", desc: "Sync structured data from Airtable bases.", available: false },
  { name: "Obsidian", category: "Docs & Knowledge", desc: "Sync your Obsidian vault notes and backlinks.", available: false },
  { name: "Roam Research", category: "Docs & Knowledge", desc: "Import your Roam graph into memory.", available: false },
  { name: "Logseq", category: "Docs & Knowledge", desc: "Sync journal entries and knowledge pages.", available: false },
  { name: "Bear", category: "Docs & Knowledge", desc: "Import notes from Bear app.", available: false },
  { name: "Apple Notes", category: "Docs & Knowledge", desc: "Sync notes from Apple ecosystem.", available: false },
  { name: "Evernote", category: "Docs & Knowledge", desc: "Import notebooks from Evernote.", available: false },
  { name: "Twitter / X", category: "Communication", desc: "Capture bookmarked tweets and threads.", available: false },
  { name: "Reddit", category: "Communication", desc: "Save and remember important threads.", available: false },
  { name: "WhatsApp", category: "Communication", desc: "Import chat exports into memory.", available: false },
  { name: "Telegram", category: "Communication", desc: "Sync messages from Telegram channels.", available: false },
  { name: "ClickUp", category: "Project & Dev", desc: "Track tasks, docs, and goals.", available: false },
  { name: "Monday.com", category: "Project & Dev", desc: "Sync boards and workflows.", available: false },
  { name: "Basecamp", category: "Project & Dev", desc: "Import projects and discussions.", available: false },
  { name: "GitLab", category: "Project & Dev", desc: "Remember merge requests and issues.", available: false },
  { name: "Bitbucket", category: "Project & Dev", desc: "Track PRs and code changes.", available: false },
  { name: "AWS", category: "Analytics & Data", desc: "Import CloudWatch logs and events.", available: false },
  { name: "Stripe", category: "Analytics & Data", desc: "Track payment events and subscriptions.", available: false },
  { name: "Segment", category: "Analytics & Data", desc: "Sync analytics events.", available: false },
  { name: "Mixpanel", category: "Analytics & Data", desc: "Import user analytics data.", available: false },
  { name: "Amplitude", category: "Analytics & Data", desc: "Sync product analytics.", available: false },
  { name: "Datadog", category: "Analytics & Data", desc: "Import monitoring alerts and incidents.", available: false },
  { name: "PagerDuty", category: "CRM & Support", desc: "Track incidents and on-call events.", available: false },
  { name: "Freshdesk", category: "CRM & Support", desc: "Sync support tickets.", available: false },
  { name: "Pipedrive", category: "CRM & Support", desc: "Track deals and contacts.", available: false },
  { name: "Box", category: "Storage", desc: "Process files from Box.", available: false },
  { name: "iCloud", category: "Storage", desc: "Sync documents from iCloud.", available: false },
  { name: "Zapier", category: "Productivity", desc: "Connect any app via Zapier workflows.", available: false },
  { name: "Make", category: "Productivity", desc: "Automate memory ingestion with Make.", available: false },
  { name: "IFTTT", category: "Productivity", desc: "Trigger memory creation from any app.", available: false },
  { name: "Raycast", category: "Productivity", desc: "Quick-add memories from Raycast.", available: false },
  { name: "Alfred", category: "Productivity", desc: "Quick-add memories from Alfred.", available: false },
  { name: "Chrome Extension", category: "Productivity", desc: "Save any webpage to memory.", available: false },
  { name: "Firefox Extension", category: "Productivity", desc: "Save any webpage to memory.", available: false },
  { name: "Safari Extension", category: "Productivity", desc: "Save any webpage to memory.", available: false },
  { name: "VS Code", category: "Project & Dev", desc: "Remember code context and decisions.", available: false },
  { name: "Cursor", category: "Project & Dev", desc: "Integrate memory into your AI editor.", available: false },
  { name: "Vercel", category: "Project & Dev", desc: "Track deployments and build logs.", available: false },
  { name: "Supabase", category: "Analytics & Data", desc: "Sync database events.", available: false },
  { name: "Firebase", category: "Analytics & Data", desc: "Import Firestore events.", available: false },
  { name: "Webhooks", category: "Productivity", desc: "Send data to Reattend via webhook.", available: false },
  { name: "REST API", category: "Productivity", desc: "Direct API access to all memory functions.", available: true },
  { name: "Pocket", category: "Productivity", desc: "Save articles from Pocket.", available: false },
  { name: "Readwise", category: "Docs & Knowledge", desc: "Import highlights from Readwise.", available: false },
  { name: "Kindle", category: "Docs & Knowledge", desc: "Import book highlights.", available: false },
  { name: "Instapaper", category: "Productivity", desc: "Save articles from Instapaper.", available: false },
  { name: "Feedly", category: "Productivity", desc: "Capture articles from RSS feeds.", available: false },
  { name: "Loom", category: "Communication", desc: "Transcribe and remember video messages.", available: false },
  { name: "Miro", category: "Docs & Knowledge", desc: "Capture whiteboard sessions.", available: false },
  { name: "Canva", category: "Docs & Knowledge", desc: "Import design project notes.", available: false },
  { name: "Calendly", category: "Email & Calendar", desc: "Sync meeting bookings.", available: false },
  { name: "Cal.com", category: "Email & Calendar", desc: "Track scheduled meetings.", available: false },
  { name: "Typeform", category: "Analytics & Data", desc: "Capture form responses.", available: false },
  { name: "Tally", category: "Analytics & Data", desc: "Sync form submissions.", available: false },
  { name: "Coda", category: "Docs & Knowledge", desc: "Sync documents and tables.", available: false },
  { name: "Clay", category: "CRM & Support", desc: "Enrich contacts with memory.", available: false },
  { name: "Notion Calendar", category: "Email & Calendar", desc: "Sync calendar from Notion.", available: false },
  { name: "Superhuman", category: "Email & Calendar", desc: "Capture email intelligence.", available: false },
  { name: "Front", category: "CRM & Support", desc: "Shared inbox conversations.", available: false },
  { name: "Help Scout", category: "CRM & Support", desc: "Customer support threads.", available: false },
  { name: "Crisp", category: "CRM & Support", desc: "Live chat conversations.", available: false },
  { name: "Twilio", category: "Communication", desc: "SMS and call transcripts.", available: false },
  { name: "Postmark", category: "Email & Calendar", desc: "Transactional email tracking.", available: false },
  { name: "SendGrid", category: "Email & Calendar", desc: "Email delivery events.", available: false },
  { name: "Resend", category: "Email & Calendar", desc: "Email delivery tracking.", available: false },
  { name: "Plausible", category: "Analytics & Data", desc: "Privacy-friendly analytics.", available: false },
  { name: "PostHog", category: "Analytics & Data", desc: "Product analytics events.", available: false },
  { name: "Sentry", category: "Analytics & Data", desc: "Error tracking and incidents.", available: false },
  { name: "Grafana", category: "Analytics & Data", desc: "Dashboard alerts and events.", available: false },
  { name: "Docker", category: "Project & Dev", desc: "Container deployment events.", available: false },
  { name: "Kubernetes", category: "Project & Dev", desc: "Cluster events and deployments.", available: false },
  { name: "Terraform", category: "Project & Dev", desc: "Infrastructure change tracking.", available: false },
  { name: "Homebrew", category: "Productivity", desc: "Track installed packages.", available: false },
  { name: "1Password", category: "Productivity", desc: "Secure credential context.", available: false },
  { name: "Grammarly", category: "Productivity", desc: "Writing context and corrections.", available: false },
];

export default function IntegrationsPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = integrations.filter(i => {
    if (category !== "All" && i.category !== category) return false;
    if (search && !i.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold text-[#111827]">Integrations</h1>
        <span className="text-xs text-gray-400">{integrations.length} integrations</span>
      </div>
      <p className="text-sm text-gray-500 mb-6">Connect your tools to feed your memory automatically.</p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search integrations..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:border-[#111827] mb-4"
      />

      {/* Categories */}
      <div className="flex gap-1.5 mb-6 overflow-x-auto pb-2">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
              category === c ? "bg-[#111827] text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map(i => (
          <div key={i.name} className={`border rounded-xl p-4 ${i.available ? "border-gray-300" : "border-gray-200 opacity-60"}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                {i.name[0]}
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                i.available ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-400"
              }`}>
                {i.available ? "Available" : "Soon"}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-[#111827] mb-0.5">{i.name}</h3>
            <p className="text-[11px] text-gray-400 leading-relaxed">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
