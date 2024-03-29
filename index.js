// //console.log("JavaScript Funcionando!");

// let firstName = 'Joao';
// let lastName = 'Souza';

// //console.log(firstName, lastName);

// let age = 29;
// age = 30;
// //console.log(age);

// let pen = {
//     itemName: 'pen',
//     price: 3,
//     itemAvailable: true,
//     itemColor: 'Red'
// }

// pen.itemColor = 'Blue';
// //console.log(pen);

// // Arrays
// let cars = ['Gol', 'Uno', 'Palio', 'Celta', 'Onix'];
// //console.log(cars[0]);

// cars[1] = 'Fiesta';
// //console.log(cars);

// //Functions
// function saleStatus(status, total){
    
//     console.log('Transaction: ' + status + '! Total Amount $:' + total);

// }

// //saleStatus('Approved', 200);

// function priceDiscount (discount, total){
//     let valueDiscount = total * (discount/100);
//     console.log('O desconto foi de ' + discount,'%', 'O total de ' + total);
//     let valueafterDiscount = total - valueDiscount
//     console.log('Preco com desconto aplicado ', valueafterDiscount);
//     return valueafterDiscount;
// }

// priceDiscount(15, 200);

// // Operadores Aritmeticos

// let num1 =  1;
// let num2 =  2;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 ** num2);
// console.log(Math.sqrt(81));

// // Operadores de atribuicao

// let num3 = 10;
// console.log(num3 +=20);
// console.log(num3 -=20);
// console.log(num3 *=20);
// console.log(num3 /=20);

// //Operadores de Comparacao

// let num4 = 10; 
// console.log(num4 >0);
// console.log(num4 <0);
// console.log(num4 >=10);
// console.log(num4 <=10);

// console.log(num4 !=10);
// console.log(num4 ==10);

// // operadores de igualdade

// let num5 = 1;
// let num6 = '1';

// console.log(num5 == num6);
// console.log(num5 === num6);

// //operadores ternarios

// let driver = 120;
// let speed = driver > 110 ? 'Above' : 'Below';
// console.log(speed);

// //operadores logicos com strings
// // let minimumAge
// let temIdadeMinima = false ; 
// //  hasElectoralCard
// let temTituloEleitor = true;

// let podeVotar = temIdadeMinima && temTituloEleitor
// console.log(podeVotar);

// let podeViajar = !podeVotar; 
// console.log(podeViajar);

// //Operadores 
// // clientColor, stockColor , soldColor
// let corCliente = undefined;
// let corEstoque = 'Black';
// let corVendida = corCliente || corEstoque ;

// console.log(corVendida);

// //Precedencia de operadores

// let num7 = 3 + 4 * 2;
// console.log(num7);

// // If and Else

// let driverSpeed = 101; 

// if (driverSpeed > 100){
//     console.log('Above Speed Limit');
// }
// else if (driverSpeed >= 60 && driverSpeed <= 100){
//     console.log('Normally Speed Limit');
// }
// else {
//     console.log('Below Speed Limit');
// }

// let airportName="GRU";

// switch (airportName){
//     case 'MCO':
//         console.log('Orlando International Airport');
//         break;
//     case 'GRU':
//         console.log('Sao Paulo International Airport');
//         break;
//     case 'LAX':
//         console.log('Los Angeles International Airport');
//         break;
//     case 'LAS':
//         console.log('Las Vegas International Airport');
//         break;
//     default:
//         console.log('Airport not found');
//         break;
// }

// //For Loop
// for(i=1; i<=10; i++){
//     console.log('Numero', i);
// }
// // While Loop
// // let index = 1;
// // while(index<=10){
// //     console.log('Item:', index);
// //     index++;
// // }

// //Do while
// // let index = 1;
// // do{
// //     console.log("Numero:", index);
// //     index++;
// // }while (index <=10){

// // }

// //For in loop

// const myCar = {
//     model: 'Fiesta',
//     year: 2019,
//     color: 'Red',
//     km: 68000
// }

