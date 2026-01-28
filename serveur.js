// Ici, je code mon serveur

/** J'importe le module HTTP est stocké dans la variable http.
 * L'instruction require permet de charger un module externe.
*/
const http = require('http');

// J'importe l'application Express depuis app.js
const app = require('./app');

// Je declare le port ou l'application va ecouter les requetes
const numeroPort = process.env.PORT || 3000;

app.set('port', numeroPort);

// Maintenant, je crée mon serveur en utilisant la méthode serveur du module HTTP.

const server = http.createServer(app);

/*const server = http.createServer((req, res) => {
    // Je définis l'en-tête de la réponse HTTP avec le code de statut 200 (OK) et le type de contenu.
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // J'envoie la réponse "Hello, World!" au client.
    res.end('Bonjour, je suis le serveur!\n');
});*/


// Je précise la date
const date = new Date();


// Je précise l'adresse et le port du serveur.
server.listen(numeroPort, () => {
    console.log('Le serveur est en cours d\'exécution sur http://localhost:', numeroPort);
    console.log('Date et heure : ' + date.toLocaleString());
});