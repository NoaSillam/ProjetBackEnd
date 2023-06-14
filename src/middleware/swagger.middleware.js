// // ----------------------------------------------
// // Importation de la lib pour générer le json swagger
// // ----------------------------------------------
// const swaggerJsDoc = require('swagger-jsdoc');


// // ----------------------------------------------
// // Définition de l'architecture de base de la documentation 
// // ----------------------------------------------
// const swaggerGeneration = {
//     swaggerDefinition: {
//         openapi: "3.0.0",
//         info: {
//             title: 'API LIVRE',
//             version: '0.1.0'
//         },
//         servers: [
//             {
//                 url: "http://localhost:8081/api/v1",
//             },
//         ],
//     },
//     apis: ['src/routes/*.js'] // Je récupère l'enssemble des commentaires swagger venant des fichiers .js du dossier routes
// };

// const swaggerOptions = swaggerJsDoc(swaggerGeneration);




// // ----------------------------------------------
// // Permet de trier dans la documentation par type de requette HTTP
// // ----------------------------------------------
// const swaggerSortByHTTPRequest = {
//     swaggerOptions: {
//         operationsSorter: (httpRequest_first_index, httpRequest_second_index) => {
//             var methodsOrder = ["get", "post", "put", "patch", "delete", "options", "trace"];
//             var result = methodsOrder.indexOf(httpRequest_first_index.get("method")) - methodsOrder.indexOf(httpRequest_second_index.get("method"));

//             if (result === 0) {
//                 result = httpRequest_first_index.get("path").localeCompare(httpRequest_second_index.get("path"));
//             }
//             return result;
//         }
//     }
// };



// // ----------------------------------------------
// // ----------------------------------------------
// module.exports = {
//     swaggerOptions,
//     swaggerSortByHTTPRequest
// }
// const swaggerJsdoc = require("swagger-jsdoc")
// const swaggerUi = require("swagger-ui-express");



// const options = {
//     definition: {
//       openapi: "3.0.0",
//       info: {
//         title: "APILIVRE",
//         version: "0.1.0",
//         description:
//           "Documentation node js",
//         contact: {
//           email: "noasillam@gmail.com",
//         },
//       },
//       servers: [
//         {
//           url: "http://localhost:8081/api/v1",
//         },
//       ],
//     },
//     apis: ["../routes/*.js"],
//   };
// const swaggerJsdoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

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

// module.exports = specs;






const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "APILIVRE",
      version: "0.1.0",
      description: "Documentation node js",
      contact: {
        email: "noasillam@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8081/api/v1",
      },
    ],
    components: {
      schemas: {
        Livre: {
          type: "object",
          properties: {
            id: {
              type: "integer",
            },
            titre: {
              type: "string",
            },
            description: {
              type: "string",
            },
            // Ajoutez d'autres propriétés du livre si nécessaire
          },
        },
        LivreInput: {
          type: "object",
          properties: {
            titre: {
              type: "string",
            },
            description: {
              type: "string",
            },
            // Ajoutez d'autres propriétés d'entrée du livre si nécessaire
          },
          required: ["titre", "description"], // Indiquez les propriétés requises
        },
        Autheur: {
          type: "object",
          properties: {
            id: {
              type: "integer",
            },
            nom: {
              type: "string",
            },
            prenom: {
              type: "string",
            },
            // Ajoutez d'autres propriétés de l'auteur si nécessaire
          },
        },
        AutheurInput: {
          type: "object",
          properties: {
            nom: {
              type: "string",
            },
            prenom: {
              type: "string",
            },
            // Ajoutez d'autres propriétés d'entrée de l'auteur si nécessaire
          },
          required: ["nom", "prenom"], // Indiquez les propriétés requises
        },
      },
    },
    tags: [
      // Ajoutez les tags ici
      {
        name: "Livre", // Nom du tag pour les livres
        description: "Opérations liées aux livres",
      },
      {
        name: "Auteur", // Nom du tag pour les auteurs
        description: "Opérations liées aux auteurs",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

const serveSwagger = swaggerUi.serve;
const setupSwagger = swaggerUi.setup(specs);

module.exports = { serveSwagger, setupSwagger };

