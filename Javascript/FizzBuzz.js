var numberCollection = [];
var count = 1;

function fizzBuzzGame() {
    if (count % 3 === 0) {
        numberCollection.push("Fizz");} 
    else {
        numberCollection.push(count);   
    } 
    count = count + 1;
    console.log(numberCollection);     

}




