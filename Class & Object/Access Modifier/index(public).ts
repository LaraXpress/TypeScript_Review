class Player{
    public name     : string
    public age      : number
    public country  : string

    constructor(n : string, a : number, c : string){
        this.name    = n;
        this.age     = a;
        this.country = c;
    }
    play():void{
        console.log(`${this.name} is from ${this.country} is playing`);        
    }
}

const sakib = new Player('Sakib Al Hasan', 35, 'Bangladesh');
const sujon = new Player('Sumon Hasan', 25, 'Pakistan');

const players : Player[] =[];
players.push(sujon);
players.push(sakib);

console.log(players);

sakib.country = "United States of America (USA)";
sakib.age     = 500;

console.log(sakib.country);
console.log(sakib.age);
