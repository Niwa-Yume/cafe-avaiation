# Brief v2 — Refonte du site Café de l'Aviation (laviation.ch)

> Ce brief est la **source de vérité** du projet. Il remplace `BRIEF_v1.md`.
> Le *périmètre* (pages, fonctionnalités, contraintes) est **validé**. Ne rien ajouter ni retirer sans mon accord.
> La *direction artistique* est **ouverte** : la maquette existante est un point de départ, pas une obligation (voir § 4).

---

## 1. Ambition

Un site de restaurant **au niveau d'un Awwwards (Honorable Mention minimum, viser SOTD)**, mais qui reste :
- utilisable en 10 secondes par quelqu'un qui veut juste **appeler pour réserver** ou **voir le plat du jour** ;
- **modifiable par le restaurant chaque semaine sans développeur** ;
- rapide sur un téléphone moyen en 4G, devant l'aéroport.

Si un effet visuel entre en conflit avec ces trois points, **l'effet perd**.

Ce qui rend le lieu unique (la matière du concept) :
- La sauce **Caravelle**, recette secrète → registre « confidentiel », tampon, dossier classé.
- Les portions aux noms d'avions : **Caravelle 180 g, Super Caravelle 260 g, A380 380 g, A500 500 g** → l'échelle, le chiffre, la fiche technique.
- La proximité de **Genève Aéroport** → tableau des départs, carte d'embarquement, signalétique aéroportuaire, typographie de piste.
- L'**Hôtel de l'Aviation** (11 chambres) et la **Cuvée de l'Aviation** (Clos du Château, Choully).

Ton recherché : chaleureux et populaire (brasserie de quartier) **ET** précis et graphique (aviation). Pas de luxe froid, pas de kitsch « vintage aviation » avec hélices et nuages.

## 2. Contexte

- Café-restaurant à Vernier (GE), à côté de l'aéroport.
- Site actuel sur Duda. Le restaurant y met à jour **lui-même** les plats du jour chaque semaine.
- Réservations : **téléphone uniquement** (politique du restaurant, à respecter).
- Contenu réel à reprendre : https://www.laviation.ch/ (carte), https://www.laviation.ch/vins, https://www.laviation.ch/hotel

## 3. Utilisateurs et parcours prioritaires

| Utilisateur | Ce qu'il veut | Parcours à optimiser |
|---|---|---|
| Habitué / travailleur du coin | Plat du jour, horaires | Accueil → tableau « Départs du jour » → appel |
| Visiteur qui a entendu parler de l'entrecôte | Comprendre la promesse, réserver | Accueil → Caravelle / portions → `tel:` |
| Voyageur / client hôtel | Chambre près de l'aéroport | Hôtel → formulaire de demande |
| Organisateur de groupe | Capacité, formule, contact | Groupes → formulaire |
| Offrir un cadeau | Bon cadeau | Bons cadeaux (phase 2) |

Chaque parcours doit aboutir en **≤ 2 interactions** depuis l'accueil.

## 4. Point de départ : pas de maquette, des références

**Il n'existe pas de maquette.** La maquette est **produite par le projet** en phase 2 (planches HTML statiques, accueil desktop + mobile, une par direction). La direction validée devient la référence visuelle des phases 3 à 5.

### 4.1 Base de contenu : le site actuel
https://www.laviation.ch/ (+ `/vins`, `/hotel`, version EN) = **base de contenu et d'arborescence**, pas de design. On reprend les textes, la carte, les prix, les infos pratiques ; on jette la mise en page Duda.

La fiche Google du restaurant et son Google Photos complètent cette base (publications, photos). Seules les photos appartenant au restaurant sont utilisables : pas de photos déposées par des clients sans leur accord écrit.

### 4.2 Références imposées (fournies par moi)

| Réf. | Source | Ce que je veux en retenir (hypothèse à vérifier en phase 1) |
|---|---|---|
| R1 | https://ochi.design/ | Typographie massive en capitales comme élément de structure, sections pleine largeur tranchées, interactions franches et ludiques, rythme de scroll |
| R2 | https://vita-travel.webflow.io/ | Site de voyage / destination : narration par l'image, mise en page éditoriale — **à inspecter en phase 1** |
| R3 | `docs/references/creatoom-scenes.webp` | Planche « Restaurant Branding » Creatoom : vert bouteille profond, velours, bruns chauds, accents or/jaune, photographie mise en scène très dirigée (mains, rideaux, nature morte) |
| R4 | `docs/references/creatoom-ui.webp` | Même univers en UI : serif condensé haut contraste en très grand, labels en mono capitales espacées, listes numérotées à filets fins, grille éditoriale à traits fins, fond vert sombre + crème |

