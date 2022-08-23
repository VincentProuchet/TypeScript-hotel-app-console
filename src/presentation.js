// TODO  -- transformer ce script en classe 


// fichier module.js
// récupération du module `readline`
const { exit } = require('process');
let readline = require('readline');
const Service = require("./service");
const service = new Service.S();

// création d'un objet `rl` permettant de récupérer la saisie utilisateur
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
 * affiche le menu à l'utilisateur 
 * dans la console
 */
function start() {
    rl.question(mainMenu()
        , function (saisie) {
            //console.log(`Vous avez saisi : ${saisie}`);
            // oui les saisie clavier sont du texte
            switch (saisie) {
                case '1':
                    afficheClients();
                    start();
                    // return en remplacement de break resoud les problème de stack
                    return;
                case '2':
                    ajouterClient();
                    start();
                    return;
                case '3':
                    rechercherClientParNom();
                    start();
                    return;

                case '99':
                    // libération des resources
                    rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
                    exit(0);
                    break;
                // rebouclage du menu
                default:
                    console.log('default');
                    start();
                    return;

            }

        }

    );


}
/**
 * @returns la chaine de caractére représentant le menu principal de l'application console
 */
function mainMenu() {
    return " 1. Lister les clients  \n"
        + " 2. Ajouter un client  \n"
        + " 3. Rechercher un client  \n"
        + "99. Sortir "
        + "\n";

}
/**
 *  recupére la liste des client et l'affiche dans la console
 */
function afficheClients() {
    console.log('affiche les client');
    if (service.clients == null) {
        service.fetchListeClients();
    }
    console.log(service.clients);
}
/**
 * demande des entrées utilisateur et ajoute les entrées en tant que nouveau client dans la liste des clients
 */
function ajouterClient() {
    console.log("nouveau client");

}
/**
 * demande des entrées utilisateurs et execute des recherches croisée pour trouver un ou des clients correspondants
 * puis affiche les liste
 */
function rechercherClientParNom() {

    console.log("recherche un client");

    if (service.clients != null) {

    }

}


/**
 * les exports pour les accés aux fonctions
 */
exports.start = start;