# API Livre
API Livre est une application Node.js qui fournit des fonctionnalités pour gérer des livres et des auteurs. L'API est documentée à l'aide de Swagger pour faciliter son utilisation et comprendre les différents endpoints disponibles.

## Configuration de l'environnement
Avant de démarrer l'application, assurez-vous d'avoir configuré les variables d'environnement en créant un fichier .env à la racine du projet et en y spécifiant les valeurs appropriées. Vous pouvez vous référer au fichier .env.example pour connaître les variables d'environnement requises.

## Installation
Clonez le dépôt GitHub :
```bash
https://github.com/NoaSillam/ProjetBackEnd.git
```

## Installez les dépendances nécessaires :
```bash
npm install
```
## Démarrez l'application :
```bash
nodemon server
```

L'application sera accessible à l'adresse http://localhost:8081.

## Endpoints
L'API Livre expose les endpoints suivants :

### Livres
GET /api/v1/livres : Récupère tous les livres.
GET /api/v1/livres/{id} : Récupère un livre par son ID.
POST /api/v1/livres : Crée un nouveau livre.
PUT /api/v1/livres/{id} : Met à jour un livre existant.
DELETE /api/v1/livres/{id} : Supprime un livre existant.

### Auteurs
GET /api/v1/autheurs : Récupère tous les auteurs.
GET /api/v1/autheurs/{id} : Récupère un auteur par son ID.
POST /api/v1/autheurs : Crée un nouvel auteur.
PUT /api/v1/autheurs/{id} : Met à jour un auteur existant.
DELETE /api/v1/autheurs/{id} : Supprime un auteur existant.


## Documentation
La documentation complète de l'API est disponible à l'adresse http://localhost:8081/api/v1/docs. Elle utilise Swagger pour fournir des informations détaillées sur les endpoints, les modèles de données et les différentes opérations disponibles.

## Exemple
Voici un exemple de requête pour récupérer tous les livres :

```bash 
GET /api/v1/livres
```

### Reponse :

```bash
HTTP/1.1 200 OK
Content-Type: application/json
[
    {
        "idLivre": 1,
        "titre": "livre 1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "idAuthor": 1,
        "nom_autheur": "Sillam",
        "prenom_autheur": "Noa"
    },
    {
        "idLivre": 6,
        "titre": "test 6",
        "description": "descriptionTest 6",
        "idAuthor": 1,
        "nom_autheur": "Sillam",
        "prenom_autheur": "Noa"
    },
    {
        "idLivre": 7,
        "titre": "livre 110",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "idAuthor": 1,
        "nom_autheur": "Sillam",
        "prenom_autheur": "Noa"
    },
    {
        "idLivre": 3,
        "titre": "test3.1",
        "description": "descriptionTest3.1",
        "idAuthor": 2,
        "nom_autheur": "nom 2",
        "prenom_autheur": "prenom 2"
    },
    {
        "idLivre": 2,
        "titre": "test2",
        "description": "descriptionTest2",
        "idAuthor": null,
        "nom_autheur": null,
        "prenom_autheur": null
    },
    {
        "idLivre": 5,
        "titre": "test 5",
        "description": "descriptionTest 5",
        "idAuthor": null,
        "nom_autheur": null,
        "prenom_autheur": null
    }
]
```
