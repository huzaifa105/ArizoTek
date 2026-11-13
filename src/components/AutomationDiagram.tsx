import React, { useState } from 'react';
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Database,
  FileText,
  GitMerge,
  Inbox,
  Layers,
  MessageSquare,
  Sparkles,
  Workflow,
} from 'lucide-react';

interface WorkflowStage {
  id: string;
  step: string;
  title: string;
  summary: string;
  detail: string;
  icon: React.ReactNode;
}

const HERO_STAGES: WorkflowStage[] = [
  {
    id: 'intake',
    step: 'Step 01',
    title: 'Capture Incoming Requests',
    summary: 'Web forms, emails, and customer messages enter one unified queue.',
    detail:
      'Instead of staff manually copying inquiries across spreadsheets and inboxes, ArizoTek captures structured inputs automatically at the source.',
    icon: <Inbox className="w-4 h-4" />,
  },
  {
    id: 'classify',
    step: 'Step 02',
    title: 'AI Triage & Data Extraction',
    summary: 'Requests are categorized, summarized, and enriched without manual entry.',
    detail:
      'AI models extract key fields such as customer intent, company details, and priority level before routing tasks to the right team.',
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    id: 'sync',
    step: 'Step 03',
    title: 'Connected Tool Synchronization',
    summary: 'CRM records, project boards, and accounting tools stay aligned.',
    detail:
      'Clean API integrations update your existing business software automatically so every department works from consistent information.',
    icon: <Database className="w-4 h-4" />,
  },
  {
    id: 'action',
    step: 'Step 04',
    title: 'Automated Follow-Up & Reporting',
    summary: 'Instant client acknowledgments and clear operational summaries.',
    detail:
      'Routine confirmations, task assignments, and status updates happen reliably in the background while your team focuses on high-value work.',
    icon: <CheckCircle2 className="w-4 h-4" />,
  },
];

/**
 * Interactive workflow schematic for the Home Hero section.
 * Clean, WordPress-friendly card architecture using brand palette and hairline borders.
 */
