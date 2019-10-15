function calculateDiscountedPrice (totalAmount, discount) {
console.log("Total ammount = " + totalAmount + " " + "euro");
console.log("Amount after discount = " + (totalAmount - discount) + " " + "euro");

}
calculateDiscountedPrice(10, 2);

function calculateDiscountedPriceOver25 (totalAmount, discount) {
    console.log("Total ammount = " + totalAmount + " " + "euro");
    if (totalAmount >= 25) {
    console.log("Amount after discount = " + (totalAmount - discount) + " " + "euro");
    }
    }
    calculateDiscountedPriceOver25(27, 2);