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

## Exemple avancé

```jsx
import React, { useState } from "react";
import Modal from "@jeiiro/react-tailwind-modal";

function FormExample() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour, ${name}!`);
    setOpen(false);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={() => setOpen(true)}
      >
        Ouvrir le formulaire
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <h2 className="text-xl font-bold mb-4">Formulaire d'exemple</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 mb-2"
              htmlFor="name"
            >
              Votre nom
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full mb-2"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </Modal>
    </>
  );
}
```

## Personnalisation

Le composant utilise les classes TailwindCSS pour le style. Vous pouvez personnaliser l'apparence en modifiant les classes dans votre propre implémentation.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## Licence

MIT © Jeiiro
