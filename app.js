let joueur_score = 0;
let computeur_score = 0;

const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultat = document.querySelector('.resultat > p');
const pierre = document.getElementById('p');
const feuille = document.getElementById('f');
const ciseaux = document.getElementById('c');
const choix = {"p": "Pierre", "f": "Feuille", "c": "Ciseaux"};

function fingame(){
    if (joueur_score == 10){
        alert("gagné :) ");
        window.location.reload();
    }
    if (computeur_score == 10){
        alert("Perdu :( ");
        window.location.reload();
    }
    
}
function computerChoix(){
    const choix = ["p", "f", "c"];
    const randomNumber = Math.floor(Math.random()*3);
    return choix[randomNumber];
}

function win(user, computer){
    joueur_score++;
    userScoreSpan.innerHTML=joueur_score;
    resultat.innerHTML = `${choix[user]} contre ${choix[computer]} : GAGNEE`;
    document.getElementById(user).classList.add('green-ring');
    setTimeout(() => {document.getElementById(user).classList.remove('green-ring')}, 500);
    
}

function lose(user, computer){
    computeur_score++;
    computerScoreSpan.innerHTML = computeur_score;
    resultat.innerHTML = `${choix[user]} contre ${choix[computer]} : PERDU`;
    document.getElementById(user).classList.add('red-ring');
    setTimeout(() => {document.getElementById(user).classList.remove('red-ring')}, 500);
}

function par(user, computer){
    resultat.innerHTML = `${choix[user]} contre ${choix[computer]} : EGLITE`;
    document.getElementById(user).classList.add('gray-ring');
    setTimeout(() => {document.getElementById(user).classList.remove('gray-ring')}, 500);
}

function game(user) {
    const computer = computerChoix();
    switch (user + computer){
        case "pc":
        case "fp":
        case "cf":
            win(user, computer)
            break;
        case "cp":
        case "pf":
        case "fc":
            lose(user, computer);
            break;
        case "pp":
        case "ff":
        case "cc":
            par(user, computer);
            break;
    }
    fingame();
}

function main(){
    pierre.addEventListener('click', function(){
        game("p");
    });    
    
    feuille.addEventListener('click', function(){
        game("f");
    });

    ciseaux.addEventListener('click', function(){
        game("c");
    });
}

main();