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