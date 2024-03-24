let heroHealth = 100;
let heroScore = 0;
let enemyHealth1 = 100;
let enemyHealth2 = 160;
let enemyHealth3 = 100;
let heroMoney = 0;
let sumEnemyHealth = 0;
let damage = 0;
let audioEnemy;
let audioEnd;
audioEnemy = new Audio("./audio/dieEnemy.mp3")

const imgAudio = document.getElementById("imgAudio")
const buttonForAudio = document.getElementById("buttonForAudio")
const hero = document.getElementsByClassName("hero");
const heroImg = document.getElementById("heroImg");
const heroImg1 = document.getElementById("heroImg1");
const health = document.getElementById('lifeLine1');
const enemy1 = document.getElementById('boxEnemy1');
const enemy2 = document.getElementById('boxEnemy2');
const enemy3 = document.getElementById('boxEnemy3');
const heroLifeLine = document.getElementById('lifeLine');
const lineEnemy1 = document.getElementById('lineEnemy1');
const lineEnemy2 = document.getElementById('lineEnemy2');
const lineEnemy3 = document.getElementById('lineEnemy3');
const score = document.getElementById('score');
const money = document.getElementById('money');
const arrow = document.getElementById('arrow');
document.getElementById("heroImg").classList.add("animated-element");
document.getElementById("heroImg1").classList.add("animated-element1");

heroMoney = Number(localStorage.getItem('heroMoney'));
heroScore = Number(localStorage.getItem('heroScore'));
heroHealth = Number(localStorage.getItem('heroHealth'));
enemyHealth1 = Number(localStorage.getItem('enemyHealth1'));
enemyHealth2 = Number(localStorage.getItem('enemyHealth2'));
enemyHealth3 = Number(localStorage.getItem('enemyHealth1'));
lineEnemy1.style.width = `${enemyHealth1 * 2}px`;
lineEnemy2.style.width = `${enemyHealth2 * 1.33}px`;
lineEnemy3.style.width = `${enemyHealth3 * 2}px`;
money.textContent = `Money: ${heroMoney}`;
score.textContent = `Score: ${heroScore}`;
heroLifeLine.style.width = `${heroHealth * 2}px`;
damage = Number(localStorage.getItem('damage'));

//урон героя

function Atac(enemy, enemyHealth, lineEnemy, enemyScore, length, enemy1, coins, damage){ 

    enemy.addEventListener('click', function(){
        if (enemy1 === '1'){
            audioEnemy.play();
            enemyHealth1 -= damage;
            enemyHealth = enemyHealth - damage;
        }else if(enemy1 === '2'){
            audioEnemy.play();
            enemyHealth2 -= damage;
            enemyHealth = enemyHealth - damage;
        }else if(enemy1 === '3'){
            audioEnemy.play();
            enemyHealth3 -= damage;
            enemyHealth = enemyHealth - damage;
        }

        if(enemyHealth <= 0){
            heroScore += enemyScore;
            score.textContent = `Score: ${heroScore}`;
            lineEnemy.style.width = `0px`;
            enemy.style.display = 'none';
            heroMoney = heroMoney + coins;
            money.textContent = `Money: ${heroMoney}`;
            if (enemyHealth1 <= 0){enemyHealth1 = 0;}
            if (enemyHealth2 <= 0){enemyHealth2 = 0;}
            if (enemyHealth3 <= 0){enemyHealth3 = 0;}
            localStorage.setItem('heroScore', heroScore)
            localStorage.setItem('heroMoney', heroMoney)
        }else{
            if (enemy1 === '1'){
                lineEnemy.style.width = `${enemyHealth1 * length}px`;
            }else if(enemy1 === '2'){
                lineEnemy.style.width = `${enemyHealth2 * length}px`;
            }else if(enemy1 === '3'){
                lineEnemy.style.width = `${enemyHealth3 * length}px`;
            }
        }

        sumEnemyHealth = enemyHealth1 + enemyHealth2 + enemyHealth3;


        if (sumEnemyHealth === 0){
            arrow.style.display = 'inline-block';
        }
    });
}

Atac(enemy1, enemyHealth1, lineEnemy1, 100, 2, '1', 10, damage)
Atac(enemy2, enemyHealth2, lineEnemy2, 200, 1.33, '2', 25, damage)
Atac(enemy3, enemyHealth3, lineEnemy3, 100, 2, '3', 10, damage)

// востановление hp

document.addEventListener('keydown', function(event) {
    if (event.key === 'q' || event.key === 'й') {
        const healthToRestore = Math.floor(heroHealth * 0.6);
        heroHealth += healthToRestore;
        if (heroHealth > 100) {
            heroHealth = 100;
        }
        heroLifeLine.style.width = `${heroHealth * 2}px`;
    }
});

//атака врага
/*
let enemyAtac1 = setInterval(function() {
    if (enemyHealth1 <= 0){
        clearInterval(enemyAtac1);
        return
    }
    if (heroHealth <= 0) {
        heroHealth = 0;
        heroLifeLine.style.width = `0px`;
        main.style.display = "none"
        audioEnd = new Audio("./audio/end.mp3")
        audioEnd.play()
        document.body.style.backgroundImage = "url('./img/game over.gif')"
        localStorage.clear()
        return
    } else {
        heroHealth -= Number(localStorage.getItem('damageEnemy1'));
        heroLifeLine.style.width = `${heroHealth * 2}px`;
        localStorage.setItem('heroHealth', heroHealth);
    }
}, 3000);

let enemyAtac2 = setInterval(function() {
    if (enemyHealth2 <= 0){
        clearInterval(enemyAtac2);
        return
    }
    if (heroHealth <= 0) {
        heroHealth = 0;
        heroLifeLine.style.width = `0px`;
        main.style.display = "none"
        audioEnd = new Audio("./audio/end.mp3")
        audioEnd.play()
        document.body.style.backgroundImage = "url('./img/game over.gif')"
        localStorage.clear()
        return
    } else {
        heroHealth -= Number(localStorage.getItem('damageEnemy2'));
        heroLifeLine.style.width = `${heroHealth * 2}px`;
        localStorage.setItem('heroHealth', heroHealth);
    }
}, 5000);

let enemyAtac3 = setInterval(function() {
    if (enemyHealth3 <= 0){
        clearInterval(enemyAtac3);
        return
    }
    if (heroHealth <= 0) {
        heroHealth = 0;
        heroLifeLine.style.width = `0px`;
        main.style.display = "none"
        audioEnd = new Audio("./audio/end.mp3")
        audioEnd.play()
        document.body.style.backgroundImage = "url('./img/game over.gif')"
        localStorage.clear()
        return
    } else {
        heroHealth -= Number(localStorage.getItem('damageEnemy1'));
        heroLifeLine.style.width = `${heroHealth * 2}px`;
        localStorage.setItem('heroHealth', heroHealth);
    }
}, 3000);
*/