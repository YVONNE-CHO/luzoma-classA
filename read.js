myFunction();
anotherFunction();

function myFunction() {
    let newCarName = 'BMW'
    document.getElementById('scope').innerHTML= typeof newCarName + '' + newCarName;
    console.log(newCarName);

}

 function anotherFunction(){
    let newCarName = 'toyota';
    console.log(newCarName);
 }
 let xyz = 'my name is john';
 newName();
 function newName() {
    document.getElementById('scope2').innerHTML = xyz;
 }
console.log(xyz);

let close ; //we will assign something to later

{
    let xy = 'Man of God';
    // the variable 'xy' can be used any where in the braces

    // we created this function to remember or capture
    // the scope in which it was created.

    function iAmAcLosure() {
        return xy;
    }

    // now we can copy the function closure 'iAmAcLosure' to a variable outside the braces.
    close = iAmAcLosure;
}

console.log(close());