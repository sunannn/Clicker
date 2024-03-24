const buttonShop = document.getElementById("buttonShop")
const shopButton = document.getElementsByClassName("shopId")

const damageShop = document.getElementById("damageShop")
const healthShop = document.getElementById("healthShop")
const heroImg = document.getElementById("heroImg")
const arrowImg = document.getElementById("arrow")
const money = document.getElementById("money")
const arrow = document.getElementById('level1');

let heroMoney = 0;
let heroScore = 0;
heroMoney = Number(localStorage.getItem('heroMoney'));
heroScore = Number(localStorage.getItem('heroScore'));

money.textContent = `Money: ${heroMoney}`;
score.textContent = `Score: ${heroScore}`;

localStorage.setItem('heroHealth', localStorage.getItem('health'))

healthShop.onclick = () =>{
    if (heroMoney >= 10){
        let health = Number(localStorage.getItem('heroHealth')) + 10;
        let Money = Number(localStorage.getItem('heroMoney')) - 10;
        localStorage.setItem('heroMoney', Money)
        localStorage.setItem('health', health)
        localStorage.setItem('heroHealth', localStorage.getItem('health'))
        heroMoney = Number(localStorage.getItem('heroMoney'));
        money.textContent = `Money: ${heroMoney}`;
    }else{
        alert('У тебя не хватает денег')
        return
    }
}

damageShop.onclick = () =>{
    if (heroMoney >= 10){
        let Money = Number(localStorage.getItem('heroMoney')) - 10;
        localStorage.setItem('heroMoney', Money)
        heroMoney = Number(localStorage.getItem('heroMoney'));
        money.textContent = `Money: ${heroMoney}`;
        let damage = Number(localStorage.getItem('damage')) + 5;
        localStorage.setItem('damage', damage)
    }else{
        alert('У тебя не хватает денег')
        return
    }
}

arrow.onclick = () =>{
    let damageEnemy1 = localStorage.getItem('damageEnemy1') * 1.3;
    let damageEnemy2 = localStorage.getItem('damageEnemy2') * 1.3;
    let enemyHealth1 = localStorage.getItem('enemyHealth1') * 1.3;
    let enemyHealth2 = localStorage.getItem('enemyHealth2') * 1.3;

    localStorage.setItem('enemyHealth1', enemyHealth1)
    localStorage.setItem('enemyHealth2', enemyHealth2)
    localStorage.setItem('damageEnemy1', damageEnemy1)
    localStorage.setItem('damageEnemy2', damageEnemy2)
}

