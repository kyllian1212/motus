var btn = document.getElementById("btnreg");
var btnr = document.getElementById("retour");
var btnrm= document.getElementById("retourM");
var reg = document.getElementById("regles");
var mEssais = document.getElementById("messageEssais");
var cache = document.getElementById("cache");
var jouer = document.getElementById("jouer");
var jeu = document.getElementById("jeu");
var jeudem = document.getElementById("jeudem");
var grillenum = document.getElementById("grillenum");
var partcont = document.getElementById("partcont");
var test = document.getElementById("test"); //variable de test à supprimer dans le prog final
var motstrouv = document.getElementById("motstrouv");
var partnb = document.getElementById("partnb");
var nbtire = document.getElementById("nbtire");
var joueur = 1;
var grillej1temp = new Array(25);
var grillej1 = new Array();
var grillej2temp = new Array(25);
var grillej2 = new Array();
var nbg;

btn.onclick = function () {
    reg.style.top = "20px";
    cache.style.opacity = "40%";
    cache.style.height = "5000px";
    cache.style.width = "5000px";
    cache.style.visibility = "visible";
};

btnr.onclick = function () {
    reg.style.top = "-500px";
    cache.style.opacity = "0%";
    cache.style.visibility = "hidden";
};

//début partie
jouer.onclick = function ()
{
    jeudem.style.opacity = "0";
    jouer.disabled = true;
    jouer.value = "Jeu en cours";
    setTimeout(partie1, 250);
};
function partie1()
{
    jeudem.innerText = "Début de la partie!";
    jeudem.style.opacity = "100%";
    setTimeout(partie2, 1500);
}
function partie2()
{
    jeudem.style.opacity = "0";
    setTimeout(partie3, 500);
}
function partie3()
{
    jeudem.style.fontWeight = "bold";
    jeudem.innerText = "Grille des numéros";
    jeudem.style.opacity = "100%";
    jeu.style.height = "500px";
    grillenum.style.visibility = "visible";
    gengrilles();
    setTimeout(partie4, 500);
}
function partie4()
{
    grillenum.style.opacity = "100%";
    partcont.onclick = function () {
        grillenum.style.opacity = "0%";
        setTimeout(partie5, 400);
    };
}
function partie5()
{
    jeudem.style.opacity = "0";
    grillenum.style.visibility = "hidden";
    setTimeout(partiemots, 500);
}

//mot à trouver
function partiemots()
{
    nbtire.style.visibility = "hidden";
    jeudem.innerText = "Mot à trouver - Joueur " + joueur;
    jeudem.style.opacity = "100%";
    motstrouv.style.visibility = "visible";
    motstrouv.style.opacity = "100%";
    txtBoule(false);
    fillCircle(false);
}

function partienombres1()
{
    jeudem.style.opacity = "0%";
    motstrouv.style.visibility = "hidden";
    motstrouv.style.opacity = "0%";
    setTimeout(partienombres2, 500);
}

function partienombres2()
{
    jeudem.style.fontWeight = "bold";
    jeudem.innerText = "Grille des numéros";
    jeudem.style.opacity = "100%";
    grillenum.style.visibility = "visible";
    grillenum.style.opacity = "100%";
    partcont.style.visibility = "hidden";
    partnb.style.visibility = "visible";
    partnb.onclick = function () {
        partnb.style.visibility = "hidden";
        nbtire.style.visibility = "visible";
        nbtire.style.opacity = "100%";
        nbtire.innerText = "Tirage du nombre pour le joueur " + joueur + "...";
        setTimeout(partienombres3, 2000);
    };
}

function partienombres3()
{
    tirage();
}

function partienombres4() {
    nbtire.style.opacity = "100%";
    partcont.style.visibility = "visible";
    txtBoule(true);
    fillCircle(true);
}

