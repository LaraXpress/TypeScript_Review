class Player{
    public name      : string
    public age       : number
    readonly country : string

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
console.log(sakib);

sakib.country = "United States of America (USA)";
console.log(sakib.country);
console.log(sakib);

