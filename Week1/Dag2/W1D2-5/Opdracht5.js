const age = 26;

if (age > 17) {

    console.log ("Je bent van harte welkom in onze bar.")

} else {

    console.log ("Je mag niet naar binnen, pas als je 18 bent.")
}

const isFemale = false;

if (isFemale) {

    console.log ("Je bent een vrouw en mag gratis naar binnen.")

} else {

    console.log ("Je bent een man en moet betalen, maar er zijn wel veel vrouwen binnen.")
}

const driverStatus = "bob";

if (driverStatus == "bob") {

    console.log ("Je bent de bob en mag rijden vanavond.")
} else {

    console,log ("Je bent niet de bob, laat je rijden.")
}

if (age >= 18 && age <= 25) {

    console.log ("Je krijgt 50% korting op de drankjes vanavond.")
} else {

    console.log ("Je betaalt de volle mep, maar dat lukt vast wel.")
}

const name = "Arno";

if (name === "Sarah" || name === "Bram") {

    console.log ("Gefeliciteerd, omdat we 50 jaar bestaan en je naam Bram of Sarah is, krijg je een gratis biertje van ons.")
} 

const totalAmount = 100;

if (totalAmount >= 25 && totalAmount < 50) {
    
    console.log ("Gefeliciteerd, je krijgt bij deze bestelling een gratis portie (vega)bitterballen.");

}

else if (totalAmount >= 50 && totalAmount <100) {

    console.log ("Gefeliciteerd, je krijgt bij deze bestelling een gratis portie nachos.");

}

else if (totalAmount >= 100) {

    console.log ("Gefeliciteerd, je krijgt bij deze bestelling een gratis fles champagne.");

}