export const HeroWorkflowVisual: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(HERO_STAGES[0].id);
  const activeStage = HERO_STAGES.find((s) => s.id === activeId) ?? HERO_STAGES[0];

  return (
    <div className="bg-white border border-[#E8E1DB] rounded-2xl p-6 md:p-7 shadow-[0_12px_40px_-18px_rgba(64,32,21,0.12)]">
      <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#E8E1DB]">
        <div>
          <p className="text-xs font-semibold tracking-wide text-[#D66A25]">
            Connected Business Workflow
          </p>
          <h2 className="text-base md:text-lg font-bold text-[#402015] mt-0.5">
            From Manual Tasks to Automated Flow
          </h2>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#FAF8F6] border border-[#E8E1DB] flex items-center justify-center text-[#D66A25] shrink-0">
          <Workflow className="w-5 h-5" />
        </div>
      </div>

      {/* Interactive Workflow Nodes */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3" role="tablist" aria-label="Automation workflow stages">
        {HERO_STAGES.map((stage) => {
          const isSelected = stage.id === activeId;
          return (
            <button
              key={stage.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveId(stage.id)}
              className={`text-left p-4 rounded-xl border transition-all duration-150 cursor-pointer ${
                isSelected
                  ? 'bg-[#FAF8F6] border-[#D66A25] shadow-xs'
                  : 'bg-white border-[#E8E1DB] hover:border-[#E9A04A]'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold tabular-nums text-[#D66A25]">
                  {stage.step}
                </span>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-[#D66A25] text-white'
                      : 'bg-[#FAF8F6] text-[#402015]'
                  }`}
                >
                  {stage.icon}
                </span>
              </div>
              <p className="text-sm font-bold text-[#402015] leading-snug">
                {stage.title}
              </p>
              <p className="text-xs text-[#626262] mt-1 leading-relaxed">
                {stage.summary}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Stage Explanation */}
      <div className="mt-5 bg-[#FAF8F6] border border-[#E8E1DB] rounded-xl p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold text-[#402015]">
            {activeStage.step} · {activeStage.title}
          </span>
          <span className="text-xs font-medium text-[#D66A25] flex items-center gap-1 shrink-0">
            Active Stage
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
        <p className="text-sm text-[#626262] mt-2 leading-relaxed">
          {activeStage.detail}
        </p>
      </div>
    </div>
  );
};

/**
 * Clean architectural visual for the Home About Us section showing how ArizoTek unifies scattered operations.
 */
export const AboutOperationsVisual: React.FC = () => {
  return (
    <div className="bg-[#FAF8F6] border border-[#E8E1DB] rounded-2xl p-6 md:p-8">
      <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#E8E1DB]">
        <div>
          <p className="text-xs font-semibold text-[#D66A25]">
            Operational Architecture
          </p>
          <h3 className="text-lg font-bold text-[#402015] mt-0.5">
            Unified Systems for Growing Teams
          </h3>
        </div>
        <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E1DB] flex items-center justify-center text-[#D66A25] shrink-0">
          <Layers className="w-5 h-5" />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {/* Layer 1 */}
        <div className="bg-white border border-[#E8E1DB] rounded-xl p-4">
          <p className="text-xs font-semibold text-[#626262]">
            01 · Existing Business Tools
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2.5 text-center">
            <div className="py-2.5 px-2 rounded-lg bg-[#FAF8F6] border border-[#E8E1DB] text-xs font-semibold text-[#402015]">
              Inbox & Forms
            </div>
            <div className="py-2.5 px-2 rounded-lg bg-[#FAF8F6] border border-[#E8E1DB] text-xs font-semibold text-[#402015]">
              CRM & Billing
            </div>
            <div className="py-2.5 px-2 rounded-lg bg-[#FAF8F6] border border-[#E8E1DB] text-xs font-semibold text-[#402015]">
              Spreadsheets
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center" aria-hidden="true">
          <div className="w-px h-6 bg-[#E9A04A]" />
        </div>

        {/* Layer 2 */}
        <div className="bg-[#402015] text-white rounded-xl p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#D66A25] flex items-center justify-center text-white shrink-0">
              <GitMerge className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                ArizoTek Automation Layer
              </p>
              <p className="text-xs text-white/80 mt-0.5">
                AI processing, rule-based routing, and reliable data sync
              </p>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center" aria-hidden="true">
          <div className="w-px h-6 bg-[#E9A04A]" />
        </div>

        {/* Layer 3 */}
        <div className="bg-white border border-[#E8E1DB] rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#D66A25] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#402015]">Consistent Records</p>
              <p className="text-xs text-[#626262] mt-0.5">
                Reduced duplicate entry across teams
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#D66A25] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#402015]">Faster Turnaround</p>
              <p className="text-xs text-[#626262] mt-0.5">
                Predictable execution for daily tasks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ServiceVisualProps {
  serviceId: string;
}

/**
 * Tailored schematic diagram for each detailed service block on the Services page.
 */
export const ServiceDetailVisual: React.FC<ServiceVisualProps> = ({ serviceId }) => {
  if (serviceId === 'ai-automation') {
    return (
      <div className="bg-[#FAF8F6] border border-[#E8E1DB] rounded-2xl p-6">
        <p className="text-xs font-semibold text-[#D66A25]">
          AI Workflow Blueprint
        </p>
        <div className="mt-4 space-y-3">
          <div className="bg-white border border-[#E8E1DB] rounded-xl p-3.5 flex items-center gap-3">
            <FileText className="w-4 h-4 text-[#D66A25] shrink-0" />
            <div className="min-w-0">
              <p className="text-xs font-bold text-[#402015]">Unstructured Input</p>
              <p className="text-xs text-[#626262]">Emails, PDFs, or customer forms</p>
            </div>
          </div>
          <div className="bg-white border border-[#E9A04A] rounded-xl p-3.5 flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-[#D66A25] shrink-0" />
            <div className="min-w-0">
              <p className="text-xs font-bold text-[#402015]">Intelligent Extraction & Triage</p>
              <p className="text-xs text-[#626262]">Structured fields and priority classification</p>
            </div>
          </div>
          <div className="bg-white border border-[#E8E1DB] rounded-xl p-3.5 flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#D66A25] shrink-0" />
            <div className="min-w-0">
              <p className="text-xs font-bold text-[#402015]">Routed Business Action</p>
              <p className="text-xs text-[#626262]">Drafted response or team task creation</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (serviceId === 'process-automation') {
    return (
      <div className="bg-[#FAF8F6] border border-[#E8E1DB] rounded-2xl p-6">
        <p className="text-xs font-semibold text-[#D66A25]">
          Operations Streamlining
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3">
          <div className="bg-white border border-[#E8E1DB] rounded-xl p-3.5">
            <p className="text-xs font-bold text-[#402015]">01 · Trigger Event</p>
            <p className="text-xs text-[#626262] mt-1">
              New client onboarding, invoice approval, or scheduled task
            </p>
          </div>
          <div className="bg-white border border-[#E8E1DB] rounded-xl p-3.5">
            <p className="text-xs font-bold text-[#402015]">02 · Automated Execution</p>
            <p className="text-xs text-[#626262] mt-1">
              Folder setup, document generation, and internal notifications
            </p>
          </div>
          <div className="bg-white border border-[#E8E1DB] rounded-xl p-3.5">
            <p className="text-xs font-bold text-[#402015]">03 · Verified Handoff</p>
            <p className="text-xs text-[#626262] mt-1">
              Consistent audit trail with reduced manual data entry
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (serviceId === 'ai-chatbots') {
    return (
      <div className="bg-[#FAF8F6] border border-[#E8E1DB] rounded-2xl p-6">
        <p className="text-xs font-semibold text-[#D66A25]">
          Assistant Interaction Flow
        </p>
        <div className="mt-4 space-y-3">
          <div className="bg-white border border-[#E8E1DB] rounded-xl p-3.5 flex items-start gap-3">
            <MessageSquare className="w-4 h-4 text-[#402015] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#402015]">Visitor Question</p>
              <p className="text-xs text-[#626262] mt-0.5">
                Customer asks about availability, pricing, or service scope
              </p>
            </div>
          </div>
          <div className="bg-[#402015] text-white rounded-xl p-3.5 flex items-start gap-3">
            <Bot className="w-4 h-4 text-[#E9A04A] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Guided Assistant Response</p>
              <p className="text-xs text-white/80 mt-0.5">
                Answers using approved business guidelines and qualifies lead details
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#E8E1DB] rounded-xl p-3.5 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#D66A25] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#402015]">Seamless Team Routing</p>
              <p className="text-xs text-[#626262] mt-0.5">
                Qualified inquiries sync directly to your inbox or CRM
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F6] border border-[#E8E1DB] rounded-2xl p-6">
      <p className="text-xs font-semibold text-[#D66A25]">
        System Integration Map
      </p>
      <div className="mt-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border border-[#E8E1DB] rounded-xl p-3 text-center">
            <p className="text-xs font-bold text-[#402015]">CRM Platform</p>
            <p className="text-[11px] text-[#626262] mt-0.5">Contacts & Deals</p>
          </div>
          <div className="bg-white border border-[#E8E1DB] rounded-xl p-3 text-center">
            <p className="text-xs font-bold text-[#402015]">Accounting</p>
            <p className="text-[11px] text-[#626262] mt-0.5">Invoices & Status</p>
          </div>
        </div>
        <div className="bg-white border border-[#D66A25] rounded-xl p-3.5 flex items-center justify-center gap-2">
          <GitMerge className="w-4 h-4 text-[#D66A25]" />
          <span className="text-xs font-bold text-[#402015]">
            Multi-Step Sync & Webhook Pipeline
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border border-[#E8E1DB] rounded-xl p-3 text-center">
            <p className="text-xs font-bold text-[#402015]">Team Messaging</p>
            <p className="text-[11px] text-[#626262] mt-0.5">Instant Alerts</p>
          </div>
          <div className="bg-white border border-[#E8E1DB] rounded-xl p-3 text-center">
            <p className="text-xs font-bold text-[#402015]">Reporting</p>
            <p className="text-[11px] text-[#626262] mt-0.5">Live Dashboards</p>
          </div>
        </div>
      </div>
    </div>
  );
};
