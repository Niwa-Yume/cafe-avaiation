# DESIGN_SYSTEM — Phase 3 🚦

Direction validée : **B, Salle des départs**, avec le hublot de A pour les photos et le caviardage de C pour la sauce.

**Révision après retour client :** la première version était lisible, mais on ne sentait plus le restaurant. L'accueil s'ouvre désormais sur une table vue du dessus, avec une Caravelle qui survole l'assiette. Le rouge des nappes de la salle rejoint la palette, et les portions deviennent des cartes d'embarquement.

| Skill | Usage dans cette phase |
|---|---|
| `frontend-design` | Plan, revue contre le générique, critique sur captures |
| `ui-ux-pro-max` | `--design-system` : rouge et or pour l'appétit, éviter images médiocres et horaires périmés. Règles UX sur l'alt, le mouvement limité à 1 ou 2 éléments, le survol. Police Playfair et schéma en entonnoir écartés, conformément au `CLAUDE.md` |
| `web-design-guidelines` | Audit, voir plus bas |

Prototype : `src/`. Lancement :

```bash
npm install
npm run dev
```

Tests : `npm test`. Captures : `design/slice/`. Page de contrôle du tableau : `/etats/`.

## Principes

1. **Restaurant d'abord, aviation ensuite.** On doit avoir faim avant de sourire de l'avion. Chaque idée d'aviation s'applique à un objet de table.
2. **Lisible de loin.** Le tableau et les prix se lisent comme un panneau d'aéroport.
3. **Les données sont vraies.** Les largeurs de la flotte suivent les grammes, le statut suit la date.
4. **Une seule signature par page.** L'accueil a le tableau et le caviardage. Le hublot ne sert qu'aux photos.
5. **Le téléphone reste à un geste.** Sur toute page, sur tout écran.

## Tokens

Source unique : `src/styles/global.css`.

### Couleurs

| Token | Valeur | Usage | Contraste |
|---|---|---|---|
| `--sauce` | `#FFC629` | Fond dominant, accents sur noir | Noir dessus 13,4:1 |
| `--nappe` | `#B3202A` | Nappe : premier écran, À bord, grand titre sur blanc | Blanc dessus 6,7:1. Sauce dessus 4,2:1, grands titres seulement |
| `--noir` | `#000` | Texte, panneaux, tableau | |
| `--blanc` | `#FFF` | Texte sur noir, sections de lecture | Noir dessus 21:1 |
| `--gris-filet` | `#2A2A2A` | Filets sur noir, survol | Décoratif |
| `--gris-tableau` | `#A9A9A9` | Texte secondaire sur noir | 8,9:1 |
| `--gris-texte` | `#3A3A3A` | Détails sur blanc | 11:1 environ |

**Règles :** jamais de texte blanc sur sauce (1,6:1). Jamais de nouvelle couleur sans raison écrite. Pas de dégradé. Les couleurs de la viande, des frites et de la salade restent dans l'illustration.

### Typographie

| Rôle | Police | Graisse |
|---|---|---|
| Titres, prix | Big Shoulders Display, capitales | 900 |
| Texte | Archivo | 400, 600 |
| Données du tableau | B612 Mono | 400, 700 |

Polices locales dans `public/fonts/` (92 Ko au total, licence OFL), jamais de CDN. Seule la police de titre est préchargée.

| Niveau | Taille |
|---|---|
| `h1` | `clamp(84px, 8.2vw, 150px)`, `22.4vw` sous 860 px |
| `h2` de section | `clamp(52px, 8.4vw, 124px)` |
| `h2` du tableau | `clamp(38px, 3.6vw, 54px)` |
| Texte | 18 px, interligne 1,45 |
| Détail | 16 px minimum |

### Espacements et grille

- `--gut` : `clamp(16px, 2.4vw, 32px)`, marge latérale. 16 px sur mobile.
- `--section` : `clamp(36px, 5vw, 64px)`, respiration verticale.
- Écart entre billets : 10 px.
- Premier écran au bureau : la table en haut, le tableau en bandeau dessous, les deux visibles sans défiler.
- Largeur de texte courant limitée à environ 64 caractères.

