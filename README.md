# @jeiiro/react-tailwind-modal

Un composant modal simple, accessible et élégant construit avec React et stylisé avec TailwindCSS.

![Version](https://img.shields.io/badge/version-1.2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Installation

```bash
npm install @jeiiro/react-tailwind-modal
```

## Prérequis

- React (v17, v18, v19)
- TailwindCSS dans votre projet

## Fonctionnalités

- Facile à intégrer
- Entièrement stylisé avec TailwindCSS
- Léger et performant
- Compatible avec React 17, 18 et 19

## Utilisation basique

```jsx
import React, { useState } from "react";
import Modal from "@jeiiro/react-tailwind-modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Ouvrir</button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <p>Ceci est une modale !</p>
      </Modal>
    </>
  );
}
```

## Props

- `isOpen` (booléen) : Indique si la modale est ouverte ou fermée.
- `onClose` (fonction) : Fonction appelée lorsque la modale est fermée.
- `children` (node) : Contenu à afficher de la modale.




## Personnalisation

Le composant utilise les classes TailwindCSS pour le style. Vous pouvez personnaliser l'apparence en modifiant les classes dans votre propre implémentation.

## Configuration de Tailwind CSS

Pour que les styles du composant modal fonctionnent correctement dans votre projet, vous devez configurer Tailwind CSS pour inclure les classes utilisées par le composant. Ajoutez la configuration suivante à votre fichier `tailwind.config.js` :

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@jeiiro/react-tailwind-modal/**/*.{js,jsx}"
  ],
  safelist: [
    'fixed',
    'inset-0',
    'flex',
    'items-center',
    'justify-center',
    'bg-black/50',
    'z-50',
    'bg-white',
    'p-6',
    'rounded-lg',
    'shadow-lg',
    'max-w-md',
    'w-full',
    'mt-4',
    'bg-blue-500',
    'hover:bg-blue-600',
    'text-white',
    'py-2',
    'px-4',
    'rounded'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## Licence

MIT © Jeiiro
