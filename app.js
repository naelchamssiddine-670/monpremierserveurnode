// Ici, nous créons notre application ExpressJs

// J'importe le framework Expressjs.
const express = require('express');

// J'initialise mon application Express.
const app = express();

// Je définis un middleware qui intercepte toutes les requêtes entrantes.
app.use((req, res, next) => {
    res.status(200).json({
        message: 'Bonjour, la requête a bien été prise en compte !'
    });
    next();
    });
// Je définis un autre middleware pour illustrer le fonctionnement des middlewares.
app.use((req, res) => {
    res.json('Je suis un middlware dans le serveur !');
});

// Je définis un dernier middleware pour répondre aux requêtes.
app.use((req, res) => {
    console.log('Vous êtes bien sur le serveur de Chamssiddine!');
    });

    
// J'exporte l'application express sous forme de module. ainsi, l'application peut être importée dans d'autres.
module.exports = app;