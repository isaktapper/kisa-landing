import { CardSpotlight } from "@/components/ui/card-spotlight";

const useCasesData = [
  {
    title: "Datarapportering",
    description: "Automatisera sammanställning av data från olika källor",
    features: [
      "Samla data från flera system",
      "Generera rapporter automatiskt",
      "Skicka till rätt personer",
      "Schemalägg regelbundna körningar"
    ]
  },
  {
    title: "CRM & sälj",
    description: "Låt leads och kunddata flöda dit de hör hemma",
    features: [
      "Leads från hemsidan direkt till CRM",
      "Påminnelser om inaktiva affärer",
      "Automatisk uppdatering av kontaktinformation",
      "Enklare uppföljning av kundresan"
    ]
  },
  {
    title: "Fakturahantering",
    description: "Automatisera fakturaflödet och spara tid på administration",
    features: [
      "Skapa fakturor automatiskt",
      "Skicka påminnelser",
      "Export till bokföringssystem",
      "Generera ekonomirapporter"
    ]
  },
  {
    title: "Kundsupport",
    description: "Förenkla supportflöden och ge snabbare svar till kunderna",
    features: [
      "Skicka ärenden automatiskt till rätt person",
      "Notiser vid SLA-breaches",
      "Automatiska sammanställningar av ärenden",
      "Snabbare svarstid med smarta svarsmallar"
    ]

  },
  {
    title: "Projektuppföljning",
    description: "Spåra projektframsteg och skicka statusuppdateringar",
    features: [
      "Samla projektdata",
      "Skicka statusrapporter",
      "Flagga förseningar",
      "Resursoptimering"
    ]
  },
  {
    title: "Interna rutiner",
    description: "Automatisera små men tidskrävande uppgifter i vardagen",
    features: [
      "Påminnelser om deadlines i Slack/Teams",
      "Enkla flöden för onboarding av ny personal",
      "Notiser när dokument uppdateras",
      "Schemalagda statusuppdateringar"
    ]
  }
];

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l-.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

const Feature = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white text-sm">{title}</p>
    </li>
  );
};

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-kisa-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-center mb-16 text-balance text-white">
          Exempel på vad som kan automatiseras
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCasesData.map((useCase, index) => (
            <CardSpotlight key={index} className="h-80 w-full">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                {useCase.title}
              </p>
              <p className="text-neutral-300 mt-2 relative z-20 text-sm">
                {useCase.description}
              </p>
              <div className="text-neutral-200 mt-4 relative z-20">
                <p className="text-sm mb-2">Vad vi automatiserar:</p>
                <ul className="list-none space-y-1">
                  {useCase.features.map((feature, featureIndex) => (
                    <Feature key={featureIndex} title={feature} />
                  ))}
                </ul>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  )
}
