# DESIGN_BRIEF — Phase 2 🚦

**Décision du 30.10.2026 : direction B, avec le hublot de A pour les photos et le caviardage de C pour la sauce.**

**Correction après test de la tranche :** B seule perdait le restaurant. Le rouge des nappes et une table illustrée avec la Caravelle ont été ajoutés (voir `docs/DESIGN_SYSTEM.md`). Le reste de ce document décrit les planches d'origine.

| Direction | Planche | Bureau | Mobile |
|---|---|---|---|
| A, Cabine 1959 | [a.html](../design/directions/a.html) | [capture](../design/directions/captures/a-1440-premier-ecran.png) | [capture](../design/directions/captures/a-390-premier-ecran.png) |
| B, Salle des départs | [b.html](../design/directions/b.html) | [capture](../design/directions/captures/b-1440-premier-ecran.png) | [capture](../design/directions/captures/b-390-premier-ecran.png) |
| C, Dossier 1959 | [c.html](../design/directions/c.html) | [capture](../design/directions/captures/c-1440-premier-ecran.png) | [capture](../design/directions/captures/c-390-premier-ecran.png) |

Pages complètes : fichiers `*-complet.png` du dossier `design/directions/captures/`.

**Le fait qui nourrit tout.** La Caravelle a pris ses premiers passagers payants le 26 avril 1959, et ses fenêtres en triangle arrondi étaient sa marque la plus reconnaissable ([source](https://en.wikipedia.org/wiki/Sud_Aviation_Caravelle)). La sauce date aussi de 1959, selon le restaurant. **Le lien entre les deux n'est pas établi** : le site ne l'affirme pas, il laisse le lecteur le faire.

**Ce que les planches montrent :** de vrais textes et prix, un statut figé au vendredi 30 octobre 2026, la barre d'actions sur mobile. Ce ne sont pas des pages finales : Astro, le Sheet et le calcul du statut arrivent en phase 3.

## Recommandation

**Je recommande B comme base, avec deux emprunts :**
- le **hublot de A** comme forme unique des photos, quand il y en aura ;
- le **caviardage de C** comme moment signature de la page sur la sauce.

B est la seule direction qui répond à l'habitué dès le premier écran : le plat du jour et le téléphone y sont sans défilement sur le bureau, et le tableau commence dès le premier écran sur mobile. C'est aussi celle qui ressemble le plus à une brasserie, et aucune de ses qualités ne dépend d'une photo.

**Pour le démarchage :** A impressionnera probablement plus au premier regard. Si l'objectif est seulement de décrocher un rendez-vous, c'est un argument réel pour A. Mais le jour où un habitué s'en sert, B est plus juste. Je préfère te donner une démo qui tiendra après la signature.

## Évaluation

Notes de 1 à 5, **mon jugement**, sans test auprès de clients.

| Critère | A | B | C |
|---|---|---|---|
| Adéquation au lieu et à sa clientèle | 3 | 5 | 4 |
| Originalité | 4 | 4 | 5 |
| Utilisabilité | 4 | 5 | 3 |
| Faisabilité | 4 | 5 | 5 |
| Différenciation face aux restaurants de Genève | 4 | 5 | 5 |
| Résistance au contenu réel | 3 | 5 | 4 |
| Budget de performance | 5 | 4 | 5 |
| **Total sur 35** | **27** | **33** | **31** |

| Poids mesuré | A | B | C |
|---|---|---|---|
| Polices | 39 Ko | 93 Ko | 37 Ko |
| HTML et CSS gzip | 3,7 Ko | 3,8 Ko | 3,5 Ko |
| JavaScript gzip | 0 | 0,34 Ko | 0,27 Ko |

Lighthouse n'a pas été lancé : ce sera fait en phase 3 dans la vraie stack.

## A — Cabine 1959

**Idée centrale.** Le salon d'une cabine de 1959 : on regarde le lieu à travers le hublot de la Caravelle.

**Émotion visée.** La fierté d'un soir un peu spécial, sans intimidation.

**Comment elle résout la tension.** Le vert et le laiton restent du côté de la cabine et du salon de l'époque, un luxe accessible. Le ton reste simple, et les chiffres de la carte tiennent la place d'honneur.

**Typographie.** Oranienbaum, très grande, pour les titres et les prix. Jost pour le texte. Jost remplace le mono de R4 : un sans-serif géométrique est plus proche des compagnies aériennes de 1959, et moins vu.

**Palette.**
| Rôle | Valeur | Règle |
|---|---|---|
| Sapin | `#12352B` | Fond principal |
| Velours | `#0B241D` | Pied de page, barre mobile |
| Cuir | `#3B2114` | Section carte uniquement |
| Laiton | `#D4AE5A` | Prix, actions, filets. Jamais en grande surface |
| Ivoire | `#F4ECDC` | Texte sur fond sombre, section Départs |

Contrastes calculés : 11,4:1 ivoire sur sapin, 7,1:1 laiton sur cuir, 6,3:1 pour les jours passés.

**Grille et composition.** Sections pleine largeur aux fonds tranchés, comme R1. Titre sur toute la largeur. Listes à filets fins.

**Photo.**
- *Avec les photos actuelles :* la seule vraie photo tient dans le hublot, car il est petit. Le reste de la rangée reste vide, ce qui se voit.
- *Avec un shooting :* cinq hublots minimum. Fauteuils d'avion en lumière basse, sauce nappée en gros plan, entrecôte, terrasse, chambre, Cuvée. Lumière chaude, fonds sombres, aucun flash. Environ 12 images.

**Interaction et motion.** Le hublot s'ouvre une fois au chargement, sans JavaScript. Rien d'autre. Alternative reduced-motion : affiché directement.

**Accueil.** Titre et hublot, Départs, portions, vue du salon.

| Avantages | Risques | Coût |
|---|---|---|
| La plus belle au premier regard, signature unique et vraie | Peut faire fuir l'habitué de midi. Le plat du jour arrive après le premier écran. **Dépend le plus d'un shooting.** Construite d'après les descriptions de R3/R4, jamais vues | Faible : CSS et SVG |

## B — Salle des départs

**Idée centrale.** Le jaune de la sauce est aussi le jaune des panneaux d'aéroport. Le site se lit comme une signalétique : on regarde, on comprend, on y va.

**Émotion visée.** L'entrain d'une brasserie pleine à midi, et le plaisir de reconnaître un jeu.

**Comment elle résout la tension.** Elle ne cherche pas le haut de gamme. Le niveau vient de la rigueur : grille stricte, typographie forte, aucune fioriture.

**Typographie.** Big Shoulders Display en très grand, reprise du brief v1. Archivo pour le texte. **B612 Mono pour le tableau** : cette famille a été conçue pour les écrans de cockpit Airbus.

**Palette.**
| Rôle | Valeur | Règle |
|---|---|---|
| Sauce | `#FFC629` | Fond dominant, jamais de texte blanc dessus |
| Noir | `#000000` | Texte et panneaux |
| Blanc | `#FFFFFF` | Texte sur noir, sections calmes |
| Gris tableau | `#A9A9A9` | Informations secondaires sur noir |

Contrastes calculés : 13,4:1 noir sur sauce, 8,9:1 gris sur noir.

**Grille et composition.** Deux panneaux qui se touchent, sans marge décorative. Les cases de portions ont une **largeur proportionnelle au poids** : l'échelle est vraie, ce n'est pas un décor.

**Photo.**
- *Avec les photos actuelles :* aucune n'est nécessaire. C'est la force de cette direction.
- *Avec un shooting :* 6 à 8 images recadrées serré, en hublot : entrecôte vue du dessus, sauce, fauteuils, équipe en salle. Lumière dure de midi, style reportage, jamais de mise en scène.

**Interaction et motion.** Une fois au chargement, le statut du jour défile en lettres, comme un tableau à palettes. Coût : 0,34 Ko. Alternative reduced-motion : texte direct.

**Accueil.** Titre, trois panneaux et tableau sur le premier écran, puis la flotte, puis les entrées.

| Avantages | Risques | Coût |
|---|---|---|
| Parcours des habitués le plus court, lisible de loin, sans photo, très facile à décliner | Ton fort pour le soir et l'hôtel. Peut sembler bruyante à des clients plus âgés. Police B612 un peu froide : limitée au tableau | Faible. Polices les plus lourdes (93 Ko) à réduire en phase 3 |

## C — Dossier 1959

**Idée centrale.** La recette est un dossier classé. Le site assume le secret et en fait un jeu : on peut toucher les passages caviardés, ils répondent « Bien essayé. ».

**Émotion visée.** Le sourire, et l'envie de raconter la blague à table.

**Comment elle résout la tension.** Le document est modeste, mais précis. L'humour rend le chic inutile.

**Typographie.** Une seule famille, Courier Prime, du corps de texte au titre géant.

**Palette.**
| Rôle | Valeur | Règle |
|---|---|---|
| Page | `#F2F5F5` | Feuille |
| Calque | `#E3EAEC` | Fond alterné |
| Encre | `#1C2670` | Tout le texte, comme une épreuve bleue |
| Tampon | `#C21A1A` | Uniquement ce qui est tamponné : confidentiel, embarquement, Réserver |

Contrastes calculés : 12,3:1 encre sur page, 5,5:1 tampon sur page.

**Grille et composition.** Un document : onglets de classeur pour la navigation, champs à gauche, note en marge, annexes numérotées. Portions en barres, une barre pour 20 g.

**Photo.**
- *Avec les photos actuelles :* aucune n'est nécessaire.
- *Avec un shooting :* 6 images traitées en épreuves collées au dossier, avec une légende tapée. Lumière neutre, objets vus du dessus : sauce, assiette, set de table, fauteuil, clé de chambre, bouteille.

**Interaction et motion.** Les barres noires répondent au toucher et au clavier. Aucune animation automatique.

**Accueil.** Fiche du dossier, Annexe A avec les Départs, Annexe B avec les portions.

| Avantages | Risques | Coût |
|---|---|---|
| Le concept le plus singulier et le plus partageable, sans photo, le plus léger | La carte entière en Courier fatigue. L'idée peut lasser à la longue. Le plat du jour vient après le dossier. Couleur très différente de l'esprit brasserie | Faible |

## Ce qui reste à trancher dans tous les cas

- **Le logo.** Les planches utilisent le nom composé dans chaque police. Le logo bleu actuel n'est pas repris. Il faudra le garder, l'adapter ou le redessiner, avec l'accord du restaurant.
- **L'illustration du pilote.** Elle n'est pas utilisée : auteur inconnu, et elle montre Lindbergh, pas la Caravelle.
- **Les textes.** Ils sont écrits pour la démo et devront être validés par le restaurant. L'expression « Recette secrète » vient du brief.

## Vérifications faites

- Rendu inspecté à 1440 et 390 px sur captures, sans débordement horizontal à 1440, 1024, 390 et 360 px.
- Aucune erreur console ni réseau au chargement, toutes les polices locales chargées.
- Liens et boutons d'action d'au moins 44 px, hors nom du restaurant en en-tête (24 à 26 px), à corriger en phase 3.
- Clic testé sur une barre noire de C.

**Non vérifié :** lecteur d'écran, navigation clavier complète, contrôle du mode reduced-motion, vrai téléphone.
