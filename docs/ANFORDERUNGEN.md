# Anforderungen – Relaunch Webseite Malerbetrieb Kringelis

> Referenzdokument für die Entwicklung. Bei Design-, Inhalts- oder Technikentscheidungen zuerst hier nachsehen.
> Änderungen an den Anforderungen hier nachziehen (Abschnitt „Änderungshistorie“ unten).

- **Kunde:** Malerbetrieb Manuel Kringelis, Winzererstr. 69, 80797 München
- **Alte Seite:** https://www.malerbetrieb-kringelis.de/ (Joomla, Backup vorhanden)
- **Neue Seite:** Astro 7 + Tailwind 4, statisch gebaut (dieses Repo)
- **Hosting:** zunächst **Netlify** (Build-Pipeline steht, baut automatisch bei Änderungen auf GitHub), später Umzug zu **IONOS**
- **Umsetzung:** Alpine Data Ventures
- **Stand:** 24.11.2026

---

## 1. Ausgangslage

- Zwei-Personen-Betrieb: **Manuel Kringelis** (Maler- und Lackierermeister, Inhaber, Betrieb gegründet 10/2012) und **Sascha** (bei Manuel ausgebildet, inzwischen Geselle).
- Die meisten Aufträge kommen über **Empfehlungen**. Region: München (Schwerpunkt Schwabing) bis in den Speckgürtel.
- Die alte Seite ist technisch, optisch und rechtlich veraltet:
  - Joomla mit `/index.php/`-URLs, Galerie-Plugin, Banner-Slideshow mit 14 Bildern
  - Leistungen nur als Stichpunktliste, ohne Beschreibung und ohne Bilder
  - Impressum liefert HTTP 500
  - Datenschutzerklärung beruft sich noch auf „Privacy Shield“ (seit 2020 ungültig) und nennt Google Fonts, reCAPTCHA, Maps, Analytics und Facebook-Plugins, aber es gibt kein Consent-Banner
  - E-Mail-Adresse nur per JavaScript sichtbar
  - Schimmel-Zertifikat und Sascha werden nirgends erwähnt

## 2. Ziel der Webseite

**Die Seite soll bestätigen, was die Empfehlung versprochen hat.** Sie muss nicht in erster Linie neue Kunden gewinnen.

Typischer Ablauf: Jemand hört von Manuel → ruft die Seite auf (meist am Handy) → sieht in wenigen Sekunden „professionell, sauber, Meisterbetrieb, schöne Arbeiten“ → ruft an oder schreibt.

Daraus folgen diese Ziele, nach Priorität:

1. **Vertrauen und Professionalität** in den ersten 5 Sekunden (Hero, Bildsprache, Meister- und Zertifikatshinweis)
2. **Arbeitsqualität zeigen**: Referenzen und Bilder statt Text
3. **Kontakt ohne Hürden**: Anruf, E-Mail und Formular von jeder Seite aus erreichbar
4. **Klare Struktur**: man findet sofort, was angeboten wird
5. **Lokale Auffindbarkeit** für die Suche nach Name und Region (z. B. „Maler Schwabing“)

Kein Ziel: Onlineshop, Preisrechner, Blog mit regelmäßigen Beiträgen (das pflegt der Kunde nicht).

## 3. Zielgruppe

| Merkmal | Ausprägung |
|---|---|
| Alter | über 30 („Ein Student streicht selber.“) |
| Lebenssituation | berufstätig, wenig Zeit, will es ordentlich gemacht haben |
| Geschlecht | etwa 50/50 |
| Kundentypen | Mieter, Eigentümer, Genossenschaften, Hausverwaltungen, Architekten: „Die Mischung macht's“ |
| Region | München, v. a. Schwabing, und Umland |
| Gerät | überwiegend Smartphone (kommt über Empfehlung, WhatsApp-Link oder Visitenkarte) |

### Unterschiedliche Erwartungen, die die Seite beide bedienen muss

- **Gestaltung (eher Frauen):** Farben, Stile, Kombinationen, Oberflächen, Wirkung im Raum → große, hochwertige Fotos, Vorher/Nachher, Detailaufnahmen von Oberflächen (Kalkpresstechnik, Lasur, Spachtel), Farbinspiration
- **Technik (eher Männer):** Untergrund, Materialien, Ablauf, Schimmelursachen, Qualifikation → kurze, sachliche Erklärungen, Ablauf in Schritten, Nachweise (Meisterbrief, Zertifikat)
- **Gewerbliche Kunden** (Hausverwaltung, Genossenschaft, Architekt): Zuverlässigkeit, Termintreue, Sauberkeit, Arbeiten in bewohnten Objekten, Arbeiten außerhalb der Geschäftszeiten, Partnernetzwerk (Schreiner, Trockenbau, Elektro) → eigener kurzer Abschnitt

**Gestaltungsregel:** Jede Leistungsseite hat beide Ebenen: oben Bilder und Wirkung, darunter „Wie wir arbeiten“ mit den technischen Details.

## 4. Positionierung und Botschaften

