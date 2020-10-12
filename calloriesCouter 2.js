const ingredient = (name, weight, kcal, fat, carb, protein) => {
    return {
        name,
        weight,
        kcal,
        fat,
        carb,
        protein
    }
};
//objects of exact ingredients used to make bigos
const oliveOil = ingredient('olive oil', 100, 821, 91.2, 0, 0);
const tomatoPassata = ingredient('tomato passata', 500, 28, 0.1, 5.1, 1.4);
const ikeaMeatballs = ingredient('ikea meatballs', 400, 254, 20, 4, 14);
const mushrooms = ingredient('mushrooms', 450, 108, 11, 0.4, 1.4);
const sauerkraut = ingredient('sauerkraut', 900, 13, 0.5, 1, 0.8);
const kielbasaZywiecka = ingredient('kielbasa zywiecka', 280, 216, 14, 0.5, 22);
const kielbasaTorunksa = ingredient('kielbasa torunska', 350, 268, 9.2, 2.3, 13);



const bigosIngredients = [oliveOil, tomatoPassata, ikeaMeatballs, mushrooms, sauerkraut, kielbasaZywiecka, kielbasaTorunksa];
//console.log(bigosIngredients);
const caloriesInBigosArr = [];
const fatInBigosArr = [];
const carbInBigosArr = [];
const proteinInBigosArr = [];


//loop through ingredients and add total calories by weight to caloriesInBigos array
for (i = 0; i < bigosIngredients.length; i++) {
    caloriesInBigosArr.push(bigosIngredients[i].kcal * (bigosIngredients[i].weight / 100));
    //console.log(bigosIngredients[i].kcal);
}

//loop through ingredients and add total fats by weight to fatInBigos array 1g of fat is 9kcal
for (i = 0; i < bigosIngredients.length; i++) {
    fatInBigosArr.push((bigosIngredients[i].fat * (bigosIngredients[i].weight / 100)) * 9);
    //console.log(bigosIngredients[i].kcal);
}

//loop through ingredients and add total carb by weight to carbInBigos array 1g of fat is 4kcal
for (i = 0; i < bigosIngredients.length; i++) {
    carbInBigosArr.push((bigosIngredients[i].carb * (bigosIngredients[i].weight / 100)) * 4);
    //console.log(bigosIngredients[i].kcal);
}
//loop through ingredients and add total protein by weight to proteinInBigos array 1g of fat is 4kcal
for (i = 0; i < bigosIngredients.length; i++) {
    proteinInBigosArr.push((bigosIngredients[i].protein * (bigosIngredients[i].weight / 100)) * 4);
    //console.log(bigosIngredients[i].kcal);
}



//add up array values
const sumKcal = caloriesInBigosArr.reduce(function(a, b){
    return Math.round(a + b);
    
}, 0);

const sumFat = fatInBigosArr.reduce(function(a, b){
    return Math.round(a + b);
}, 0);

const sumCarb = carbInBigosArr.reduce(function(a, b){
    return Math.round(a + b);
}, 0);

const sumProtein = proteinInBigosArr.reduce(function(a, b){
    return Math.round(a + b);
}, 0);



//console.log(sumKcal);
//console.log(sumFat);
//console.log(sumCarb);
//console.log(sumProtein);
//console.log(totalCalorieFromIngredients);

const totalCalorieFromIngredients = [sumFat, sumCarb, sumProtein];
const sumKcalFromIngredients = totalCalorieFromIngredients.reduce(function(a, b){
    return Math.round(a + b);
}, 0);
/*
console.log(`Total calories by label: ${sumKcal}`);
console.log(`Total caloreis from ingredients: ${sumKcalFromIngredients}`);
console.log(`${Math.round(sumFat / sumKcal * 100) }% of FAT`);
console.log(`${Math.round(sumCarb / sumKcal * 100) }% of CARB`);
console.log(`${Math.round(sumProtein / sumKcal * 100) }% of PROTEIN`);

console.log(bigosIngredients);
*/

const bigosIngredientArr = [];
for (i = 0; i < bigosIngredients.length; i++) {
    bigosIngredientArr.push(bigosIngredients[i].name);
};

//console.log(bigosIngredientArr);

const ingredientsList = bigosIngredientArr.join(', ');
//console.log(ingredientsList);

console.log(`12 Oct 2020 Bigos:

Ingredients used:
${ingredientsList}

total calories: ${sumKcal}

 
`)
console.log(`${Math.round(sumFat / sumKcal * 100) }% of FAT`);
console.log(`${Math.round(sumCarb / sumKcal * 100) }% of CARB`);
console.log(`${Math.round(sumProtein / sumKcal * 100) }% of PROTEIN`);