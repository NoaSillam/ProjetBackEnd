const assert = require('assert');
const sinon = require('sinon');
const autheurModel = require('../src/models/autheur.model');
const autheurController = require('../src/controllers/autheur.controller');

describe('autheurController', function () {
  describe('getAllAutheurs', function () {
    it('should return all autheurs', function () {
        // Données de simulation
      const expectedResult = ['autheur1', 'autheur2', 'autheur3'];
// Remplace la fonction getAllLivres de autheurModel par une implémentation fictive
      sinon.stub(autheurModel, 'getAllAutheurs').callsFake(function (callback) {
        callback(null, expectedResult);
      });

      const req = {};
      const res = {
        send: function (data) {
          assert.deepStrictEqual(data, expectedResult);
          autheurModel.getAllAutheurs.restore(); // Restoring the original function
        },
        status: function (statusCode) {
          assert.strictEqual(statusCode, 500);
          return this;
        }
      };
// Appelle la fonction getAllLivres de livreController

      autheurController.getAllAutheurs(req, res);
    });

    it('should handle error and return status 500', function () {
      const expectedError = new Error('Some error message');

      // Stubbing autheurModel.getAllAutheurs to return the error
      sinon.stub(autheurModel, 'getAllAutheurs').callsFake(function (callback) {
        callback(expectedError, null);
      });

      const req = {};
      const res = {
        send: function (data) {
          assert.fail('send should not be called');
        },
        status: function (statusCode) {
          assert.strictEqual(statusCode, 500);
          return this;
        },
        send: function (data) {
          assert.deepStrictEqual(data, {
            message: expectedError.message || 'Une erreur est survenue en essayant de récupérer les autheurs'
          });
                // Rétablit la fonction getAllLivres d'origine

          autheurModel.getAllAutheurs.restore();
        }
      };

      autheurController.getAllAutheurs(req, res);
    });
  });

  describe('getAutheurById', function () {
    it('should return the autheur with the specified id', function () {
      const autheurId = 1;
      const expectedAutheur = { id: autheurId, nom: 'Nom', prenom: 'Prénom' };

      sinon.stub(autheurModel, 'getAutheurById').callsFake(function (id, callback) {
        assert.strictEqual(id, autheurId);
        callback(null, expectedAutheur);
      });

      const req = {
        params: { id: autheurId }
      };
      const res = {
        send: function (data) {
          assert.deepStrictEqual(data, expectedAutheur);
          autheurModel.getAutheurById.restore();
        },
        status: function (statusCode) {
          assert.strictEqual(statusCode, 500);
          return this;
        }
      };

      autheurController.getAutheurById(req, res);
    });

    it('should handle error and return status 500', function () {
      const autheurId = 1;
      const expectedError = new Error('Some error message');

      sinon.stub(autheurModel, 'getAutheurById').callsFake(function (id, callback) {
        assert.strictEqual(id, autheurId);
        callback(expectedError, null);
      });

      const req = {
        params: { id: autheurId }
      };
      const res = {
        send: function (data) {
          assert.fail('send should not be called');
        },
        status: function (statusCode) {
          assert.strictEqual(statusCode, 500);
          return this;
        },
        send: function (data) {
          assert.deepStrictEqual(data, {
            message: expectedError.message || "Une erreur est survenue en essayant de récupérer l'autheur"
          });
          autheurModel.getAutheurById.restore();
        }
      };

      autheurController.getAutheurById(req, res);
    });

    it('should return 404 if autheur is not found', function () {
      const autheurId = 1;

      sinon.stub(autheurModel, 'getAutheurById').callsFake(function (id, callback) {
        assert.strictEqual(id, autheurId);
        callback(null, null);
      });

      const req = {
        params: { id: autheurId }
      };
      const res = {
        send: function (data) {
          assert.deepStrictEqual(data, { message: "autheur non trouvé" });
          autheurModel.getAutheurById.restore();
        },
        status: function (statusCode) {
          assert.strictEqual(statusCode, 404);
          return this;
        }
      };

      autheurController.getAutheurById(req, res);
    });
  });

describe('updateAutheur', function () {
    it('should update the specified autheur', function () {
      var mockAutheurId = 1;
      var mockAutheur = { id: mockAutheurId, nom: 'Autheur 1', prenom: 'Autheur 1' };
      var mockRequest = {
        params: { id: mockAutheurId },
        body: mockAutheur
      };
      var mockResponse = {
        send: sinon.spy()
      };

      sinon.stub(autheurModel, 'updateAutheur').callsFake(function (id, autheur, callback) {
        callback(null, 1);
      });

      autheurController.updateAutheur(mockRequest, mockResponse);

      sinon.assert.calledWith(mockResponse.send, { id: mockAutheurId, ...mockAutheur });

      autheurModel.updateAutheur.restore();
    });

    it('should handle error and send 500 status', function () {
      var mockAutheurId = 1;
      var mockAutheur = { id: mockAutheurId, nom: 'Autheur 1', prenom: 'Autheur 1' };
      var mockError = new Error('Database error');
      var mockRequest = {
        params: { id: mockAutheurId },
        body: mockAutheur
      };
      var mockResponse = {
        status: sinon.stub().returnsThis(),
        send: sinon.spy()
      };

      sinon.stub(autheurModel, 'updateAutheur').callsFake(function (id, autheur, callback) {
        callback(mockError);
      });

      autheurController.updateAutheur(mockRequest, mockResponse);

      sinon.assert.calledWith(mockResponse.status, 500);
      sinon.assert.calledWith(mockResponse.send, { message: mockError.message });

      autheurModel.updateAutheur.restore();
    });

    it('should handle autheur not found and send 404 status', function () {
        var mockAutheurId = 1;
        var mockAutheur = { id: mockAutheurId, nom: 'Autheur 1', prenom: 'Autheur 1' };
        var mockError = new Error('autheur non trouvé');
        var mockRequest = {
          params: { id: mockAutheurId },
          body: mockAutheur
        };
        var mockResponse = {
          status: sinon.stub().returnsThis(),
          send: sinon.spy()
        };
      
        sinon.stub(autheurModel, 'updateAutheur').callsFake(function (id, autheur, callback) {
          callback(null, 0);
        });
      
        autheurController.updateAutheur(mockRequest, mockResponse);
      
        sinon.assert.calledWith(mockResponse.status, 404);
        sinon.assert.calledWith(mockResponse.send, { message: 'Autheur non trouvé' }); // Correction ici
      
        autheurModel.updateAutheur.restore();
      });
  });
  describe('createAutheur', function () {
    it('should create a new autheur and return the created autheur', function () {
      const newAutheur = { nom: 'Nom', prenom: 'Prénom' };
      const createdAutheur = { id: 1, ...newAutheur };

      sinon.stub(autheurModel, 'createAutheur').callsFake(function (autheur, callback) {
        assert.deepStrictEqual(autheur, newAutheur);
        callback(null, 1);
      });

      const req = {
        body: newAutheur
      };
      const res = {
        send: function (data) {
          assert.deepStrictEqual(data, { id: 1, ...newAutheur });
          autheurModel.createAutheur.restore();
        },
        status: function (statusCode) {
          assert.strictEqual(statusCode, 500);
          return this;
        }
      };

      autheurController.createAutheur(req, res);
    });

    it('should handle error and return status 500', function () {
      const newAutheur = { nom: 'Nom', prenom: 'Prénom' };
      const expectedError = new Error('Some error message');

      sinon.stub(autheurModel, 'createAutheur').callsFake(function (autheur, callback) {
        assert.deepStrictEqual(autheur, newAutheur);
        callback(expectedError, null);
      });

      const req = {
        body: newAutheur
      };
      const res = {
        send: function (data) {
          assert.fail('send should not be called');
        },
        status: function (statusCode) {
          assert.strictEqual(statusCode, 500);
          return this;
        },
        send: function (data) {
          assert.deepStrictEqual(data, {
            message: expectedError.message || 'Une erreur est survenue lors de la création de l\'autheur'
          });
          autheurModel.createAutheur.restore();
        }
      };

      autheurController.createAutheur(req, res);
    });
  });

  describe('deleteAutheur', function () {
    it('should delete the autheur and return a success message', function () {
      const autheurId = 1;

      sinon.stub(autheurModel, 'deleteAutheur').callsFake(function (id, callback) {
        assert.strictEqual(id, autheurId);
        callback(null, 1);
      });

      const req = {
        params: { id: autheurId }
      };
      const res = {
        send: function (data) {
          assert.deepStrictEqual(data, { message: "Autheur supprimé avec succès" });
          autheurModel.deleteAutheur.restore();
        },
        status: function (statusCode) {
          assert.strictEqual(statusCode, 500);
          return this;
        }
      };

      autheurController.deleteAutheur(req, res);
    });

    it('should handle error and return status 500', function () {
      const autheurId = 1;
      const expectedError = new Error('Some error message');

      sinon.stub(autheurModel, 'deleteAutheur').callsFake(function (id, callback) {
        assert.strictEqual(id, autheurId);
        callback(expectedError, null);
      });

      const req = {
        params: { id: autheurId }
      };
      const res = {
        send: function (data) {
          assert.fail('send should not be called');
        },
        status: function (statusCode) {
          assert.strictEqual(statusCode, 500);
          return this;
        },
        send: function (data) {
          assert.deepStrictEqual(data, {
            message: expectedError.message || 'Une erreur est survenue lors de la suppression de l\'autheur'
          });
          autheurModel.deleteAutheur.restore();
        }
      };

      autheurController.deleteAutheur(req, res);
    });
  });
});
