
let calc = [{"4":4}, {"5":5}, {"6":6}, {"9":9}]
let result = {}


console.log(typeof calc)
console.log(typeof result)

console.log({"4":500}.hasOwnProperty("5"))

const obj = {
    a: 'test1',
    b: 'test2'
  };

  console.log(Object.values(obj));
  if (Object.values(obj).indexOf('test1') > -1) {
    console.log('has test1');
  }

  let ingredients = [ { quantity: '8',
  unit: 'fl oz',
  name: 'pasteurized liquid egg whites' },
{ quantity: '32', unit: 'oz', name: 'powdered sugar' },
{ quantity: '0.75', unit: 'tsp', name: 'salt' },
{ quantity: '32', unit: 'oz', name: 'unsalted butter' },
{ quantity: '2.5', unit: 'tbsp', name: 'vanilla extract' },
{ quantity: '1', unit: 'oz', name: 'unsalted butter' },
{ quantity: '21', unit: 'oz', name: 'granulated sugar' },
{ quantity: '6', unit: 'pc', name: 'eggs' },
{ quantity: '20.25', unit: 'oz', name: 'all-purpose flour' },
{ quantity: '2', unit: 'tsp', name: 'salt' },
{ quantity: '2', unit: 'tbsp', name: 'baking powder' },
{ quantity: '2.5', unit: 'cups', name: 'milk' },
{ quantity: '1', unit: 'tbsp', name: 'vanilla extract' } ]

var calculator_funcs = [];

function check_exist(ingr){
    for (var element of calculator_funcs){
        if (ingr.name === element.name){
            return true
        }
    };
    return false
}

function edit_ing_quantity(ingr){
    for (var element of calculator_funcs){
        if (ingr.name === element.name){
            element.quantity = (parseFloat(element.quantity) + parseFloat(ingr.quantity)).toString()
        }
    } 
}

for (var ing of ingredients){
    if (check_exist(ing)){
        edit_ing_quantity(ing)
    }else{
        calculator_funcs.push(ing)
    }
};

console.log(calculator_funcs)