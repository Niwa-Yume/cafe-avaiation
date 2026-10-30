# REFERENCE_BOARD — Phase 1

Inspections du 30.10.2026 dans de vrais navigateurs (Chromium piloté et navigateur intégré), à 1440 × 900 et 390 × 844. Captures dans `docs/references/`.

**Méthode.** Les polices, tailles, couleurs, bibliothèques et règles CSS sont lues dans le navigateur. Les ratios de contraste sont calculés sur les couleurs lues. Le poids vient des en-têtes `content-length` : c'est un ordre de grandeur, qui sous-estime les réponses sans cet en-tête.

**Limites.**
- R3 et R4 n'ont jamais pu être vues (voir plus bas).
- Les survols et animations au défilement ont été peu testés : les captures sont fixes.
- Aucun test `prefers-reduced-motion` réel n'a été fait. La présence d'une règle CSS ne prouve pas que l'alternative fonctionne.

## Vue d'ensemble

| Réf. | Site | Pourquoi | Statut |
|---|---|---|---|
| R1 | ochi.design | Imposée | Inspecté, bureau limité au premier écran |
| R2 | vita-travel.webflow.io | Imposée | Inspecté |
| R3, R4 | Planches Creatoom | Imposées | **Introuvables, non vues** |
| C1 | Bouillon Chartier | Brasserie populaire | Inspecté |
| C2 | Dishoom | Café populaire, récit et carte | Inspecté |
| C3 | Pizza Amici | Populaire et primé sur Awwwards | Inspecté |
| C4 | TWA Hotel | Identité aviation, époque Caravelle | Inspecté |

| Mesure | R1 | R2 | C1 | C2 | C3 | C4 |
|---|---|---|---|---|---|---|
| JS (Ko, mobile) | 517 | 111 | 743 | 180 | 473 | 739 |
| Page totale (Mo, mobile) | 37 | 1,6 | 2,8 | 8,4 | 3,9 | 9,1 |
| Règle reduced-motion | Non | Non | Oui | Oui | Non | Oui |
| Débordement horizontal | Non | Non | Non | Non | Non | Non |
| Lien `tel:` | Non | 1 | Non | Non | 1 | Non |

Aucune de ces pages ne tient notre budget de 100 Ko de JS gzip, R2 en étant la plus proche. **Le niveau visuel recherché n'exige pas ces poids**, et nous devrons faire mieux que toutes.

## R1 — ochi.design

**Page :** accueil. [Bureau](references/r1-ochi-desktop.jpg), [mobile](references/r1-ochi-mobile-hero.jpg), [fin de page](references/r1-ochi-mobile-fin.jpg).

### Faits
- **Concept :** agence de présentations. Bandeau Awwwards « Site of the Day » affiché.
- **Typographie :** FoundersGrotesk 600 en capitales, 130 px sur interligne 97,5 px au bureau, 64 px sur mobile. NeueMontreal pour le texte.
- **Couleurs :** `#F1F1F1`, `#212121`, vert `#004D43`, citron `#CDEA68`. Contraste 14,3:1 pour le texte, 7,3:1 pour vert sur citron.
- **Mise en page :** six sections de fond différent, certaines à coins arrondis, dont une longue de 6 325 px pour les projets.
- **Image :** vidéo, projets en pictogrammes dans le titre, deux grands yeux en fin de page mobile.
- **Navigation :** cinq liens, et une pastille « Start the project ».
- **Motion :** défilement détourné (classes `has-scroll-smooth`), 6 `@keyframes`, écran de chargement à pourcentage.

**Ce que j'ai constaté en l'utilisant :** l'écran de chargement a duré environ 40 secondes dans le navigateur intégré. La molette et Page Suivante simulées n'ont presque pas fait défiler la page, donc je n'ai pas vu la suite au bureau. Chromium piloté a reçu une erreur 403 au bureau, mais pas sur mobile.

### Hypothèse du brief
**Confirmée en partie.** La typo massive en capitales et les sections tranchées sont réelles. Mais le titre ne prend qu'environ la moitié de la largeur : il structure l'écran sans le remplir. Les interactions « franches et ludiques » n'ont été vues que par les yeux, à l'arrêt.

### Retenir
- Une très grande capitale condensée lue d'un coup, avec beaucoup de vide.
- Un seul objet inséré dans la ligne de titre, comme un mot de plus.
- Le changement brutal de couleur entre sections.

### Ne pas reproduire
- L'écran de chargement et le défilement détourné, contraires au brief.
- Les yeux, la composition et les couleurs : c'est leur identité.

## R2 — vita-travel.webflow.io

