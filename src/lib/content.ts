export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

export interface HowItWorksStep {
  icon: string
  title: string
  description: string
}

export interface Step {
  title: string
  description: string
  icon: string
}

export interface UseCase {
  title: string
  description: string
}

export interface Integration {
  name: string
  logo: string
}

export interface FAQ {
  question: string
  answer: string
}

export const content = {
  header: {
    logo: "Kisa",
    nav: [],
    cta: "Få gratis prototyp",
  },
  hero: {
    headline: "Automatisera ert arbete. Gratis prototyp på 7 dagar!",
    subheadline: "Beskriv ert problem, vi bygger en lösning. Inga säljmöten, inga krångliga processer, bara en fungerande prototyp ni kan testa direkt.",
    cta: "Få gratis prototyp",
  },
  testimonial: {
    quote: "Kisa hjälpte oss att automatisera vår leadsgenerering via sociala medier – resultatet blev en ökning på 80 % i försäljning från de kanalerna.",
    name: "Isak",
    role: "Grundare",
    company: "Stikk!",
  } as Testimonial,
  howItWorks: {
    eyebrow: "Så här gör vi",
    title: "Från idé till automation på 7 dagar",
    description: "Vi har utvecklat en effektiv process som garanterar snabba resultat utan krångel.",
    steps: [
      {
        icon: "search",
        title: "Kartläggning",
        description: "Vi analyserar era processer och identifierar automationsmöjligheter.",
      },
      {
        icon: "cog",
        title: "Utveckling",
        description: "Vi bygger skräddarsydda automationer som passar era behov.",
      },
      {
        icon: "rocket",
        title: "Prototyp",
        description: "Vi levererar en färdig prototyp som automatiserar era processer.",
      },
    ] as HowItWorksStep[],
  },
  useCases: [
    {
      title: "TODO: Datarapportering",
      description: "TODO: Automatisera sammanställning av data från olika källor.",
    },
    {
      title: "TODO: Kundkommunikation",
      description: "TODO: Skicka personaliserade meddelanden baserat på kundbeteende.",
    },
    {
      title: "TODO: Fakturahantering",
      description: "TODO: Automatisera hela faktureringsprocessen från order till betalning.",
    },
    {
      title: "TODO: Lagerhantering",
      description: "TODO: Håll koll på lagernivåer och beställ automatiskt när det behövs.",
    },
    {
      title: "TODO: Projektuppföljning",
      description: "TODO: Spåra projektframsteg och skicka statusuppdateringar.",
    },
    {
      title: "TODO: Kvalitetskontroll",
      description: "TODO: Automatisera kontroller och flagga avvikelser direkt.",
    },
  ] as UseCase[],
  integrations: {
    title: "Stöd för 2000+ system",
    list: [
      { name: "Drive", logo: "/drive_white.png" },
      { name: "Fortnox", logo: "/fortnox_white.png" },
      { name: "Gmail", logo: "/gmail_white.png" },
      { name: "Sheets", logo: "/sheets_white.png" },
      { name: "HubSpot", logo: "/hubspot_white.png" },
      { name: "Intercom", logo: "/intercom_white.png" },
      { name: "Outlook", logo: "/outlook_white.png" },
      { name: "Salesforce", logo: "/salesforce_white.png" },
      { name: "Slack", logo: "/slack_white.png" },
      { name: "Teams", logo: "/teams_white.png" },
      { name: "Trello", logo: "/trello_white.png" },
      { name: "Visma", logo: "/visma_white.png" },
      { name: "Zendesk", logo: "/zendesk_white.png" },
      { name: "Notion", logo: "/notion_white.png" },
      { name: "Facebook", logo: "/facebook_white.png" },
    ] as Integration[],
  },
  faq: [
    {
      question: "Hur lång tid tar det att få en automation?",
      answer: "Vi levererar alltid en första prototyp inom 7 dagar. Prototypen är gratis och visar hur lösningen fungerar i praktiken.",
    },
    {
      question: "Vilka system kan ni integrera med?",
      answer: "Vi kan koppla ihop med över 2 800 olika system – allt från Google Sheets och Slack till Fortnox, HubSpot och Zendesk. Saknar vi något, löser vi det via API.",
    },
    {
      question: "Vad kostar det?",
      answer: "Första prototypen är gratis. När vi levererar den får ni samtidigt ett tydligt prisförslag för en fullskalig implementation.",
    },
    {
      question: "Behöver vi teknisk kunskap för att använda automationerna?",
      answer: "Nej. Våra lösningar körs i bakgrunden och ni får ett enkelt gränssnitt att följa upp i. Ni behöver inte kunna koda eller hantera API:er.",
    },
    {
      question: "Vad händer om något går fel?",
      answer: "Vi övervakar flödena och sätter upp notifieringar. Skulle något strula får ni ett meddelande direkt och vi hjälper till att åtgärda.",
    },
    {
      question: "Kan ni hjälpa oss identifiera vad som går att automatisera?",
      answer: "Ja! Det är precis vad vår kostnadsfria prototyp är till för. Beskriv bara era behov – vi föreslår automatiseringar som gör skillnad.",
    },
  ] as FAQ[],
  footer: {
    contact: "kontakt@kisaco.se",
    links: [
      { label: "Integritet", href: "/privacy" },
      { label: "Villkor", href: "/terms" },
    ],
  },
}

// Updated for single testimonial
export default content
