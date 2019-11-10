// difference -> hoisting

// var -> global Scoped, function scoped
// let -> block Scoped

// printName();

// ES6 function -> hoist nhi hote
var printName = () => {
    // var name;  --> scope hoisting
    console.log(name);
    var name = "lkadjfla";
}

printName();

// function printName() {
//    var name = "Abhishek";
//    console.log(name);
// }

// console.log(name)


