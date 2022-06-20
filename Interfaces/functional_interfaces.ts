// STAGE ONE
function square(info : {width : number, height : number} ){
    let width  = info.width;
    let height = info.height;
}

square({
    width : 10,
    height: 15
});

// STAGE TWO

interface getSquare{
    width:number, 
    height : number
}

function square(info : getSquare){
    let width  = info.width;
    let height = info.height;
}

square({
    width : 10,
    height: 15
});

//STAGE THREE

interface getSquare{
    width:number, 
    height : number
}

function square(info : getSquare){
    let width  = info.width;
    let height = info.height;
}

let option = {
    width : 10,
    height: 15,
    area : 150,
    perimeter: 50
}
square(option);  