**Page :** accueil. [Bureau](references/r2-vita-desktop.jpg), [mobile](references/r2-vita-mobile.jpg), [carte du monde](references/r2-vita-desktop-carte.jpg).

### Faits
- **Concept :** modèle Webflow de séjours, « Vita Travels », avec des données d'exemple.
- **Typographie :** Inter uniquement, en très grand sur l'image (« Travel »). Aucun `<h1>` trouvé.
- **Couleurs :** teal très sombre `#091B20`, blanc. Contraste 17,7:1, et 7,5:1 pour le texte à 60 %.
- **Mise en page :** grille à filets fins, cellules ouvertes, chiffres et étiquettes.
- **Image :** grandes photos de paysage, portraits, carte du monde avec points lumineux.
- **Navigation :** barre à filets, menu hamburger sur mobile, bouton blanc très visible.
- **Motion :** GSAP et ScrollTrigger, jQuery, Webflow. Une seule `@keyframes`.

### Hypothèse du brief
**À corriger.** Ce n'est pas vraiment une narration éditoriale, mais un catalogue propre de séjours, avec prix, dates et filtres. Son intérêt est dans la **grille à filets** et la densité d'information, pas dans le récit.

### Retenir
- Le filet fin comme structure : il organise une information dense sans cartes.
- Le chiffre et l'étiquette côte à côte, très proches d'une fiche de vol.
- La carte avec points : une piste pour situer l'aéroport, à valider.

### Ne pas reproduire
- Le mot géant sur photo, qui exige une photo que nous n'avons pas.
- Le style de photo de banque d'images, et l'allure de modèle générique.

## R3 et R4 — Planches Creatoom

**Statut : non vues.** Les fichiers n'existent pas, tu ne les as pas, et une recherche sur « Creatoom Restaurant Branding » ne retrouve pas ces planches.

Seules subsistent les descriptions du brief : vert bouteille, velours, bruns chauds, or, serif condensé haut contraste, mono en capitales, listes numérotées à filets. **Je les traite comme une piste écrite, pas comme une référence observée.** Rien dans ce document n'en est tiré comme fait.

## C1 — Bouillon Chartier

