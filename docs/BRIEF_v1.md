# Brief — Refonte du site Café de l'Aviation (laviation.ch)

## Contexte

- Café-restaurant à Vernier (GE), à côté de Genève Aéroport. Spécialité : l'entrecôte **sauce Caravelle**, recette maison secrète. Portions aux noms d'avions : Caravelle 180 g, Super Caravelle 260 g, A380 380 g, A500 500 g.
- Hôtel de l'Aviation sur place : 11 chambres. Cuvée maison : Cuvée de l'Aviation (Clos du Château, Choully).
- Site actuel sur un site builder (Duda). Le restaurant y met à jour **lui-même** les plats du jour chaque semaine.
- Réservations : **téléphone uniquement** (politique du restaurant, à respecter).

## Fichiers de référence (`design/`)

| Fichier | Rôle |
|---|---|
| `accueil.html` | Maquette de la page d'accueil, responsive (testée à 390, 1024 et 1440 px) |
| `mobile.html` | Premier écran mobile avec la barre d'actions fixe (Réserver / Itinéraire / La carte) |
| `bon-cadeau.html` | Visuel du bon cadeau « carte d'embarquement » |

Ces fichiers sont une **référence visuelle, pas du code de production** : tout est en styles inline. Il faut en extraire un design system (tokens + composants), pas les copier tels quels.

Contenu réel à reprendre : https://www.laviation.ch/ (carte), https://www.laviation.ch/vins, https://www.laviation.ch/hotel

## Design system à extraire

- Couleurs :
  - `--navy #0F1E33` (fond principal sombre)
  - `--navy-deep #0A1626` (bandeau haut, pied de page)
  - `--board #0B1422` (tableau des départs)
  - `--card-dark #162943`
  - `--paper #EFECE3`, `--paper-2 #E4DED0`, `--paper-card #F8F6F0`
  - `--ink #14202F`, `--ink-2 #2C3644`, `--muted #5A6472`, `--muted-on-dark #A9B4C4`
  - `--accent #F0B93A` (jaune « sauce »)
  - `--stamp #B8322A` (tampon « Confidentiel »)
- Typographies :
  - Titres : Big Shoulders Display 900, en capitales
  - Texte courant : Archivo
  - Étiquettes et données : IBM Plex Mono, capitales espacées
  - **Héberger les polices localement**, pas via le CDN Google (protection des données).
- Accessibilité : contraste AA, cibles tactiles de 44 px minimum, vrais `<a>` / `<button>` / `<label>`.

## Contraintes techniques

- Critères, dans cet ordre : coût minimal, mise en production durable, performance suffisante, peu de maintenance.
- **Pas de Next.js.**
- Avant de coder, propose la stack la plus simple qui respecte ces critères, en vérifiant l'état actuel des outils plutôt qu'en supposant. Explique tes choix et attends ma validation.

## Le point critique : contenu éditable par le restaurant

Les plats du jour (chaque semaine), les suggestions du moment, la carte et les prix doivent rester modifiables **par le restaurant, sans développeur et sans outil technique**. Sinon le projet échoue.

- Propose 2 options avec leurs avantages et inconvénients (par exemple une Google Sheet publiée, ou un CMS léger).
- Tableau « Départs du jour » : le statut se calcule selon la date.
  - Jour passé → « Parti »
  - Aujourd'hui → « Embarquement »
  - Jour à venir → « Prévu »
  - Pas de service le dimanche et le lundi.

## Pages

1. **Accueil** : maquette fournie.
2. **Carte complète** : entrées, viandes, poissons, suggestions, menu enfants « Petits aviateurs », desserts, coupes glacées.
3. **Vins**
4. **Hôtel**, avec un formulaire de demande de réservation (dates, type de chambre, heure d'arrivée).
5. **Groupes & événements**, avec formulaire.
6. **Bons cadeaux** : phase 2, voir plus bas.
7. **Mentions légales et confidentialité** (nLPD).
8. **Version EN** : le site actuel en a une.

Pour les pages non maquettées, décline le système visuel de l'accueil.

## Fonctionnalités

- **Réservation** : liens `tel:` partout, plus la barre d'actions fixe sur mobile. Pas de réservation en ligne.
- **Formulaires** : groupes, hôtel, liste d'attente « sauce à emporter », contact.
  - Backend le plus simple possible, avec anti-spam.
  - Case de consentement pour l'email (nLPD).
- **Plat du jour sur WhatsApp** : un simple lien vers une chaîne WhatsApp, que le client créera.
- **Phase 2, bons cadeaux** : paiement en ligne (carte + TWINT), puis envoi du billet par email. Propose la solution la moins coûteuse à maintenir, par exemple un lien de paiement hébergé.

## SEO

- Title et meta description par page. Requêtes à viser : « entrecôte sauce Genève », « restaurant aéroport Genève », « restaurant Vernier ».
- Données structurées schema.org : `Restaurant` (avec `Menu`) et `Hotel`. Ajouter aussi OpenGraph et un sitemap.
- **Redirections 301** des anciennes URLs (`/vins`, `/hotel`, `/en-gb/...`) pour ne pas perdre le référencement existant.

## Hors périmètre / à fournir par le client

- **Photos** : les emplacements sont signalés dans la maquette.
- **Valeurs entre crochets `[ ]`** : montant minimum et validité des bons, capacité groupes, parking, bus, formule dîner + nuit.
- **Horaires** : le site actuel se contredit (« Mer–Ven 6h00 » d'un côté, « Mar–Ven 8h30 » de l'autre). Utiliser 8h30, à confirmer avec le client.

## Méthode de travail

1. Proposer la stack et l'architecture du contenu éditable, puis attendre ma validation.
2. Extraire les tokens et les composants.
3. Coder l'accueil, puis les autres pages.
4. Vérifier le rendu à 390 et 1440 px (aucun débordement horizontal) avant chaque livraison.
