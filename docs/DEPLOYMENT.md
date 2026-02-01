# 🏛️ Guide de Déploiement - Aphrodite Chains

Ce document détaille les procédures de versionnage et de déploiement pour garantir une expérience utilisateur fluide et luxueuse sur **Aphrodite Chains**.

---

## 🛰️ Phase 1 : Versionnage avec GitHub

Le code source est le joyau de votre application. Voici comment le sécuriser.

### 1. Initialisation locale
Ouvrez votre terminal à la racine du projet :
```bash
# Initialiser le dépôt Git
git init

# Ajouter les fichiers au suivi
git add .

# Premier commit de fondation
git commit -m "feat: initial launch of Aphrodite Chains luxury experience"
```

### 2. Liaison avec GitHub
1. Créez un nouveau dépôt (privé ou public) sur [GitHub](https://github.com/new).
2. Liez votre dossier local au dépôt distant :
```bash
git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/aphrodite-chains.git
git branch -M main
git push -u origin main
```

---

## 🚀 Phase 2 : Déploiement sur Vercel

Vercel assure un déploiement continu (CI/CD) : chaque modification sur GitHub mettra à jour votre site instantanément.

### 1. Connexion du projet
1. Connectez-vous sur [Vercel](https://vercel.com).
2. Cliquez sur **"Add New"** > **"Project"**.
3. Importez le dépôt `aphrodite-chains` depuis votre compte GitHub.

### 2. Configuration du Build
Vercel détecte automatiquement les projets React/Vite/Next.js. 
*   **Framework Preset :** Vite ou Next.js (selon votre environnement de build).
*   **Root Directory :** `./` (Racine).

### 3. Variables d'Environnement (Crucial)
Si vous utilisez l'API Gemini ou d'autres services tiers :
1. Allez dans l'onglet **Environment Variables**.
2. Ajoutez `API_KEY` avec votre clé secrète Google GenAI.
3. Cliquez sur **Save**.

### 4. Lancement
Cliquez sur **Deploy**. Votre boutique sera en ligne en moins de 60 secondes.

---

## 💎 Phase 3 : Optimisations de Production

Pour maintenir l'image de marque "Luxe" :

1.  **Domaine Personnalisé :** 
    *   Rendez-vous dans *Settings > Domains* sur Vercel.
    *   Ajoutez votre domaine (ex: `www.aphrodite-chains.com`).
2.  **Certificat SSL :** 
    *   Automatiquement géré par Vercel (HTTPS obligatoire pour la réassurance client).
3.  **Performance (Lighthouse) :**
    *   Assurez-vous que vos images sont optimisées (Vercel Image Optimization).
    *   Visez un score de performance > 90 pour garantir la fluidité sur mobile.

---

## 🔄 Flux de Travail Quotidien

Pour mettre à jour le site :
```bash
git add .
git commit -m "style: amélioration de la réactivité des cadrans"
git push origin main
```
*Vercel détectera le push et déploiera la nouvelle version automatiquement.*

---
*© 2026 Aphrodite Chains • Digital Craftsmanship & Luxury Performance*
