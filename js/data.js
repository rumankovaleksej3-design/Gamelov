// ===== Редкости =====

const RARITY = {
    COMMON: "common",
    RARE: "rare",
    EPIC: "epic",
    LEGENDARY: "legendary",
    MYTHIC: "mythic"
};

// ===== Кейсы =====

const CASES = {

classic:{

name:"Classic Case",

price:100,

items:[

{
name:"Forest Rifle",
rarity:RARITY.COMMON,
price:5
},

{
name:"Urban SMG",
rarity:RARITY.COMMON,
price:7
},

{
name:"Blue Pistol",
rarity:RARITY.RARE,
price:18
},

{
name:"Crimson AK",
rarity:RARITY.EPIC,
price:45
},

{
name:"Golden Knife",
rarity:RARITY.LEGENDARY,
price:250
},

{
name:"Dragon Gloves",
rarity:RARITY.MYTHIC,
price:800
}

]

},

neon:{

name:"Neon Case",

price:250,

items:[

{
name:"Neon Glock",
rarity:RARITY.COMMON,
price:15
},

{
name:"Neon MP9",
rarity:RARITY.RARE,
price:35
},

{
name:"Neon M4",
rarity:RARITY.EPIC,
price:90
},

{
name:"Neon AWP",
rarity:RARITY.LEGENDARY,
price:450
},

{
name:"Neon Butterfly",
rarity:RARITY.MYTHIC,
price:1200
}

]

},

dragon:{

name:"Dragon Case",

price:500,

items:[

{
name:"Dragon P250",
rarity:RARITY.RARE,
price:40
},

{
name:"Dragon AK",
rarity:RARITY.EPIC,
price:120
},

{
name:"Dragon AWP",
rarity:RARITY.LEGENDARY,
price:650
},

{
name:"Dragon Karambit",
rarity:RARITY.MYTHIC,
price:2000
}

]

}

};
