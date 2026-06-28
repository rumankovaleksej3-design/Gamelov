// ================================
// Case Simulator
// Полностью новый cases.js
// ================================

let coins = Number(localStorage.getItem("coins")) || 900000;
let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

const coinsText = document.getElementById("coins");
const roulette = document.getElementById("rouletteItems");
const dropItem = document.getElementById("dropItem");

updateCoins();

function updateCoins() {
    coinsText.textContent = coins;
    localStorage.setItem("coins", coins);
}

function saveInventory() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
}

function randomItem(caseName) {

    const list = CASES[caseName];

    let chance = Math.random();

    if (chance < 0.60) {

        return list.common[Math.floor(Math.random() * list.common.length)];

    }

    if (chance < 0.85) {

        return list.rare[Math.floor(Math.random() * list.rare.length)];

    }

    if (chance < 0.97) {

        return list.epic[Math.floor(Math.random() * list.epic.length)];

    }

    return list.legendary[Math.floor(Math.random() * list.legendary.length)];

}

function createCard(item){

    const card=document.createElement("div");

    card.className="roulette-card "+item.rarity;

    card.innerHTML=`

        <img src="${item.image}">

        <h3>${item.name}</h3>

        <p>${item.price}$</p>

    `;

    return card;

}

function openCase(caseName,price){

    if(coins<price){

        alert("Недостаточно монет!");

        return;

    }

    coins-=price;

    updateCoins();

    roulette.innerHTML="";

    let items=[];

    for(let i=0;i<80;i++){

        items.push(randomItem(caseName));

    }

    const winner=randomItem(caseName);

    items[70]=winner;

    items.forEach(item=>{

        roulette.appendChild(createCard(item));

    });

    roulette.style.transition="none";

    roulette.style.transform="translateX(0px)";

    setTimeout(()=>{

        roulette.style.transition="transform 8s cubic-bezier(.08,.82,.17,1)";
        const cardWidth = 170;
        const centerOffset = (roulette.parentElement.offsetWidth / 2) - (cardWidth / 2);
        const position = -(70 * cardWidth) + centerOffset;

        roulette.style.transform = `translateX(${position}px)`;

    },50);

    setTimeout(()=>{

        inventory.push(winner);

        saveInventory();

        showWinner(winner);

    },8200);

}

function showWinner(item){

    dropItem.innerHTML=`

        <div class="winner-card ${item.rarity}">

            <img src="${item.image}">

            <h2>${item.name}</h2>

            <p>${item.price}$</p>

        </div>

    `;

    winnerAnimation();

}

function winnerAnimation(){

    dropItem.style.transform="scale(.7)";
    dropItem.style.opacity="0";

    setTimeout(()=>{

        dropItem.style.transition=".5s";
        dropItem.style.transform="scale(1)";
        dropItem.style.opacity="1";

    },50);

}

window.openCase=openCase;
const addCoinsBtn = document.getElementById("addCoinsBtn");

if(addCoinsBtn){

    addCoinsBtn.onclick = function(){

        coins += 1000000;

        localStorage.setItem("coins", coins);

        updateCoins();

        alert("+1 000 000 монет!");

    };

}
