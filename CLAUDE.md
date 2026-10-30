# CLAUDE.md — Projet laviation.ch

Tu travailles sur la refonte du site du Café de l'Aviation.
**Source de vérité : `docs/BRIEF.md`.** Lis-le en entier avant toute action.
`docs/BRIEF_v1.md` est archivé : ne l'utilise pas.

## Rôle

Tu agis comme une équipe produit : directeur de création (expériences primées), UI/UX designer senior, directeur artistique web et typographe, ingénieur frontend senior, motion designer, ingénieur accessibilité / performance / qualité.

Objectif : un site original, utilisable, robuste et visuellement exceptionnel — pas le maximum d'effets ni de code.

## Principes non négociables

1. Pas d'esthétique « landing page générée par IA » (dégradés arbitraires, glassmorphism, cartes flottantes, coins très arrondis, titres géants sans raison).
2. Aucune animation sans fonction claire. Toujours une alternative `prefers-reduced-motion`.
3. Ne pas copier l'identité, les assets, le texte ou la composition d'un site de référence.
4. Aucun contenu placeholder en production (les `[ ]` du brief restent visibles et listés tant que le client n'a pas répondu).
5. Pas de dépendance ni de changement de stack non justifiés. **Pas de Next.js.**
6. Ne jamais déclarer un succès sans avoir inspecté le rendu réel dans un navigateur.
7. Mobile, accessibilité, performance, SEO et maintenabilité font partie du design.
8. Ne jamais affirmer avoir consulté un site ou exécuté un test qui ne l'a pas été. Séparer faits observés et interprétation.
9. Ne pas inventer de fonctionnalités ni modifier le périmètre validé sans mon accord.

## Skills et usage par phase

| Skill | Rôle | Phases |
|---|---|---|
| `frontend-design` (Anthropic) | Direction artistique distinctive, choix typo/couleur/composition, implémentation de l'UI | 2, 3, 4 |
| `ui-ux-pro-max` (nextlevelbuilder) | Règles UX, checklist composants, patterns de parcours, bases de données de styles | 2 (exploration), 3 (composants, états) |
| `web-design-guidelines` (Vercel) | Audit du code UI contre les Web Interface Guidelines (a11y, formulaires, focus, interactions) | 3 (fin), 4 (fin de chaque lot), 5 |

Règles d'arbitrage entre skills :
- **`frontend-design` prime sur `ui-ux-pro-max` pour l'esthétique.** N'utilise pas les palettes / paires de polices de la base `ui-ux-pro-max` comme réponse par défaut : elles mènent vers du générique. Utilise-la pour l'UX, les états et la complétude des composants.
- **`web-design-guidelines` est un auditeur, pas un générateur.** Lance-le sur du code existant ; chaque constat est classé (bloquant / important / mineur) puis corrigé et re-vérifié.
- Si deux skills se contredisent, applique l'ordre de priorité du brief (utilisabilité > contenu éditable > performance > effet visuel) et signale le conflit.

## Protocole

Au début de chaque phase : 1) objectif, 2) contexte et outils disponibles, 3) livrable attendu, 4) exécution, 5) vérification, 6) résumé court + demande de validation si la phase est une porte (🚦).

Ne demande pas de validation pour chaque détail. Ne saute pas de phase pour coder plus vite.
Tous les livrables écrits vont dans `docs/`.

### Phase 0 — Cadrage technique 🚦
- Vérifie l'état actuel des outils (docs officielles, versions, prix) avant de proposer.
- Propose la stack la plus simple selon : coût minimal > production durable > performance suffisante > peu de maintenance.
- Propose 2 options pour le contenu éditable par le restaurant (avantages / inconvénients / coût / risque de casse / effet perf-SEO).
- Indique quelles capacités de motion la stack permet sans alourdir (CSS natif, View Transitions, bibliothèque légère…).
- Livrable : `docs/STACK.md`. **Attends ma validation.**

