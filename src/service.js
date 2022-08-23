
class Service {
    clients = null;
    ready = false;
    request;
    static CLIENT_API_URI = 'https://jsonplaceholder.typicode.com/users';
    constructor() {
        this.ready = true;
        this.clients = null;
        this.request = require('request');

    }


    async fetchListeClients() {
        console.log("recupération liste des clients ");
        this.ready = false;
        // importation de la librairie request
        // recherche par défaut dans le répertoire node_modules

        // Envoie de la requête http
        // err -> objet erreur en cas de code 4XX ou 5XX
        // res -> objet réponse HTTP complet
        // body -> corps de la réponse
        // L'option { json: true } permet d'obtenir un objet JavaScript dans body (au lieu
        // d'une chaîne de caractères).

        this.request(Service.CLIENT_API_URI, { json: true },
            (err, res, body) => {
                if (err) { returnconsole.log('Erreur', err); }
                this.clients = body;
                this.ready = true;
            }
        )

        // fin de la promesse
    };

    ajouterUnClient() {
        console.log("ajout d'un client");

    }

    rechercherClient(client = { userId: "", id: "", title: "", body: "" }) {
        console.log("recherche d'un clients");

    }

};
exports.S = Service;