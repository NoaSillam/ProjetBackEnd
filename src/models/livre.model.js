const cnx = require('../db/db-connexion');
const LivreConstructor = function(livre)
{
    this.idLivre = livre.idLivre;
    this.titre = livre.titre;
    this.description = livre.description;
}
getAllLivres = result_bdd_request =>{
    cnx.query("select idLivre, titre, description from livre", (error, response) => {
        if(error)
        {
            result_bdd_request(error);
        }
        result_bdd_request(null, response);
    });
};

module.exports = {
    getAllLivres
}