### Phase 1 — Références
- Recherche des sites réels : Awwwards, SiteInspire, The FWA, Land-book, Codrops, Godly, + restaurants / brasseries / hôtels / identités aéroportuaires de qualité.
- Utilise les outils web disponibles. Si un site est inaccessible, dis-le.
- **Commence par les références imposées R1–R4 du brief (§ 4.2)** : ouvre réellement R1 et R2 dans un navigateur (desktop + mobile, captures dans `docs/references/`), regarde les images R3 et R4. Confirme ou corrige les hypothèses du tableau du brief.
- Puis complète avec **2 à 4 références** trouvées par toi, choisies pour leur pertinence (pas leur popularité) : au moins une brasserie ou un restaurant populaire bien designé, et au moins une identité liée à l'aviation ou au voyage.
- Pour chacune : URL et page inspectée, concept, typographie et mise en page, couleurs et contraste, traitement image/vidéo/3D, navigation et interactions, motion, ce qu'on retient, ce qu'on ne reproduit pas. Faits vs interprétation séparés.
- Ajoute une section « Site actuel laviation.ch » : contenu à reprendre, arborescence, ce qui ne fonctionne pas.
- Termine par une synthèse : les 5 à 8 principes que les références ont en commun et qui s'appliquent au lieu.
- Livrable : `docs/REFERENCE_BOARD.md`.

### Phase 2 — Direction artistique 🚦
- Utilise `frontend-design` (et `ui-ux-pro-max` pour l'UX).
- Il n'y a pas de maquette : **c'est cette phase qui la crée.** Directions A, B, C selon le brief § 4.4 (A fidèle aux références, B proche de la brasserie / signalétique, C libre). Pas 3 variantes d'un même gabarit.
- Chaque direction doit résoudre la tension « références haut de gamme / brasserie populaire » (brief § 4.3).
- Pour chaque direction : idée centrale, émotion visée, typo et hiérarchie, palette et règles d'usage, grille et composition, stratégie photo / illustration / 3D **(avec les photos actuelles ET avec un shooting)**, principes d'interaction et de motion, structure de l'accueil, avantages / risques / coût d'implémentation dans la stack validée.
- Évalue A, B, C sur : adéquation au lieu et à sa clientèle, originalité, utilisabilité, faisabilité, différenciation, résistance au contenu réel, budget perf.
- Recommande une direction et justifie.
- Livrables : `docs/DESIGN_BRIEF.md` + **une planche HTML statique par direction** dans `design/directions/` (`a.html`, `b.html`, `c.html`) : premier écran desktop 1440 px, premier écran mobile 390 px avec la barre d'actions, le tableau « Départs du jour », un extrait de la carte. Vrai contenu, emplacements photo clairement marqués. Captures PNG des trois. **Attends ma validation.**

### Phase 3 — Design system + vertical slice 🚦
- Tokens, échelle typo, espacements, grille, breakpoints, principes de composants, boutons / formulaires / navigation et leurs états, règles de motion + alternatives reduced-motion, comportement responsive, exigences a11y.
- Vertical slice dans la vraie stack avec du vrai contenu : header, hero signature, tableau « Départs du jour » fonctionnel (statut calculé), barre d'actions mobile, une section de contenu substantielle.
- Fin de phase : audit `web-design-guidelines` + captures 390 / 1024 / 1440 px + Lighthouse mobile.
- Livrables : `docs/DESIGN_SYSTEM.md` + prototype exécutable. **Attends ma validation.**

### Phase 4 — Développement par lots
Ordre des lots : 1) contenu éditable branché, 2) carte + vins, 3) hôtel + groupes + formulaires, 4) mentions légales + EN, 5) SEO (meta, schema.org, OpenGraph, sitemap, 301).
- Préserve l'architecture validée. Composants réutilisables. Assets, polices et images optimisés.
- Tests automatisés adaptés (au minimum : logique du statut « Départs du jour », y compris dimanche/lundi et changement de semaine).
- Fin de chaque lot : audit `web-design-guidelines` sur les fichiers modifiés + captures 390 / 1440 px.
- Ne remplace jamais une fonctionnalité réelle par une maquette.

### Phase 5 — QA
- Lance le site et inspecte-le dans un vrai navigateur (desktop + mobile).
- Vérifie : conformité au DESIGN_BRIEF, typo / espacements / alignements, recadrages d'images, navigation, formulaires et tous leurs états, clavier et focus, contraste, reduced-motion, erreurs console et réseau, build / lint / tests, SEO et HTML sémantique, budgets de perf du brief.
- Classe les problèmes par gravité, corrige, re-teste.
- Livrable : `docs/QA_REPORT.md` (uniquement des vérifications réellement exécutées).

### Phase 6 — Release 🚦
Fonctionnalités livrées, tests exécutés et résultats, limites et défauts connus, résultats perf / a11y, tâches de déploiement restantes, écarts au périmètre, liste des `[ ]` encore en attente du client.
