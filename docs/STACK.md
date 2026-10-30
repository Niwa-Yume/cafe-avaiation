# STACK — Cadrage technique (phase 0)

Vérifications faites le 30.10.2026. Statut : **révision 4, Vercel partout : gratuit pour la démo, Pro après contrat** (voir § 11).
Changements demandés après la première version : publication sur Vercel si possible, formulaires par WhatsApp sans e-mail, contenu repris de l'ancien site et de la présence Google du restaurant.

Légende : **[Observé]** lu dans une source officielle, une commande ou une mesure. **[Secondaire]** blog, comparatif ou site concurrent, à revérifier avant de s'y fier. **[Interprétation]** mon analyse. **[Non testé]** hypothèse à prouver avant d'en dépendre.

## 1. Recommandation en bref

| Besoin | Choix | Coût récurrent |
|---|---|---|
| Générateur de site | **Astro 7** en sortie 100 % statique | 0 |
| Hébergement | Démo : **Vercel gratuit** (`*.vercel.app`). Production : **Vercel Pro** après contrat (§ 3) | 0, puis **$20** |
| Contenu de départ | Site actuel, Instagram et médias du restaurant (`docs/CONTENU.md`) | 0 |
| Contenu éditable | **Google Sheet** + case « Publier » (option A, § 5) | 0 |
| Formulaires | **Formulaire local qui prépare un message WhatsApp**, sans serveur (§ 7) | 0 |
| Motion | **CSS natif** d'abord, bibliothèque seulement si la direction retenue la justifie | 0 |
| Bons cadeaux (phase 2) | **Stripe Payment Links**, à décider à ce moment-là | Commission par vente |

Le domaine continue d'être payé comme aujourd'hui. Le contenu réel est relevé dans `docs/CONTENU.md`.

### Mode démarchage : pas de client ni de contrat pour l'instant

Le projet est une démo spontanée pour convaincre le restaurant, sans accès à ses comptes.

| Sujet | Tant qu'il n'y a pas de contrat | À la signature |
|---|---|---|
| Objectif | S'arrêter à la fin de la **phase 3** : accueil réel et fonctionnel, à montrer | Phases 4 à 6 |
| Hébergement | Adresse gratuite `*.vercel.app` | Vercel Pro et domaine |
| Visibilité | Lien privé, `noindex`, mention « maquette non officielle » | Site officiel, indexé |
| Photos | La vraie photo du site actuel, le reste en emplacements marqués | Originaux du restaurant, shooting éventuel |
| WhatsApp | Le bouton ouvre un message de démonstration vers ton numéro | Numéro du restaurant |
| Google Sheet | Sur ton compte, avec les vrais plats copiés du site | Transfert au restaurant |

**Pourquoi la démo reste privée :** elle utilise le nom et le contenu d'un commerce réel sans son accord. Elle ne doit pas pouvoir passer pour le site officiel.

## 2. Ce qui existe déjà

### `design/archive/` [Observé]

| Fichier | Contenu | Réutilisable |
|---|---|---|
| `accueil.html` (48 Ko) | Accueil complet : tableau « Départs du jour », carte, chasse, cadeau, groupes | Le texte et le découpage des sections, comme idées |
| `mobile.html` (7 Ko) | Premier écran mobile et barre d'actions | L'idée de la barre |
| `bon-cadeau.html` (7 Ko) | Billet « carte d'embarquement » | Idée pour la phase 2 |

