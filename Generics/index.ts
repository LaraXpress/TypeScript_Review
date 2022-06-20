const addScore = <T>(obj : T)=>{
    let id = Math.floor(Math.random() * 100);
    return {...obj,id};    
}
 
let user = addScore({
    name : "Sumon",
    age : 50
})
  
 interface REST_API<T>{
    status : string,
    result : string,
    data : object
}

const LINK3 : REST_API<object>={
    status: '200',
    result : 'OKAY',    
    data:{
        name : 'SEBA NET LTD',
        price : 1500,
   }
}
