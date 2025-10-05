const Texte = [
  "Einstweilen betrachten wir die zarten Blumensorten, die unsere wundersame Welt bevölkern, und erheben unsere Stimmen in erhabenem Ton, um ihnen die ihnen gebührende Aufmerksamkeit zu schenken. Mögen diese Worte die Blüten der Vergangenheit berühren und den Duft der Poesie in die Gegenwart tragen.",
  "Beginnen wir mit der Rose, einer Königin unter den Blumen, die ihre Stacheln mit Anmut trägt. In ihrem betörenden Rot verkörpert sie die Leidenschaft und die Liebe, und ihre Blütenblätter entfalten sich wie die kostbarsten Gewänder eines königlichen Hofes. Die Rose fordert Bewunderung und fordert uns auf, uns der Schönheit hinzugeben, die im Zusammenspiel von Zartheit und Stärke entsteht.",
  "Als Nächstes wollen wir der Lilie unsere Aufmerksamkeit widmen. Ihre Blüten gleiten wie Tropfen von reinstem Schnee, und ihr Duft erfüllt die Luft mit einer sinnlichen Eleganz. Die Lilie erinnert uns daran, dass Reinheit und Unschuld in der Welt nicht vergessen sind, sondern vielmehr in ihrer unvergänglichen Schönheit fortleben.",
  "Die Tulpe, eine lebendige Symphonie aus Farben, ist ein weiteres Juwel in der Blumenwelt. Von leuchtendem Gelb bis hin zu tiefem Violett präsentiert sie sich in einer Vielfalt, die die Augen erfreut und die Seele berührt. Sie symbolisiert den Frühling, die Erneuerung und die Freude, die mit der warmen Jahreszeit einhergehen.",
  "Die zarte Kamelie, mit ihren sanften Blütenblättern in Weiß oder Rosa, erzählt uns von Bescheidenheit und Anmut. In ihrer Schlichtheit birgt sie eine stille Eleganz, die den Betrachter in eine Welt der Ruhe und Friedlichkeit entführt. Die Kamelie ermutigt uns, das Schöne im Einfachen zu erkennen und die Kraft der Zurückhaltung zu schätzen.",
  "Nun lenken wir unseren Blick auf die Iris, deren prächtige Blüten in einem Farbenreigen erstrahlen, der an die Palette eines talentierten Malers erinnert. Die Iris ist ein Symbol für Weisheit und Kreativität, ihre Blütenblätter sind wie Pinselstriche auf einer Leinwand, die das Auge mit ihrer Anmut und ihrem Geheimnis fesseln.",
  "Schließlich wollen wir uns der Anemone zuwenden, einer Blume von seltener Schönheit und Grazie. Ihre zarten Blütenblätter, die wie zerknittertes Seidenpapier aussehen, erzählen von Vergänglichkeit und Flüchtigkeit. Die Anemone erinnert uns daran, dass das Leben kostbar ist und dass wir jeden Moment in seiner ganzen Pracht genießen sollten.",
  "So schließen wir unsere Betrachtungen der Blumensorten, die unseren Weg säumen. Mögen ihre Farben und Formen uns an die Schönheit erinnern, die in der Natur und in uns selbst liegt. ",
];

const newRandomText = () => {
  const AnzahlTexte = Texte.length();
  return Texte[AnzahlTexte * Math.random()];
};

export default newRandomText;