- Aucun JavaScript : les statuts « Parti » et « Embarquement » sont écrits en dur.
- Aucune image, aucun `@media`, aucune animation, aucune règle `prefers-reduced-motion`. Tout est en styles inline (298 attributs `style` sur l'accueil).
- Les polices viennent du CDN Google, ce que le brief interdit.
- Les valeurs `[50.–]`, `[12 mois]`, `[XX]` et `[24 h]` restent à fournir par le client.

**Conclusion :** rien à reprendre comme code. Ces fichiers servent de matière à idées.

### Site actuel [Observé]

- **Technique :** `www.laviation.ch` pointe vers un constructeur de sites (`s.multiscreensite.com`), sans intérêt pour la suite : on repart de zéro.
- **Domaine :** serveurs de noms et e-mail chez Infomaniak (`ns1/ns2.infomaniak.ch`, `mta-gw.infomaniak.ch`, SPF Infomaniak). Le registrar n'est pas confirmé.
- **URLs du sitemap :** `/`, `/vins`, `/hotel`, `/en-gb`, `/en-gb/vins`, `/en-gb/hotel`.
- **Sitemap défectueux :** les `hreflang` de l'accueil pointent vers `/créez-votre-propre-règle`. Page non ouverte.
- **Plats du jour :** quatre plats du mardi au vendredi (semaine du 27 octobre), avec un seul prix en titre (CHF 22.–).
- **Coquilles dans le contenu réel :** « Osso bucco », « san jus », « Filets migons ». Le design doit absorber du texte saisi vite, et rien ne sera corrigé automatiquement.
- **Horaires :** contradiction résolue par la publication Instagram du 7.10.2025 : mardi à vendredi 8h30–00h00, samedi 9h00–00h00, fermé dimanche et lundi. Détails dans `docs/CONTENU.md`.
- **Non inspecté :** `/en-gb` (accueil EN), et le HTML brut (je ne sais pas si les plats y sont rendus côté serveur).

### Fiche Google [Observé dans Google Maps, sans compte, en affichage limité]

- **Identité :** « Café Restaurant de l'Aviation », Chem. des Coquelicots 18, 1214 Vernier, 022 341 12 32. Note 4,4 pour 1 598 avis, 568 photos.
- **Vocabulaire des avis :** les filtres les plus cités sont *caravelle* (62), *entrecôte* (62), *service* (54) et *terrasse* (43). La terrasse n'apparaît pas dans le brief.
- **Le lieu lui-même :** les photos montrent de vrais fauteuils d'avion aux tables, des maquettes d'avions et des sets de table au logo. Matière de concept précieuse pour la phase 2. [Interprétation]
- **Lien erroné :** la fiche propose « Trouver une table » vers laviation.ch alors que la réservation se fait uniquement par téléphone. À corriger par le propriétaire.
- **Publications Google :** aucune visible dans cet affichage limité. Je ne peux pas dire si elles existent.
- **Droits :** la première photo de la galerie est créditée à une cliente, pas au restaurant, et Google précise que les images peuvent être soumises à des droits d'auteur.

## 3. Stack

### Astro 7 en statique

- **Version :** `astro` 7.4.4 sur npm. [Observé]
- **Prérequis :** Node ≥ 22.23.4. Le Node local est passé en **26.13.0 (LTS)** et le projet suit la dernière LTS via `.nvmrc`. [Observé]
- **Essai réel :** une page de test construite avec Astro 7.4.4 et Node 24 produit 104 octets de HTML et **zéro balise `<script>`**, données incluses. Build à refaire sous Node 26 en phase 3. [Observé]

**Pourquoi Astro** [Interprétation] : 8 pages en 2 langues rendent le HTML à la main intenable. Astro apporte en un seul outil les composants, le contenu dans le HTML (exigence SEO du brief § 9), l'optimisation d'images, le multilingue et la validation du contenu au build. Le JS n'est envoyé que là où on le demande, ce qui protège le budget de 100 Ko.

**Écartés :**

| Option | Raison |
|---|---|
| Next.js | Interdit par le brief |
| HTML à la main | Duplication sur 16 pages, contenu impossible à brancher proprement |
| Eleventy | Viable et plus sobre, mais il faudrait monter à la main l'image et le multilingue |

**Dépendances prévues :** `astro` en production. En développement seulement, `playwright` pour les captures et la QA (déjà prévu par `LANCEMENT.md`). Tests avec `node:test`, intégré à Node. Pas de framework UI, pas de Tailwind.

**Risque :** Astro sort des versions majeures régulièrement. Un site statique déjà en ligne ne casse pas pour autant : seuls les builds dépendent de la version fixée dans le dépôt, et rien n'oblige à monter de version.

### Hébergement : Vercel

| Étape | Plan | Coût |
|---|---|---|
| **Démo** | Vercel Hobby, adresse `*.vercel.app` | 0 |
| **Production, après contrat** | Vercel Pro, avec `laviation.ch` | $20/mois, $20 de crédit d'usage inclus [Observé] |

- **Déploiement :** chaque `git push` publie le site, et un deploy hook permet de publier depuis le Google Sheet. [Observé]
- **Domaine, au moment du contrat :** on change seulement les enregistrements du site chez Infomaniak (`A` pour `laviation.ch`, `CNAME` pour `www`). **Les serveurs de noms et les e-mails ne bougent pas.** [Observé]
- **Condition du plan gratuit :** Vercel réserve Hobby à un usage personnel non commercial, et sa définition du commercial inclut la promotion d'un service et le fait d'être payé pour créer le site. La démo y reste tolérable tant qu'elle est non rémunérée et privée [Interprétation]. **Le passage à Pro se fait avant tout paiement et toute mise en production.**

### Conservation des URLs

Je propose de **garder exactement les URLs existantes**, `/en-gb` compris : `/vins`, `/hotel`, `/en-gb/vins`, `/en-gb/hotel`. Ajout de `/carte`, `/groupes`, etc., et de leurs équivalents sous `/en-gb/`.

- **Avantage :** ces URLs ne bougent pas, donc aucun risque SEO et aucune redirection à maintenir.
- **Écart au brief :** il demande des 301 sur ces URLs. Il n'y en aura besoin que pour ce qui change réellement.
- **Inconvénient :** `/en-gb` est moins joli que `/en`. Le visiteur ne le remarque pas.

## 4. Principe du contenu

### Contenu de départ

| Source | Ce qu'on en tire | Accès |
|---|---|---|
| Site actuel | Textes, carte, vins, hôtel, prix, infos pratiques, photos du restaurant | Public, repris en phase 1 |
| Fiche Google | Vocabulaire des clients, photos publiées par le propriétaire, publications s'il y en a | **Besoin du compte propriétaire** |
| Google Photos du restaurant | Photos originales en pleine résolution | **Privé : le restaurant doit partager un album avec toi** |

**Règle pour les photos :** on n'utilise que celles du restaurant. Les photos déposées par des clients sur la fiche leur appartiennent : pas de reprise sans accord écrit de leur auteur. Je ne télécharge rien depuis la fiche publique. [Secondaire pour le droit, avis non juridique]

**Pourquoi pas les publications Google comme outil hebdomadaire :** une synchro automatique passe par l'API Business Profile, avec demande d'accès, approbation par Google, compte d'organisation et connexion du propriétaire. [Observé] Et une publication est un texte libre, sans jour ni statut exploitable pour le tableau « Départs du jour ». [Interprétation] Le Sheet reste donc plus simple.

### Publication

Le site reste statique : le contenu est lu **au build** et écrit dans le HTML. Le visiteur n'appelle jamais Google ni un CMS. La performance et le SEO sont donc identiques quelle que soit l'option.

**Protection contre la casse, valable pour les deux options :**
- Le contenu est validé au build. **Si la structure est cassée, le déploiement s'arrête et la version précédente reste en ligne.** Le site ne tombe jamais à cause d'une saisie.
- Seule la structure bloque (colonne supprimée, date illisible). Un prix ou un champ vide ne bloque pas : le design gère ces cas (brief § 6).
- Il faudra prévenir quelqu'un quand un build échoue, sinon le restaurant croira avoir publié. Mécanisme à prouver au lot 1. [Non testé]

## 5. Contenu éditable : les 2 options

### Option A — Google Sheet + case « Publier » (recommandée)

Un classeur avec les onglets *Semaine*, *Suggestions*, *Carte*, *Vins*. Colonnes FR et EN, listes déroulantes, en-têtes protégés.

```
Le restaurateur modifie le Sheet et coche « Publier »
  → Apps Script appelle le deploy hook Vercel
  → Astro lit le Sheet, valide, construit
  → Site à jour (quelques minutes)
```

- **Déclenchement :** une case à cocher plutôt qu'un menu, car les menus personnalisés n'apparaissent pas dans l'app mobile Sheets, à ma connaissance. [Non testé]
- **Trigger :** il doit être *installable*. Un `onEdit` simple ne peut pas appeler de service externe, et le trigger s'exécute avec le compte de celui qui l'a créé. [Observé]
- **Pas de publication automatique à chaque frappe :** le restaurant décide quand publier.
- **Lecture des données :** le script expose le contenu en JSON (web app Apps Script). Le CSV « publié sur le web » est le plan B : il peut avoir quelques minutes de retard. [Secondaire pour le retard, Non testé pour les deux]

### Option B — Pages CMS (CMS Git hébergé)

Interface web à formulaires sur `app.pagescms.org`. Le contenu vit dans des fichiers du dépôt GitHub, et chaque enregistrement déclenche le build.

- **Gratuit et open source (MIT), invitation par e-mail sans compte GitHub**, d'après son site. [Observé] Une ancienne note de version présentait l'invitation comme une fonction Pro, mais le site actuel dit 100 % gratuit. Vérifier en compte réel.
- **Sveltia CMS écarté** (`@sveltia/cms` 0.256.0, très actif) : il exige une connexion GitHub ou un jeton, ce qui n'est pas acceptable pour un restaurateur.

### Comparaison

| Critère | A — Google Sheet | B — Pages CMS |
|---|---|---|
| Coût | 0 | 0 |
| Prise en main | Tableur déjà connu [Interprétation] | Nouvel outil, mais formulaires guidés |
| Mise à jour de masse (tous les prix) | **Excellente** | Lente, fiche par fiche |
| Sur téléphone | Moyenne sur les longues listes, à tester | Interface responsive annoncée, à tester |
| Risque de casse par le restaurateur | Moyen : on peut écraser une colonne (atténué par la protection et la validation) | **Faible** : champs typés |
| Risque technique | Petit script à maintenir, trigger lié à un compte Google | Service tenu par un petit projet. Auto-hébergement possible mais lourd (PostgreSQL) |
| Si le service disparaît | Le restaurant garde ses données dans un tableur lisible | Le contenu reste dans le dépôt, il faut changer d'interface |
| Historique, retour arrière | Historique des versions Google | Historique Git complet |
| Perf et SEO | Identiques | Identiques |
| Délai de publication | Quelques minutes, plus l'action « Publier » | Quelques minutes après l'enregistrement |

**Recommandation : option A.** [Interprétation] Le risque principal n'est pas technique, c'est que le restaurant cesse de mettre à jour. Le tableur est l'outil qui lui demande le moins d'effort, et ses données restent à lui si tout le reste disparaît. La carte, avec ses dizaines de lignes et de prix, s'y prête bien.

**Ce qui ferait basculer vers B :** si la mise à jour se fait presque toujours sur téléphone. L'ancienne maquette dit « directement depuis son téléphone », mais j'ignore si c'est un fait. **À demander au restaurant.**

**Garde-fou :** avant de brancher tout le contenu, faire essayer le Sheet au restaurateur sur l'onglet *Semaine*, en début de lot 1.

## 6. « Départs du jour »

- **HTML :** les plats, jours et dates sont dans le HTML (SEO, et visibles sans JS).
- **Statut :** recalculé dans le navigateur par un script inline de moins de 1 Ko, sinon il deviendrait faux dès le lendemain d'un build. Sans JS, le tableau reste lisible, simplement sans statut.
- **Fuseau :** toujours **Europe/Zurich** via `Intl`, pas celui de l'appareil. Un voyageur en transit doit voir le même statut qu'un habitué.
- **Dates :** de vraies dates dans le Sheet, pas du texte libre.
- **Semaine périmée :** si toutes les dates sont passées, le tableau doit afficher un état prévu (à dessiner en phase 3), pas une rangée de « Parti ».
- **Tests :** `node:test` sur la logique, dont dimanche, lundi et changement de semaine.

## 7. Formulaires

**Décision : WhatsApp, pas d'e-mail, pas de serveur.**

Le visiteur remplit le formulaire sur le site. Le bouton « Envoyer sur WhatsApp » compose un message et ouvre un lien `wa.me/<numéro>?text=…`. Le visiteur relit et envoie depuis son propre WhatsApp.

| Besoin | Traitement |
|---|---|
| Hôtel | Formulaire (dates, type de chambre, heure d'arrivée), puis message WhatsApp préparé |
| Groupes | Formulaire (date, nombre de personnes, occasion), puis message WhatsApp préparé |
| Liste d'attente sauce | Bouton avec message prêt. Le restaurant suit la liste lui-même |
| Contact | Simple bouton WhatsApp et téléphone, sans formulaire |

**Conséquences** [Interprétation] :
- **Plus simple :** pas de serveur, pas de service d'e-mail, pas d'anti-spam. Le site ne reçoit ni ne stocke aucune donnée.
- **États du formulaire :** vide, erreur de saisie et succès (WhatsApp ouvert). Les états « envoi en cours » et « échec réseau » du brief disparaissent.
- **Confidentialité :** la case de consentement à l'e-mail n'a plus d'objet. La page de confidentialité doit indiquer que le message passe par WhatsApp (Meta). **Elle devrait être relue par quelqu'un de compétent en nLPD**, je ne fournis pas d'avis juridique.
- **Réservation de table :** elle reste uniquement par téléphone. Aucun formulaire de table n'est ajouté, et le message hôtel reste une *demande*.

**Limites à accepter :**
- Le visiteur sans WhatsApp ne peut pas envoyer : on affiche le téléphone juste à côté. Cela peut toucher des voyageurs étrangers pour l'hôtel.
- Sans JavaScript, le formulaire devient un lien WhatsApp vide et le téléphone.
- Le site ne sait pas si le message a vraiment été envoyé : seule l'ouverture de WhatsApp est connue.

**Il faut un numéro WhatsApp du restaurant.** Celui de la fiche (022 341 12 32) est un fixe. Son usage avec WhatsApp Business n'est pas vérifié. [Non testé]

## 8. Capacités de motion

Budget du brief : moins de 100 Ko de JS gzip sur l'accueil. Poids mesurés avec esbuild + `gzip -9`, import minimal. [Observé]

| Outil | Poids gzip | Usage | Support |
|---|---|---|---|
| CSS (transitions, `@keyframes`) | 0 | Base de tout, y compris un effet tableau à palettes | Universel |
| View Transitions entre pages | 0 | Passage de page en page | Chrome 126, Safari 18.2 [Secondaire]. Firefox à vérifier. Sinon navigation normale |
| Animations liées au scroll en CSS | 0 | Révélations, progression | Chrome 115, Safari 26. Firefox derrière un flag en juin 2026 [Secondaire]. Isolées avec `@supports` |
| Motion (`animate` + `scroll`) | 29,5 Ko | Séquences plus fines | Tous navigateurs |
| GSAP + ScrollTrigger | 45,3 Ko | Timelines complexes, gratuit pour tous [Observé] | Tous navigateurs |
| OGL | 14,0 Ko | WebGL léger | Tous navigateurs avec WebGL |
| three.js | **130,4 Ko** | 3D complète | **Dépasse seul le budget** |

**Règle :** CSS natif par défaut. Une bibliothèque n'entre que si une direction validée le justifie par écrit, et seulement sur la page qui en a besoin. Une direction 3D devra utiliser OGL ou un rendu pré-calculé, et chiffrer en plus le poids du modèle et son effet sur le LCP mobile. Chaque animation a son alternative `prefers-reduced-motion`.

## 9. Bons cadeaux (phase 2 du produit, rien à construire maintenant)

- **Stripe Payment Links** accepte TWINT, en CHF, jusqu'à CHF 5 000 par paiement. [Observé]
- **Commissions Stripe :** cartes suisses 2,9 % + CHF 0.30 [Observé]. TWINT environ 1,9 % + CHF 0.30, chiffre vu seulement chez un revendeur [Secondaire].
- **Payrexx :** TWINT 1,30 % + CHF 0.30 sur son offre Free, cartes 2,50 % + EUR 0.30 [Observé sur son site, frais d'abonnement non relevés].
- **Non résolu :** un lien de paiement n'envoie pas de billet personnalisé, et le brief prévoit un envoi par e-mail. Il faudra soit un envoi manuel, soit un petit webhook. À trancher quand cette phase sera ouverte.

## 10. Risques et points non prouvés

| Risque | Gravité | Traitement |
|---|---|---|
| Le restaurant cesse de mettre à jour | **Élevée** | Option A, essai réel en début de lot 1 |
| Mise en production restée sur Vercel gratuit | **Élevée** | Passer en Pro avant tout paiement ou bascule du domaine |
| Comptes au nom du développeur | **Élevée** | Google, hébergeur et GitHub au nom du restaurant, avec accès partagé |
| Photos clients reprises sans droit | **Élevée** | Uniquement les photos du restaurant |
| Pas d'accès au compte Google du restaurant | Moyenne | Album partagé ou accès gestionnaire à la fiche |
| Demandes perdues sans WhatsApp | Moyenne | Téléphone toujours affiché |
| Chaîne Sheet → hook → build non testée | Moyenne | Preuve en début de lot 1 |
| Build échoué sans que le restaurant le sache | Moyenne | Alerte à mettre en place au lot 1 |
| Changement d'offre chez Vercel | Faible | Sortie statique portable chez n'importe quel hébergeur |

**Questions au client :**
- Qui met à jour le contenu, et sur quel appareil ?
- Qui détient le compte Infomaniak, et le domaine y est-il enregistré ?
- Le restaurant accepte-t-il $20/mois pour Vercel ?
- Quel numéro utiliser pour WhatsApp ?
- Peut-il partager un album Google Photos et donner un accès gestionnaire à la fiche Google ?

## 11. Décisions à valider 🚦

**Décidé :**
- **Hébergement :** Vercel gratuit pour la démo, Vercel Pro après contrat.
- **Formulaires :** WhatsApp sans serveur.
- **Node :** dernière LTS en local.

**Proposé, pris comme hypothèse de travail sauf objection :**
1. **Stack :** Astro 7 statique.
2. **Démo :** arrêt à la fin de la phase 3 jusqu'au contrat.
3. **Contenu éditable :** option A (Google Sheet).
4. **URLs :** conserver `/en-gb` et réduire les 301 à ce qui change réellement (écart au brief).
5. **Motion :** CSS natif par défaut, bibliothèque seulement sur justification écrite.

## Sources

**Outils et hébergement**
- [Astro sur npm](https://www.npmjs.com/package/astro)

**Contenu**
- [Pages CMS](https://pagescms.org)
- [Note de version Pages CMS 1.0](https://newreleases.io/project/github/hunvreus/pagescms/release/1.0.0)
- [Sveltia CMS](https://github.com/sveltia/sveltia-cms)
- [Sveltia : authentification GitHub](https://sveltiacms.app/en/docs/backends/github)
- [Google : triggers installables](https://developers.google.com/apps-script/guides/triggers/installable)
- [Softr : délai des Sheets publiées](https://community.softr.io/t/how-long-a-delay-to-expect-from-editing-sheet-to-data-appearing/1127)

**Vercel**
- [Vercel : fair use, usage commercial](https://vercel.com/docs/limits/fair-use-guidelines)
- [Vercel : plan Hobby](https://vercel.com/docs/plans/hobby)
- [Vercel : conditions](https://vercel.com/legal/terms)
- [Vercel : tarifs](https://vercel.com/pricing)
- [Vercel : deploy hooks](https://vercel.com/docs/deploy-hooks)
- [Vercel : ajouter un domaine](https://vercel.com/docs/domains/working-with-domains/add-a-domain)

**Formulaires et médias**
- [Exemple de format wa.me et `?text=`](https://bird.com/explained/whatsapp/what-is-a-whatsapp-click-to-chat-link)
- [Google : prérequis de l'API Business Profile](https://developers.google.com/my-business/content/prereqs)
- [Google : publications Business Profile](https://developers.google.com/my-business/content/posts-data)
- [Fiche Google Maps du restaurant](https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Restaurant+de+l%27Aviation+Vernier)
- [JamContent : droits sur les photos clients](https://jamcontent.com/learn/repost-customer-photos-legally)

**Motion**
- [Chrome : View Transitions en 2025](https://developer.chrome.com/blog/view-transitions-in-2025)
- [DevToolbox : guide View Transitions](https://devtoolbox.dedyn.io/blog/css-view-transitions-complete-guide)
- [BuildMVPFast : scroll-driven animations](https://www.buildmvpfast.com/blog/css-scroll-driven-animations-replace-js-2026)
- [GSAP : tarifs](https://gsap.com/pricing/)

**Paiement**
- [Stripe : TWINT](https://docs.stripe.com/payments/twint)
- [Stripe : tarifs Suisse](https://stripe.com/en-ch/pricing)
- [Payrexx : TWINT](https://payrexx.com/en/products/paymentmethods/twint)
- [Payrexx : tarifs](https://payrexx.com/en-ch/pricing)
- [Octiv Pay : tarifs CH](https://octivfitness.com/octiv-pay-pricing-ch/)
