console.log("JavaScript Funcionando!");

let firstName = 'Joao';
let lastName = 'Souza';

console.log(firstName, lastName);

let age = 29;
age = 30;
console.log(age);

let pen = {
    itemName: 'pen',
    price: 3,
    itemAvailable: true,
    itemColor: 'Red'
}

pen.itemColor = 'Blue';
console.log(pen);

// Arrays
let cars = ['Gol', 'Uno', 'Palio', 'Celta', 'Onix'];
console.log(cars[0]);

cars[1] = 'Fiesta';
console.log(cars);

//Functions
function saleStatus(status, total){
    
    console.log('Transaction: ' + status + '! Total Amount $:' + total);

}

saleStatus('Approved', 200);

function priceDiscount (discount, total){
    let valueDiscount = total * (discount/100);
    console.log('O desconto foi de ' + discount,'%', 'O total de ' + total);
    let valueafterDiscount = total - valueDiscount
    console.log('Preco com desconto aplicado ', valueafterDiscount);
    return valueafterDiscount;
}

priceDiscount(15, 200);

