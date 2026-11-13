export interface ServiceOverviewItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  servicePageTitle: string;
  introduction: string;
  capabilities: string[];
  dropdownOption: string;
  iconName: 'cpu' | 'workflow' | 'message' | 'gitbranch';
}

export const SERVICES_DATA: ServiceOverviewItem[] = [
  {
    id: 'ai-automation',
    number: '01',
    title: 'AI-Powered Automation',
    shortDescription:
      'Automate repetitive business activities using intelligent AI-powered workflows.',
    servicePageTitle: 'AI Automation Solutions',
    introduction:
      'Practical AI systems built to handle document intake, classification, summarization, and structured routing so your team spends less time on manual sorting.',
    capabilities: [
      'Automating repetitive tasks using AI.',
      'Intelligent data processing.',
      'AI-powered business workflows.',
      'Task automation and decision-support workflows.',
    ],
    dropdownOption: 'AI Automation',
    iconName: 'cpu',
  },
  {
    id: 'process-automation',
    number: '02',
    title: 'Business Process Automation',
    shortDescription:
      'Simplify daily operations by connecting tools, applications, and business processes.',
    servicePageTitle: 'Business Process Automation',
    introduction:
      'Streamline recurring administrative work across billing, scheduling, approvals, and internal reporting with reliable, easy-to-maintain workflows.',
    capabilities: [
      'Automating administrative tasks.',
      'Streamlining repetitive business operations.',
      'Reducing manual data entry.',
      'Improving operational efficiency.',
    ],
    dropdownOption: 'Business Process Automation',
    iconName: 'workflow',
  },
  {
    id: 'ai-chatbots',
    number: '03',
    title: 'AI Chatbots & Virtual Assistants',
    shortDescription:
      'Build intelligent assistants that handle customer inquiries, support, and lead generation.',
    servicePageTitle: 'AI Chatbots & Virtual Assistants',
    introduction:
      'Responsive conversational assistants trained on your business knowledge to answer common questions, qualify leads, and route requests around the clock.',
    capabilities: [
      'Customer support automation.',
      'Lead qualification and collection.',
      'Automated responses to customer inquiries.',
      'Website and messaging-platform chatbot integration.',
    ],
    dropdownOption: 'AI Chatbots',
    iconName: 'message',
  },
  {
    id: 'workflow-integration',
    number: '04',
    title: 'Workflow Integration',
    shortDescription:
      'Connect your existing business tools and platforms to create seamless automated workflows.',
    servicePageTitle: 'Workflow Integration & Automation',
    introduction:
      'Bridge disconnected spreadsheets, CRMs, email platforms, and accounting software so accurate information flows automatically between every system.',
    capabilities: [
      'Connecting different business applications.',
      'Automated data synchronization.',
      'CRM and business tool integrations.',
      'Multi-step workflow automation.',
    ],
    dropdownOption: 'Workflow Integration',
    iconName: 'gitbranch',
  },
];

export interface FeatureBlock {
  title: string;
  description: string;
  iconName: 'wrench' | 'clock' | 'layers' | 'trending';
}

export const WHY_CHOOSE_FEATURES: FeatureBlock[] = [
  {
    title: 'Practical Solutions',
    description: 'Automation designed around real business needs.',
    iconName: 'wrench',
  },
  {
    title: 'Improved Efficiency',
    description: 'Reduce repetitive manual work.',
    iconName: 'clock',
  },
  {
    title: 'Connected Systems',
    description: 'Integrate your existing business tools.',
    iconName: 'layers',
  },
  {
    title: 'Scalable Automation',
    description: 'Solutions that can grow with your business.',
    iconName: 'trending',
  },
];

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export const HOW_WE_WORK_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discover',
    description: 'Understand your business processes and challenges.',
  },
  {
    stepNumber: '02',
    title: 'Strategize',
    description: 'Identify opportunities for automation.',
  },
  {
    stepNumber: '03',
    title: 'Implement',
    description: 'Build and integrate the automation solution.',
  },
  {
    stepNumber: '04',
    title: 'Optimize',
    description: 'Test, improve, and refine workflows.',
  },
];

export const CONTACT_SERVICE_OPTIONS = [
  'AI Automation',
  'Business Process Automation',
  'AI Chatbots',
  'Workflow Integration',
  'Other',
] as const;
