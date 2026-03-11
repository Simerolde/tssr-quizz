# 🚀 Guide de mise en ligne — TSSR → DevOps Site

## Structure des fichiers

```
tssr-site/
├── index.html          ← Page d'accueil
├── css/
│   └── global.css      ← Styles partagés
├── js/
│   └── storage.js      ← Gestion des données locales
└── pages/
    ├── examen.html     ← QCM (60+ questions)
    ├── cours.html      ← Fiches de cours
    ├── checklist.html  ← Checklist TSSR → DevOps
    └── tableau.html    ← Tableau de bord
```

---

## ÉTAPE 1 — Créer un compte GitHub (gratuit)

1. Va sur https://github.com
2. Clique sur **"Sign up"**
3. Choisis un nom d'utilisateur (ex: tonprenom-devops)
4. Valide ton email

---

## ÉTAPE 2 — Créer un dépôt (repository)

1. Une fois connecté, clique sur le **"+"** en haut à droite → **"New repository"**
2. Nom du dépôt : `tssr-devops` (ou ce que tu veux)
3. Mets-le en **Public** (obligatoire pour GitHub Pages gratuit)
4. Coche **"Add a README file"**
5. Clique **"Create repository"**

---

## ÉTAPE 3 — Uploader tes fichiers

### Option A — Via l'interface web (le plus simple, aucun code)

1. Dans ton dépôt, clique **"Add file"** → **"Upload files"**
2. Glisse-dépose **tous les fichiers** (respecte la structure de dossiers !)
3. Pour les sous-dossiers (css/, js/, pages/) : crée d'abord le dossier via "Create new file", tape `css/global.css` comme nom (GitHub crée automatiquement le dossier)
4. Colle le contenu du fichier, clique **"Commit changes"**
5. Répète pour chaque fichier

### Option B — Via Git (recommandé pour continuer à apprendre)

```bash
# 1. Installe Git : https://git-scm.com/downloads

# 2. Configure Git (une seule fois)
git config --global user.name "Ton Nom"
git config --global user.email "ton@email.com"

# 3. Clone ton dépôt
git clone https://github.com/TON-USERNAME/tssr-devops.git

# 4. Copie tous tes fichiers dans le dossier cloné

# 5. Ajoute, commit et push
cd tssr-devops
git add .
git commit -m "Ajout du site TSSR DevOps"
git push origin main
```

---

## ÉTAPE 4 — Activer GitHub Pages

1. Dans ton dépôt GitHub, clique sur **"Settings"** (onglet en haut)
2. Dans le menu gauche, clique **"Pages"**
3. Sous **"Source"**, sélectionne **"Deploy from a branch"**
4. Branche : **"main"** · Dossier : **"/ (root)"**
5. Clique **"Save"**
6. Attends 1-2 minutes ⏳
7. Ton site sera disponible à l'adresse :
   **`https://TON-USERNAME.github.io/tssr-devops/`**

---

## ÉTAPE 5 — Ajouter des questions

Pour ajouter des questions à l'examen, ouvre `pages/examen.html` et trouve le tableau `QUESTIONS`. Chaque question suit ce format :

```javascript
{
  module: "Réseaux",          // Nom du module (doit correspondre à un module existant)
  diff: "medium",              // "easy", "medium", ou "hard"
  q: "Ta question ici ?",      // Texte de la question
  code: "commande exemple",    // OPTIONNEL : bloc de code affiché
  answers: [                   // Exactement 4 réponses
    "Réponse A",
    "Réponse B (correcte)",
    "Réponse C",
    "Réponse D"
  ],
  correct: 1,                  // Index de la bonne réponse (0=A, 1=B, 2=C, 3=D)
  expl: "Explication affichée après la réponse."
},
```

---

## ÉTAPE 6 — Personnaliser

- **Changer les couleurs** : modifie les variables CSS dans `css/global.css` (section `:root`)
- **Ajouter un module** : ajoute son nom dans le tableau `MODULES` de `examen.html`
- **Ajouter des fiches de cours** : copie un bloc `<div class="fiche">` dans `cours.html` et ajoute un onglet
- **Modifier la checklist** : édite le tableau `CHECKLIST` dans `checklist.html`

---

## Résolution de problèmes

| Problème | Solution |
|---|---|
| Les styles ne s'affichent pas | Vérifie que `css/global.css` est bien uploadé dans un dossier `css/` |
| Les pages liées ne fonctionnent pas | Vérifie la structure des dossiers (pages/ doit exister) |
| Le site ne s'affiche pas sur GitHub Pages | Attends 5 min, vérifie que le dépôt est Public et que `index.html` est à la racine |
| Les données ne sont pas sauvegardées | Normal sur certains navigateurs en mode privé — utilise un navigateur normal |

---

## Pour aller plus loin

- **Netlify** (https://netlify.com) : drag & drop de ton dossier entier, déploiement en 30 secondes, URL personnalisée gratuite
- **Vercel** (https://vercel.com) : similaire à Netlify, excellent pour les projets GitHub
- **Domaine personnalisé** : achetable chez OVH (~10€/an), configurable dans GitHub Pages Settings

---

*Bon courage ! Si tu bloques, demande de l'aide — chaque étape est apprenante.* 🚀
