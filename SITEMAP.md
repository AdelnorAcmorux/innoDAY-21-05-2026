# InnoDAY V1 — Sitemap & Wireframes

## Clarifications post-interview

| Sujet | Décision |
|---|---|
| Fréquence de l'événement | Trimestriel (pas annuel) |
| Idée vs Challenge | N'importe qui peut démarrer un challenge depuis une idée. Les participants existants reçoivent une notif pour confirmer leur participation |
| Admin | Rôle dédié : créer/archiver une édition, modérer les idées. Les challenges sont créés par n'importe quel employé |
| Stack | Next.js App Router + TypeScript |
| Design | Corporate propre, cohérent avec la charte Kontron |

---

## Sitemap

```
/                           → Home
├── /ideas                  → Liste de toutes les idées
│   ├── /ideas/new          → Créer une idée
│   └── /ideas/[id]         → Détail d'une idée
├── /challenges             → Liste des challenges actifs
│   └── /challenges/[id]    → Détail d'un challenge
├── /archives               → Toutes les éditions InnoDAY
│   └── /archives/[slug]    → Détail d'une édition (idées + challenges de l'époque)
├── /profile                → Mon profil (idées soumises, challenges rejoints)
└── /admin                  → Admin uniquement
    ├── /admin/innoday/new  → Créer une nouvelle édition
    ├── /admin/ideas        → Modérer les idées (supprimer, promouvoir en challenge)
    └── /admin/archives     → Archiver une édition existante
```

### Navigation principale (tous les employés)

```
[Accueil]  [Idées]  [Challenges]  [Archives]  ···  [Mon profil]
```

### Navigation admin (admin uniquement, sous-menu ou panneau séparé)

```
/admin → accessible via badge ou lien discret dans le header
```

---

## Wireframes

### 1. Home `/`

```
┌────────────────────────────────────────────────────────────────┐
│  InnoDAY                               [J. Doe ▾]  [⚙ Admin]  │
│  [Accueil]  [Idées]  [Challenges]  [Archives]                  │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  🗓  InnoDAY Q2 2026  ·  En cours jusqu'au 28 mai 2026    │ │
│  │                                                           │ │
│  │              [ + Proposer une idée ]                      │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  Challenges actifs                             [Voir tout →]   │
│  ┌──────────────────┐ ┌──────────────────┐ ┌────────────────┐  │
│  │  Nom challenge 1 │ │  Nom challenge 2 │ │ Nom challenge 3│  │
│  │  Amélioration & … │ │  Expérimentation │ │ Résolution …  │  │
│  │  🔥 12  ⚙️ 8     │ │  🔥 9   ⚙️ 14   │ │ 🔥 6   ⚙️ 3  │  │
│  │  👥 4 participants│ │  👥 7 participants│ │ 👥 2 particip.│  │
│  │  [ Rejoindre ]   │ │  [ Rejoindre ]   │ │ [ Rejoindre ] │  │
│  └──────────────────┘ └──────────────────┘ └────────────────┘  │
│                                                                 │
│  Idées récentes                                [Voir tout →]   │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  💡 Améliorer le process de deploy CI/CD      🔥5  ⚙️3   │ │
│  │     Amélioration & Réalisation  ·  par M. Leblanc         │ │
│  ├───────────────────────────────────────────────────────────┤ │
│  │  💡 Dashboard de monitoring unifié            🔥8  ⚙️12  │ │
│  │     Expérimentation & Exploration  ·  par A. Petit        │ │
│  ├───────────────────────────────────────────────────────────┤ │
│  │  💡 Standardiser les API internes             🔥3  ⚙️7   │ │
│  │     Résolution de problèmes  ·  par L. Martin             │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

### 2. Liste des idées `/ideas`

```
┌────────────────────────────────────────────────────────────────┐
│  InnoDAY                               [J. Doe ▾]  [⚙ Admin]  │
│  [Accueil]  [Idées]  [Challenges]  [Archives]                  │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Idées                                  [ + Proposer une idée ]│
│                                                                 │
│  Filtres :                                                      │
│  Catégorie : [Toutes ▾]    Trier par : [Plus récentes ▾]       │
│  ○ Toutes  ○ Prob. & Brainstorming  ○ Amélioration  ○ Expé.   │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  💡 Améliorer le process de deploy CI/CD                  │ │
│  │  Amélioration & Réalisation  ·  par M. Leblanc  ·  Il y a │ │
│  │  2h  ·  InnoDAY Q2 2026                                   │ │
│  │                                    🔥 5   ⚙️ 3   💬 2    │ │
│  ├───────────────────────────────────────────────────────────┤ │
│  │  💡 Dashboard de monitoring unifié                        │ │
│  │  Expérimentation & Exploration  ·  par A. Petit  ·  Hier  │ │
│  │  ·  InnoDAY Q2 2026                                       │ │
│  │                                    🔥 8   ⚙️ 12  💬 5    │ │
│  ├───────────────────────────────────────────────────────────┤ │
│  │  💡 Standardiser les API internes                         │ │
│  │  …                                 🔥 3   ⚙️ 7   💬 1    │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│                        [ Charger plus ]                        │
└────────────────────────────────────────────────────────────────┘
```

---

### 3. Détail d'une idée `/ideas/[id]`

```
┌────────────────────────────────────────────────────────────────┐
│  InnoDAY                               [J. Doe ▾]  [⚙ Admin]  │
│  ← Retour aux idées                                            │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Améliorer le process de deploy CI/CD                          │
│  Amélioration & Réalisation  ·  par M. Leblanc  ·  Il y a 2h  │
│  InnoDAY Q2 2026                                               │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│  Description longue de l'idée. L'employé explique le           │
│  problème identifié et la solution proposée.                   │
│  ─────────────────────────────────────────────────────────     │
│                                                                 │
│  Actions                                                       │
│  [ 🔥 Feu (5) ]  [ ⚙️ Engrenage (3) ]  [ 👥 Rejoindre ]       │
│                                                                 │
│  [ 🎯 Démarrer un challenge ]                                   │
│     ↑ N'importe qui peut lancer l'idée en challenge            │
│       Si des gens ont déjà rejoint, ils recevront une notif    │
│                                                                 │
│  Participants (4)                                              │
│  [avatar] M. Leblanc  [avatar] A. Petit  [avatar] +2           │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│  Commentaires (2)                                              │
│                                                                 │
│  [avatar] A. Petit — Il y a 1h                                 │
│  Super idée ! On avait eu le même soucis en Q4.                │
│                                                                 │
│  [avatar] L. Martin — Il y a 30min                             │
│  Je peux aider sur la partie infra.                            │
│                                                                 │
│  ┌───────────────────────────────────────────────────────┐     │
│  │  Ajouter un commentaire…                              │     │
│  └───────────────────────────────────────────────────────┘     │
│  [ Commenter ]                                                 │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

