class Player{
    private name     : string
    public age       : number
    public country   : string

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
console.log(sakib);

sakib.name = "Mizanur Rahman";
console.log(sakib.name);

