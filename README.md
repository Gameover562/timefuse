# Field Calculator PWA

Prototype d'application mobile installable et utilisable hors ligne.

## Contenu

- `index.html` : interface
- `style.css` : mise en page mobile / mode sombre
- `app.js` : validation et logique d'interface
- `manifest.json` : installation PWA
- `service-worker.js` : cache hors ligne
- `icon-192.png` et `icon-512.png` : icônes

## Tester localement

Les Service Workers ne fonctionnent généralement pas en ouvrant simplement `index.html`
depuis le gestionnaire de fichiers. Servez le dossier via un petit serveur local.

Avec Python installé :

```bash
python -m http.server 8000
```

Puis ouvrez :

`http://localhost:8000`

## Héberger avec GitHub Pages

1. Créez un nouveau dépôt GitHub.
2. Téléversez tous les fichiers de ce dossier à la racine du dépôt.
3. Dans GitHub : Settings > Pages.
4. Source : Deploy from a branch.
5. Branche : `main`, dossier `/root`.
6. Attendez que GitHub fournisse l'adresse HTTPS.
7. Ouvrez cette adresse dans Chrome sur Android.
8. Menu Chrome > Ajouter à l'écran d'accueil / Installer l'application.

## Mode hors ligne

Après une première visite réussie en HTTPS, le Service Worker met en cache les fichiers
principaux. L'application peut alors être relancée sans connexion.

## Module de calcul

Le prototype valide les deux entrées et affiche les zones de résultats, mais le moteur de
calcul opérationnel est volontairement désactivé. La logique d'interface peut être étendue
avec des modules de calcul non dangereux, conversions, géométrie, électronique, logistique,
historique local, favoris et autres outils.