### 4. Créer une idée `/ideas/new`

```
┌────────────────────────────────────────────────────────────────┐
│  InnoDAY                               [J. Doe ▾]              │
│  ← Retour                                                      │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Proposer une idée                                             │
│                                                                 │
│  Titre *                                                       │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  Ex : Améliorer le process de deploy CI/CD                │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  Description *                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                                                           │ │
│  │  Décris le problème et ta solution proposée…              │ │
│  │                                                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  Catégorie *                                                   │
│  ○ Résolution de problèmes & Brainstorming                     │
│  ○ Amélioration & Réalisation                                  │
│  ○ Expérimentation & Exploration                               │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│  ⚠  Idée similaire détectée (non bloquant) :                  │
│  "Optimiser le pipeline de build" par A. Petit                 │
│  → Voir cette idée  ou  Continuer quand même                   │
│  ─────────────────────────────────────────────────────────     │
│                                                                 │
│           [ Annuler ]           [ Soumettre l'idée ]           │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

### 5. Liste des challenges `/challenges`

```
┌────────────────────────────────────────────────────────────────┐
│  InnoDAY                               [J. Doe ▾]  [⚙ Admin]  │
│  [Accueil]  [Idées]  [Challenges]  [Archives]                  │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Challenges actifs                                             │
│  InnoDAY Q2 2026  ·  Ferme le 28 mai 2026                     │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  🎯 Améliorer le process de deploy CI/CD                  │ │
│  │  Promue depuis une idée de M. Leblanc                     │ │
│  │  Amélioration & Réalisation                               │ │
│  │  🔥 12  ⚙️ 8  ·  👥 4 participants                        │ │
│  │                              [ Voir ]  [ Rejoindre ]      │ │
│  ├───────────────────────────────────────────────────────────┤ │
│  │  🎯 Dashboard de monitoring unifié                        │ │
│  │  Promue depuis une idée de A. Petit                       │ │
│  │  Expérimentation & Exploration                            │ │
│  │  🔥 9  ⚙️ 14  ·  👥 7 participants                        │ │
│  │                              [ Voir ]  [ Quitter ]        │ │  ← déjà rejoint
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

### 6. Détail d'un challenge `/challenges/[id]`

