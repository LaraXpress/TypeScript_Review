let selectCountry : string = 'Bangladesh';

function updatedCountry(country:string) {
     selectCountry = country;
}
updatedCountry('India');
console.log(selectCountry);

function orderError(error:string){
    throw Error(error);
}
orderError('Something is mistake!');

let passCoupon : string | null = 'LARACAST200';

function deleteCoupon():void{
    passCoupon = null;
}
console.log(passCoupon);
deleteCoupon();
console.log(passCoupon);

let screensize : string = 'medium';
function selectScreen(size:string):void{
    screensize = size;
}
selectScreen('large');
const result : string = `Current Screen Size is now ${screensize}`;
console.log(result);

let tshirt : string = 'L';

function selectSize(size: 'L'|'M'|'XL'): void{
     tshirt = size
}
selectSize('XL');
console.log(tshirt);

function sumOrder(price : number, quantity : number){
    return price * quantity;
}

let sumOrders = (price : number, quantity : number){
    return price * quantity;
}

let totalSum = function (price : number, quantity : number){
    return price * quantity;
}

let sumOftotal = (price : number, quantity : number) => price * quantity;

let totalofSum = (price : number, quantity : number) => {
    return price * quantity;
}

dollarPrice = (price, rate)=>{
    return price * rate;
}
let dollarPrice_1 : (price:number, rate:number)=>number;
let dollarPrice_2 : (price:number, rate:number)=>number;
let dollarPrice_3 : (price:number, rate:number)=>number=(price,rate)=>price - rate;

dollarPrice_1 = (price, rate)=> price + rate;
dollarPrice_2 = (price, rate)=> price - rate;
dollarPrice_3 = (price, rate)=> price * rate;

const ratePrice_1 = dollarPrice_1(10,20);
const ratePrice_2 = dollarPrice_2(10,20);
const ratePrice_3 = dollarPrice_3(10,20);

const price = sumOftotal(10,20);
console.log(price);
console.log(const ratePrice_1);
console.log(const ratePrice_2);
console.log(const ratePrice_3);



































