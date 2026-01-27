// Ici, nous créons notre application ExpressJs

// J'importe le framework Expressjs.
const express = require('express');

// J'initialise mon application Express.
const app = express();

// Je définis un middleware qui intercepte toutes les requêtes entrantes.
app.use((req, res, next) => {
    console.log('Bonjour, la requête a bien été prise en compte !');

    next();
    });
// Je définis un autre middleware pour illustrer le fonctionnement des middlewares.
app.use((req, res, next) => {
    res.json({message:'Je suis un middlware dans le serveur !'});

    next();
});

// Je définis un dernier middleware pour répondre aux requêtes.
app.use((req, res, next) => {
    console.log('Vous êtes bien sur le serveur de Chamssiddine!');
    next();
});

// J'ajoute un middlware qui gère la sécurité d'accées
app.use((req, res) => {
    // Je permet l'accés à mon API depuis n'importe quel origine
    res.setHeader('Access-Control-Allow-Origin', '*');
    // J'autorise certaines en-têtes dans les requêtes recues dans notre API.
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');

    // J'autorise certaines méthodes dans les requêtes avec les méthodes: GET, POST, PUT, DELETE, PATCH, OPTIONS
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// J'exporte l'application express sous forme de module. ainsi, l'application peut être importée dans d'autres.
module.exports = app;