//génération des grilles
function gengrilles()
{
    let val = 0;

    //joueur 1
    for(let i = 0; i < 25; i++)
    {
        let c = i+1;
        let nb = Math.floor(Math.random() * (69 - 1) + 1);
        while(nb%2 === 0)
        {
            nb = Math.floor(Math.random() * (69 - 1) + 1);
        }
        for(let verif = 0; verif < grillej1temp.length; verif++)
        {
            while(grillej1temp[verif] === nb)
            {
                nb = Math.floor(Math.random() * (69 - 1) + 1);
                while(nb%2 === 0)
                {
                    nb = Math.floor(Math.random() * (69 - 1) + 1);
                }
                verif = 0;
            }
        }
        grillej1temp[i] = nb;
        document.getElementById("c1" + c).innerText = grillej1temp[i].toString();
        console.log(grillej1temp[i]);
        console.log(grillej1temp);
    }
    for(let i = 1; i < 6; i++) //convertion du tableau 1D en 2D
    {
        grillej1[i-1] = new Array();
        for(let j = 0; j < 5; j++)
        {
            grillej1[i-1][j] = grillej1temp[val];
            val++;
        }
    }
    console.log(grillej1);
    val = 0;

    //joueur 2
    for(let i = 0; i < 25; i++)
    {
        let c = i+1;
        let nb2 = Math.floor(Math.random() * (70 - 2) + 2);
        while(nb2%2 === 1)
        {
            nb2 = Math.floor(Math.random() * (70 - 2) + 2);
        }
        for(let verif = 0; verif < grillej2temp.length; verif++)
        {
            while(grillej2temp[verif] === nb2)
            {
                nb2 = Math.floor(Math.random() * (70 - 2) + 2);
                while(nb2%2 === 1)
                {
                    nb2 = Math.floor(Math.random() * (70 - 2) + 2);
                }
                verif = 0;
            }
        }
        grillej2temp[i] = nb2;
        document.getElementById("c2" + c).innerText = grillej2temp[i].toString();
        console.log(grillej2temp[i]);
        console.log(grillej2temp);
    }
    for(let i = 1; i < 6; i++) //convertion du tableau 1D en 2D
    {
        grillej2[i-1] = new Array();
        for(let j = 0; j < 5; j++)
        {
            grillej2[i-1][j] = grillej2temp[val];
            val++;
        }
    }
    console.log(grillej2);
}

function tirage() {
    if (joueur === 1)
    {
        let nb = Math.floor(Math.random() * (79 - 1) + 1);
        while(nb%2 === 0)
        {
            nb = Math.floor(Math.random() * (79 - 1) + 1);
        }
        let val = 0;
        if (nb > 0 && nb < 70)
        {
            for(let i = 1; i < 6; i++)
            {
                for(let j = 0; j < 5; j++)
                {
                    val++;
                    if (grillej1[i-1][j] === nb)
                    {
                        grillej1[i-1][j] = "X";
                        document.getElementById("c1" + val).innerText = grillej1[i-1][j].toString();
                        document.getElementById("nbtire").innerText = nb;
                        nbg = nb;
                        partienombres4();
                        val++;
                    }
                    console.log(val);
                }
            }
            if(val===25)
            {
                tirage();
            }
        }
        else if (nb === 71 || nb === 73 || nb === 75 || nb === 77 || nb === 79)
        {
            document.getElementById("nbtire").innerText = "BOULE NOIRE";
            nbg = nb;
            joueur = 2;
            partienombres4();
        }
    }
    else if (joueur === 2)
    {
        let nb = Math.floor(Math.random() * (80 - 2) + 2);
        while(nb%2 === 1)
        {
            nb = Math.floor(Math.random() * (80 - 2) + 2);
        }
        let val = 0;
        if (nb > 0 && nb < 70)
        {
            for(let i = 1; i < 6; i++)
            {
                for(let j = 0; j < 5; j++)
                {
                    val++;
                    if (grillej2[i-1][j] === nb)
                    {
                        grillej2[i-1][j] = "X";
                        document.getElementById("c2" + val).innerText = grillej2[i-1][j].toString();
                        document.getElementById("nbtire").innerText = nb;
                        nbg = nb;
                        partienombres4();
                        val++;
                    }
                    console.log(val);
                }
            }
            if(val===25)
            {
                tirage();
            }
        }
        else if (nb === 72 || nb === 74 || nb === 76 || nb === 78 || nb === 80)
        {
            document.getElementById("nbtire").innerText = "BOULE NOIRE";
            joueur = 1;
            partienombres4();
        }
    }
}

// ---------------------------------------------------------------------------------------------------------------
// Ici, la requête sera émise de façon synchrone.
const req = new XMLHttpRequest();
req.open('GET', 'http://localhost/webServiceMotus/', false);
req.send(null);
const changTour= false;
const newMot= true;
let mot;
let mesMots;
let nbEssais=0;
const html={
    reponse : undefined,
    nomJ1: undefined,
    nomJ2:undefined
};
window.onload = function () {
    html.reponse = document.getElementById("rValue");
    //html.nomJ1= document.getElementById("j1Value");
    // html.nomJ2= document.getElementById("j2Value");
    //document.getElementById("btnConn" ).disabled = false;
    if (req.status === 200) {
        mesMots = JSON.parse(req.responseText);
    } else {
        console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    }

    initJeu(mesMots);
};
function connexion()
{

}
function initJeu(){
    let longueurTab = mesMots.length;
    let i = Math.floor(Math.random()*longueurTab+1);
    console.log(mesMots[i]);
    mot = mesMots[i].mots;
    mot = mot.toUpperCase();
    console.log (mot);
    document.getElementById("leMot").textContent = mot;
}


function resetGame(boolPartie) {
    if(joueur === 1)
    {
        joueur = 2;
    }
    else if(joueur === 2)
    {
        joueur = 1;
    }
    jeudem.innerText = "Mot à trouver - Joueur " + joueur;
    if(boolPartie===true){
        nbEssais=0;
        document.getElementById("tabReponse").classList.add("tableauVide");
        let table =document.getElementById("tableReponse");
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }
        initJeu();
    }

}

