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

// Je dessines mes Routes avec Epress
app.get("/api/fruit", (req, res) => {
    console.log("Je passe dans la route /api/fruit");

    const fruit = [
        {
            id: 1,
            nom: "Pomme",
            description: "fruit saisonnier riche en vitamine C",
            prix: 3,
        }
    ];

    res.json(fruit);
});
// J'exporte l'application express sous forme de module. ainsi, l'application peut être importée dans d'autres.
module.exports = app;