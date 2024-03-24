const start = document.getElementById('start');

start.onclick = () => {
    localStorage.clear();
    localStorage.setItem('heroHealth', 100);
    localStorage.setItem('heroScore', 0);
    localStorage.setItem('enemyHealth1', 100);
    localStorage.setItem('enemyHealth2', 160);
    localStorage.setItem('heroMoney', 0);
    localStorage.setItem('health', 100)
    localStorage.setItem('damage', 30)
    localStorage.setItem('damageEnemy1', 5)
    localStorage.setItem('damageEnemy2', 15)
}