Ces références donnent **un niveau d'exigence et une ambiance**, pas un modèle à copier. Pas de reprise de leurs mises en page, textes, assets ni logos.

### 4.3 Tension à résoudre (obligatoire en phase 2)
Les références sont **éditoriales et haut de gamme** (bar à vin chic, agence). Le Café de l'Aviation est une **brasserie de quartier populaire** dont la star est une entrecôte-frites. Une DA qui copie R3/R4 telle quelle trahirait le lieu et ferait fuir les habitués.

Chaque direction doit dire **comment elle concilie les deux**. Piste possible (à explorer, pas imposée) : l'âge d'or de l'aviation à réaction — l'époque de la *Caravelle* (années 60) — où velours, bruns, laiton et étiquettes imprimées relèvent du salon d'attente et de la cabine, donc d'un luxe *accessible* et nostalgique plutôt que d'un luxe froid.

### 4.4 Directions attendues en phase 2
- **A** : la plus fidèle aux références R1–R4, adaptée au lieu.
- **B** : une direction qui s'en éloigne nettement, plus proche de la brasserie populaire et de la signalétique aéroportuaire.
- **C** : libre, mais réellement différente de A et B.

Ce qui est **fixe quelle que soit la direction** : le contenu, les noms (Caravelle, A380…), le statut calculé des « Départs du jour », la barre d'actions mobile (Réserver / Itinéraire / La carte), les contraintes d'accessibilité et de performance.
Ce qui est **ouvert** : palette, typographies, grille, motion, traitement photo, composition de l'accueil, forme du bon cadeau.

`docs/BRIEF_v1.md` contient une palette et des typos proposées auparavant (navy / jaune sauce, Big Shoulders, Archivo, IBM Plex Mono) : c'est **une option parmi d'autres**, utilisable pour B si elle sert.

Quelle que soit la direction : **polices hébergées localement** (pas de CDN Google — nLPD), licences compatibles usage web commercial.

## 5. Contraintes techniques

- Critères, dans cet ordre : **coût minimal, mise en production durable, performance suffisante, peu de maintenance.**
- **Pas de Next.js.**
- Avant de coder, propose la stack la plus simple qui respecte ces critères **en vérifiant l'état actuel des outils** (versions, prix, offres gratuites) plutôt qu'en supposant. Explique les choix et attends ma validation.
- La stack doit supporter la direction retenue : si une direction exige du WebGL / 3D lourd, son coût (poids, maintenance, perf mobile) doit apparaître dans son évaluation.
- Pas de dépendance ajoutée sans justification écrite.

### Budgets de qualité (critères d'acceptation mesurables)

| Critère | Cible |
|---|---|
| Lighthouse mobile — Performance | ≥ 90 |
| Lighthouse — Accessibilité, Best Practices, SEO | ≥ 95 |
| LCP mobile (4G simulée) | < 2,5 s |
| CLS | < 0,1 |
| JS envoyé sur l'accueil | < 100 Ko gzip (hors images) |
| Contraste | WCAG AA partout |
| Cibles tactiles | ≥ 44 × 44 px |
| `prefers-reduced-motion` | Toutes les animations ont une alternative |
| Débordement horizontal | Aucun à 390, 1024 et 1440 px |

## 6. Le point critique : contenu éditable par le restaurant

Les plats du jour (chaque semaine), les suggestions du moment, la carte et les prix doivent rester modifiables **par le restaurant, sans développeur et sans outil technique**. Sinon le projet échoue — même avec un design primé.

- Propose **2 options** avec avantages et inconvénients (ex. Google Sheet publiée, CMS léger), en tenant compte de : coût, simplicité pour un restaurateur, risque de casse, effet sur la performance et le SEO.
- Le design doit **résister au contenu réel** : noms de plats longs, semaine avec 3 plats au lieu de 5, prix manquant, champ vide. Prévoir ces états.
- Tableau « Départs du jour » : le statut se calcule selon la date.
  - Jour passé → « Parti »
  - Aujourd'hui → « Embarquement »
  - Jour à venir → « Prévu »
  - Pas de service le dimanche et le lundi.

