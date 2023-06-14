

// const dotenv = require('dotenv');
// dotenv.config();

// console.log('your port is 8081');


// // const port = process.env.PORT;
// const dotenv = require('dotenv');
// const express = require('express');
// const livreRoute = require('./routes/livres');
// const autheurRoute = require('./routes/autheurs');
// const docRoute = require('./routes/swagger');
// const swaggerJsdoc = require("swagger-jsdoc")
// const swaggerUi = require("swagger-ui-express");
// // const swaggerMiddleware = require('./middleware/swagger.middleware');
// // const swaggerMiddleware = require('./swagger.middleware');

// dotenv.config();

// const server = express();
// server.use(express.json());
// server.set('json spaces', 2);


// // server.use('/api/v1/docs', swaggerMiddleware);
// server.use('/api/v1/docs', docRoute);
// // server.use('/api/v1/docs', docRoute);

// server.use('/api/v1/livres', livreRoute);
// server.use('/api/v1/autheurs', autheurRoute);

// server.get('/', (req, res) => {
//   res.send('Hello, World!');
// });


// server.use('/api/v1/livres/', livreRoute);
// server.use('/api/v1/autheurs/', autheurRoute);
// server.use('/api/v1/livres/', livreRoute);
// server.use('/api/v1/autheurs/', autheurRoute);
// server.use('/api/v1/livres/', livreRoute);
// server.use('/api/v1/autheurs/', autheurRoute);
// server.use('/api/v1/livres', livreRoute);
// server.use('/api/v1/autheurs', autheurRoute);


// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "APILIVRE",
//       version: "0.1.0",
//       description: "Documentation node js",
//       contact: {
//         email: "noasillam@gmail.com",
//       },
//     },
//     servers: [
//       {
//         url: "http://localhost:8081/api/v1",
//       },
//     ],
//     components: {
//       schemas: {
//         Livre: {
//           type: "object",
//           properties: {
//             id: {
//               type: "integer",
//             },
//             titre: {
//               type: "string",
//             },
//             description: {
//               type: "string",
//             },
//             // Ajoutez d'autres propriétés du livre si nécessaire
//           },
//         },
//         LivreInput: {
//           type: "object",
//           properties: {
//             titre: {
//               type: "string",
//             },
//             description: {
//               type: "string",
//             },
//             // Ajoutez d'autres propriétés d'entrée du livre si nécessaire
//           },
//           required: ["titre", "description"], // Indiquez les propriétés requises
//         },
//         Autheur: {
//           type: "object",
//           properties: {
//             id: {
//               type: "integer",
//             },
//             nom: {
//               type: "string",
//             },
//             prenom: {
//               type: "string",
//             },
//             // Ajoutez d'autres propriétés de l'auteur si nécessaire
//           },
//         },
//         AutheurInput: {
//           type: "object",
//           properties: {
//             nom: {
//               type: "string",
//             },
//             prenom: {
//               type: "string",
//             },
//             // Ajoutez d'autres propriétés d'entrée de l'auteur si nécessaire
//           },
//           required: ["nom", "prenom"], // Indiquez les propriétés requises
//         },
//       },
//     },
//     tags: [ // Ajoutez les tags ici
//       {
//         name: "Livre", // Nom du tag pour les livres
//         description: "Opérations liées aux livres",
//       },
//       {
//         name: "Auteur", // Nom du tag pour les auteurs
//         description: "Opérations liées aux auteurs",
//       },
//     ],
//   },
//   apis: ["./routes/*.js"],
// };

// const specs = swaggerJsdoc(options);

// server.use(
//   "/api/v1/docs/doc",
//   swaggerUi.serve,
//   swaggerUi.setup(specs)
// );
// const port = Number(process.env.PORT || 8081);
// server.listen(port, () => {
//   console.log(`Your port is ${port}`);
// });

// module.exports = server;






// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "APILIVRE",
//       version: "0.1.0",
//       description:
//         "Documentation node js",
//       contact: {
//         email: "noasillam@gmail.com",
//       },
//     },
//     servers: [
//       {
//         url: "http://localhost:8081/api/v1",
//       },
//     ],
//     components: {
//       schemas: {
//         Livre: {
//           type: "object",
//           properties: {
//             id: {
//               type: "integer",
//             },
//             titre: {
//               type: "string",
//             },
//             description: {
//               type: "string",
//             },
//             // Ajoutez d'autres propriétés du livre si nécessaire
//           },
//         },
//       },
//     },
//   },
//   apis: ["./routes/*.js"],
// };

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "APILIVRE",
//       version: "0.1.0",
//       description: "Documentation node js",
//       contact: {
//         email: "noasillam@gmail.com",
//       },
//     },
//     servers: [
//       {
//         url: "http://localhost:8081/api/v1",
//       },
//     ],
//     components: {
//       schemas: {
//         Livre: {
//           type: "object",
//           properties: {
//             id: {
//               type: "integer",
//             },
//             titre: {
//               type: "string",
//             },
//             description: {
//               type: "string",
//             },
//             // Ajoutez d'autres propriétés du livre si nécessaire
//           },
//         },
//         LivreInput: {
//           type: "object",
//           properties: {
//             titre: {
//               type: "string",
//             },
//             description: {
//               type: "string",
//             },
//             // Ajoutez d'autres propriétés d'entrée du livre si nécessaire
//           },
//           required: ["titre", "description"], // Indiquez les propriétés requises
//         },
//       },
//     },
//   },
//   apis: ["./routes/*.js"],
// };




// ----------------------------------------------
// Importation du module dotenv pour la gestion des variables d'environnement
// ----------------------------------------------
const dotenv = require('dotenv');

// ----------------------------------------------
// Importation du module express pour la création du serveur
// ----------------------------------------------
const express = require('express');

// ----------------------------------------------
// Importation des routes pour les livres et les auteurs
// ----------------------------------------------
const livreRoute = require('./routes/livres');
const autheurRoute = require('./routes/autheurs');

// ----------------------------------------------
// Importation des middlewares pour Swagger
// ----------------------------------------------
const { serveSwagger, setupSwagger } = require('./middleware/swagger.middleware');


// ----------------------------------------------
// Chargement des variables d'environnement à partir du fichier .env
// ----------------------------------------------
dotenv.config();

// ----------------------------------------------
// Création de l'instance du serveur Express
// ----------------------------------------------
const server = express();

// ----------------------------------------------
// Utilisation du middleware pour la gestion des données JSON
// ----------------------------------------------
server.use(express.json());

// ----------------------------------------------
// Configuration de l'indentation du format JSON
// ----------------------------------------------
server.set('json spaces', 2);

// ----------------------------------------------
// Configuration des routes pour Swagger
// ----------------------------------------------
server.use('/api/v1/docs', serveSwagger, setupSwagger);

// ----------------------------------------------
// Configuration des routes pour les livres et les auteurs
// ----------------------------------------------
server.use('/api/v1/livres', livreRoute);
server.use('/api/v1/autheurs', autheurRoute);


// ----------------------------------------------
// Route de base pour tester le serveur
// ----------------------------------------------
server.get('/', (req, res) => {
  res.send('Hello, World!');
});

// ----------------------------------------------
// Configuration du port d'écoute du serveur
// ----------------------------------------------
const port = Number(process.env.PORT || 8081);

// ----------------------------------------------
// Démarrage du serveur
// ----------------------------------------------
server.listen(port, () => {
  console.log(`Your port is ${port}`);
});

// ----------------------------------------------
// Exportation de l'instance du serveur pour utilisation externe
// ----------------------------------------------
module.exports = server;