// // for(let key in myCar){
// //     console.log(key, myCar[key]);
// // }

// //For of loop

// const friends = ['Joao', 'Maria', 'Pedro', 'Jose'];

// for(let friend of friends){
//     console.log(friend);    
// }

// //OOP

// // let bookTitle = 'Avesso da Pele';
// // let bookAuthor = 'Jeferson Tenorio';
// // let bookPages = '260';
// // let bookPrice = '30.00';

// // const book = {
    
// //     title: 'Avesso da Pele',
// //     author: 'Jeferson Tenorio',
// //     pages: 260,
// //     price: 30,
// //     //objeto dentro do outro
// //     chapters: {
        
// //         chapter1: 'Introducao',
// //         chapter2: 'Sumario',
// //         chapter3: 'Prefacio'

// //     },
// //     // funcao
// //     printBook: function(){
// //         console.log('Printing book...');
// //     }
// // }

// // for(let i in book.chapters){
// //     console.log(i, book.chapters[i]);
// // }

// //Factory Functions

// // function createBook(title, author, pages, price){
    
// //     const book = {
        
// //         title: title,
// //         author: author,
// //         pages: pages,
// //         price: price,
        
// //         printBook: function(){
// //             console.log('Printing book...');
// //         }
// //     }
// //    return book;
// // }

// // const book1 = createBook('Avesso da Pele', 'Jeferson Tenorio', 260, 30);
// // const book2 = createBook('A cabeca do santo', 'Socorro Acioli', 180, 20);
// // book1.color = 'Blue';
// // book2.color = 'Yellow';
// // //delete book1.color
// // console.log(book1, book2);
// // delete createBook().author
// // console.log(book1, book2);

// //Constructor Functions
// //Se for trabalhar com construtor e interfaces a primeira letra Maiuscula

// // function CreateBook(title, author, pages, price){
    
// //     this.title = title,
// //     this.author = author,
// //     this.pages = pages,
// //     this.price = price
    
// // }
// // const book1 = new CreateBook('Avesso da Pele', 'Jeferson Tenorio', 260, 30);
// // console.log(book1);
// // book1.price = 40;
// // console.log(book1);

function VendaVeiculos(veiculo, modelo, marca, ano, preco){
    this.veiculo = veiculo;
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.preco = preco;
} 

const carro1 = new VendaVeiculos('Carro', 'Fiesta', 'Ford', 2019, 30000);
const carro2 = new VendaVeiculos('Carro', 'Focus', 'Ford', 2018, 25000);
const carro3 = new VendaVeiculos('Carro', 'Gol', 'Volkswagen', 2017, 20000);
const carro4 = new VendaVeiculos('Carro', 'Celta', 'Chevrolet', 2016, 15000);
const carro5 = new VendaVeiculos('Carro', 'Corsa', 'Chevrolet', 2015, 10000);
const moto1 = new VendaVeiculos('Moto', 'Honda', 'CBR 600', 2019, 20000);
const moto2 = new VendaVeiculos('Moto', 'Honda', 'CBR 500', 2018, 15000);
const moto3 = new VendaVeiculos('Moto', 'Honda', 'CBR 400', 2017, 10000);

let carroLista = [carro1, carro2, carro3, carro4, carro5];
let motoLista = [moto1, moto2, moto3];

for(carros in carroLista){
    console.log(carroLista[carros].veiculo,carroLista[carros].modelo, carroLista[carros].marca, 
                carroLista[carros].ano, carroLista[carros].preco);
}
for (motos in motoLista){
    console.log(motoLista[motos].veiculo,motoLista[motos].modelo, motoLista[motos].marca,
                    motoLista[motos].ano, motoLista[motos].preco
    )
}

//built-in objects

console.log(Math.max(2, 5, 10, 15, 20, 25));
console.log(Math.min(2, 5, 10, 15, 20, 25));
console.log(Math.random());
console.log(Math.round(3,4))
console.log(Math.PI)