## 7. Pages

1. **Accueil** (maquette produite en phase 2)
2. **Carte complète** : entrées, viandes, poissons, suggestions, menu enfants « Petits aviateurs », desserts, coupes glacées
3. **Vins**
4. **Hôtel**, avec formulaire de demande (dates, type de chambre, heure d'arrivée)
5. **Groupes & événements**, avec formulaire
6. **Bons cadeaux** : phase 2
7. **Mentions légales et confidentialité** (nLPD)
8. **Version EN** (le site actuel en a une)

Pages non maquettées : décliner le système visuel de la direction retenue. Chaque page doit avoir **un moment signature** cohérent avec le concept (ex. la carte des vins comme un manifeste de fret), pas seulement un gabarit répété.

## 8. Fonctionnalités

- **Réservation** : liens `tel:` partout + barre d'actions fixe sur mobile. Pas de réservation en ligne.
- **Formulaires** : groupes, hôtel, liste d'attente « sauce à emporter », contact.
  - **Envoi par WhatsApp uniquement** : le site prépare le message, le visiteur l'envoie depuis son WhatsApp. Pas d'email, pas de backend.
  - Téléphone toujours affiché en repli pour qui n'a pas WhatsApp.
  - La confidentialité (nLPD) mentionne le passage par WhatsApp.
  - États : vide, erreur de saisie, succès (WhatsApp ouvert).
- **Plat du jour sur WhatsApp** : un simple lien vers une chaîne WhatsApp (créée par le client).
- **Phase 2, bons cadeaux** : paiement en ligne (carte + TWINT), puis envoi du billet par email. Solution la moins coûteuse à maintenir (ex. lien de paiement hébergé).

## 9. SEO

- Title et meta description par page. Requêtes visées : « entrecôte sauce Genève », « restaurant aéroport Genève », « restaurant Vernier ».
- schema.org : `Restaurant` (avec `Menu`) et `Hotel`. OpenGraph et sitemap.
- **Redirections 301** des anciennes URLs (`/vins`, `/hotel`, `/en-gb/...`).
- Le contenu essentiel (carte, plats, horaires) doit être dans le HTML, **pas uniquement injecté en JS** après coup.

## 10. Hors périmètre / à fournir par le client

- **Photos** : ⚠️ Risque n° 1. L'univers de R3/R4 **repose entièrement sur une photographie mise en scène de studio** ; sans shooting, il est impossible à reproduire. Chaque direction doit indiquer :
  1. **comment elle tient avec les photos actuelles du restaurant** (ou sans photos : typographie, illustration, données) ;
  2. **ce qu'elle exige si un shooting a lieu** : liste de plans (entrecôte, sauce, salle, chambres, cuvée), cadrages, lumière, accessoires, nombre d'images.
  Ne jamais utiliser d'images de banque ou générées par IA présentées comme le vrai restaurant.
- **Valeurs entre crochets `[ ]`** : montant minimum et validité des bons, capacité groupes, parking, bus, formule dîner + nuit.
- **Horaires** : le site actuel se contredit (« Mer–Ven 6h00 » vs « Mar–Ven 8h30 »). Utiliser 8h30, à confirmer avec le client.

## 11. Méthode de travail

Le projet suit le protocole décrit dans `CLAUDE.md` (phases 0 à 6, avec validations obligatoires). Résumé :

| Phase | Livrable | Validation de ma part |
|---|---|---|
| 0. Cadrage technique | `docs/STACK.md` (stack + 2 options contenu éditable) | ✅ obligatoire |
| 1. Références | `docs/REFERENCE_BOARD.md` | — (je relis) |
| 2. Direction artistique | `docs/DESIGN_BRIEF.md` (A / B / C + recommandation) | ✅ obligatoire |
| 3. Design system + vertical slice | `docs/DESIGN_SYSTEM.md` + accueil fonctionnel | ✅ obligatoire |
| 4. Développement par lots | Pages, formulaires, contenu éditable, SEO | par lot |
| 5. QA | `docs/QA_REPORT.md` | — |
| 6. Release | Récapitulatif final | ✅ obligatoire |

Vérifier le rendu à 390 et 1440 px (aucun débordement horizontal) **avant chaque livraison**, avec captures d'écran.
