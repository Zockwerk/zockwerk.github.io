/* Gruß vom Entwickler – Karte „Hallo aus der Werkstatt“ auf der Startseite (mit dem selbst gemalten Entwickler-Bild aus js/icons.js).
   Nur der Entwickler schreibt hier – in Ich-Form, ehrlich und kurz. Die Seite ist ÖFFENTLICH: NIE echten Namen, Alter, Schule,
   Wohnort oder Fotos eintragen – höchstens einen Spitznamen bei n.
   Felder: d Datum (JJJJ-MM-TT; wird es neuer als der letzte Besuch, steht „NEU“ an der Karte),
   de/en { t Überschrift, x Text (wie bei Beiträgen: **fett**, Leerzeile = neuer Absatz, [Link](#ideen)), n Unterschrift,
   now „Gerade baue ich …“ – ein Satz (leer lassen = wird nicht gezeigt) }. Englisch darf fehlen (dann steht Deutsch da). */
window.ZH = window.ZH || {};
ZH.dev = {
  d: '2026-11-25',
  de: { t: 'Hallo aus der Werkstatt!',
    x: 'Schön, dass du da bist! Ich baue **Zockmix** – und das Zockwerk ist meine Werkstatt. Hier siehst du, woran ich gerade arbeite, welche Fehler ich repariere und welche Ideen als Nächstes kommen.\n\nJede Nachricht lese ich selbst. Viele Verbesserungen gibt es nur, weil jemand eine Idee geschickt hat – vielleicht ist deine die nächste!',
    n: 'Dein Zockmix-Entwickler',
    now: 'Zockmix wird auf Tablets schöner, und ich mache alles bereit für den Start im Play Store.' },
  en: { t: 'Hello from the workshop!',
    x: 'Great to see you! I build **Zockmix** – and Zockwerk is my workshop. Here you can see what I’m working on, which bugs I’m fixing and which ideas come next.\n\nI read every message myself. Lots of improvements only exist because someone sent in an idea – maybe yours is next!',
    n: 'Your Zockmix developer',
    now: 'Making Zockmix look great on tablets and getting everything ready for the Play Store launch.' }
};
