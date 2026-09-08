export interface CareerLink {
  readonly exact?: boolean;
  readonly label: string;
  readonly path: string;
}

export interface CareerSection {
  readonly body: readonly string[];
  readonly code: string;
  readonly cta?: CareerLink;
  readonly items?: readonly string[];
  readonly title: string;
  readonly tone?: 'light' | 'mist' | 'dark';
}

export interface CareerPositionGroup {
  readonly area: string;
  readonly location: string;
  readonly status: string;
}

export interface CareerDetailPageData {
  readonly eyebrow: string;
  readonly introduction: string;
  readonly positions?: readonly CareerPositionGroup[];
  readonly primaryCta: CareerLink;
  readonly sections: readonly CareerSection[];
  readonly title: string;
}

export const CAREERS_NAVIGATION: readonly CareerLink[] = [
  { label: 'Overview', path: '/company/careers', exact: true },
  { label: 'Open Positions', path: '/company/careers/open-positions' },
  { label: 'Getting Hired', path: '/company/careers/getting-hired' },
  { label: 'Students & Early Talent', path: '/company/careers/students-and-early-talent' },
  { label: 'Life at Expert Systems Technology', path: '/company/careers/life-at-expert-systems-technology' },
];

export const CAREER_DETAIL_PAGES: Readonly<Record<string, CareerDetailPageData>> = {
  'open-positions': {
    eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / CAREERS / OPEN POSITIONS',
    title: 'Open positions',
    introduction: 'Find published opportunities to build and operate useful systems from Namibia. When a specific role is open, its scope and application route will appear here.',
    primaryCta: { label: 'Introduce yourself', path: '/contact' },
    positions: [
      { area: 'Software engineering', location: 'Namibia', status: 'No role currently published' },
      { area: 'Delivery & operations', location: 'Namibia', status: 'No role currently published' },
      { area: 'Product & research', location: 'Namibia', status: 'No role currently published' },
      { area: 'Students & early talent', location: 'Namibia', status: 'No programme currently published' },
    ],
    sections: [
      {
        code: '02 / GET TO KNOW US',
        title: 'Understand the work before you apply.',
        body: ['Learn why Expert Systems Technology exists, how we think about operations and the standards we bring to long-term software work.'],
        cta: { label: 'Learn about XpSys', path: '/company/about' },
      },
      {
        code: '03 / GETTING HIRED',
        title: 'Know what to expect from the conversation.',
        body: ['Our hiring process is designed to understand how you think, communicate and work through real problems. The exact stages depend on the role.'],
        cta: { label: 'Learn about getting hired', path: '/company/careers/getting-hired' },
        tone: 'mist',
      },
      {
        code: '04 / YOU BELONG HERE',
        title: 'Different experience can strengthen the system.',
        body: ['We value practical judgment, curiosity and care for the people affected by technology. A non-traditional path does not prevent you from starting a conversation.'],
        cta: { label: 'Explore life at Expert Systems Technology', path: '/company/careers/life-at-expert-systems-technology' },
        tone: 'dark',
      },
    ],
  },
  'getting-hired': {
    eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / CAREERS / GETTING HIRED',
    title: 'Getting hired',
    introduction: 'A clear, role-relevant process for understanding your experience, judgment and potential contribution to the work.',
    primaryCta: { label: 'See open positions', path: '/company/careers/open-positions' },
    sections: [
      {
        code: '01 / OUR INTERVIEW PROCESS',
        title: 'A conversation that becomes more specific.',
        body: ['The process usually begins with context and fit, then moves into role-specific discussion and practical problem solving. The number and format of conversations may change with the role.'],
        items: ['Introduction and role context', 'Experience and working approach', 'Role-relevant practical discussion', 'Team conversation and mutual questions', 'Decision and next steps'],
      },
      {
        code: '02 / LEARN MORE',
        title: 'Bring your reasoning, not a rehearsed performance.',
        body: ['Be ready to explain work you have done, decisions you made, constraints you encountered and what you learned. We care about clear thought, honest trade-offs and your ability to learn.'],
        items: ['Review the role and our company direction', 'Choose examples that show your contribution', 'Explain outcomes as well as implementation', 'Prepare questions about the work and expectations'],
        tone: 'mist',
      },
      {
        code: '03 / MEET THE TEAM',
        title: 'Meet the people closest to the role.',
        body: ['Depending on the position, you may speak with a hiring lead, a technical or operational collaborator and a company leader. We will explain who you are meeting and why.'],
        cta: { label: 'Explore life at Expert Systems Technology', path: '/company/careers/life-at-expert-systems-technology' },
      },
    ],
  },
  'students-and-early-talent': {
    eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / CAREERS / STUDENTS & EARLY TALENT',
    title: 'Students & early talent',
    introduction: 'Early-career opportunities for people who want to learn through real responsibility, practical feedback and work grounded in Namibia’s operating environments.',
    primaryCta: { label: 'See open roles', path: '/company/careers/open-positions' },
    sections: [
      {
        code: '01 / PROGRAMMES',
        title: 'Pathways will be published when they are available.',
        body: ['Internships, graduate opportunities and structured learning programmes are listed only when there is a defined role, responsible supervision and meaningful work to contribute to.'],
      },
      {
        code: '02 / HIRING MANAGERS',
        title: 'Meet people who can explain the work.',
        body: ['Interviews connect you with people who understand the role’s day-to-day responsibilities. They will discuss the problems, expectations and support available to help you grow.'],
        tone: 'mist',
      },
      {
        code: '03 / IMPACT',
        title: 'Learn by improving something real.',
        body: ['Early talent should not be separated from meaningful outcomes. We shape work so that learning, contribution and responsible review happen together.'],
        items: ['Work from a clear problem and expected outcome', 'Receive practical review and feedback', 'Document what you learn', 'Understand how the work affects users and operations'],
        tone: 'dark',
      },
      {
        code: '04 / LIFE AT XPSYS',
        title: 'See how we think about the working environment.',
        body: ['Learn about our principles for communication, wellbeing, inclusion, transparency and sustainable work.'],
        cta: { label: 'Explore life at Expert Systems Technology', path: '/company/careers/life-at-expert-systems-technology' },
      },
      {
        code: '05 / INTERVIEW PROCESS',
        title: 'Potential matters alongside experience.',
        body: ['Early-career interviews focus on how you approach unfamiliar problems, use feedback and communicate what you know and do not yet know.'],
        cta: { label: 'Learn about the interview process', path: '/company/careers/getting-hired' },
        tone: 'mist',
      },
      {
        code: '06 / NEXT STEP',
        title: 'Start with the opportunities that are open now.',
        body: ['Published roles contain the authoritative eligibility, location and application details. If no suitable programme is listed, you can still introduce yourself without representing it as a formal application.'],
        cta: { label: 'Take the next step', path: '/company/careers/open-positions' },
      },
    ],
  },
  'life-at-expert-systems-technology': {
    eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / CAREERS / LIFE AT XPSYS',
    title: 'Life at Expert Systems Technology',
    introduction: 'We are building a working environment for careful thinking, direct communication and durable contributions to systems people depend on.',
    primaryCta: { label: 'See open positions', path: '/company/careers/open-positions' },
    sections: [
      {
        code: '01 / INTERVIEWING & ONBOARDING',
        title: 'Clarity starts before the first day.',
        body: ['Candidates should understand the role, expectations and working context. Onboarding then connects that context to the tools, people and decisions needed to contribute responsibly.'],
      },
      {
        code: '02 / WHO WE ARE',
        title: 'A Namibian company with an operating mindset.',
        body: ['We bring software engineering, operational understanding and data-informed improvement together. The work is collaborative, specific and shaped by real constraints.'],
        tone: 'mist',
      },
      {
        code: '03 / TIME OFF',
        title: 'Take what you need—within a clear policy.',
        body: ['Rest and personal responsibilities matter to sustainable work. The leave terms that apply to a role are confirmed in its employment documentation; teams coordinate time away clearly so people and commitments are supported.'],
      },
      {
        code: '04 / COMMUNITY',
        title: 'Build capability around the work.',
        body: ['We want knowledge to move between people rather than becoming trapped with one person. Documentation, review, teaching and asking for help are part of responsible delivery.'],
        tone: 'dark',
      },
      {
        code: '05 / EQUITY',
        title: 'Opportunity should be understandable and fair.',
        body: ['Role requirements, compensation and any ownership-related terms should be stated clearly. Where equity forms part of an offer, its terms are explained in the formal offer documentation.'],
      },
      {
        code: '06 / MENTAL HEALTH & WELLBEING',
        title: 'Sustainable work produces better judgment.',
        body: ['We value manageable expectations, early communication about pressure and a culture where asking for support is treated as responsible behaviour. Role-specific support and benefits are stated when available.'],
        tone: 'mist',
      },
      {
        code: '07 / TRANSPARENCY',
        title: 'Share context and name uncertainty.',
        body: ['People do better work when they understand why a decision exists, what is known and what remains unresolved. We expect direct communication without pretending every answer is complete.'],
      },
      {
        code: '08 / HEALTHCARE',
        title: 'Health support should be described precisely.',
        body: ['Any healthcare support attached to a position will be stated in the published role and confirmed in the offer. We do not imply a universal benefit where terms may differ by engagement.'],
        tone: 'mist',
      },
      {
        code: '09 / JOIN US',
        title: 'Do work that carries responsibility.',
        body: ['Explore current opportunities and decide whether the problems, standards and direction are a match for the contribution you want to make.'],
        cta: { label: 'Join us', path: '/company/careers/open-positions' },
        tone: 'dark',
      },
    ],
  },
};
