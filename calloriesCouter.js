/*
KSalawa
App counting calories in a dish prepared, counting nutritio nand calories of individual ingredients, and a portion of a ready meal.
11 october 2020, writen while learning to code on codecademy.com
*/


/*
ingredients used:

100ml olive
kcal: 821
fat: 91.2


500g tomato passata
per 100g:
kcal       28
fat        0.1g
carb       5.1g
protein    1.4g


400g ikea meatballs
per 100g:
kcal       254
fat        20g
carb       4g
protein    14g

450g mushrom
per 100g:
kcal       108
fat        11g
carb       0.4g
protein    1.4g

900g sauerkraut
per 100g:
kcal       13
fat        0.5g
carb       1g
protein    0.8g

280g kielbasa zywiecka
per 100g:
kcal       216
fat        14g
carb       0.5g
protein    22g

350g kielbasa tounska
per 100g:
kcal       268
fat        9.2g
carb       2.3g
protein    13g

*/

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
const mushrrooms = ingredient('mushrooms', 450, 108, 11, 0.4, 1.4);
const sauerkraut = ingredient('sauerkraut', 900, 13, 0.5, 1, 0.8);
const kielbasaZywiecka = ingredient('kielbasa zywiecka', 280, 216, 14, 0.5, 22);
const kielbasaTorunksa = ingredient('kielbasa torunska', 350, 268, 9.2, 2.3, 13);

/*
console.log(oliveOil);
console.log(tomatoPassata);
console.log(ikeaMeatballs);
console.log(mushrrooms);
console.log(sauerkraut);
console.log(kielbasaZywiecka);
console.log(kielbasaTorunksa);
*/

const bigosIngredients = () => {
    console.log(`Ingredients used for Bigos on 11th of October 2020:

    ${oliveOil.name} - ${oliveOil.weight}g
    ${tomatoPassata.name} - ${oliveOil.weight}g
    ${ikeaMeatballs.name} - ${ikeaMeatballs.weight}g
    ${mushrrooms.name} - ${mushrrooms.weight}g
    ${sauerkraut.name} - ${sauerkraut.weight}g
    ${kielbasaZywiecka.name} - ${kielbasaZywiecka.weight}g
    ${kielbasaTorunksa.name} - ${kielbasaTorunksa.weight}g

    `)
};

const ingredientKcalPer100 = () => {
    console.log(`Kcal per 100g of individual ingredient are:

    ${oliveOil.name} - ${oliveOil.kcal}kcal
    ${tomatoPassata.name} - ${tomatoPassata.kcal}kcal
    ${ikeaMeatballs.name} - ${ikeaMeatballs.kcal}kcal
    ${mushrrooms.name} - ${mushrrooms.kcal}kcal
    ${sauerkraut.name} - ${sauerkraut.kcal}kcal
    ${kielbasaZywiecka.name} - ${kielbasaZywiecka.kcal}kcal
    ${kielbasaTorunksa.name} - ${kielbasaTorunksa.kcal}kcal

    `)
};
//callories in product used
const oliveOilKcal = oliveOil.kcal * (oliveOil.weight / 100);
const tomatoPassataKcal = tomatoPassata.kcal * (tomatoPassata.weight / 100);
const ikeaMeatballsKcal = ikeaMeatballs.kcal * (ikeaMeatballs.weight / 100);
const mushromsKcal = mushrrooms.kcal * (mushrrooms.weight / 100);
const sauerkrautKcal = sauerkraut.kcal * (sauerkraut.weight / 100);
const kielbasaZywieckaKcal = kielbasaZywiecka.kcal * (kielbasaZywiecka.weight / 100);
const kielbasaTorunksaKcal = kielbasaTorunksa.kcal * (kielbasaTorunksa.weight / 100);

console.log(oliveOilKcal);
console.log(tomatoPassataKcal);
console.log(ikeaMeatballsKcal);
console.log(mushromsKcal);
console.log(sauerkrautKcal);
console.log(kielbasaTorunksaKcal);
console.log(kielbasaZywieckaKcal);

console.log(`Total of calories used in Bigos:

${oliveOil.name}; ${oliveOilKcal}
${tomatoPassata.name}; ${tomatoPassataKcal}
${ikeaMeatballs.name}; ${ikeaMeatballsKcal}
${mushrrooms.name}; ${mushromsKcal}
${sauerkraut.name}; ${sauerkrautKcal}
${kielbasaZywiecka.name}; ${kielbasaZywieckaKcal}
${kielbasaTorunksa.name}; ${kielbasaTorunksaKcal}

`); 

const totatKcal = oliveOilKcal + tomatoPassataKcal + ikeaMeatballsKcal + mushromsKcal + sauerkrautKcal + kielbasaZywieckaKcal + kielbasaTorunksaKcal;
console.log(`Total callories in bigos: ${totatKcal}`)

