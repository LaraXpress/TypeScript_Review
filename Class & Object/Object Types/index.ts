let users = {
    name : 'Mazedur',
    age : 35,
    salary : 15000
}

let members :{
    userID : number, name : string, age : number, country : string
}

let items : object[];
items = [
    {name:'ABC'},
    {name:'abc'},
    {name:'XYZ'},
    {name:'xyz'},
]

let candidates : {name:string, age:number, country?:string};
candidates = {name:'sumon', age:35};
candidates = {name:'sumon', age:35, country:'India'};

let students : object[] ;
students = [];
let student_001 : {name:string, roll:number,district:string};
student_001 = {name:'Mazed',roll:125, district:'Comilla'};


let student_002 : {name:string, roll:number,district:string};
student_002 = {name:'Mazed',roll:125, district:'Comilla'};

let student_003 : {name:string, roll:number,district:string};
student_003 = {name:'Mazed',roll:125, district:'Comilla'};

students.push(student_001);
students.push(student_002);
students.push(student_003);
console.log(students);


members = {userID:1001, name:'Mazed',age : 35, country : 'USA' }
console.log(items);
console.log(members);
console.log(users);

for (const key in students) {
    console.log(students[key]['age']);
    
}
