// var assert = require('assert');
// describe('Array', function ()
//     {
//         describe('#indexOf()', function () {
//             if('should return -1 when the value is not present', function () {
//                 assert.equal([1,2,3].indexOf(4) -1);
//             });
//         });

//     })


var assert = require('assert');
var sinon = require('sinon');
var livreModel = require('../src/models/livre.model');
var livreController = require('../src/controllers/livre.controller');


describe('Livre Controller', function () {
  describe('getAllLivres', function () {
    it('should return all livres', function () {
      // Données de simulation
      var mockData = [{ id: 1, titre: 'Livre 1' }, { id: 2, titre: 'Livre 2' }];
      // Objet de réponse simulé
      var mockResponse = {
        send: sinon.spy()
      };
// Remplace la fonction getAllLivres de livreModel par une implémentation fictive
      sinon.stub(livreModel, 'getAllLivres').callsFake(function (callback) {
        callback(null, mockData);
      });
// Appelle la fonction getAllLivres de livreController
      livreController.getAllLivres(null, mockResponse);

      // Vérifie que la méthode send de l'objet mockResponse a été appelée avec mockData
      sinon.assert.calledWith(mockResponse.send, mockData);

      // Rétablit la fonction getAllLivres d'origine
      livreModel.getAllLivres.restore();
    });

    it('should handle error and send 500 status', function () {

      // Erreur simulée
      var mockError = new Error('Database error');

       // Objet de réponse simulé
      var mockResponse = {
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      };

       // Remplace la fonction getAllLivres de livreModel par une implémentation fictive
      sinon.stub(livreModel, 'getAllLivres').callsFake(function (callback) {
        callback(mockError);
      });

      // Appelle la fonction getAllLivres de livreController
      livreController.getAllLivres(null, mockResponse);

      // Vérifie que la méthode status de l'objet mockResponse a été appelée avec 500
      // Vérifie que la méthode send de l'objet mockResponse a été appelée avec un objet contenant le message d'erreur
      sinon.assert.calledWith(mockResponse.status, 500);
      sinon.assert.calledWith(mockResponse.send, { message: mockError.message });

      // Rétablit la fonction getAllLivres d'origine
      livreModel.getAllLivres.restore();
    });
  });

  describe('getLivreById', function () {
    it('should return the specified livre', function () {
       // ID et données simulés du livre
      var mockLivreId = 1;
      var mockLivre = { id: mockLivreId, titre: 'Livre 1' };

       // Objet de requête simulé
      var mockRequest = {
        params: { id: mockLivreId }
      };

      // Objet de réponse simulé
      var mockResponse = {
        send: sinon.spy()
      };

       // Remplace la fonction getLivreById de livreModel par une implémentation fictive
      sinon.stub(livreModel, 'getLivreById').callsFake(function (id, callback) {
        callback(null, mockLivre);
      });

       // Appelle la fonction getLivreById de livreController
      livreController.getLivreById(mockRequest, mockResponse);

       // Vérifie que la méthode send de l'objet mockResponse a été appelée avec mockLivre
      sinon.assert.calledWith(mockResponse.send, mockLivre);

      // Rétablit la fonction getLivreById d'origine
      livreModel.getLivreById.restore();
    });

    
    it('should handle error and send 500 status', function () {
      // ID du livre simulé et erreur simulée
      var mockLivreId = 1;
      var mockError = new Error('Database error');

      // Objet de requête simulé
      var mockRequest = {
        params: { id: mockLivreId }
      };

      // Objet de réponse simulé
      var mockResponse = {
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      };

      // Remplace la fonction getLivreById de livreModel par une implémentation fictive
      sinon.stub(livreModel, 'getLivreById').callsFake(function (id, callback) {
        callback(mockError);
      });

      // Appelle la fonction getLivreById de livreController
      livreController.getLivreById(mockRequest, mockResponse);

      // Vérifie que la méthode status de l'objet mockResponse a été appelée avec 500
      // Vérifie que la méthode send de l'objet mockResponse a été appelée avec un objet contenant le message d'erreur
      sinon.assert.calledWith(mockResponse.status, 500);
      sinon.assert.calledWith(mockResponse.send, { message: mockError.message });

      // Rétablit la fonction getLivreById d'origine
      livreModel.getLivreById.restore();
    });

    it('should handle livre not found and send 404 status', function () {

      
      var mockLivreId = 1;
      var mockRequest = {
        params: { id: mockLivreId }
      };
      var mockResponse = {
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      };

      sinon.stub(livreModel, 'getLivreById').callsFake(function (id, callback) {
        callback(null, null);
      });

      livreController.getLivreById(mockRequest, mockResponse);

      sinon.assert.calledWith(mockResponse.status, 404);
      sinon.assert.calledWith(mockResponse.send, { message: 'Livre non trouvé' });

      livreModel.getLivreById.restore();
    });
  });

  describe('updateLivre', function () {
    it('should update the specified livre', function () {

      // ID et données simulés du livre
      var mockLivreId = 1;
      var mockLivre = { id: mockLivreId, titre: 'Livre 1', description: 'Description 1', idAuthor: 1 };

      // Objet de requête simulé
      var mockRequest = {
        params: { id: mockLivreId },
        body: mockLivre
      };

       // Objet de réponse simulé
      var mockResponse = {
        send: sinon.spy()
      };

       // Remplace la fonction updateLivre de livreModel par une implémentation fictive
      sinon.stub(livreModel, 'updateLivre').callsFake(function (id, livre, callback) {
        // On suppose que le livre est mis à jour avec succès
        callback(null, 1);
      });

      // Appelle la fonction updateLivre de livreController
      livreController.updateLivre(mockRequest, mockResponse);

       // Vérifie que la méthode send de l'objet mockResponse a été appelée avec le livre mis à jour
      sinon.assert.calledWith(mockResponse.send, { id: mockLivreId, ...mockLivre });

      // Rétablit la fonction updateLivre d'origine
      livreModel.updateLivre.restore();
    });

    it('should handle error and send 500 status', function () {
      // ID du livre simulé et erreur simulée
      var mockLivreId = 1;
      var mockLivre = { id: mockLivreId, titre: 'Livre 1', description: 'Description 1', idAuthor: 1 };
      var mockError = new Error('Database error');

      // Objet de requête simulé
      var mockRequest = {
        params: { id: mockLivreId },
        body: mockLivre
      };

       // Objet de réponse simulé
      var mockResponse = {
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      };


      // Remplace la fonction updateLivre de livreModel par une implémentation fictive
      sinon.stub(livreModel, 'updateLivre').callsFake(function (id, livre, callback) {
        callback(mockError);
      });

      // Appelle la fonction updateLivre de livreController
      livreController.updateLivre(mockRequest, mockResponse);

            // Vérifie que la méthode status de l'objet mockResponse a été appelée avec 500
      // Vérifie que la méthode send de l'objet mockResponse a été appelée avec un objet contenant le message d'erreur
      sinon.assert.calledWith(mockResponse.status, 500);
      sinon.assert.calledWith(mockResponse.send, { message: mockError.message });

      // Rétablit la fonction updateLivre d'origine
      livreModel.updateLivre.restore();
    });

    it('should handle livre not found and send 404 status', function () {
      // ID du livre simulé et erreur simulée
      var mockLivreId = 1;
      // Objet de requête simulé
      var mockLivre = { id: mockLivreId, titre: 'Livre 1', description: 'Description 1', idAuthor: 1 };
      var mockRequest = {
        params: { id: mockLivreId },
        body: mockLivre
      };

       // Objet de réponse simulé
      var mockResponse = {
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      };
    // Remplace la fonction updateLivre de livreModel par une implémentation fictive
      sinon.stub(livreModel, 'updateLivre').callsFake(function (id, livre, callback) {
        // On suppose que le livre n'a pas été trouvé
        callback(null, 0);
      });

      // Appelle la fonction updateLivre de livreController
      livreController.updateLivre(mockRequest, mockResponse);

          // Vérifie que la méthode status de l'objet mockResponse a été appelée avec 404
    // Vérifie que la méthode send de l'objet mockResponse a été appelée avec un objet contenant le message d'erreur
      sinon.assert.calledWith(mockResponse.status, 404);
      sinon.assert.calledWith(mockResponse.send, { message: 'Livre non trouvé' });

       // Rétablit la fonction updateLivre d'origine
      livreModel.updateLivre.restore();
    });
  });

  describe('createLivre', function () {
    it('should create a new livre', function () {

       // Données simulées du livre
      var mockLivre = { titre: 'Nouveau livre', description: 'Description du nouveau livre', idAuthor: 1 };

       // Objet de requête simulé
      var mockRequest = {
        body: mockLivre
      };

      // Objet de réponse simulé
      var mockResponse = {
        send: sinon.spy()
      };

      // Remplace la fonction createLivre de livreModel par une implémentation fictive
      sinon.stub(livreModel, 'createLivre').callsFake(function (livre, callback) {
        // On suppose que le livre est enregistré avec un nouvel ID
        callback(null, 1);
      });

       // Appelle la fonction createLivre de livreController
      livreController.createLivre(mockRequest, mockResponse);

      // Vérifie que la méthode send de l'objet mockResponse a été appelée avec le nouveau livre
      sinon.assert.calledWith(mockResponse.send, { id: 1, ...mockLivre });

      // Rétablit la fonction createLivre d'origine
      livreModel.createLivre.restore();
    });

    it('should handle error and send 500 status', function () {
     
      var mockLivre = { titre: 'Nouveau livre', description: 'Description du nouveau livre', idAuthor: 1 };
       // Erreur simulée
      var mockError = new Error('Database error');

      // Objet de requête simulé
      var mockRequest = {
        body: mockLivre
      };

      // Objet de réponse simulé
      var mockResponse = {
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      };

      // Remplace la fonction createLivre de livreModel par une implémentation fictive
      sinon.stub(livreModel, 'createLivre').callsFake(function (livre, callback) {
        callback(mockError);
      });

      // Appelle la fonction createLivre de livreController
      livreController.createLivre(mockRequest, mockResponse);

       // Vérifie que la méthode status de l'objet mockResponse a été appelée avec 500
      // Vérifie que la méthode send de l'objet mockResponse a été appelée avec un objet contenant le message d'erreur
      sinon.assert.calledWith(mockResponse.status, 500);
      sinon.assert.calledWith(mockResponse.send, { message: mockError.message });

       // Rétablit la fonction createLivre d'origine
      livreModel.createLivre.restore();
    });
  });

  describe('deleteLivre', function () {
    it('should delete the specified livre', function () {
      // ID du livre simulé
      var mockLivreId = 1;
       // Objet de requête simulé
      var mockRequest = {
        params: { id: mockLivreId }
      };
      // Objet de réponse simulé
      var mockResponse = {
        send: sinon.spy()
      };

        // Remplace la fonction deleteLivre de livreModel par une implémentation fictive
      sinon.stub(livreModel, 'deleteLivre').callsFake(function (id, callback) {
         // On suppose que le livre est supprimé avec succès
        callback(null, 1);
      });

      // Appelle la fonction deleteLivre de livreController
      livreController.deleteLivre(mockRequest, mockResponse);

          // Vérifie que la méthode send de l'objet mockResponse a été appelée avec un objet contenant le message de succès
      sinon.assert.calledWith(mockResponse.send, { message: 'Livre supprimé avec succès' });

         // Rétablit la fonction deleteLivre d'origine
      livreModel.deleteLivre.restore();
    });

    it('should handle error and send 500 status', function () {
       // ID du livre simulé et erreur simulée
      var mockLivreId = 1;
      var mockError = new Error('Database error');
      // Objet de requête simulé
      var mockRequest = {
        params: { id: mockLivreId }
      };

      // Objet de réponse simulé
      var mockResponse = {
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      };

      // Remplace la fonction deleteLivre de livreModel par une implémentation fictive
      sinon.stub(livreModel, 'deleteLivre').callsFake(function (id, callback) {
        // On suppose qu'une erreur s'est produite lors de la suppression du livre
        callback(mockError);
      });

      // Appelle la fonction deleteLivre de livreController
      livreController.deleteLivre(mockRequest, mockResponse);

      // Vérifie que la méthode status de l'objet mockResponse a été appelée avec 500
    // Vérifie que la méthode send de l'objet mockResponse a été appelée avec un objet contenant le message d'erreur
      sinon.assert.calledWith(mockResponse.status, 500);
      sinon.assert.calledWith(mockResponse.send, { message: mockError.message });
// Rétablit la fonction deleteLivre d'origine
      livreModel.deleteLivre.restore();
    });

    it('should handle livre not found and send 404 status', function () {
      var mockLivreId = 1;  // ID du livre simulé
      var mockRequest = { // Objet de requête simulé
        params: { id: mockLivreId }
      };
      var mockResponse = { // Objet de réponse simulé
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      };
// Remplace la fonction deleteLivre de livreModel par une implémentation fictive
      sinon.stub(livreModel, 'deleteLivre').callsFake(function (id, callback) {
        callback(null, 0); // On suppose que le livre n'a pas été trouvé
      });
// Appelle la fonction deleteLivre de livreController
      livreController.deleteLivre(mockRequest, mockResponse);

      // Vérifie que la méthode status de l'objet mockResponse a été appelée avec 404
    // Vérifie que la méthode send de l'objet mockResponse a été appelée avec un objet contenant le message d'erreur
      sinon.assert.calledWith(mockResponse.status, 404);
      sinon.assert.calledWith(mockResponse.send, { message: 'Livre non trouvé' });

  
      livreModel.deleteLivre.restore(); // Rétablit la fonction deleteLivre d'origine
    });
  });
});
