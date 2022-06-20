var arr = [0, 1, "test"]; 
arr.push("str") 

var arr = [0, 1, "test"]; 
arr.push("str") // OK
arr.push(true); // Compiler Error:

function sum(a: number, b: number ){
    return a + b;    
}
var total: number = sum(10,20); // OK
var str: string = sum(10,20); // Compiler Error 

var arr = [0, 1, "test"]; 
arr.push("str") // OK
arr.push(true); // Compiler Error
