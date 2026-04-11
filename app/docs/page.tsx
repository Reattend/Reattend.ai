import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="flex-1">
      <nav className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto w-full">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Rabbit
        </Link>
        <Link href="/login" className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-neutral-200 transition text-sm">
          Get API Key
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">API Reference</h1>

        <Section title="Base URL">
          <Code>http://api.rabbit.reattend.ai:8000</Code>
        </Section>

        <Section title="Authentication">
          <p className="text-neutral-400 mb-3">
            All requests require a Bearer token in the Authorization header:
          </p>
          <Code>Authorization: Bearer rab_test_YOUR_KEY</Code>
        </Section>

        <Section title="POST /v1/remember">
          <p className="text-neutral-400 mb-3">Ingest content into memory. Runs the full AI pipeline.</p>
          <Pre>{`curl -X POST http://api.rabbit.reattend.ai:8000/v1/remember \\
  -H "Authorization: Bearer rab_test_YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "Sarah delayed the launch to March 15. Budget is $50K.",
    "source": "meeting"
  }'`}</Pre>
          <p className="text-neutral-500 text-sm mt-3">
            Returns: id, summary, triage_type, tags, extraction (people, decisions, action_items, dates), sentiment, importance, links
          </p>
        </Section>

        <Section title="POST /v1/ask">
          <p className="text-neutral-400 mb-3">Ask a question across all stored memories.</p>
          <Pre>{`curl -X POST http://api.rabbit.reattend.ai:8000/v1/ask \\
  -H "Authorization: Bearer rab_test_YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "question": "When is the launch?",
    "limit": 5,
    "reasoning": false
  }'`}</Pre>
          <p className="text-neutral-500 text-sm mt-3">
            Set <code className="text-neutral-400">reasoning: true</code> for deep analysis on complex questions.
          </p>
          <p className="text-neutral-500 text-sm mt-1">
            Set <code className="text-neutral-400">stream: true</code> for Server-Sent Events streaming.
          </p>
        </Section>

        <Section title="POST /v1/check">
          <p className="text-neutral-400 mb-3">Detect contradictions with stored memories.</p>
          <Pre>{`curl -X POST http://api.rabbit.reattend.ai:8000/v1/check \\
  -H "Authorization: Bearer rab_test_YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"context": "We are launching on March 1st"}'`}</Pre>
        </Section>

        <Section title="POST /v1/remember/file">
          <p className="text-neutral-400 mb-3">Upload a file (audio, PDF, image, DOCX, etc.).</p>
          <Pre>{`curl -X POST http://api.rabbit.reattend.ai:8000/v1/remember/file \\
  -H "Authorization: Bearer rab_test_YOUR_KEY" \\
  -F "file=@recording.mp3" \\
  -F "source=meeting"`}</Pre>
        </Section>

        <Section title="Other Endpoints">
          <div className="space-y-2 text-sm">
            <Row method="GET" path="/v1/memories" desc="List stored memories" />
            <Row method="GET" path="/v1/memories/:id" desc="Get a specific memory" />
            <Row method="DELETE" path="/v1/memories/:id" desc="Delete a memory" />
            <Row method="GET" path="/v1/graph/:id" desc="Get memory connections" />
            <Row method="POST" path="/v1/compile/:entity" desc="Compile wiki page for entity" />
            <Row method="POST" path="/v1/lint" desc="Run health audit" />
            <Row method="GET" path="/v1/stats" desc="Usage statistics" />
            <Row method="POST" path="/v1/feedback" desc="Submit thumbs up/down" />
          </div>
        </Section>

        <Section title="Python SDK">
          <Pre>{`pip install rabbit-memory

from rabbit import Rabbit

rab = Rabbit("rab_test_YOUR_KEY")

# Remember
m = rab.remember("Meeting notes here...", source="meeting")
print(m.summary)

# Ask
a = rab.ask("What was decided?")
print(a.text)

# Check contradictions
alert = rab.check("We're launching March 1")
if alert.show:
    print(f"Warning: {alert.context}")

# Feedback
rab.thumbs_up(question="...", answer_text="...")
rab.thumbs_down(question="...", answer_text="...", correction="Better answer here")`}</Pre>
        </Section>

        <Section title="JavaScript SDK">
          <Pre>{`npm install @reattend/rabbit

import { Rabbit } from '@reattend/rabbit';

const rab = new Rabbit('rab_test_YOUR_KEY');

const memory = await rab.remember('Meeting notes...', { source: 'meeting' });
const answer = await rab.ask('What was decided?');
console.log(answer.text);`}</Pre>
        </Section>

        <Section title="Rate Limits">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-neutral-400 border-b border-neutral-800 pb-2">
              <span>Test key (rab_test_*)</span>
              <span>100 calls/day, 1,000/month</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>Live key (rab_live_*)</span>
              <span>10,000 calls/day, 100,000/month</span>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
      {children}
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="block bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 font-mono text-sm text-neutral-300">
      {children}
    </code>
  );
}

function Pre({ children }: { children: string }) {
  return (
    <pre className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 font-mono text-sm text-neutral-300 overflow-x-auto whitespace-pre-wrap">
      {children}
    </pre>
  );
}

function Row({ method, path, desc }: { method: string; path: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 text-neutral-400 py-1">
      <span className={`font-mono text-xs px-2 py-0.5 rounded ${method === "GET" ? "bg-green-900/30 text-green-400" : method === "POST" ? "bg-blue-900/30 text-blue-400" : "bg-red-900/30 text-red-400"}`}>
        {method}
      </span>
      <code className="font-mono text-neutral-300">{path}</code>
      <span className="text-neutral-500 ml-auto">{desc}</span>
    </div>
  );
}