### Points de rupture

| Largeur | Comportement |
|---|---|
| Au-dessus de 860 px | Scène à côté du titre, tableau en colonnes, bouton Réserver, navigation en en-tête |
| 860 px et moins | Une colonne, tableau en lignes, barre d'actions fixe, billets empilés |

Accueil contrôlé à 1440, 1024 et 390 px.

## Composants

### En-tête
Nom, navigation, téléphone. Fond noir, 60 px. **Sous 860 px, la navigation disparaît** et la barre prend le relais. Un menu complet sera nécessaire quand les pages Vins, Hôtel et Groupes existeront (lot 2), avec `<details>` natif.

### Table
Illustration SVG sans texte, masquée aux lecteurs d'écran : nappe, assiette, entrecôte tranchée, sauce, frites, salade, et Caravelle vue de dessus avec ses deux réacteurs arrière. Aucun fichier image, donc aucun coût réseau. Elle ne prétend pas être une photo du plat réel.

### Tableau des départs
Liste ordonnée de jours, avec un `<time>` par plat. Colonnes au bureau, lignes sur mobile.

| État | Rendu |
|---|---|
| Parti | Texte gris clair |
| Embarquement | Bande jaune pleine largeur, statut plus grand |
| Prévu | Statut blanc |
| Semaine terminée ou périmée | Annonce « Les plats de la semaine arrivent mardi. » |
| Dimanche, lundi avec semaine publiée | Annonce « Fermé aujourd'hui. Premier départ mardi. » |
| Aucun plat | Annonce et invitation à appeler |
| Plat vide | Ligne ignorée |
| Sans JavaScript | Plats et jours visibles, sans statut |
| Nom très long | Retour à la ligne, aucune troncature |

La date de référence est toujours celle de **Genève**, pas celle de l'appareil.

### Bouton Réserver
Fond sauce, texte noir, numéro de téléphone visible dans le libellé. Masqué sur mobile, où la barre le remplace.

### Barre d'actions mobile
Réserver, Itinéraire, La carte. Hauteur 64 px plus la zone de sécurité. Réserver est en jaune : c'est l'action principale.

### Carte d'embarquement
Une par portion : avion, nom, souche perforée avec grammes et prix. La largeur est strictement proportionnelle aux grammes au bureau, et croissante sur mobile pour garder le nom lisible. L'avion grandit avec la portion. **Si le restaurant ajoute une portion, l'échelle suit toute seule.**

### Ligne de carte
Nom et détail à gauche, prix à droite. Un prix absent laisse simplement la ligne sans prix.

### Caviardage
Boutons natifs, utilisables au clavier. Le lecteur d'écran annonce la consigne, puis la réponse après activation. Réservé à la sauce : le répéter tuerait la blague.

### Hublot
Forme unique de toutes les photos : un triangle arrondi, repris de la Caravelle. Image optimisée en WebP, chargement différé sous le premier écran.

## États des interactions

| Élément | Repos | Survol | Actif | Focus clavier |
|---|---|---|---|---|
| Lien d'en-tête | Blanc | Sauce | | Contour 3 px |
| Bouton Réserver | Sauce | Blanc | Décalage de 1 px | Contour 3 px |
| Barre mobile | Noir, ou sauce pour Réserver | | Gris filet | Contour 3 px |
| Caviardage | Bloc sauce | Bloc blanc | Réponse encadrée | Contour blanc 3 px |

Pas d'état désactivé dans cette tranche.

## Formulaires WhatsApp (spécification du lot 3, non construits)

| État | Comportement |
|---|---|
| Vide | Libellés toujours visibles, pas de remplissage automatique du message |
| Erreur | Message sous le champ avec la correction attendue, focus sur la première erreur |
| Succès | WhatsApp s'ouvre, le site confirme et rappelle le téléphone |
| Sans WhatsApp ou sans JS | Téléphone visible à côté du bouton |

Le message reste une demande. Aucun formulaire de réservation de table.

## Motion

