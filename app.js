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
/*
app.use((req, res, next) => {
    res.json({message:'Je suis un middlware dans le serveur !'});

    next();
});*/

// Je définis un dernier middleware pour répondre aux requêtes.

app.use((req, res, next) => {
    console.log('Vous êtes bien sur le serveur de Chamssiddine!');
    next();
});

// J'ajoute un middlware qui gère la sécurité d'accées
app.use((req, res, next) => {
    // Je permet l'accés à mon API depuis n'importe quel origine
    res.setHeader('Access-Control-Allow-Origin', '*');
    // J'autorise certaines en-têtes dans les requêtes recues dans notre API.
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');

    // J'autorise certaines méthodes dans les requêtes avec les méthodes: GET, POST, PUT, DELETE, PATCH, OPTIONS
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Je dessine mes Routes d'API avec Express avec les méthodes GET

app.get('/api/fruit', (req, res) => {
    console.log("Je passe dans la routes des /api/fruit");
    // mon tableau de fruits
    const fruits = [
        {
            id: 1,
            nom: "pomme",
            description: "fruit saisonier riche en vitamine C",
            prix: 3
        },
        {
            id: 2,
            nom: "papaye",
            description: "Riche en vitamine C",
            prix: 2
        }
    ];

    // En terme de réponse, je renvoie le tableau de fruits

    res.json(fruits);
});

// Je définis une route d'API avec la méthode POST

app.post('/api/fruits', (req, res) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Fruit ajouté avec succès !'
    });
});


// J'exporte l'application express sous forme de module. ainsi, l'application peut être importée dans d'autres.
module.exports = app;