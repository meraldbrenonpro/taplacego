## Objectif

Le mockup actuel (`phone-mockup-v15.png`) affiche l'interface "TaPlaceGo" en plein écran et apparaît trop grand/écrasé. On veut :

1. **Une taille d'écran "normale"** : l'interface ne doit pas remplir tout le mockup, mais montrer seulement une **partie haute** de l'app (header + hero + barre de recherche + début des catégories), avec une bottom nav bar plus visible.
2. **Insérer le logo TaPlaceGo** (icône `logo-icon-white.png` ou version sombre) **dans la barre de navigation supérieure** de l'app (à gauche, à la place ou à côté du texte "TaPlaceGo").

## Étapes

1. **Générer un nouveau mockup composite (v16)** via un script Python (PIL) :
   - Châssis iPhone 15 Pro réaliste avec Dynamic Island, fond 100% transparent (PNG alpha).
   - **Crop de l'interface source** (`app-screen-v1.png`) : ne garder que la moitié haute (status bar + header + hero "Votre parking devient collaboratif" + barre de recherche + 1 ligne de catégories) + la bottom nav bar collée en bas.
   - **Insertion du logo TaPlaceGo** (`mockup-logo-dark.png` ou `logo-icon-white.png` selon contraste) dans le header de l'app, à gauche du nom "TaPlaceGo" ou en remplacement du texte.
   - Résolution haute (2x) pour netteté maximale.
   - Sortie : `src/assets/phone-mockup-v16.png`.

2. **Mettre à jour `ProductPreview.tsx`** :
   - Remplacer l'import `phone-mockup-v15.png` par `phone-mockup-v16.png`.
   - Conserver le halo radial doux et l'ombre portée.
   - Conserver `widthClassName="w-full"` sur le wrapper `w-[280px] sm:w-[300px]` (taille déjà correcte côté CSS — c'est le contenu interne du PNG qui sera ajusté).

## Détails techniques

- Fichiers modifiés : `src/components/landing/ProductPreview.tsx`
- Fichiers créés : `src/assets/phone-mockup-v16.png`
- Méthode : composition PIL (pas de génération IA) pour garantir lisibilité parfaite et placement précis du logo.
- Logo utilisé : `src/assets/mockup-logo-dark.png` (sur header clair de l'app).
- Aucun changement de structure du composant ni des badges latéraux.
