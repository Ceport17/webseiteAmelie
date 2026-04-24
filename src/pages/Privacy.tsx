import { motion } from "motion/react";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-24 px-6 md:px-16 bg-creme min-h-screen">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-3xl mb-12 text-mauve uppercase tracking-[0.2em] font-light">
            Datenschutz
          </h1>
          
          <div className="space-y-12 text-gray-500 font-light leading-relaxed text-sm md:text-lg">
            <section>
              <h2 className="text-xl text-mauve mb-6 font-normal uppercase tracking-wider">1. Datenschutz auf einen Blick</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Allgemeine Hinweise</h3>
                  <p className="text-lg">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Deinen personenbezogenen Daten
                    passiert, wenn Du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen Du
                    persönlich identifiziert werden kannst. Ausführliche Informationen zum Thema Datenschutz entnimmst
                    Du unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Datenerfassung auf dieser Website</h3>
                  <p className="text-lg mb-4 italic">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
                  <p className="text-lg mb-4">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                    kannst Du dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
                  </p>
                  
                  <p className="text-lg mb-4 italic">Wie erfassen wir Deine Daten?</p>
                  <p className="text-lg mb-4">
                    Deine Daten werden zum einen dadurch erhoben, dass Du uns diese mitteilst. Hierbei kann es sich z. B. um
                    Daten handeln, die Du in ein Kontaktformular eingibst.
                  </p>
                  <p className="text-lg mb-4">
                    Andere Daten werden automatisch oder nach Deiner Einwilligung beim Besuch der Website durch unsere ITSysteme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
                    des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Du diese Website betrittst.
                  </p>

                  <p className="text-lg mb-4 italic">Wofür nutzen wir Deine Daten?</p>
                  <p className="text-lg mb-4">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
                    Daten können zur Analyse Deines Nutzerverhaltens verwendet werden. Sofern über die Website Verträge
                    geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote,
                    Bestellungen oder sonstige Auftragsanfragen verarbeitet.
                  </p>

                  <p className="text-lg mb-4 italic">Welche Rechte hast Du bezüglich Deiner Daten?</p>
                  <p className="text-lg">
                    Du hast jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Deiner
                    gespeicherten personenbezogenen Daten zu erhalten. Du hast außerdem ein Recht, die Berichtigung oder
                    Löschung dieser Daten zu verlangen. Wenn Du eine Einwilligung zur Datenverarbeitung erteilt hast,
                    kannst Du diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem hast Du das Recht, unter
                    bestimmten Umständen die Einschränkung der Verarbeitung Deiner personenbezogenen Daten zu verlangen.
                    Des Weiteren steht Dir ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Analyse-Tools und Tools von Drittanbietern</h3>
                  <p className="text-lg">
                    Beim Besuch dieser Website kann Dein Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor
                    allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen findest Du in der folgenden
                    Datenschutzerklärung.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl text-mauve mb-6 font-normal uppercase tracking-wider">2. Hosting</h2>
              <p className="text-lg mb-6">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Externes Hosting</h3>
                  <p className="text-lg mb-4">
                    Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
                    werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
                    Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
                    und sonstige Daten, die über eine Website generiert werden, handeln.
                  </p>
                  <p className="text-lg mb-4">
                    Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
                    bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
                    Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                  <p className="text-lg mb-4">
                    Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
                    Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung
                    von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
                    Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                  </p>
                  <p className="text-lg mb-4">
                    Unser(e) Hoster wird bzw. werden Deine Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
                    Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                  </p>
                  <p className="text-lg mb-4 italic">Wir setzen folgende(n) Hoster ein:</p>
                  <p className="text-lg mb-4">
                    netcup GmbH<br />
                    Emmy-Noether-Straße 10<br />
                    D-76131 Karlsruhe
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Auftragsverarbeitung</h3>
                  <p className="text-lg">
                    Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes
                    geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
                    gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren
                    Weisungen und unter Einhaltung der DSGVO verarbeitet.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl text-mauve mb-6 font-normal uppercase tracking-wider">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Datenschutz</h3>
                  <p className="text-lg mb-4">
                    Die Betreiber dieser Seiten nehmen den Schutz Deiner persönlichen Daten sehr ernst. Wir behandeln Deine
                    personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                    dieser Datenschutzerklärung.
                  </p>
                  <p className="text-lg mb-4">
                    Wenn Du diese Website benutzt, werden verschiedene personenbezogene Daten erhoben.
                    Personenbezogene Daten sind Daten, mit denen Du persönlich identifiziert werden kannst. Die vorliegende
                    Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
                    und zu welchem Zweck das geschieht.
                  </p>
                  <p className="text-lg">
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
                    Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                    möglich.
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Hinweis zur verantwortlichen Stelle</h3>
                  <p className="text-lg">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
                    Amelie Wrage<br />
                    Sandberg 4-6<br />
                    25335 Elmshorn<br />
                    Telefon: [Telefonnummer]<br />
                    E-Mail: <a href="mailto:amelie-artstudio@web.de" className="text-mauve hover:opacity-80 transition-opacity underline underline-offset-4 decoration-salbei/30">amelie-artstudio@web.de</a>
                  </p>
                  <p className="text-lg mt-4 font-light italic">
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
                    die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
                    entscheidet.
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Speicherdauer</h3>
                  <p className="text-lg">
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                    Deine personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Du ein
                    berechtigtes Löschersuchen geltend machst oder eine Einwilligung zur Datenverarbeitung widerrufst,
                    werden Deine Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Deiner
                    personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                    letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                  <p className="text-lg">
                    Sofern Du in die Datenverarbeitung eingewilligt hast, verarbeiten wir Deine personenbezogenen Daten auf
                    Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
                    nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
                    personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
                    49 Abs. 1 lit. a DSGVO. Sofern Du in die Speicherung von Cookies oder in den Zugriff auf Informationen in
                    Dein Endgerät (z. B. via Device-Fingerprinting) eingewilligt hast, erfolgt die Datenverarbeitung zusätzlich
                    auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Deine Daten zur
                    Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Deine
                    Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Deine Daten, sofern diese
                    zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
                    Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
                    DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
                    Absätzen dieser Datenschutzerklärung informiert.
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Empfänger von personenbezogenen Daten</h3>
                  <p className="text-lg">
                    Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei
                    ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.
                    Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
                    Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten
                    an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe
                    haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
                    Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen
                    Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
                    gemeinsame Verarbeitung geschlossen.
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Widerruf Deiner Einwilligung zur Datenverarbeitung</h3>
                  <p className="text-lg">
                    Viele Datenverarbeitungsvorgänge sind nur mit Deiner ausdrücklichen Einwilligung möglich. Du kannst eine
                    bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                    Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                  <p className="text-lg mb-4">
                    Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO
                    erfolgt, hast Du jederzeit das Recht, aus Gründen, die sich aus Deiner besonderen
                    Situation ergeben, gegen die Verarbeitung Deiner personenbezogenen Daten
                    Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes
                    Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht,
                    entnimmst Du dieser Datenschutzerklärung. Wenn Du Widerspruch einlegst,
                    werden wir Deine betroffenen personenbezogenen Daten nicht mehr verarbeiten, es
                    sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung
                    nachweisen, die Deine Interessen, Rechte und Freiheiten überwiegen oder die
                    Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
                    Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
                  </p>
                  <p className="text-lg">
                    Werden Deine personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben,
                    so hast Du das Recht, jederzeit Widerspruch gegen die Verarbeitung Dich
                    betreffender personenbezogener Daten zum Zwecke derartiger Werbung
                    einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in
                    Verbindung steht. Wenn Du widersprichst, werden Deine personenbezogenen Daten
                    anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch
                    nach Art. 21 Abs. 2 DSGVO).
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                  <p className="text-lg">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                    Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Deines gewöhnlichen Aufenthalts, Deines Arbeitsplatzes
                    oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
                    verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Recht auf Datenübertragbarkeit</h3>
                  <p className="text-lg">
                    Du hast das Recht, Daten, die wir auf Grundlage Deiner Einwilligung oder in Erfüllung eines Vertrags
                    automatisiert verarbeiten, an Dich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
                    aushändigen zu lassen. Sofern Du die direkte Übertragung der Daten an einen anderen Verantwortlichen
                    verlangst, erfolgt dies nur, soweit es technisch machbar ist.
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Auskunft, Berichtigung und Löschung</h3>
                  <p className="text-lg">
                    Du hast im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                    Auskunft über Deine gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
                    Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
                    zu weiteren Fragen zum Thema personenbezogene Daten kannst Du Dich jederzeit an uns wenden.
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Recht auf Einschränkung der Verarbeitung</h3>
                  <p className="text-lg mb-4">
                    Du hast das Recht, die Einschränkung der Verarbeitung Deiner personenbezogenen Daten zu verlangen.
                    Hierzu kannst Du Dich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
                    folgenden Fällen:
                  </p>
                  <ul className="list-disc list-inside text-lg space-y-2 mb-4">
                    <li>Wenn Du die Richtigkeit Deiner bei uns gespeicherten personenbezogenen Daten bestreitest, benötigen wir
                    in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung hast Du das Recht, die
                    Einschränkung der Verarbeitung Deiner personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn die Verarbeitung Deiner personenbezogenen Daten unrechtmäßig geschah/geschieht, kannst Du
                    statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                    <li>Wenn wir Deine personenbezogenen Daten nicht mehr benötigen, Du sie jedoch zur Ausübung,
                    Verteidigung oder Geltendmachung von Rechtsansprüchen benötigst, hast Du das Recht, statt der
                    Löschung die Einschränkung der Verarbeitung Deiner personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn Du einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt hast, muss eine Abwägung zwischen
                    Deinen und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
                    überwiegen, hast Du das Recht, die Einschränkung der Verarbeitung Deiner personenbezogenen Daten
                    zu verlangen.</li>
                  </ul>
                  <p className="text-lg">
                    Wenn Du die Verarbeitung Deiner personenbezogenen Daten eingeschränkt hast, dürfen diese Daten – von
                    ihrer Speicherung abgesehen – nur mit Deiner Einwilligung oder zur Geltendmachung, Ausübung oder
                    Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
                    juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
                    eines Mitgliedstaats verarbeitet werden.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl text-mauve mb-6 font-normal uppercase tracking-wider">4. Datenerfassung auf dieser Website</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Kontaktformular</h3>
                  <p className="text-lg mb-4">
                    Wenn Du uns per Kontaktformular Anfragen zukommen lässt, werden Deine Angaben aus dem
                    Anfrageformular inklusive der von Dir dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
                    und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Deine
                    Einwilligung weiter.
                  </p>
                  <p className="text-lg mb-4">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Deine Anfrage mit
                    der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                    erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
                    effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Deiner
                    Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
                    widerrufbar.
                  </p>
                  <p className="text-lg">
                    Die von Dir im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Du uns zur Löschung
                    aufforderst, Deine Einwilligung zur Speicherung widerrufst oder der Zweck für die Datenspeicherung entfällt
                    (z. B. nach abgeschlossener Bearbeitung Deiner Anfrage). Zwingende gesetzliche Bestimmungen –
                    insbesondere Aufbewahrungsfristen – bleiben unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Formspree</h3>
                  <p className="text-lg mb-4">
                    Für die Verarbeitung unseres Kontaktformulars nutzen wir den Dienst Formspree. Anbieter ist die Formspree Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA.
                  </p>
                  <p className="text-lg mb-4">
                    Wenn Du uns über das Kontaktformular kontaktierst, werden die von Dir eingegebenen Daten (z. B. Name, E-Mail-Adresse und Nachricht) an die Server von Formspree übertragen und dort verarbeitet. Dies dient ausschließlich der Bearbeitung Deiner Anfrage.
                  </p>
                  <p className="text-lg mb-4">
                    Die Nutzung von Formspree erfolgt im Interesse einer zuverlässigen und sicheren Verarbeitung von Kontaktanfragen (Art. 6 Abs. 1 lit. f DSGVO) sowie zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
                  </p>
                  <p className="text-lg mb-4">
                    Formspree verarbeitet Daten auch in den USA. Die Datenübertragung erfolgt auf Grundlage geeigneter Garantien gemäß Art. 46 DSGVO (z. B. Standardvertragsklauseln).
                  </p>
                  <p className="text-lg">
                    Weitere Informationen findest Du in der Datenschutzerklärung von Formspree:{" "}
                    <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-mauve hover:opacity-80 transition-opacity underline underline-offset-4 decoration-salbei/30">formspree.io/legal/privacy-policy/</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
                  <p className="text-lg mb-4">
                    Wenn Du uns per E-Mail, Telefon oder Telefax kontaktierst, wird Deine Anfrage inklusive aller daraus
                    hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Deines Anliegens
                    bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Deine Einwilligung weiter.
                  </p>
                  <p className="text-lg mb-4">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Deine Anfrage mit
                    der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                    erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
                    effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Deiner
                    Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
                    widerrufbar.
                  </p>
                  <p className="text-lg">
                    Die von Dir an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Du uns zur Löschung
                    aufforderst, Deine Einwilligung zur Speicherung widerrufst oder der Zweck für die Datenspeicherung entfällt
                    (z. B. nach abgeschlossener Bearbeitung Deines Anliegens). Zwingende gesetzliche Bestimmungen –
                    insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl text-mauve mb-6 font-normal uppercase tracking-wider">5. Plugins und Tools</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Lokale Schriftarten</h3>
                  <p className="text-lg mb-4">
                    Diese Website nutzt zur einheitlichen Darstellung von Schriftarten lokal eingebundene Schriftdateien. Die verwendeten Schriftarten werden direkt von unserem eigenen Webserver geladen.
                  </p>
                  <p className="text-lg mb-4">
                    Es findet dabei keine Verbindung zu Servern von Google Fonts oder anderen externen Schriftanbieter-Diensten statt. Eine Übermittlung Deiner IP-Adresse oder sonstiger personenbezogener Daten an Google im Zusammenhang mit der Darstellung der Schriftarten erfolgt daher nicht.
                  </p>
                  <p className="text-lg">
                    Die lokale Einbindung der Schriftarten erfolgt im Interesse einer datenschutzfreundlichen und einheitlichen Darstellung unserer Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-3">Cloudflare Turnstile</h3>
                  <p className="text-lg mb-4">
                    Wir nutzen Cloudflare Turnstile (im Folgenden „Turnstile“) auf dieser Website. Anbieter ist die Cloudflare
                    Inc., 101 Townsend St., San Francisco, CA 94107, USA (im Folgenden „Cloudflare”).
                  </p>
                  <p className="text-lg mb-4">
                    Mit Turnstile soll überprüft werden, ob die Dateneingabe auf dieser Website (z. B. in einem
                    Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu
                    analysiert Turnstile das Verhalten des Websitebesuchers anhand verschiedener Merkmale.
                  </p>
                  <p className="text-lg mb-4">
                    Diese Analyse beginnt automatisch, sobald der Websitebesucher eine Website mit aktiviertem Turnstile
                    betritt. Zur Analyse wertet Turnstile verschiedene Informationen aus (z. B. IP-Adresse, Verweildauer des
                    Websitebesuchers auf der Website oder vom Nutzer getätigte Mausbewegungen). Die bei der Analyse
                    erfassten Daten werden an Cloudflare weitergeleitet.
                  </p>
                  <p className="text-lg mb-4">
                    Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                    Websitebetreiber hat ein berechtigtes Interesse daran, seine Webangebote vor missbräuchlicher
                    automatisierter Ausspähung und vor SPAM zu schützen. Sofern eine entsprechende Einwilligung abgefragt
                    wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
                    TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
                    Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist
                    jederzeit widerrufbar.
                  </p>
                  <p className="text-lg mb-4">
                    Die Datenverarbeitung wird auf Standardvertragsklauseln gestützt, die Du hier findest: <a href="https://www.cloudflare.com/cloudflare-customer-scc/" target="_blank" rel="noopener noreferrer" className="text-mauve hover:opacity-80 transition-opacity underline underline-offset-4 decoration-salbei/30">cloudflare.com/scc</a>.
                  </p>
                  <p className="text-lg">
                    Weitere Informationen zu Cloudflare Turnstile entnimmst Du den Datenschutzbestimmungen unter <a href="https://www.cloudflare.com/cloudflare-customer-dpa/" target="_blank" rel="noopener noreferrer" className="text-mauve hover:opacity-80 transition-opacity underline underline-offset-4 decoration-salbei/30">cloudflare.com/dpa</a>.
                  </p>
                </div>
              </div>
            </section>

            <div className="pt-12 border-t border-gray-200">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:text-mauve transition-colors">e-recht24.de</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
