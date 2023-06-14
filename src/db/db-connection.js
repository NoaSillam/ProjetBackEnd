
const mongoose = require('monogoose');

mongoose.connect('mongodb+srv://test:<test>@cluster0.zodhzxb.mongodb.net/',
{
    useNewUrlParser:true,
    useUnifiedTopology: true})

    .then(()=>console.log('Connexion à MongoDB réussie !'))
    .catch(()=> console.log('Connexion à MongoDB échoué!'));




// -- enregistrement instance de donne dans la bdd
const Thing = require('./models/thing');

app.post('/api/stuff',(req, res, next)=>{
    delete req.body_id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(()=>res.status(201).json({message: 'objet enregistré !'}))
        .catch(error=>res.status(400).json({error}));
});


// --   recuperation des donnees de la bdd
app.post('/api/stuff',(req, res, next)=>{
    thing.find()
        .then(()=>res.status(200).json(things))
        .catch(error=>res.status(400).json({error}));
});



// recuperation unsitance specifique
app.get('/api/stuff/:id',(req, res, next)=>{
    Thing.find()
        .then(things=> res.status(200).json(things))
        .catch(error =>res.status(400).json(error))});


// mise a jour
app.put('/api/stuff/:id',(req, res, next)=>{
    Thing.updateOne({_id: req.params.id}, { ...req.body, _id: req.params.id})
        .then(() => res.status(200).json({message: 'objet modifie !'}))
        .catch(error =>res.status(400).json(error))});


// supprimer
app.delete('/api/stuff/:id',(req, res, next)=>{
    Thing.updateOne({_id: req.params.id})
        .then(() => res.status(200).json({message: 'objet supprime !'}))
        .catch(error =>res.status(400).json(error))});





