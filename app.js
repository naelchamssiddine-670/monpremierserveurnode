// Ici, nous créons notre application ExpressJs

// J'importe le framework Expressjs.
const express = require('express');

// J'initialise mon application Express.
const app = express();


app.use((req, res, next) => {
    res.status(200).json({
        message: 'La requête a bien été reçue !'
    });
});

// J'exporte l'application express sous forme de module. ainsi, l'application peut être importée dans d'autres fichiers JS.
module.exports = app;