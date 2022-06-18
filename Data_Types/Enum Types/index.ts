enum RequestTypes{
    readData   = 1,
    saveData   = 2,
    deleteData = 3
}
console.log(RequestTypes);

enum RequestTypes2{
    readData = 'READ_INFO',
    deleteData = 'DELETE_INFO',
    updateData = 'UPDATE_INFO'
}
console.log(RequestTypes);
console.log(RequestTypes2.deleteData);
console.log(RequestTypes2['readData']);

enum RequestTypes3{
    id = 10012,
    deleteData = 'DELETE_INFORMTION',
    updateData = 'UPDATE_INFO_DHAKA'
}
console.log(RequestTypes3);