**Pages :** accueil et [carte](https://www.bouillon-chartier.com/la-carte/). [Bureau](references/c1-chartier-desktop.jpg), [mobile](references/c1-chartier-mobile.jpg), [carte bureau](references/c1-chartier-carte-desktop.jpg), [carte mobile](references/c1-chartier-carte-mobile.jpg).

**Pourquoi lui :** brasserie populaire parisienne depuis 1896, soit exactement notre tension.

### Faits
- **Concept :** phrase unique en plein écran, « Il n'est de bouillon que Chartier », et la promesse « Offrir un repas digne à un prix modeste ».
- **Typographie :** une seule famille sur mesure, Textes-Chartier, en capitales grasses, 85 px au bureau et 39 px sur mobile.
- **Couleurs :** rouge `#C31729`, blanc, noir. Contraste 6:1.
- **Mise en page :** beaucoup de blanc, texte en colonne, liste de plats à deux colonnes et filets.
- **Image :** noir et blanc en masque à deux lobes, comme un 8. Texte courbé « La valse des danseurs ».
- **Navigation :** trois liens et le choix de langue, pastille noire « menu » sur mobile. Bandeau rouge pour les horaires exceptionnels.
- **Motion :** GSAP et ScrollTrigger, 99 `@keyframes`. Le premier écran n'était pas complet après 6 secondes, il l'était après 14.
- **Carte :** texte réel dans le HTML, avec une **fourchette de prix par catégorie** et un PDF. Mention « Cette carte est à titre indicatif ».

### Retenir
- **La preuve la plus forte pour nous :** une marque populaire peut être graphique sans devenir chic.
- La date et le fondateur dès le premier écran.
- La carte en deux colonnes à filets, calme et sans effet.
- Le bandeau rouge pour l'info du jour : très proche de notre besoin.
- Une forme signature, répétée partout.

### Ne pas reproduire
- Le masque à lobes, le rouge et la police : c'est leur marque.
- L'absence de prix individuels, nos clients les veulent.
- L'intro longue.

## C2 — Dishoom

**Pages :** accueil et [carte](https://www.dishoom.com/menu/all-day-main/). [Bureau](references/c2-dishoom-desktop.jpg), [tuiles](references/c2-dishoom-accueil-entrees.jpg), [carte bureau](references/c2-dishoom-carte-desktop.jpg), [carte mobile](references/c2-dishoom-carte-mobile.jpg).

**Pourquoi lui :** restaurants populaires dont le site vend un récit, sans perdre l'utilité.

### Faits
- **Concept :** un monde inventé autour des cafés de Bombay. Accroche « From Bombay with Love ».
- **Typographie :** cheltenhamBT pour les titres et le texte, gill-sans-nova en capitales espacées pour les étiquettes.
- **Couleurs :** crème `#F0ECE0`, noir, gris `#353839`. Contraste 10:1.
- **Mise en page :** cadres à double filet, légendes « ABOVE: » comme dans un journal.
- **Image :** vraies photos de lieu et de plats, très incarnées.
- **Navigation :** bouton « Book a table » toujours visible, trois tuiles d'entrée : Menus, Reservations, Store.
- **Motion :** vidéo en ouverture, et un bouton audio « Listen in ». 21 `@keyframes`.
- **Carte :** catégories en accordéon sur mobile, filtre alimentaire fixe, chaque plat avec une phrase écrite comme un conteur.

### Retenir
- La carte comme lieu d'écriture : une phrase avec une voix vaut une photo.
- L'accordéon mobile, qui garde une longue carte navigable.
- Les trois portes d'entrée, directes et immédiatement compréhensibles.
- Le cadre et la légende comme objets imprimés.

### Ne pas reproduire
- Le poids (319 requêtes) et la vidéo d'ouverture.
- Le récit inventé : notre histoire de 1950 est vraie, inutile d'en fabriquer une.
- L'allure Bombay et le double filet tels quels.

## C3 — Pizza Amici

**Page :** accueil. [Bureau](references/c3-amici-desktop.jpg), [mobile](references/c3-amici-mobile.jpg), [bandeaux](references/c3-amici-desktop-bandeaux.jpg). Trouvé sur Awwwards, Honorable Mention.

**Pourquoi lui :** la preuve qu'un sujet populaire obtient une distinction Awwwards sans aucun luxe.

### Faits
- **Concept :** foodtrucks de pizza, dont l'équipe est le héros de la page.
- **Typographie :** salo-variable condensée, Azeret Mono pour le texte, Awesome Serif, et une écriture manuscrite La Belle Aurore. Quatre familles.
- **Couleurs :** marine `#0F2C56`, crème `#F2EDE9`, ciel `#C0DEEE`, brun `#4F3C2C`, moutarde. Contrastes 11,9:1 et 9,9:1.
- **Mise en page :** objets imprimés posés de travers : tickets, polaroïds, étiquettes hexagonales, bandeaux, frises en damier.
- **Image :** vraies photos de l'équipe, très joyeuses.
- **Navigation :** logo et pastilles Boeken / Menu sur mobile, barre de chiffres tout en haut.
- **Motion :** Lenis, GSAP, ScrollTrigger, Webflow, et des règles de View Transitions. Pas de reduced-motion. Un écran de marque est apparu après le refus des cookies.
- **Lisibilité :** texte courant à 12 px au bureau et moins de 10 px sur mobile.

### Retenir
- **Les fiches techniques avec de gros chiffres** : « 275 pizzas par heure ». C'est exactement notre sujet avec 180 g, 260 g, 380 g, 500 g.
- La chaleur par l'imprimé, sans aucune photo de studio léchée.
- La barre de preuve tout en haut (avis, nombre de clients).

### Ne pas reproduire
- Le texte minuscule, contraire à nos exigences.
- Le désordre d'objets de travers et les quatre familles : c'est trop chargé pour notre carte.
- Leur damier, leurs tickets et leurs couleurs.

## C4 — TWA Hotel

**Page :** accueil. [Bureau](references/c4-twa-desktop.jpg), [mobile](references/c4-twa-mobile.jpg), [grille avec tableau](references/c4-twa-grille-tableau.jpg).

**Pourquoi lui :** seule référence directe à l'âge d'or de l'aviation, en 1962, la même époque que la Caravelle.

### Faits
- **Concept :** hôtel dans le terminal TWA de 1962 à JFK.
- **Typographie :** Flight Center Gothic, grasse italique, et Neutraface. Titres en bandeau rouge incliné.
- **Couleurs :** rouge `#D00A2C` et `#CC3333`, blanc, gris bleuté, or. Contraste 5,6:1.
- **Image :** vraies photos du lieu et d'objets, dont une photo de **vrai tableau à palettes**.
- **Navigation :** colonne latérale d'une quinzaine d'entrées au bureau, bouton « Book now » en forme d'étiquette, très présent.
- **Motion :** carrousel, jQuery, 13 `@keyframes`.
- **Ton :** humour et jeux de mots : « Swim & Spot! », « Have a Doggone Good Time ». Le champ e-mail dit « Fly with us! ».

### Retenir
- **Le ton.** La nostalgie aviation passe par la joie et l'humour, pas par la sépia.
- Le vocabulaire du voyage appliqué à tout, y compris aux formulaires.
- La fierté du vrai objet, ici une vraie Constellation.
- L'étiquette bagage comme forme de bouton.

### Ne pas reproduire
- La colonne de navigation surchargée et la grille de cartes répétitive.
- Le carrousel en premier écran.
- Le logo, les couleurs et l'identité TWA.

## Références écartées

| Site | Raison |
|---|---|
| [Caffè Gilli](https://www.caffegilli.com/en) | Café florentin de 1733, Honorable Mention. Beau, mais trop luxe pour nous |
| [Le Saint Georges](https://lesaintgeorges.ch/) | Hôtel-restaurant suisse, nominé Awwwards. Élégant et classique, 112 Mo au bureau |
| [Balthazar](https://balthazarny.com/) | Brasserie célèbre, site trop daté pour servir de modèle |
| Relais de l'Entrecôte | Adresse testée en erreur, site non vu |
| Café de Paris, Genève | Certificat invalide sur l'adresse testée, site non vu. À reprendre : c'est le concurrent direct |

**Galeries :** Awwwards a fonctionné et a fourni Pizza Amici, Gilli et Saint Georges. Land-book ne montre presque que des modèles à vendre. La page SiteInspire testée n'existait pas, Godly redirige vers une autre galerie, et FWA n'a rien donné d'utile. **Codrops n'a pas été consulté.**

## Site actuel laviation.ch

Inspecté à 1440 et 390 px. [Bureau](references/actuel-desktop.jpg), [mobile](references/actuel-mobile.jpg), [fenêtre parking](references/actuel-popup-parking.jpg). Contenu complet dans `docs/CONTENU.md`.

### Arborescence
Accueil (carte et plats du jour en une seule page), Vins, Hôtel, en français et en anglais.

### À reprendre
Toute la carte, les vins, l'hôtel, les plats du jour, le téléphone, l'info parking, et la mention répétée « Réservations uniquement par téléphone ».

### Ce qui ne fonctionne pas
| Problème | Constat |
|---|---|
| **Fenêtre parking** | Une image plein écran recouvre la page à l'ouverture, à chaque visite fraîche testée. Son texte n'est pas du texte |
| Message du premier écran | Le plat du jour est loin, et rien ne dit « entrecôte » ni « 1950 » |
| Structure | Aucun `<h1>` trouvé |
| Poids | Environ 3,4 Mo de JS, et jusqu'à 13 Mo sur mobile |
| Horaires | Deux versions affichées sur la même page |
| Version anglaise | Périmée |
| Mouvement | Pas de règle reduced-motion |
| Photos | Une seule vraie photo, plus des images de banque |

### Ce qui fonctionne
Les liens `tel:` sont présents, la page ne déborde pas, et la carte est du vrai texte lisible.

## Synthèse : 8 principes pour le lieu

Observés dans plusieurs références. Leur application est mon interprétation.

1. **Une phrase vraie, en très grand.** Chartier et Dishoom s'identifient en une ligne. Pour nous, une seule phrase venue du lieu : la Caravelle, 1959.
2. **Le chiffre réel devient le décor.** Amici, R2 et Chartier le font. Nous avons 180 g, 260 g, 380 g, 500 g, 1950, 1959, 11 chambres, CHF 22.– : de vraies données, pas de la décoration.
3. **La typographie tient quand la photo manque.** R1, Chartier et Amici le prouvent. C'est vital, car il n'y a qu'une vraie photo du lieu.
4. **Une seule signature graphique, répétée.** Lobes chez Chartier, double filet chez Dishoom, étiquette chez TWA. Il nous en faut une, inventée pour le lieu, sans copier la leur.
5. **La carte reste calme.** Chartier et Dishoom suppriment tout effet sur la carte. Colonnes, filets, prix alignés.
6. **L'action reste visible.** Book a table, Book now, Boeken. Pour nous, le téléphone en permanence, avec les plats du jour à un geste.
7. **Le ton est joyeux.** TWA et Amici ont de l'humour. C'est ce qui évite à la fois le luxe froid et le kitsch.
8. **La légèreté fait partie du design.** Écran d'attente de 40 secondes chez R1, 37 Mo sur mobile : ce sont les contre-exemples. Notre avantage peut être un site qui s'ouvre immédiatement.

**Réponse à la tension du brief :** Chartier et Amici montrent qu'un lieu populaire peut atteindre ce niveau sans emprunter les codes du luxe. La piste « bar à vin vert et velours » de R3/R4 est la plus risquée, d'autant que nous ne l'avons jamais vue et qu'elle dépend d'une photo de studio.