| Animation | Déclencheur | Durée | Reduced-motion |
|---|---|---|---|
| La Caravelle arrive sur la table | Chargement, une seule fois | 1,5 s, `transform` seulement | Avion déjà en place |
| Tableau à palettes sur le statut du jour | Chargement, une seule fois | Moins d'une seconde | Texte direct, contrôlé |
| Défilement doux vers les ancres | Clic | Navigateur | Désactivé par la règle CSS |

Aucune bibliothèque d'animation. Aucune animation au défilement. Toute nouvelle animation doit dire à quoi elle sert.

## Accessibilité

- Contraste AA minimum, cibles de 44 px minimum.
- Lien « Aller au contenu », titres hiérarchisés, `lang="fr"`.
- Contour de focus visible partout.
- La barre fixe ne recouvre pas l'élément focalisé (contrôlé à 390 px).

## Résultats de la tranche

Vérifications du 30.10.2026 sous Node 26.13.0, avec Astro 7.4.4.

### Lighthouse mobile (13.6, 4G simulée, Chromium Playwright, sur serveur local)

| Critère | Cible | Résultat |
|---|---|---|
| Performance | ≥ 90 | **100** |
| Accessibilité | ≥ 95 | **100** |
| Bonnes pratiques | ≥ 95 | **100** |
| SEO, démo avec `noindex` | ≥ 95 | 66, volontaire |
| SEO, même page sans `noindex` | ≥ 95 | **100** |
| LCP | < 2,5 s | **1,1 s** |
| CLS | < 0,1 | **0** |
| JS de l'accueil | < 100 Ko gzip | **0,7 Ko** |
| Poids total | | 156 Ko |

**Sur l'adresse en ligne `laviation-demo.vercel.app`, même jour :** performance 100, accessibilité 100, bonnes pratiques 100, SEO 66 à cause du `noindex` volontaire, LCP 0,8 s, CLS 0, 129 Ko.

### Tests

- `npm test` : 7 tests passent, dont dimanche, lundi, changement de semaine, semaine incomplète, fuseau de Genève.
- Navigateur : statuts corrects le mardi, le vendredi et le samedi, le lundi avec une semaine périmée, et depuis Tokyo et New York.
- Aucun débordement à 390, 1024 et 1440 px. Aucune erreur console ou réseau.
- Clavier : parcours complet à 390 px, focus visible, rien sous la barre fixe.
- Reduced-motion : statut affiché directement.

### Audit `web-design-guidelines`

| Gravité | Constat | État |
|---|---|---|
| Bloquant | Aucun | |
| Important | Barre fixe pouvant couvrir le focus | Corrigé, retesté |
| Important | Réponse du caviardage non annoncée | Corrigé, audit Lighthouse relancé |
| Important | Plat vide donnant une ligne cassée | Corrigé, vérifié sur `/etats/` |
| Important | Prix absent faisant échouer le build | Corrigé, non retesté sans prix |
| Mineur | Espaces insécables, retour à la ligne des titres, marques en `translate="no"`, réglages tactiles, `h1` de la page d'états | Corrigés |

Non applicable : la règle de capitales sur les titres anglais, et la deuxième personne, car le texte vient du restaurant.

**Après la révision :** relecture du nouveau code selon les mêmes règles, sans nouveau constat. Tests, états, clavier et Lighthouse ont été relancés sur cette version.

### Non vérifié

- Vrai téléphone et vrai lecteur d'écran (VoiceOver, TalkBack).
- Safari et Firefox : seul Chromium a été utilisé.
- Mode paysage sur téléphone à encoche.
- Lecture du Google Sheet : les données viennent encore de fichiers JSON (lot 1).

### Limites de la démo

- **Le texte d'« À bord » est à valider** par le restaurant : la terrasse et les fauteuils viennent des avis et photos Google.
- **Les dates sont fixes.** La semaine du 27 au 30 octobre sera « Partie » dès samedi. Avant de montrer la démo, il faudra mettre à jour `src/data/semaine.json`.
- Pages Vins, Hôtel, Groupes, version anglaise et page complète de la carte : phase 4.