```
┌────────────────────────────────────────────────────────────────┐
│  InnoDAY                               [J. Doe ▾]  [⚙ Admin]  │
│  ← Retour aux challenges                                       │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🎯 Dashboard de monitoring unifié                             │
│  Expérimentation & Exploration  ·  InnoDAY Q2 2026             │
│  Idée originale par A. Petit  →  [Voir l'idée source]          │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│  Description et contexte du challenge…                         │
│  ─────────────────────────────────────────────────────────     │
│                                                                 │
│  Réactions  [ 🔥 9 ]   [ ⚙️ 14 ]                               │
│                                                                 │
│  Participants (7)                   [ Rejoindre ce challenge ] │
│  [av] A. Petit  [av] M. Leblanc  [av] L. Martin  [av] +4       │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│  Commentaires (5)                                              │
│  …                                                             │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

### 7. Archives `/archives`

```
┌────────────────────────────────────────────────────────────────┐
│  InnoDAY                               [J. Doe ▾]  [⚙ Admin]  │
│  [Accueil]  [Idées]  [Challenges]  [Archives]                  │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Archives InnoDAY                                              │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  📦 InnoDAY Q1 2026  ·  Archivé le 15 mars 2026        │   │
│  │  12 idées  ·  3 challenges  ·  48 participants           │   │
│  │                                          [ Voir →]       │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  📦 InnoDAY Q4 2025  ·  Archivé le 10 déc. 2025        │   │
│  │  9 idées  ·  2 challenges  ·  31 participants            │   │
│  │                                          [ Voir →]       │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │  📦 InnoDAY Q3 2025  ·  …                               │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

### 8. Profil `/profile`

```
┌────────────────────────────────────────────────────────────────┐
│  InnoDAY                               [J. Doe ▾]              │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [avatar]  John Doe                                            │
│            john.doe@kontron.com                                │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│  Mes idées (3)                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  💡 Améliorer le deploy CI/CD              🔥5  ⚙️3  💬2 │ │
│  │  💡 Refactoriser le module de reporting    🔥2  ⚙️6  💬0 │ │
│  │  💡 Onboarding unifié pour les nouveaux    🔥1  ⚙️1  💬1 │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  Challenges rejoints (2)                                       │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  🎯 Dashboard de monitoring unifié  ·  Q2 2026            │ │
│  │  🎯 Améliorer le deploy CI/CD       ·  Q2 2026            │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

### 9. Admin — Dashboard `/admin`

```
┌────────────────────────────────────────────────────────────────┐
│  InnoDAY Admin                                   [J. Doe ▾]   │
│  [Vue employé ↗]                                               │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Tableau de bord admin                                         │
│                                                                 │
│  Édition active : InnoDAY Q2 2026 (ferme le 28 mai)           │
│  [ Archiver cette édition ]    [ Créer la prochaine édition ]  │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│  Idées à modérer (2 signalées)                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  ⚠  "Idée hors-sujet"  ·  par X. Unknown               │ │
│  │  [ Supprimer ]  [ Ignorer ]                               │ │
│  ├───────────────────────────────────────────────────────────┤ │
│  │  ⚠  "Doublon détecté"  ·  par Y. Someone               │ │
│  │  [ Supprimer ]  [ Ignorer ]                               │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│  Toutes les idées (15)            [ Voir toutes les idées ]    │
│  Tous les challenges (3)          [ Voir tous les challenges ] │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

### 10. Admin — Créer une édition `/admin/innoday/new`

```
┌────────────────────────────────────────────────────────────────┐
│  InnoDAY Admin                                   [J. Doe ▾]   │
│  ← Retour admin                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Créer une nouvelle édition InnoDAY                            │
│                                                                 │
│  Nom de l'édition *                                            │
│  ┌────────────────────────────────┐                            │
│  │  Ex : InnoDAY Q3 2026          │                            │
│  └────────────────────────────────┘                            │
│                                                                 │
│  Date de début *          Date de fin *                        │
│  ┌────────────────┐        ┌────────────────┐                  │
│  │  JJ/MM/AAAA    │        │  JJ/MM/AAAA    │                  │
│  └────────────────┘        └────────────────┘                  │
│                                                                 │
│  Description / contexte (optionnel)                            │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                                                           │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│         [ Annuler ]              [ Créer l'édition ]           │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

## Flux de promotion Idée → Challenge

```
[Idée soumise par un employé]
        ↓
[Visible dans /ideas  ·  actions : 🔥 Fire  ⚙️ Gear  👥 Join  🎯 Start Challenge]
        ↓
[N'importe quel employé clique "Start Challenge"]
  → 1 seul challenge possible par idée
  → Le bouton "Start Challenge" disparaît de l'idée une fois actif
        ↓
[Challenge créé dans /challenges, lié à l'idée source]
        ↓
[Email envoyé aux participants déjà inscrits à l'idée]
  Sujet : "[Nom] has decided to take on a challenge — are you in?"
  CTA   : [ Yes, join the challenge ]  [ View the challenge ]
        ↓
[Chaque participant décide individuellement]
        ↓
[Le challenge se constitue avec les volontaires confirmés]
[L'idée source reste visible avec un lien → challenge]

─── Dissolution ───

[Le starter quitte le challenge]
  Si seul participant  →  Challenge dissous, idée retourne à l'état normal
  Si d'autres ont rejoint →  Challenge continue sans le starter
```

---

## Questions ouvertes pour la prochaine session

- [ ] Si le challenge est dissous, les participants reçoivent-ils un email de dissolution ?
- [ ] Un challenge dissous peut-il être redémarré par quelqu'un d'autre sur la même idée ?