Kernbotschaft (Arbeitstitel): **„Meisterbetrieb aus Schwabing – sauber, termintreu, mit Blick fürs Detail.“**

### Meisterbetrieb klar herausstellen

Maler und Lackierer ist ein **zulassungspflichtiges Handwerk mit Meisterpflicht** (Handwerksordnung, [Anlage A Nr. 10](https://www.gesetze-im-internet.de/hwo/anlage_a.html)). Selbstständig führen darf so einen Betrieb nur, wer in die Handwerksrolle eingetragen ist, in der Regel mit Meisterbrief. Der Meistertitel ist also ein echter, belegbarer Qualitätsnachweis und soll sichtbar sein:

- „**Meisterbetrieb**“ im Hero bzw. Claim, in der Vertrauensleiste, im Seitentitel (`<title>`) und in der Meta-Beschreibung
- Manuel immer als „**Maler- und Lackierermeister**“ vorstellen (Abschnitt Über uns, Impressum, strukturierte Daten)
- Optional ein Bild des Meisterbriefs bzw. ein Meisterbetrieb-Siegel (falls die Handwerkskammer bzw. Innung eines anbietet und es genutzt werden darf)
- Stuck: Stuckateure sind ebenfalls ein eigenes Meisterhandwerk ([Anlage A Nr. 9](https://www.gesetze-im-internet.de/hwo/anlage_a.html)). Stuckarbeiten deshalb als Leistung im Rahmen des Malerhandwerks formulieren (Stuckprofile, Zier- und Deckenleisten anbringen, ausbessern, restaurieren und gestalten) und den Betrieb nicht als „Stuckateurbetrieb“ bezeichnen.

Belegbare Kernaussagen, die immer wieder auftauchen sollen:

- Meisterbetrieb seit 2012, Meisterschule München 2007/08, Handwerk seit 1999
- Zertifizierte Schimmelbekämpfung (genaue Bezeichnung des Zertifikats beim Kunden erfragen)
- Kleines Team, feste Ansprechpartner: Manuel und Sascha machen die Arbeit selbst, keine wechselnden Subunternehmer
- Termintreue und Sauberkeit (Abdecken, besenrein übergeben)
- Flexibel: Renovierung während des Urlaubs, Büros auch am Wochenende
- Netzwerk aus Meisterbetrieben (Schreiner/Trockenbau, Elektro, weitere Maler): alles aus einer Hand

Tonalität: per **„Sie“**, im Plural („wir“), freundlich, bodenständig, ohne Werbefloskeln. Kurze Sätze. Keine Superlative ohne Beleg („bester Maler Münchens“).

## 5. Informationsarchitektur (Sitemap)

**Entscheidung (24.11.2026): Single-Page mit wenigen Unterseiten.**
Die Startseite erzählt alles in einem Durchgang, das Menü springt per Anker zu den Abschnitten. Eigene Seiten gibt es nur, wo sie einen klaren Zweck haben:

- **Schimmelbekämpfung:** wird gezielt gesucht (Neukunden mit akutem Problem), ist das Alleinstellungsmerkmal und braucht technische Tiefe.
- **Rechtliche Pflichtseiten**

Begründung:

- Empfehlungskunden wollen sich schnell vergewissern, nicht stöbern.
- Es braucht deutlich weniger Text- und Bildmaterial als zehn Leistungsseiten.
- Die Struktur wird klarer, und es gibt nur einen Ort zur Pflege.

```text
/                     Single-Page
  #leistungen         Leistungen als Kacheln (Kachel „Schimmel“ verlinkt auf /schimmel)
  #referenzen         Ausgewählte Projekte, Vorher/Nachher
  #ueber-uns          Manuel & Sascha, Werdegang, Werte, Partnernetzwerk
  #ablauf             So arbeiten wir (4 Schritte)
  #kontakt            Kontakt, Formular, Einsatzgebiet
/schimmel             Schimmelbekämpfung (eigene Seite, SEO + Technik-Tiefe)
/impressum
/datenschutz
/404
```

Mögliche spätere Erweiterung: **/referenzen** als eigene Galerieseite, wenn die Bildmenge die Startseite überfrachtet. Auf der Startseite bleibt dann eine Auswahl mit dem Link „Alle Referenzen“.

### Navigation

- Hauptmenü: **Leistungen · Referenzen · Über uns · Ablauf · Kontakt** und ein deutlich sichtbarer **Anruf-Button**.
- Menülinks immer als `/#abschnitt` (nicht nur `#abschnitt`), damit sie auch von `/schimmel`, `/impressum` usw. funktionieren.
- Kein Untermenü (Dropdown) mehr. Die Leistungen stehen als Kacheln im Abschnitt `#leistungen`.
- Footer: Kontaktdaten, Einsatzgebiet, Impressum, Datenschutz.
- Die bisherige [src/config/menu.json](../src/config/menu.json) (Dropdown mit Unterseiten pro Leistung) wird entsprechend umgebaut.
- „Widerrufsbelehrung“ im Footer nur behalten, wenn sie gebraucht wird (siehe Abschnitt 9). Sie wird nicht auf der Webseite benötigt, sondern bei Verträgen, die beim Kunden vor Ort geschlossen werden.

### Startseite: Reihenfolge der Abschnitte

1. **Hero:** großes, echtes Projektfoto (kein Stockfoto), Claim, kurzer Untertitel, Buttons „Jetzt anrufen“ und „Anfrage senden“
2. **Vertrauensleiste:** Meisterbetrieb · seit 2012 · zertifizierte Schimmelbekämpfung · München & Umland
3. **`#leistungen`:** 6–8 Kacheln mit Bild und 2–3 Sätzen. Jede Kachel enthält oben Bild und Wirkung, darunter einen kurzen Technik-Satz. Optional klappt ein „Mehr erfahren“ Details auf (`<details>`, ohne JavaScript).
   - Malerarbeiten
   - Tapezierarbeiten
   - Lackierarbeiten
   - Wandgestaltung (Spachtel-, Kalkpress-, Lasur- und Effekttechniken)
   - Stuck (Profile, Zier- und Deckenleisten, Ausbesserung)
   - Altbausanierung & Renovierung (inkl. Urlaubs- und Wochenendservice)
   - **Schimmelbekämpfung** (hervorgehoben, Link auf `/schimmel`)
   - Fassade und Parkett/Laminat nur, wenn sie weiterhin angeboten werden (offener Punkt)
4. **`#referenzen`:** 4–8 Projekte, gern als Vorher/Nachher, mit kurzem Text (Ort/Stadtteil, Leistung)
5. **`#ueber-uns`:** Teamfoto Manuel & Sascha, Werdegang in Kurzform, Werte (sauber, termintreu, feste Ansprechpartner), Partnernetzwerk
6. **`#ablauf`:** So arbeiten wir in 4 Schritten (Anfrage → Besichtigung/Beratung → Angebot → Ausführung und saubere Übergabe), dazu ein kurzer Block „Für Hausverwaltungen & Architekten“
7. **Kundenstimmen:** 2–4 echte Zitate, nur mit Einwilligung (siehe Abschnitt 9)
8. **`#kontakt`:** Telefon, E-Mail, Formular, Einsatzgebiet (statische Karte bzw. Liste der Stadtteile)

**Grundsatz:** Jeder Abschnitt hat genau eine Botschaft. Abschnitte ohne gutes Material lieber weglassen, als sie mit Füllmaterial zu bestücken.

### Unterseite /schimmel

- Hero-Bild und ein Satz zum Nutzen („Schimmel dauerhaft beseitigen, nicht nur überstreichen“)
- Zertifikat als Vertrauensnachweis, wenn möglich als Bild
- Ursachen (Feuchtigkeit, Wärmebrücken, Lüftung) kurz erklärt
- Ablauf: Begutachtung → Ursachenanalyse → Sanierung → Vorbeugung
- Wann ein Maler hilft und wann ein Sachverständiger oder Bautrockner nötig ist (schafft Glaubwürdigkeit)
- Hinweise für Mieter, Vermieter und Hausverwaltungen
- FAQ mit strukturierten Daten (`FAQPage`)
- Kontakt-CTA
- Gleiches Layout wie die Startseite, Navigation per `/#…` zurück

## 6. Bildsprache und Design

### Bildsprache (wichtigster Hebel)

- **Echte Fotos** von Manuels Projekten, vom Team und von Werkzeug und Material. Keine generischen Stockfotos mit lächelnden Models, keine KI-Bilder von Personen.
- Motive:
  - fertige Räume mit Atmosphäre (Tageslicht, aufgeräumt, wohnlich)
  - Nahaufnahmen von Oberflächen und Strukturen (Kalkpress, Lasur, Stuck, Kanten)
  - Vorher/Nachher aus derselben Perspektive
  - Team bei der Arbeit: sauber abgedeckt, Arbeitskleidung, natürlich
  - Altbau und Schwabing-Bezug (Stuck, hohe Decken, Altbaufenster) als lokaler Wiedererkennungswert
- Einheitlicher Look: ähnliche Farbtemperatur und Bearbeitung, gerade Linien, keine verzerrten Weitwinkelaufnahmen.
- Vorhandenes Material aus dem Backup sichten (14 Banner, 18 Galeriebilder) und nur Bilder mit ausreichender Qualität übernehmen. Wahrscheinlich ist ein **Fotoshooting** nötig (siehe offene Punkte).
- Jedes Bild bekommt einen beschreibenden Alt-Text auf Deutsch.

### Visuelles Design

- Modern, ruhig und hochwertig: viel Weißraum, große Bilder, wenig Deko. Das Handwerk soll im Vordergrund stehen, nicht die Webseite.
- Farbpalette: zurückhaltende, warme Neutraltöne als Basis (Kalkweiß, Sand, Greige, Anthrazit) und **eine** markante Akzentfarbe für Buttons und Links (möglichst aus dem Logo ableiten). Die Farben der Projektfotos sollen wirken, die Oberfläche nimmt sich zurück.
- Typografie: eine gut lesbare Grotesk für Fließtext, optional eine charaktervolle Schrift für Überschriften (siehe „Schriften“ unten).
- Fließtext mindestens 16–18 px. Die Zielgruppe ist über 30, Lesbarkeit geht vor Eleganz.
- Mobile first. Anruf-Button auf dem Handy immer erreichbar (Sticky-Header oder schwebender Button).
- **Dark Mode bleibt vorerst erhalten.** Ob er bleibt, entscheidet Manuel. Bis dahin beide Modi gestalten und testen (Kontraste, Logo-Variante für dunklen Hintergrund). Falls er wegfällt: `npm run remove-darkmode`.
- Keine automatisch laufenden Slider oder Karussells im Hero. Ein starkes Bild reicht.

### Schriften: werden mit der Webseite ausgeliefert

- **Alle Schriftdateien werden mit der Webseite deployt und von der eigenen Domain ausgeliefert.** Kein Nachladen zur Laufzeit von Google Fonts, Adobe Fonts, CDNs oder anderen fremden Servern. Grund: Beim Laden von fremden Servern wird die IP-Adresse der Besucher übertragen. Das ist ohne Einwilligung datenschutzrechtlich problematisch (vgl. LG München I, Urteil vom 20.01.2022, Az. 3 O 17493/20).
- Umsetzung über die Astro Fonts API. Bevorzugt `fontProviders.local()` mit den Schriftdateien (`.woff2`) im Repo unter `src/assets/fonts/`. So hängt der Build nicht von fremden Servern ab, und die Auslieferung ist eindeutig.
  - Remote-Provider wie `fontProviders.google()` laden die Dateien zwar nur beim Build herunter und liefern sie danach selbst aus, sind aber zweite Wahl.
  - **Umgesetzt:** `fontProviders.local()` in [astro.config.mjs](../astro.config.mjs). Die Dateien und Lizenzen (OFL) liegen in `src/assets/fonts/`, Namen und Dateien stehen in [theme.json](../src/config/theme.json).
- **Gewählt (24.11.2026):** Überschriften in **Fraunces** (warme Serifenschrift, passt zum Logo-Schriftzug), Fließtext in **Source Sans 3**. Beide stehen unter der SIL Open Font License und sind als variable Fonts eingebunden (zusammen rund 96 KB).
- Nur Schriften mit einer Lizenz, die Web-Einbettung und Self-Hosting erlaubt, z. B. SIL Open Font License (OFL). Die Lizenzdatei kommt mit ins Repo.
- Nur die nötigen Schnitte und Zeichensätze einbinden (z. B. latin, 2–3 Gewichte), `font-display: swap`, die Hauptschrift vorladen.
- **Prüfung:** Im Netzwerk-Tab des Browsers darf keine Anfrage an `fonts.googleapis.com`, `fonts.gstatic.com` oder andere fremde Domains auftauchen.
- Alte Schrift „Exotic 350 Demi Bold BT“ (Bitstream, kommerziell): wird für die Webseite nicht verwendet. Siehe offene Punkte.

### Logo

- Das bestehende Logo (in `Bildvorrat/neu`) wird **behutsam modernisiert** und nicht komplett neu erfunden, damit der Wiedererkennungswert bei Bestandskunden bleibt.
- Ergebnis als **SVG** (Vektor), dazu Varianten für hellen und dunklen Hintergrund, ein quadratisches Icon (Favicon, App-Icon, Social Media) und eine einfarbige Version (Stempel, Fahrzeug, Druck).
- Die Freigabe erfolgt durch Manuel.
- Entwürfe liegen in [logo-entwuerfe/](logo-entwuerfe/). **Favorit (24.11.2026): Variante A „Ellipse“** mit dunkelroter Ellipse, flachem Pinsel, Schriftzug „Kringelis“ und dem Zusatz „Malermeister · München“. Die Varianten B und C bleiben erhalten, bis Manuel entschieden hat.

### Bildmaterial: Auswahl und Aufbereitung

- Quelle: `Bildvorrat/alt` (alte Webseite, klein) und `Bildvorrat/neu` (rund 150 Fotos, zusammen etwa 350 MB, Einzelbilder bis 8 MB).
- Der Ordner `Bildvorrat/` ist per `.gitignore` vom Repo ausgeschlossen, die Originale bleiben lokal.
- **Auswahl:** Nur Bilder mit klarer Aussage, guter Schärfe und Belichtung, ohne personenbezogene Details (Namen an Klingeln, Post, Familienfotos, erkennbare Personen ohne Einwilligung). Doppelte oder sehr ähnliche Motive aussortieren.
- **Aufbereitung vor dem Einchecken** per Skript, reproduzierbar: `node scripts/prepareImages.js` mit der Auswahlliste [scripts/bildauswahl.json](../scripts/bildauswahl.json), die auch Zielname und Alt-Text je Bild enthält. Bei geänderter Auswahl die JSON anpassen und das Skript erneut ausführen (`--force` überschreibt vorhandene Bilder).
  - Längste Kante maximal **2400 px** (Hero) bzw. **1600 px** (übrige Bilder)
  - JPEG in Qualität etwa 80, Ausrichtung gemäß EXIF korrigiert
  - **EXIF-Metadaten entfernen**: GPS-Koordinaten könnten die Adresse der Kunden verraten
  - Sprechende Dateinamen (`stuck-deckenprofil-altbau-schwabing.jpg` statt `IMG_8590.JPG`)
- Die aufbereiteten Bilder liegen unter `public/images/projekte/<kategorie>/` (Template-Konvention). Ausgeliefert werden sie über die Template-Komponente `ImageMod` bzw. `astro:assets`, die beim Build optimierte Varianten (WebP/AVIF, passende Größen) erzeugt. Nie als einfaches `<img src="/images/…">` einbinden, sonst wird das unoptimierte JPEG ausgeliefert.
- Für ein bildschirmbreites Hero-Bild braucht es mindestens 2000 px Breite. Viele Fotos liegen nur als WhatsApp-Kopie vor (1024 px). Sie taugen für Kacheln, aber nicht für den Hero (Details in [BILDAUSWAHL.md](BILDAUSWAHL.md)).
- Zielgröße pro ausgeliefertem Bild: unter 200 KB, Hero-Bild unter 300 KB.

## 7. Technik

- Astro (statische Seiten), Tailwind CSS, Bilder über `astro:assets` (AVIF/WebP, responsive `srcset`, Lazy Loading)
- Inhalte als Markdown/MDX in Content Collections, damit Texte und Bilder ohne Programmierkenntnisse austauschbar sind
- Performance: Lighthouse-Werte über 95 in allen Kategorien (mobil), LCP unter 2,5 s, CLS unter 0,1
- Kein unnötiges Client-JavaScript. React nur, wenn es wirklich gebraucht wird.
- **Hauptdomain: `https://www.malerbetrieb-kringelis.de`** (Entscheidung vom 24.11.2026)
  - Gründe:
    - Kontinuität: Die alte Seite, der Google-Index und vermutlich auch Drucksachen und Einträge nutzen bereits `www`, so entstehen keine doppelten Weiterleitungen.
    - DNS: `www` lässt sich per CNAME an das CDN anbinden, das ist robust und unabhängig vom Anbieter.
    - Im Druck ist `www.` sofort als Webadresse erkennbar.
  - Die Domain ohne `www` leitet per 301 auf `www` weiter. Gedruckt werden darf trotzdem die kurze Variante.
  - `base_url` in [src/config/config.json](../src/config/config.json) ist darauf gesetzt (Grundlage für Canonical-URLs, Sitemap, Open-Graph und `llms.txt`).
- **Neuanfang ohne Altlasten:** Die URL-Struktur wird komplett neu aufgebaut, alte Pfade werden **nicht** nachgebaut.
- **Übergangsweise Weiterleitungen** für alte Adressen, die noch im Umlauf sind (Google-Index, Branchenbücher, Partnerseiten, Google-Unternehmensprofil, Lesezeichen, alte E-Mail-Signaturen). Empfehlungskunden mit einem alten Link sollen nie auf einer Fehlerseite landen („Gibt's den noch?“).
  - Regelwerk (Format Netlify/Cloudflare `_redirects`; die spezifischen Regeln müssen **vor** der Sammelregel stehen):

    ```text
    /index.php/impressum               /impressum    301
    /index.php/datenschutzerklaerung   /datenschutz  301
    /index.php                         /             301
    /index.php/*                       /             301
    ```

  - Zusätzlich auf die Hauptdomain normalisieren: `malerbetrieb-kringelis.de/*` → `https://www.malerbetrieb-kringelis.de/:splat` per 301, außerdem HTTP → HTTPS.
  - Alles andere fängt die freundliche **404-Seite** ab: Telefonnummer, Link zur Startseite, kurze Liste der Leistungen.
  - **Laufzeit:** 6–12 Monate nach dem Livegang. Die Regeln werden entfernt, sobald Google neu indexiert hat (Google Search Console prüfen) und die externen Einträge aktualisiert sind.
  - Nach dem Deployment testen, z. B. mit `curl -I https://…/index.php/galerie`: Erwartet wird `301` mit `Location: /`.
- **Anker-Navigation (Single-Page):**
  - `scroll-margin-top` auf allen Abschnitten in Höhe des Sticky-Headers
  - `scroll-behavior: smooth` nur innerhalb von `@media (prefers-reduced-motion: no-preference)`
  - Scroll-Spy: aktiver Menüpunkt per `IntersectionObserver` hervorheben (schlankes Inline-Script, kein Framework); `aria-current` setzen
  - Mobiles Menü schließt sich nach einem Klick auf einen Anker
  - Abschnitte als `<section id="…" aria-labelledby="…">` mit eigener `<h2>`; nur eine `<h1>` pro Seite
  - Anker-IDs sind stabil und sprechend (`#leistungen`, nicht `#section-3`), weil Links per WhatsApp geteilt werden
- Lange Seite mit vielen Bildern: nur das Hero-Bild lädt sofort (`loading="eager"`, `fetchpriority="high"`), alle anderen lazy
- Sitemap, `robots.txt`, Canonical-URLs und `llms.txt` (Generator ist vorhanden)
- Eigene, gestaltete 404-Seite
- Altlasten aus dem Template aufräumen, bevor live gegangen wird:
  - Blog, Autoren, Kategorien, Tags und Suche entfernen bzw. deaktivieren (Demo-Inhalte wie `john-doe.md` dürfen nicht live gehen)
  - `elements.mdx`, Google Tag Manager, lite-youtube und Swiper nur behalten, wenn sie benutzt werden
  - Platzhalter (GTM-ID, `contact_form_action: "#"`, Announcement-Bar) ersetzen oder entfernen

## 8. Sicherheit

- Nur HTTPS, HSTS aktivieren
- Security-Header beim Hosting setzen: `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, `X-Frame-Options`/`frame-ancestors`
- Kein CMS und kein Backend auf dem Server, also keine Angriffsfläche wie beim alten Joomla
- Kontaktformular über einen Anbieter mit Sitz in der EU oder eine eigene Serverless-Funktion; Spamschutz per Honeypot oder Zeitprüfung bzw. einer datenschutzfreundlichen Lösung wie Friendly Captcha. **Kein Google reCAPTCHA.**
- E-Mail-Adresse als normaler `mailto:`-Link angeben, Spamschutz übernimmt der Mailserver
- Abhängigkeiten aktuell halten (Dependabot bzw. Renovate über `.github`)

## 9. Rechtliches und Compliance (DSGVO, TDDDG, DDG)

> Keine Rechtsberatung. Impressum und Datenschutzerklärung vor dem Livegang vom Kunden bzw. einem Generator oder Anwalt bestätigen lassen.

- **Möglichst ohne Cookies und Tracking bauen.** Dann braucht die Seite kein Cookie-Banner. Das ist das Ziel.
  - Keine Google Fonts von Google-Servern, kein Google Analytics, kein Facebook-Plugin, kein reCAPTCHA
  - Reichweitenmessung höchstens cookielos und ohne personenbezogene Daten (z. B. Plausible oder Cloudflare Web Analytics), in der Datenschutzerklärung nennen
  - Karte: statisches Bild mit Link zu Google Maps/OpenStreetMap oder eine Zwei-Klick-Lösung. Kein eingebettetes iFrame, das ohne Einwilligung lädt.
  - YouTube/Vimeo, falls überhaupt: nur mit Zwei-Klick-Lösung (lite-youtube erst nach Klick)
- **Impressum** nach § 5 DDG (Stand: befüllt, siehe [impressum.md](../src/content/pages/impressum.md)):
  - Name, Rechtsform (Einzelunternehmen), Anschrift, Telefon, E-Mail
  - USt-IdNr. **DE 263525098**
  - Zuständige Kammer: Handwerkskammer für München und Oberbayern
  - Gesetzliche Berufsbezeichnung „Maler- und Lackierermeister“, verliehen in Deutschland
  - Berufsrechtliche Regelung: Handwerksordnung mit Link auf https://www.gesetze-im-internet.de/hwo/
  - Freiwilliger Hinweis zur Verbraucherstreitbeilegung. Pflicht ist er nach § 36 VSBG erst ab mehr als 10 Beschäftigten.
  - Kein Handelsregister-Eintrag (Einzelunternehmen)
  - Der Hinweis auf die EU-OS-Plattform entfällt, weil die Plattform abgeschaltet ist.
  - **Steuernummer nicht veröffentlichen.** Sie ist keine Pflichtangabe, und eine Veröffentlichung erleichtert Missbrauch.
- **Datenschutzerklärung** komplett neu schreiben, passend zur tatsächlichen Technik: Hosting-Anbieter, Server-Logfiles, Kontaktformular/E-Mail, ggf. Analytics, Rechte der Betroffenen. Keine Verweise mehr auf Privacy Shield.
- **Kontaktformular:** nur die nötigsten Pflichtfelder (Name, E-Mail oder Telefon, Nachricht), Hinweis auf die Datenschutzerklärung, keine vorausgewählten Checkboxen. Optionaler Foto-Upload nur, wenn er DSGVO-konform umsetzbar ist.
- **Fotos:**
  - Personen (Team, Kunden) nur mit schriftlicher Einwilligung
  - Kundenwohnungen nur mit Freigabe und ohne Hinweise auf Adresse oder Bewohner (Namen an Klingeln, Post, Familienfotos)
  - Für Stockbilder Lizenzen dokumentieren
- **Kundenstimmen:** nur echte Zitate mit Einwilligung, Angabe wie „Familie M., Schwabing“
- **Barrierefreiheit:** Kleinstunternehmen sind von der Pflicht nach dem BFSG ausgenommen. Trotzdem orientieren wir uns an **WCAG 2.2 AA** (Kontrast, Tastaturbedienung, Alt-Texte, Fokuszustände, saubere Überschriftenstruktur, `lang="de"`). Das hilft auch der älteren Zielgruppe und der SEO.
- **Widerrufsbelehrung:** Wird ein Vertrag mit Verbrauchern bei ihnen zu Hause geschlossen, besteht ein Widerrufsrecht. Die Belehrung gehört dann ins Angebot bzw. in den Vertrag, nicht zwingend auf die Webseite. Mit dem Kunden klären, ob die Seite im Footer bleibt.

## 10. Lokale SEO

- Seitentitel und Meta-Beschreibungen pro Seite mit Ortsbezug („Malermeister in München-Schwabing“)
- Strukturierte Daten (JSON-LD): `HousePainter` bzw. `LocalBusiness` mit Adresse, Telefon, Einsatzgebiet und Öffnungszeiten; `Service` je Leistung; `FAQPage`, wo es passt
- Name, Adresse und Telefonnummer überall gleich schreiben (Webseite, Google-Unternehmensprofil, Branchenbucheinträge)
- **Google-Unternehmensprofil** pflegen bzw. anlegen und auf die Seite verlinken. Dorthin kommen auch die Bewertungen der Empfehlungskunden.
- Einsatzgebiet als Text nennen: München (Schwabing, Maxvorstadt, Neuhausen, …) und Umland. Keine Spam-Seiten pro Stadtteil.
- Open-Graph-Bild und -Texte, damit beim Teilen per WhatsApp eine ansprechende Vorschau erscheint. Das ist für das Empfehlungsgeschäft wichtig.

## 11. Abnahmekriterien (Definition of Done für den Livegang)

- [ ] Alle Abschnitte und Seiten aus Abschnitt 5 haben echte Inhalte und Bilder, keine Template- oder Demo-Inhalte mehr
- [ ] Alle Menü-Anker funktionieren von der Startseite **und** von den Unterseiten aus, kein Abschnitt wird vom Header verdeckt
- [x] Nicht mehr benötigte Template-Routen (Blog, Autoren, Kategorien, Tags, `/ueber`, `/kontakt`, `[regular]`-Demo) sind entfernt oder leiten weiter
- [ ] Kontakt (Anruf/E-Mail) auf dem Handy von jeder Seite mit einem Tipp erreichbar
- [ ] Kontaktformular getestet: Mail kommt an, Spamschutz greift
- [ ] Lighthouse mobil ≥ 95 in Performance, Barrierefreiheit, Best Practices und SEO
- [ ] Keine Anfragen an Drittanbieter vor einer Einwilligung (im Netzwerk-Tab geprüft); keine Cookies gesetzt
- [ ] Impressum und Datenschutz vom Kunden freigegeben
- [ ] 301-Weiterleitungen der alten URLs funktionieren (Stichprobe: `/index.php`, `/index.php/galerie`, `/index.php/impressum`), Termin zum Entfernen der Regeln ist eingeplant
- [ ] Security-Header gesetzt (z. B. securityheaders.com mindestens A)
- [ ] Einwilligungen für Personenfotos und Kundenstimmen liegen vor
- [x] `npm run check` und `npm run build` laufen ohne Fehler (Stand 24.11.2026)

## 12. Offene Punkte (beim Kunden klären)

- [ ] Genaue Bezeichnung, Aussteller und Jahr des **Schimmel-Zertifikats**; darf es als Bild gezeigt werden? (bei Manuel angefragt am 24.11.2026)
- [ ] Freigabe des modernisierten Logos durch Manuel (Favorit: Variante A)
- [ ] Originale der WhatsApp-Fotos (`IMG_8594`–`IMG_8634`) in voller Auflösung, vor allem `IMG_8596` (Blau/Gold-Wand) als Hero-Kandidat
- [ ] Dark Mode behalten oder entfernen? (Manuel entscheidet)
- [ ] Umzug Netlify → IONOS: Zeitpunkt, Tarif (statisches Hosting oder Webspace), Umsetzung von Weiterleitungen und Security-Headern dort (`.htaccess` statt `_redirects`/`netlify.toml`)
- [ ] Saschas Nachname, Rolle/Bezeichnung (Geselle?) und Einverständnis für Foto und Namen
- [ ] Freigabe der ausgewählten Bilder aus `Bildvorrat/neu` (Bildrechte, Einwilligung der abgebildeten Personen und Kunden); ggf. ergänzendes Fotoshooting für Team und Hero
- [ ] Gibt es Hausfarben? Sonst leiten wir sie aus dem modernisierten Logo ab.
- [ ] Bietet der Betrieb Fassade und Parkett/Laminat weiterhin an?
- [ ] Partnerbetriebe namentlich nennen und verlinken (mit deren Zustimmung)?
- [ ] Kundenstimmen sammeln (3–5, mit Einwilligung)
- [ ] Erreichbarkeit/Öffnungszeiten, bevorzugter Kontaktweg (Anruf, WhatsApp, E-Mail)
- [ ] Domain und E-Mail: Wo liegen Domain und Postfächer heute, wer betreut den DNS-Umzug? (MX-, SPF-, DKIM- und DMARC-Einträge vorher sichern)
- [ ] Existiert ein Google-Unternehmensprofil?
- [ ] Wohin gehen Formularanfragen (E-Mail-Adresse)? In Netlify unter „Forms → Notifications“ einrichten.
- [ ] **AVV-Kette klären:** Verantwortlicher ist Manuel Kringelis. Wer betreibt das Netlify-Konto? Falls Alpine Data: AVV zwischen Manuel und Alpine Data mit Netlify als Unterauftragsverarbeiter. Außerdem prüfen, ob Netlify unter dem EU-U.S. Data Privacy Framework zertifiziert ist (Datenschutzerklärung, Abschnitt 2).
- [ ] Freigabe aller Texte durch Manuel (Startseite: `src/content/homepage/-index.md`, Schimmel-Seite, Datenschutz)
- [ ] Widerrufsbelehrung: Seite ist leer und auf `draft: true` gesetzt. Wird sie gebraucht (siehe Abschnitt 9)?

## 13. Umsetzungsstand

Stand 24.11.2026, Branch `dev`:

- **Template aufgeräumt:** Blog, Autoren, Kategorien, Tags, Suche, Google Tag Manager, Ankündigungsleiste, Demo-Inhalte und -Bilder sowie `astro-swiper` und `date-fns` entfernt
- **Grundgerüst:**
  - Farben und Schriften in [theme.json](../src/config/theme.json)
  - Logo-Entwurf A als Inline-SVG ([Logo.astro](../src/layouts/components/Logo.astro)), passt sich dem Dark Mode an
  - Header mit Anker-Navigation, Scroll-Spy und Anruf-Button
  - Footer mit Kontakt und Navigation
  - Kontaktdaten zentral unter `contact` in [config.json](../src/config/config.json)
- **Startseite** ([index.astro](../src/pages/index.astro)):
  - Abschnitte Hero, Vertrauensleiste, Leistungen, Referenzen (Vorher/Nachher und Galerie), Über uns mit Werdegang, Ablauf mit Block für Hausverwaltungen, Kontakt mit Formular
  - Texte in [homepage/-index.md](../src/content/homepage/-index.md), Komponenten in `src/layouts/partials/home/`
  - JSON-LD `HousePainter`
  - Kundenstimmen fehlen bewusst, bis echte vorliegen
- **Unterseiten:** `/schimmel`, `/impressum`, `/datenschutz` (Entwurf, neu geschrieben), `/danke` (nach dem Formular, noindex, nicht in der Sitemap) und eine eigene 404-Seite mit Telefonnummer
- **Kontaktformular:** Netlify Forms mit Honeypot, ohne reCAPTCHA. Beim Umzug zu IONOS braucht es ein anderes Backend.
- **Sicherheit:**
  - Astro erzeugt die Content-Security-Policy mit Hashes für alle Skripte und Styles (`security.csp` in [astro.config.mjs](../astro.config.mjs)). Das Inline-Skript für den Dark Mode wird über [themeInit.mjs](../src/lib/themeInit.mjs) gehasht.
  - Weitere Header (HSTS, `frame-ancestors`, `nosniff`, Referrer- und Permissions-Policy) sowie die Weiterleitungen stehen in [netlify.toml](../netlify.toml).
  - Die vorhandene `public/.htaccess` enthält nur Caching und Kompression. Für IONOS müssen Weiterleitungen und Header dort ergänzt werden.
- **SEO und Teilen:** Canonical-URLs auf `www`, `lang="de"`, Open-Graph-Bild (1200 × 630), Favicon aus dem Logo-Pinsel, `robots.txt` mit Sitemap
- **Noch offen (Technik):**
  - Lighthouse-Messung auf dem Netlify-Deploy
  - Formular-Test auf Netlify
  - Strukturierte Daten `FAQPage` für `/schimmel`
  - Lightbox für die Galerie (optional)
  - Logo als SVG mit in Pfade umgewandeltem Text für Druck und Favicon, nach Manuels Freigabe

## Änderungshistorie

| Datum | Änderung |
|---|---|
| 24.11.2026 | Erstfassung aus dem Kundenbriefing und der Analyse der alten Webseite |
| 24.11.2026 | Sitemap auf Single-Page mit Anker-Navigation umgestellt; eigene Unterseite nur für Schimmelbekämpfung und rechtliche Seiten |
| 24.11.2026 | Migration: Neuanfang ohne alte URL-Struktur; nur übergangsweise 301-Sammelregel für `/index.php/*` |
| 24.11.2026 | Hauptdomain festgelegt: `www.malerbetrieb-kringelis.de`, die Domain ohne `www` leitet per 301 weiter; `base_url` angepasst |
| 24.11.2026 | Hosting (Netlify, später IONOS), Meisterbetrieb-Botschaft, Schriften werden selbst ausgeliefert, Logo-Modernisierung, Bildaufbereitung; Dark Mode bleibt vorerst; Impressum-Daten ergänzt |
| 24.11.2026 | Umsetzung: Template bereinigt, Grundgerüst, Single-Page, Schimmel-Seite, Datenschutz-Entwurf, CSP und Security-Header; Schriftwahl Fraunces und Source Sans 3 |
