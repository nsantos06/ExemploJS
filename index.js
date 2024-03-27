//console.log("JavaScript Funcionando!");

let firstName = 'Joao';
let lastName = 'Souza';

//console.log(firstName, lastName);

let age = 29;
age = 30;
//console.log(age);

let pen = {
    itemName: 'pen',
    price: 3,
    itemAvailable: true,
    itemColor: 'Red'
}

pen.itemColor = 'Blue';
//console.log(pen);

// Arrays
let cars = ['Gol', 'Uno', 'Palio', 'Celta', 'Onix'];
//console.log(cars[0]);

cars[1] = 'Fiesta';
//console.log(cars);

//Functions
function saleStatus(status, total){
    
    console.log('Transaction: ' + status + '! Total Amount $:' + total);

}

//saleStatus('Approved', 200);

function priceDiscount (discount, total){
    let valueDiscount = total * (discount/100);
    console.log('O desconto foi de ' + discount,'%', 'O total de ' + total);
    let valueafterDiscount = total - valueDiscount
    console.log('Preco com desconto aplicado ', valueafterDiscount);
    return valueafterDiscount;
}

priceDiscount(15, 200);

// Operadores Aritmeticos

let num1 =  1;
let num2 =  2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(Math.sqrt(81));

// Operadores de atribuicao

let num3 = 10;
console.log(num3 +=20);
console.log(num3 -=20);
console.log(num3 *=20);
console.log(num3 /=20);

//Operadores de Comparacao

let num4 = 10; 
console.log(num4 >0);
console.log(num4 <0);
console.log(num4 >=10);
console.log(num4 <=10);

console.log(num4 !=10);
console.log(num4 ==10);

// operadores de igualdade

let num5 = 1;
let num6 = '1';

console.log(num5 == num6);
console.log(num5 === num6);

//operadores ternarios

let driver = 120;
let speed = driver > 110 ? 'Above' : 'Below';
console.log(speed);

//operadores logicos com strings
// let minimumAge
let temIdadeMinima = false ; 
//  hasElectoralCard
let temTituloEleitor = true;

let podeVotar = temIdadeMinima && temTituloEleitor
console.log(podeVotar);

let podeViajar = !podeVotar; 
console.log(podeViajar);

//Operadores 
// clientColor, stockColor , soldColor
let corCliente = undefined;
let corEstoque = 'Black';
let corVendida = corCliente || corEstoque ;

console.log(corVendida);

//Precedencia de operadores

let num7 = 3 + 4 * 2;
console.log(num7);

// If and Else

let driverSpeed = 101; 

if (driverSpeed > 100){
    console.log('Above Speed Limit');
}
else if (driverSpeed >= 60 && driverSpeed <= 100){
    console.log('Normally Speed Limit');
}
else {
    console.log('Below Speed Limit');
}

let airportName="GRU";

switch (airportName){
    case 'MCO':
        console.log('Orlando International Airport');
        break;
    case 'GRU':
        console.log('Sao Paulo International Airport');
        break;
    case 'LAX':
        console.log('Los Angeles International Airport');
        break;
    case 'LAS':
        console.log('Las Vegas International Airport');
        break;
    default:
        console.log('Airport not found');
        break;
}

//For Loop
for(i=1; i<=10; i++){
    console.log('Numero', i);
}
// While Loop
// let index = 1;
// while(index<=10){
//     console.log('Item:', index);
//     index++;
// }

//Do while
// let index = 1;
// do{
//     console.log("Numero:", index);
//     index++;
// }while (index <=10){

// }

//For in loop

const myCar = {
    model: 'Fiesta',
    year: 2019,
    color: 'Red',
    km: 68000
}

// for(let key in myCar){
//     console.log(key, myCar[key]);
// }

//For of loop

const friends = ['Joao', 'Maria', 'Pedro', 'Jose'];

for(let friend of friends){
    console.log(friend);    
}