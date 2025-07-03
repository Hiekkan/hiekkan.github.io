import {
  CallToActionSection,
  HeroSection,
  ImageSection,
  QuoteSection,
  TextSection,
  VideoSection,
} from "../app/components/CustomElements";

export default function CaseStudy() {
  return (
    <>
      <HeroSection
        title="Adieu, verstaubtes Telefonbuch!"
        subtitle="Schneller finden, besser verbinden, das neue digitale Telefonbuch von Post und PostFinance"
        description={`Das interne Telefonbuch wird modernisiert, da die alte Lösung nicht mehr zeitgemäss war. 
Ziel war die Entwicklung einer benutzerfreundlichen Web-Applikation mit Echtzeitsuche und Integration in moderne Kommunikationsmittel. 
Die neue Anwendung vereint Daten aus verschiedenen Quellen und bietet eine optimierte Nutzererfahrung auf allen Geräten.`}
        metadata={[
          { label: "Produkt", value: "Sharepoint Lösung" },
          { label: "Skills", value: "Fullstack Entwicklung" },
          { label: "Meine Rolle", value: "Entwicklerin / technisch Lead" },
          { label: "Timeline", value: "2023–2024" },
        ]}
      />
      <TextSection
        title="Herausforderung"
        body={`Die neue Anwendung sollte eine schnelle „Search as you type“-Suche bieten, vollständige Kontaktdaten anzeigen und direkte Kommunikationsmöglichkeiten integrieren. Dabei mussten Informationen aus zwei verschiedenen Quellen zusammengeführt werden: dem Azure Active Directory (ein cloudbasiertes Verzeichnisdienstsystem von Microsoft zur Verwaltung von Nutzerkonten und Gruppen) und einem internen LDAP-System (ein hierarchisches Adressverzeichnis innerhalb des Firmennetzwerks).
Die Integration dieser beiden Systeme stellte hohe Anforderungen an Performance, Datensynchronisation und Sicherheit.`}
      />
      <ImageSection
        image={{
          src: "/images/Telefonbuch-Architektur.png",
          alt: "Architekturdiagramm des Telefonbuchs",
        }}
        description="Vollständige Architektur vom Telefonbuch"
      />
      <TextSection
        title="Lösung"
        body={`Die neue Lösung wurde als moderne Webapplikation im Corporate Design der Post entwickelt. Die Umsetzung erfolgte grösstenteils eigenständig, ergänzt durch punktuelle Unterstützung von ehemaligen Entwicklerkollegen sowie einem Frontend-Spezialisten für die mobile Optimierung.
Eine interne .NET Web API (eine Schnittstelle zur Kommunikation zwischen der Benutzeroberfläche und den Datenquellen) wurde entwickelt, um Informationen aus dem LDAP-Verzeichnis effizient einzubinden. Damit konnte sichergestellt werden, dass die Daten aus beiden Systemen nahtlos kombiniert werden.`}
      />
      <QuoteSection
        quote="Ich finde sofort, wen ich suche und kann direkt per Teams oder E-Mail schreiben. Viel einfacher als früher."
        author="Mitarbeiterin"
      />
      <VideoSection
        videoSrc="/videos/Telefonbuch-Suche.mp4"
        description="Demonstration der neuen Suchfunktion im Telefonbuch"
      />
      <TextSection
        title="Prozess"
        body={`Die Gestaltung der Benutzeroberfläche erfolgte auf Basis von Prototypen in Figma. Innerhalb weniger Monate entstand ein funktionsfähiges MVP (Minimum Viable Product, also eine erste nutzbare Version mit Kernelementen), das schrittweise erweitert wurde.
Die technische Umsetzung wurde modular geplant und orientierte sich an vier Hauptbereichen: Datenintegration, Suche, Ergebnisdarstellung und Detailansicht.
Zentrale Aufgaben im Projekt:`}
        bullets={[
          "Umsetzung der Anwendung mit dem SPFx Framework (ein Microsoft-Framework für Webentwicklung auf SharePoint-Basis)",
          "Entwicklung einer modernen Suchoberfläche mit Filtern (z. B. nach Organisationseinheit oder Nutzerrolle)",
          "Integration von digitalen Visitenkarten inklusive QR-Code-Download",
          "Performance-Optimierung und Berücksichtigung der Barrierefreiheit",
          "Responsives Design für verschiedene Bildschirmgrössen",
        ]}
      />
      <QuoteSection
        quote="Die enge Abstimmung mit UX-Designerinnen und die agile Weiterentwicklung machten es möglich, innerhalb weniger Monate ein stabiles MVP zu liefern."
        author="Entwicklerteam"
      />
      <VideoSection
        videoSrc="/videos/Telefonbuch-Filterung.mp4"
        description="Demonstration der Filtermöglichkeiten beim Telefonbuch"
      />
      <TextSection
        title="Resultat"
        body={`Das neue Telefonbuch bietet eine moderne und intuitive Plattform zur Suche und Kontaktaufnahme im Unternehmen. Mitarbeitende können gezielt nach Namen, Rollen oder Organisationseinheiten suchen und direkt kommunizieren.

Ein besonders praktisches Feature ist die digitale Visitenkarte inklusive QR-Code, die z. B. beim mobilen Arbeiten oder in Meetings sofort einsatzbereit ist. Die Rückmeldungen der Nutzerinnen und Nutzer waren durchweg positiv. So führte ein Hinweis zur Optimierung der QR-Code-Darstellung auf iOS-Geräten bereits kurz nach Launch zu einer direkten Verbesserung.`}
      />
      <QuoteSection
        quote="Besonders die digitale Visitenkarte kommt gut an, sie spart uns enorm viel Zeit beim Teilen von Kontakten."
        author="Mitarbeiterin"
      />
      <VideoSection
        videoSrc="/videos/Telefonbuch-Details.mp4"
        description="Demonstration der Detailansicht eines Kontakts mit Visitenkarte im Telefonbuch"
      />
      <TextSection
        title="Lessons Learned"
        body={``}
        bullets={[
          "Responsives Design frühzeitig mitdenken und intensiv testen",
          "Flexible APIs vereinfachen die Anbindung verschiedener Datenquellen",
          "Nutzerfeedback ernst nehmen und zeitnah umsetzen",
          "Teamübergreifende Zusammenarbeit fördert technische und fachliche Tiefe",
        ]}
      />
      <VideoSection
        videoSrc="/videos/Telefonbuch-Responsive.mp4"
        description="Demonstration der responsiven Darstellung des Telefonbuchs auf verschiedenen Geräten"
      />
      <TextSection
        title="Fazit"
        body={`Technologische Erneuerung ist mehr als ein Software-Update. Der Erfolg dieses Projekts zeigt: Wenn Nutzerbedürfnisse ernst genommen, moderne Technologien gezielt eingesetzt und bereichsübergreifend zusammengearbeitet wird, entstehen Lösungen mit echtem Mehrwert für den Arbeitsalltag.`}
      />
      <CallToActionSection
        heading="Neugierig auf mehr?"
        text="Dann klick dich durch mein Portfolio oder sag einfach Hallo, ich freue mich auf spannende neue Herausforderungen!"
      />
    </>
  );
}
