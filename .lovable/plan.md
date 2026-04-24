## Objectif

Remplacer l'écran actuel à l'intérieur du mockup iPhone (section "Un aperçu de l'expérience") par la nouvelle interface fournie par l'utilisateur (`screen_1-2.png`), et inclure la barre de navigation du téléphone (status bar iOS en haut + barre de navigation app en bas avec Explore / Search / Bookings / Profile).

## Étapes

1. **Copier l'asset uploadé** vers le projet :
   - `user-uploads://screen_1-2.png` → `src/assets/app-screen-v1.png`

2. **Générer le mockup composite (v14)** via Nano Banana Pro :
   - Châssis iPhone 15 Pro réaliste (Titanium, Dynamic Island), fond 100% transparent (PNG alpha).
   - À l'intérieur de l'écran : intégrer **exactement** l'interface uploadée (header "TaPlaceGo" avec avatar/cloche, hero "Votre parking devient collaboratif", barre de recherche, catégories, lieux populaires Paris/Lyon, bottom nav Explore/Search/Bookings/Profile).
   - Ajouter une **status bar iOS** en haut de l'écran (heure, signal, wifi, batterie) au-dessus du header.
   - Conserver la bottom nav bar de l'interface telle quelle (Explore actif en orange, Search, Bookings, Profile).
   - Sortie : `src/assets/phone-mockup-v14.png`.

3. **Mettre à jour `ProductPreview.tsx`** :
   - Remplacer l'import `phone-mockup-v12.png` par `phone-mockup-v14.png`.
   - Conserver le halo radial doux et l'ombre portée existants.

## Détails techniques

- Fichiers modifiés : `src/components/landing/ProductPreview.tsx`
- Fichiers créés : `src/assets/app-screen-v1.png`, `src/assets/phone-mockup-v14.png`
- Modèle d'image : `google/gemini-3-pro-image-preview` (qualité maximale) avec l'image uploadée passée en `image_url` pour fidélité parfaite du contenu de l'écran.
- Aucune modification de la structure du composant : les badges latéraux (Géolocalisation, Réservation, Paiement, Suivi) restent inchangés.
