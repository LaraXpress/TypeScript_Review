enum INCOME {'LOW','MEDIUM','HIGH'};

interface INCOME_LEVEL<T>{
    name : string;
    disivion : string,
    salary : number,
    level:INCOME
}

const family_one : INCOME_LEVEL<string> = {
    name : 'SUMON',
    disivion : 'Dhaka',
    salary : 15000,
    level:INCOME.LOW
}
console.log(family_one.level);
