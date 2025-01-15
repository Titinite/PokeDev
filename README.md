# PokéDev

Mon petit projet est une application web qui simule une sorte de petit jeu Pokémon (liste de Pokémon, simulateur de combat, détails d'un Pokémon etc...). Le projet a été réalisé en React.js avec des appels vers l'API [PokéBuldAPI](https://pokebuildapi.fr/) pour les données. 


## Table des Matières
1. [Fonctionnalités](#fonctionnalités)
2. [Installation](#installation)
3. [Utilisation](#utilisation)
4. [Structure du Projet](#structure-du-projet)
5. [Technologies](#technologies)
6. [Auteurs](#auteurs)


## Fonctionnalités

- **Afficher des Pokémons aléatoirement** : Sur la page d'accueil, une équipe de Pokémon est générée. Vous pouvez également faire apparaître un Pokémon aléatoire dans la page appropriée.
- **Liste des Pokémons** : Sur la page appropriée, vous pouvez voir la liste des Pokémons classés par génération.
- **Liste des Types** : De la même manière, vous pouvez avoir la liste des différents types et leur liste de Pokémons associés.
- **Simulation de combat** : Sur la page de combat, vous pouvez affronter un Pokémon aléatoire avec le Pokémon de votre choix (parmi les 6 générés).


## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Titinite/PokeDev.git
   ```
2. Lancez le projet :
   ```bash
   npm run dev
   ```


## Utilisation

- **Page d'Accueil** (`index.php`) : Liste tous les événements et permet l'accès aux fonctions d'ajout, édition et suppression.
- **Ajout d’un Événement** : Remplissez un formulaire pour enregistrer un nouvel événement.
- **Header et Footer** : Éléments récurrents dans l’interface pour une navigation simplifiée.


## Structure du Projet

- **index.php** : Page principale affichant tous les événements et les boutons d'interaction.
- **add_event.php** : Formulaire pour ajouter un événement.
- **edit_event.php** : Permet de modifier un événement existant.
- **delete_event.php** : Supprime un événement sélectionné.
- **data.php** : Fichier de configuration de la base de données et fonctions.
- **style.css** : Feuille de style pour l’apparence de l’interface.


## Technologies

- **React** : Gestion des opérations et interactions serveur.
- **SQL** : Stockage des informations d'événements.
- **HTML/CSS** : Interface utilisateur simple et fonctionnelle.


## Auteurs
Développé par Titinite. Retrouvez le projet complet dans le dépôt [GitHub](https://github.com/Titinite/PokeDev).