function checkReponse(){
    console.log(nbEssais);
    var monMot = html.reponse.value.toUpperCase();
    if (monMot.length < mot.length) {
        addRow(monMot);
        mEssais.style.top = "20px";
        cache.style.opacity = "40%";
        cache.style.height = "5000px";
        cache.style.width = "5000px";
        cache.style.visibility = "visible";
        document.getElementById("messageErreur").innerText = "Votre mot est d'une longueur inférieure à " + mot.length;
        btnrm.onclick = function () {
            mEssais.style.top = "-500px";
            cache.style.opacity = "0%";
            cache.style.visibility = "hidden";
            resetGame(changTour);
        };

    } else if (monMot.length > mot.length) {
        addRow(monMot);
        mEssais.style.top = "20px";
        cache.style.opacity = "40%";
        cache.style.height = "5000px";
        cache.style.width = "5000px";
        cache.style.visibility = "visible";
        document.getElementById("messageErreur").innerText = "Votre mot est d'une longueur supérieure à " + mot.length;
        btnrm.onclick = function () {
            mEssais.style.top = "-500px";
            cache.style.opacity = "0%";
            cache.style.visibility = "hidden";
            resetGame(changTour);
        };

    } else {
        addRow(monMot);
        if (monMot === mot) {
            mEssais.style.top = "20px";
            cache.style.opacity = "40%";
            cache.style.height = "5000px";
            cache.style.width = "5000px";
            cache.style.visibility = "visible";
            document.getElementById("messageErreur").innerText = "Bravo! Vous avez trouvé " + mot;
            btnrm.onclick = function () {
                mEssais.style.top = "-500px";
                cache.style.opacity = "0%";
                cache.style.visibility = "hidden";
                partienombres1();
                Continue();
            };
        }
    }
    nbEssais++;
    document.getElementById("rValue").value = "";
    verifEssais();
}


function generate_table(monMot){
    var tailleMot = monMot.length;
    let leMot= verifTaille(tailleMot,monMot);
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
    var tableBody= document.getElementById("tableReponse");
    // creating all cells
    for (var i = 0; i < 1; i++) {
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j <8 ; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            cell.setAttribute("width","20px");
            var cellText = document.createTextNode(leMot[j]);
            cell.appendChild(cellText);
            row.appendChild(cell);

            if(leMot[j]===mot[j]){

                cell.setAttribute("bgcolor","#d62932");
            }
            else{
                memeLettre(cell,leMot[j],mot);
            }

        }

        // add the row to the end of the table body
        tableBody.appendChild(row);
    }


}
function memeLettre(cell,lettre,leMot){
    for (var i=0;i<leMot.length;i++){
        if(lettre ===leMot[i]){
            cell.setAttribute("bgcolor","#fcb800");
        }
    }
}
function txtBoule(noEff){
    var canvas = document.getElementById("unTexte");
    var ctx = canvas.getContext("2d");
    if(noEff == true)
    {
        ctx.font = "30px Arial";
        ctx.fillText(nbg, 10, 50);
    }
    else
    {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
}

function fillCircle(noEff)
{
    var canvas = document.getElementById("unCanvas");
    var context = canvas.getContext("2d");
    if(noEff == true)
    {
        context.beginPath();
        if( nbg >=71 && nbg <=80){
            context.fillStyle="black";
        }
        else if (joueur === 1){
            context.fillStyle="yellow";
        }
        else{
            context.fillStyle="#4169E1";
        }
        context.arc(80, 80, 70, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
        document.getElementById("unCanvas").classList.remove("CanvasInvisible");
    }
    else
    {
        document.getElementById("unCanvas").classList.add("CanvasInvisible");
    }
}

function addRow(monMot){
    document.getElementById("tabReponse").classList.remove("tableauVide");
    generate_table(monMot);
}
function verifTaille(tailleMot,monMot){
    if(tailleMot<8){
        let dif = 8-tailleMot
        for (let i=0;i<dif;i++){
            monMot+=".";
        }
        console.log(monMot)
    }
    return monMot;
}

function verifEssais(){
    if (nbEssais  === 6)
    {
        mEssais.style.top = "20px";
        cache.style.opacity = "40%";
        cache.style.height = "5000px";
        cache.style.width = "5000px";
        cache.style.visibility = "visible";
        document.getElementById("messageErreur").innerText = "Vous avez effectué le nombre d'essais maximum";
        btnrm.onclick = function () {
            mEssais.style.top = "-500px";
            cache.style.opacity = "0%";
            cache.style.visibility = "hidden";
            resetGame(newMot);
        };

    }
}
function Continue(){
    nbEssais=0;
    document.getElementById("tabReponse").classList.add("tableauVide");
    let table =document.getElementById("tableReponse");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    initJeu();
}
