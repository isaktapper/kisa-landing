import { Header } from "@/src/components/layout/Header";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-kisa-bg py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-kisa-text">
          <h1 className="font-serif text-4xl font-normal mb-8 text-kisa-text">Integritetspolicy</h1>
          
          <p className="text-sm text-muted-foreground mb-8">
            Senast uppdaterad: 30 augusti 2025.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">1. Vem vi är</h2>
          <p>
            <strong>Företag:</strong> Kisa & Co AB<br/>
            <strong>E-post:</strong> <a href="mailto:info@kisaco.se" className="text-blue-600 hover:text-blue-800">info@kisaco.se</a><br/>
            <strong>Webbplats:</strong> kisaco.se
          </p>
          <p>
            Kisa tillhandahåller tjänsten <strong>Kisa</strong> (automation och AI-stöd). Denna policy förklarar hur vi behandlar personuppgifter enligt EU:s dataskyddsförordning (GDPR).
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">2. Roller och ansvar</h2>
          <ul>
            <li><strong>Kisa som personuppgiftsansvarig:</strong> För vår egen administration, marknadsföring, support och webbplats/cookies.</li>
            <li><strong>Kisa som personuppgiftsbiträde:</strong> När vi behandlar personuppgifter för kunders räkning i tjänsten (t.ex. data som flödar via Kisa/Make/OpenAI enligt kundens instruktioner). I dessa fall krävs ett personuppgiftsbiträdesavtal ("DPA").</li>
          </ul>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">3. Kategorier av personuppgifter</h2>
          <p>Beroende på sammanhang kan vi behandla:</p>
          <ul>
            <li><strong>Identitet & kontakt:</strong> namn, e-post, telefon, företag, roll.</li>
            <li><strong>Kontodata:</strong> inloggningsuppgifter, tekniska tokens/anslutningar (t.ex. API-nycklar/OAuth), behörigheter.</li>
            <li><strong>Användningsdata:</strong> loggar, tidsstämplar, IP-adress, enhets-/webbläsarinfo, felrapporter.</li>
            <li><strong>Innehållsdata:</strong> data som kunder väljer att skicka in i automatiseringar/AI (t.ex. text, dokument, bilagor).</li>
            <li><strong>Supportdata:</strong> ärenden, korrespondens, inspelad skärmdelning om kunden godkänner.</li>
          </ul>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">4. Ändamål och rättslig grund</h2>
          <ul>
            <li><strong>Tillhandahålla tjänsten</strong> (kontraktsuppfyllelse)</li>
            <li><strong>Konto- & kundadministration, fakturering</strong> (kontrakt/rättslig förpliktelse)</li>
            <li><strong>Säkerhet, loggning, felsökning</strong> (berättigat intresse)</li>
            <li><strong>Support & kommunikation</strong> (kontrakt/berättigat intresse)</li>
            <li><strong>Produktförbättring & analys</strong> (berättigat intresse – görs aggregerat/anonymiserat där möjligt)</li>
            <li><strong>Marknadskommunikation</strong> (samtycke där så krävs; möjlighet till avregistrering i varje utskick)</li>
          </ul>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">5. Källor</h2>
          <p>
            Uppgifter kommer direkt från dig, din arbetsgivare, offentliga register eller från anslutna tredjepartstjänster när du ger behörighet (OAuth/API-nyckel).
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">6. Mottagare (underbiträden)</h2>
          <p>Vi använder betrodda leverantörer för att driva tjänsten. Exempel:</p>
          <ul>
            <li><strong>Make (make.com):</strong> orkestrering/automation (kan lagra anslutningar, körningsloggar)</li>
            <li><strong>OpenAI:</strong> AI-bearbetning av text/innehåll på uppdrag av kund</li>
            <li><strong>Google Workspace:</strong> e-post, dokument, administration</li>
            <li><strong>Övriga tredjepartstjänster</strong> som kunden väljer att koppla.</li>
          </ul>
          <p>En aktuell lista över underbiträden tillhandahålls på begäran.</p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">7. Överföringar utanför EU/EES</h2>
          <p>
            Viss behandling kan ske utanför EU/EES. I så fall säkerställer vi en giltig överföringsmekanism (t.ex. EU-kommissionens standardavtalsklausuler, "SCC") samt lämpliga tekniska och organisatoriska skyddsåtgärder.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">8. Lagringstider</h2>
          <p>
            Vi behåller personuppgifter så länge det behövs för ändamålet eller enligt lag/avtal.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">9. Säkerhet</h2>
          <p>
            Vi vidtar lämpliga tekniska och organisatoriska åtgärder: åtkomststyrning, minst-behörighet, kryptering där lämpligt, loggning, säkerhetskopior, leverantörsgranskning och rutin för incidentrapportering.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">10. AI-behandling (OpenAI m.fl.)</h2>
          <p>
            Om du använder AI-funktioner skickas innehåll du anger ("prompts", bilagor, metadata) till vår AI-leverantör för bearbetning. <strong>Lämna inte känsliga personuppgifter</strong> om det inte är absolut nödvändigt och tillåtet enligt avtal. AI-resultat kan innehålla fel; du ansvarar för manuell granskning innan användning i beslut eller kommunikation.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">11. Cookies</h2>
          <p>
            Vi kan använda nödvändiga cookies för drift samt, med samtycke, analytiska cookies. Du kan när som helst återkalla samtycke och justera inställningar i din webbläsare. Se separat cookie-notis om tillämpligt.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">12. Dina rättigheter</h2>
          <p>
            Du kan ha rätt att begära tillgång, rättelse, radering, begränsning, dataportabilitet och invända mot viss behandling. Kontakta oss via <a href="mailto:info@kisaco.se" className="text-blue-600 hover:text-blue-800">info@kisaco.se</a>. Du har även rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY) i Sverige.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">13. Myndighetsförfrågningar</h2>
          <p>
            Vi lämnar endast ut uppgifter när vi är rättsligt skyldiga och informerar kunden/den registrerade i den mån det är tillåtet.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">14. Ändringar i policyn</h2>
          <p>
            Vi kan uppdatera policyn. Den senaste versionen publiceras på vår webbplats. Väsentliga ändringar meddelas.
          </p>

          <h2 className="font-serif text-2xl font-normal mt-12 mb-6 text-kisa-text">15. Kontakt</h2>
          <p>
            <strong>Kisa & Co AB</strong><br/>
            E-post: <a href="mailto:info@kisaco.se" className="text-blue-600 hover:text-blue-800">info@kisaco.se</a>
          </p>

          <hr className="my-12 border-border" />

          <h2 className="font-serif text-3xl font-normal mt-12 mb-6 text-kisa-text">Personuppgiftsbiträdesavtal (översikt)</h2>
          <p>
            När Kisa behandlar personuppgifter som <strong>biträde</strong> för kundens räkning gäller ett separat DPA som reglerar: föremål/varaktighet, typ av data/subjektskategorier, instruktioner, konfidentialitet, säkerhet, underbiträden, överföringar, assistans med rättigheter/incidenter, revisioner samt radering/återlämning vid avtalets slut. DPA tillhandahålls på begäran eller via [länk].
          </p>
        </div>
      </div>
      </div>
    </>
  );
}