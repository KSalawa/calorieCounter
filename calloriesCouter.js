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

const oliveOil = ingredient('olive oil', 100, 821, 91.2, 0, 0);
const tomatoPassata = ingredient('tomato passata', 500, 28, 0.1, 5.1, 1.4);
const ikeaMeatballs = ingredient('ikea meatballs', 400, 254, 20, 4, 14);
const mushrrooms = ingredient('mushrooms', 450, 108, 11, 0.4, 1.4);
const sauerkraut = ingredient('sauerkraut', 900, 13, 0.5, 1, 0.8);
const kielbasaZywiecka = ingredient('kielbasa zywiecka', 280, 216, 14, 0.5, 22);
const kielbasaTorunksa = ingredient('kielbasa torunska', 350, 268, 9.2, 2.3, 13);


console.log(oliveOil);
console.log(tomatoPassata);
console.log(ikeaMeatballs);
console.log(mushrrooms);
console.log(sauerkraut);
console.log(kielbasaZywiecka);
console.log(kielbasaTorunksa);




