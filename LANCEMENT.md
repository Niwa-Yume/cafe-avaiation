# Lancement — mode d'emploi (première utilisation du workflow)

## 1. Organiser le dossier local

```
laviation/
├── CLAUDE.md              ← nouveau (protocole, chargé automatiquement par Claude Code)
├── LANCEMENT.md           ← ce fichier (pour toi, pas pour Claude)
├── docs/
│   ├── BRIEF.md           ← nouveau brief v2
│   ├── BRIEF_v1.md        ← ton ancien brief, renommé
│   └── references/
│       ├── creatoom-scenes.webp   ← tes 2 planches (noms à respecter, le brief y renvoie)
│       └── creatoom-ui.webp
└── design/
    └── directions/        ← vide : Claude y créera a.html, b.html, c.html en phase 2
```

Pas de maquette au départ : c'est normal, la phase 2 la produit. Si tu as encore les anciens `accueil.html` / `mobile.html` / `bon-cadeau.html`, mets-les dans `design/archive/` : Claude peut s'en servir comme idées, sans obligation.

```bash
cd laviation
mkdir -p docs/references design/directions
mv BRIEF.md docs/BRIEF_v1.md       # adapte le chemin selon où est l'ancien brief
# copie CLAUDE.md à la racine, BRIEF.md dans docs/, les 2 images dans docs/references/
git init && git add . && git commit -m "Brief v2 + protocole + références"
```

Le `git init` n'est pas optionnel : il te permet de revenir en arrière après chaque phase.

## 2. Installer les 3 skills (dans le projet)

Prérequis : Node 18+ et Python 3 (UI/UX Pro Max lance des scripts Python).

```bash
# 1. Direction artistique — Anthropic
npx skills add anthropics/skills --skill frontend-design --agent claude-code

# 2. UX / design system — UI/UX Pro Max
npx skills add nextlevelbuilder/ui-ux-pro-max-skill --list     # vérifier le nom exact du skill
npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max --agent claude-code

# 3. Audit qualité — Vercel
npx skills add vercel-labs/agent-skills --skill web-design-guidelines --agent claude-code

npx skills list   # contrôle
```

Vérifie qu'ils sont bien dans `.claude/skills/` (sinon Claude Code ne les voit pas). Puis dans Claude Code : `/skills` pour confirmer qu'ils apparaissent.

Optionnel mais utile pour les captures et la QA : `npm i -D playwright` dans le projet une fois la stack posée.

## 3. Lancer les phases — prompts à copier

Une session Claude Code **par phase** (`/clear` entre deux), pour garder un contexte propre. Le CLAUDE.md porte la mémoire du protocole, les fichiers `docs/` portent la mémoire du projet.

**Phase 0**
```
Lis docs/BRIEF.md et CLAUDE.md. Lance la phase 0 (cadrage technique).
Vérifie l'état actuel des outils avant de proposer. Produis docs/STACK.md et attends ma validation.
```

**Phase 1**
```
Phase 0 validée (voir docs/STACK.md). Lance la phase 1 : REFERENCE_BOARD.md.
Inspecte aussi design/accueil.html pour la section "Direction A".
```

**Phase 2**
```
Lance la phase 2 en utilisant le skill frontend-design, et ui-ux-pro-max uniquement pour l'UX.
Il n'y a pas de maquette : crée les directions A, B, C selon le brief § 4.4, en résolvant la tension § 4.3.
Produis docs/DESIGN_BRIEF.md, design/directions/a.html, b.html, c.html et leurs captures.
```
→ Ouvre les 3 planches dans ton navigateur, sur desktop **et** sur ton téléphone. C'est **la** décision du projet : prends ton temps, mixe si besoin (« ambiance de A, signalétique de B »). La planche retenue devient ta maquette.

**Phase 3**
```
Direction retenue : [X] avec ces ajustements : [...]. Lance la phase 3 : DESIGN_SYSTEM.md + vertical slice
dans la stack validée. Termine par un audit web-design-guidelines, des captures 390/1024/1440 et Lighthouse mobile.
```

**Phase 4** (un prompt par lot)
```
Vertical slice validée. Lance la phase 4, lot 1 (contenu éditable). Audit web-design-guidelines en fin de lot.
```

**Phase 5 / 6**
```
Lance la phase 5 (QA complète) puis la phase 6. Uniquement des vérifications réellement exécutées.
```

## 4. Ce qu'il faut surveiller (premier test)

- **Phase 2 trop sage** : si B et C ressemblent à A avec d'autres couleurs, refuse et redemande « plus éloigné, même contenu ».
- **Dérive « effets »** : si une direction propose du WebGL partout, demande son coût en Ko et en LCP mobile avant d'accepter.
- **UI/UX Pro Max qui impose ses palettes** : le CLAUDE.md l'interdit, mais vérifie.
- **« J'ai vérifié »** sans capture ni sortie de commande = pas vérifié. Demande la preuve.
- **Les photos** : tes planches Creatoom, c'est 90 % de photographie de studio. Sans shooting, la direction A sera une version appauvrie de ce que tu as en tête. Demande au client dès maintenant s'il accepte un shooting, et quel budget.
- **La tension chic / populaire** : si les 3 directions ressemblent toutes à un bar à vin, demande « montre-moi comment un habitué qui vient manger son entrecôte à midi lit cette page ».
