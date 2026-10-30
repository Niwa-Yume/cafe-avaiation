// Logique du tableau « Départs du jour ».
// Les dates sont au format AAAA-MM-JJ : la comparaison de chaînes suffit.

// Date du jour à Genève, quel que soit le fuseau de l'appareil du visiteur.
export function aujourdhuiGeneve(maintenant = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Zurich' }).format(maintenant);
}

export function statut(date, aujourdhui) {
  if (date < aujourdhui) return 'Parti';
  return date === aujourdhui ? 'Embarquement' : 'Prévu';
}

// Pas de service le dimanche ni le lundi.
export function estFerme(aujourdhui) {
  const jour = new Date(`${aujourdhui}T12:00:00Z`).getUTCDay();
  return jour === 0 || jour === 1;
}

// Message affiché au-dessus du tableau, null si tout est normal.
export function annonce(dates, aujourdhui) {
  const avenir = dates.some((d) => d >= aujourdhui);
  if (dates.length === 0 || !avenir) return 'Les plats de la semaine arrivent mardi.';
  if (estFerme(aujourdhui)) return 'Fermé aujourd\'hui. Premier départ mardi.';
  return null;
}
