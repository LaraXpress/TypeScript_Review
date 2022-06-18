class Bank{
    // properties, methods, constructor
    // bank1 - name: AB BANK, branch:Banani
    // bank2 - name: Jamunar BANK, branch:Gulsan
    bankName : string;
    branch : string;
    constructor(bankName : string, branch:string){
        this.bankName = bankName;
        this.branch = branch;
    }
    display() : void {
        console.log(`Name :${this.bankName} and Branch : ${this.branch}`);        
    }
}
let bank = new Bank('AB Bank','BANANi');
let ibos = new Bank("NRBC","Motijhil");
bank.display();
ibos.display();

