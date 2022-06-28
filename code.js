/*const details = {
    name: 'John',
}
function getMessage(message){
    return `${message} ${this.name}`;
}
console.log(getMessage.apply(details, ['Hello'])); */
/*
for(var i = 0; i<3; i++){
    setTimeout(function(){
        console.log(i)
    }, 1000)
}
*/
// var  name = 'John';

// var user = {
//     name: 'Peter',
//     printMessage(){
//         console.log(`hello, ${this.name}!`)
//     }
// };

// var printMessage = user.printMessage;
// printMessage();

// function printName(){
//     console.log(name);
// }

// setTimeout(() => {
//     let name = "Peter";
//     printName();
// }, 1000);


//console.log(let f = function(a,b) { return a+b });


let name = 'John';


function printName() {
    let name = 'Peter';
    console.log(name);
    
}
printName();