// 1. Create 10 variables
let var1 = 5;
let var2 = 10;
let var3 = 15;
let var4 = 20;
let var5 = 25;
let var6 = 30;
let var7 = 35;
let var8 = 40;
let var9 = 45;
let var10 = 50;



// 2. Perform calculations(*operator) on vars and create new Vars
let sum = var1 + var2;  // 5 + 10 = 15
let product = var3 * var4;  // 15 * 20 = 300
let difference = var5 - var6;  // 25 - 30 = -5
let quotient = var7 / var8;  // 35 / 40 = 0.875
let remainder = var9 % var10;  // 45 % 50 = 45



// 3. Create 3 if Statements and test their outputs in console.
if (sum > 10) {
    console.log("Sum is greater than 10");
} else {
    console.log("Sum is not greater than 10");
}

if (product === 300) {
    console.log("Product is exactly 300");
} else {
    console.log("Product is not 300");
}

if (difference < 0) {
    console.log("Difference is negative");
} else {
    console.log("Difference is non-negative");
}


// 4. Use 2 Logical Operators
let logicalAnd = (var1 < var2) && (var3 > var4);  // true && false => false
let logicalOr = (var5 === var6) || (var7 !== var8);  // false || true => true



 // 5. Interpolate All 10 of your variables in a console log
 console.log(`Variables: var1=${var1}, var2=${var2}, var3=${var3}, var4=${var4}, var5=${var5}, var6=${var6}, var7=${var7}, var8=${var8}, var9=${var9}, var10=${var10}`);