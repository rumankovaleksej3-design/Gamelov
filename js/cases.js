// ===== Загрузка данных =====

let coins = Number(localStorage.getItem("coins")) || 1000;
let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

const coinsSpan = document.getElementById("coins");
const dropItem = document.getElementById("dropItem");

if (coinsSpan) {
    coinsSpan.textContent = coins;
}

// ===== Вероятности выпадения =====

const chances = {
    common: 50,
    rare: 30,
    epic: 14,
    legendary: 5,
    mythic: 1
};

// ===== Получить случайный предмет =====

function getRandomItem(caseId) {

    const currentCase = CASES[caseId];

    if (!currentCase) return null;

    const pool = [];

    currentCase.items.forEach(item => {

        const count = chances[item.rarity] || 1;

        for (let i = 0; i < count; i++) {
            pool.push(item);
        }

    });

    return pool[Math.floor(Math.random() * pool.length)];
}

// ===== Открыть кейс =====

function openCase(caseId, price) {

    if (coins < price) {

        alert("Недостаточно монет!");

        return;

    }

    coins -= price;

    const item = getRandomItem(caseId);

    inventory.unshift(item);

    localStorage.setItem("coins", coins);
    localStorage.setItem("inventory", JSON.stringify(inventory));

    if (coinsSpan) {
        coinsSpan.textContent = coins;
    }

    if (dropItem) {
        dropItem.innerHTML = `
            <div class="${item.rarity}">
                <h2>${item.name}</h2>
                <p>Редкость: ${item.rarity}</p>
                <p>Стоимость: ${item.price}</p>
            </div>
        `;
    }

    console.log("Выпал предмет:", item);
}
