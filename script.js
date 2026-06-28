const coinsElement = document.getElementById("coins");
const openBtn = document.getElementById("openBtn");
const itemsContainer = document.getElementById("items");
const winItem = document.getElementById("winItem");
const inventory = document.getElementById("inventory");

let coins = Number(localStorage.getItem("coins")) || 1000;
let inv = JSON.parse(localStorage.getItem("inventory")) || [];

coinsElement.textContent = coins;

const prizes = [
    {name:"Common", color:"gray", chance:45},
    {name:"Rare", color:"blue", chance:30},
    {name:"Epic", color:"purple", chance:15},
    {name:"Legendary", color:"pink", chance:8},
    {name:"Mythic", color:"gold", chance:2}
];

function save(){
    localStorage.setItem("coins", coins);
    localStorage.setItem("inventory", JSON.stringify(inv));
}

function drawInventory(){
    inventory.innerHTML="";

    inv.forEach(item=>{
        const div=document.createElement("div");
        div.className="invItem "+item.color;
        div.textContent=item.name;
        inventory.appendChild(div);
    });
}

drawInventory();

function randomPrize(){

    let r=Math.random()*100;
    let s=0;

    for(const p of prizes){
        s+=p.chance;

        if(r<=s)
            return p;
    }

    return prizes[0];
}

function fillRoulette(){

    itemsContainer.innerHTML="";

    for(let i=0;i<40;i++){

        const p=prizes[Math.floor(Math.random()*prizes.length)];

        const div=document.createElement("div");

        div.className="card "+p.color;

        div.textContent=p.name;

        itemsContainer.appendChild(div);

    }

}

fillRoulette();

openBtn.onclick=function(){

    if(coins<100){

        alert("Недостаточно монет");

        return;

    }

    coins-=100;

    coinsElement.textContent=coins;

    fillRoulette();

    const prize=randomPrize();

    const cards=document.querySelectorAll(".card");

    cards[35].className="card "+prize.color;

    cards[35].textContent=prize.name;

    itemsContainer.style.transition="none";
    itemsContainer.style.transform="translateX(0px)";

    void itemsContainer.offsetWidth;

    itemsContainer.style.transition="transform 5s cubic-bezier(.15,.8,.2,1)";

    itemsContainer.style.transform="translateX(-5200px)";

    setTimeout(()=>{

        winItem.textContent="🎉 "+prize.name;

        winItem.className=prize.color;

        inv.unshift(prize);

        drawInventory();

        save();

    },5000);

}
