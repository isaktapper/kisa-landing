import { Header } from "@/src/components/layout/Header";

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-kisa-bg py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-kisa-text">
          <h1 className="font-serif text-4xl font-normal mb-8 text-kisa-text">Användarvillkor</h1>
          
          <p className="text-sm text-muted-foreground mb-8">
            Senast uppdaterad: 30 augusti 2025.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">1. Allmänt</h2>
          <p>
            Dessa villkor ("Villkoren") gäller för användning av tjänsten <strong>Kisa</strong> som tillhandahålls av Kisa & Co AB. Genom att skapa konto eller använda tjänsten accepterar du Villkoren.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">2. Tjänsten</h2>
          <p>
            Kisa erbjuder automation (via bl.a. Make) och AI-funktioner (via bl.a. OpenAI) som kan kopplas till kundens system. Funktioner och omfattning kan variera mellan planer.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">3. Konto och behörigheter</h2>
          <p>
            Du ansvarar för riktiga uppgifter, säkra lösenord och att endast behöriga användare ges tillgång. Du ansvarar för all aktivitet som sker via ditt konto eller via anslutna system/tokens.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">4. Kunddata & konfidentialitet</h2>
          <p>
            Du behåller alla rättigheter till din data ("Kunddata"). Vi behandlar Kunddata för att tillhandahålla tjänsten och enligt Integritetspolicyn/DPA. Vi vidtar skäliga åtgärder för att skydda konfidentialitet.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">5. Tredjepartstjänster</h2>
          <p>
            Tjänsten integrerar med tredjepartstjänster (t.ex. Make, OpenAI, Google). Din användning av sådana omfattas även av respektive leverantörs villkor. Kisa ansvarar inte för dessa leverantörers prestanda, innehåll, fel eller tillgänglighet.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">6. Godtagbar användning</h2>
          <p>Du får inte:</p>
          <ul>
            <li>bryta mot lag eller kränka tredje mans rättigheter,</li>
            <li>överföra skadlig kod, försök till intrång eller kringgå säkerhet,</li>
            <li>använda tjänsten för högriskverksamhet där fel kan orsaka personskada,</li>
            <li>skicka in olagligt, känsligt eller sekretessbelagt material utan giltig laglig grund och avtalad skyddsnivå.</li>
          </ul>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">7. Avgifter & betalning</h2>
          <p>
            Avgifter anges i offert/abonnemang. Om inget annat avtalas faktureras i förskott per period. Försening kan leda till avstängning. Priser kan justeras vid förlängning eller enligt avtal. Alla priser exkl. moms om inte annat anges.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">8. Drift, support & SLA</h2>
          <p>
            Kisa eftersträvar hög tillgänglighet men garanterar inte frihet från avbrott. Planerat underhåll meddelas i rimlig tid. Support ingår enligt din plan/överenskommelse.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">9. Immateriella rättigheter</h2>
          <p>
            Kisa och dess licensgivare äger rättigheterna till tjänsten, mjukvara, varumärken och dokumentation. Du får en icke-exklusiv, icke-överlåtbar licens att använda tjänsten enligt Villkoren.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">10. AI-funktioner – ansvarsbegränsningar</h2>
          <p>
            AI-genererat innehåll kan vara felaktigt, ofullständigt eller partiskt. <strong>Du ansvarar för granskning</strong> och för att inte förlita dig på AI i situationer där fel kan orsaka skada eller lagöverträdelse. Kisa friskriver sig från ansvar för beslut som fattas enbart med AI-resultat.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">11. Ansvarsbegränsning</h2>
          <p>
            I den mån lagen medger ansvarar Kisa inte för indirekta skador, utebliven vinst eller dataförlust. Kisas sammanlagda ansvar under en 12-månadersperiod är begränsat till de avgifter du betalat för tjänsten under samma period. Ingenting i detta avtal begränsar ansvar som inte kan begränsas enligt lag.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">12. Skadeslöshet</h2>
          <p>
            Du åtar dig att ersätta Kisa för krav som uppstår till följd av din olagliga användning av tjänsten eller brott mot dessa Villkor.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">13. Avtalstid & uppsägning</h2>
          <p>
            Avtal löper enligt överenskommen period och förlängs automatiskt om inte uppsagt senast [30] dagar före periodens slut. Part får säga upp med omedelbar verkan vid väsentligt avtalsbrott som inte åtgärdas inom [30] dagar från skriftligt påpekande.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">14. Avstängning</h2>
          <p>
            Kisa kan tillfälligt stänga av tjänsten vid säkerhetsrisk, utebliven betalning eller misstänkt missbruk. Vi informerar i möjligaste mån i förväg.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">15. Dataexport vid upphörande</h2>
          <p>
            Vid avtalets slut kan du, inom [30] dagar, begära export av rimligt tillgänglig Kunddata. Därefter raderas eller anonymiseras data enligt Integritetspolicyn och DPA.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">16. Force majeure</h2>
          <p>
            Ingen part ansvarar för underlåtenhet att fullgöra skyldigheter till följd av omständigheter utanför rimlig kontroll (t.ex. omfattande driftstörningar, naturkatastrof, krig, myndighetsbeslut).
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">17. Ändringar av villkor</h2>
          <p>
            Vi kan uppdatera Villkoren. Den senaste versionen publiceras på webbplatsen. Väsentliga ändringar meddelas i tjänsten eller via e-post.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">18. Tillämplig lag & tvist</h2>
          <p>
            Svensk lag tillämpas. Tvist löses i första hand genom förhandling. Om lösning inte nås avgörs tvisten av allmän domstol med <strong>Stockholms tingsrätt</strong> som första instans.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">19. Kontakt</h2>
          <p>
            <strong>Kisa & Co AB</strong><br/>
            E-post: <a href="mailto:info@kisaco.se" className="text-blue-600 hover:text-blue-800">info@kisaco.se</a>
          </p>
        </div>
      </div>
      </div>
    </>
  );
}