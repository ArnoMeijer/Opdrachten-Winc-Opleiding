function calculateSupply (age, amountPerDay) {
    const oldAge = 80; 
    console.log ("You will need " + (((oldAge - age)*amountPerDay)*365) + " " + "to last you until the ripe old age of" + " " + oldAge);

}
calculateSupply (47, 20);
calculateSupply (10, 8);
calculateSupply (35, 70);