let coins = Number(localStorage.getItem("coins")) || 1000;

let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

document.getElementById("coins").textContent = coins;

document.getElementById("items").textContent = inventory.length;

let opened = Number(localStorage.getItem("opened")) || 0;

document.getElementById("opened").textContent = opened;

let xp = opened * 10;

let level = Math.floor(xp / 100) + 1;

document.getElementById("xp").textContent = xp + " / " + (level * 100);

document.getElementById("level").textContent = level;
