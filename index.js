
/*let year = prompt("What year are we?");

if (year == 2024) {
  alert("you will see next year");
} else {
  alert("Coming Soon");
}*/

/*let age = prompt("How old are you");
 if (age < 3 ) {
  alert("Hello baby");
 } 
 else if (age < 18)
 { alert ("Baby adult");
 }

 if (age < 100) {
    alert("You don see life");
 }
 else {
    alert("Unknown");
 }*/

/* let currentHour = prompt("what time is it?");

 if (currentHour < 12) {
    alert("Good morning!");
  } 
  else if (currentHour < 18) {
    alert("Good afternoon!");
  } 
  else if (currentHour < 22){
    alert("Good evening!");
  }
  else {
    alert("Good night!");
  }

  setTimeout(() => {
  alert("Script ended.");
}, 24 * 60 * 60 * 1000);  /*



/*let time = prompt('What is the time?',);

if (time >= 1 || time <= 12){
    alert('Good Morning');
}
else if (time > 12 && time <= 16) {
    alert('Good Afternoon');
} else if (time > 16 && time <= 20) {
    alert('Good Evening')
} else {
    alert('Good Night')
}*/

/* time = (time >= 1 || time <= 12 ) ? alert('Good Morning') : (time > 12 && 
    time <= 16) ? alert('Good Afternoon') : (time > 16 && time <= 20 ) ? alert ('Good Evening') : alert('Good Night'); */
/*
    let Kwesi = 5;
    while (Kwesi > 0) {
      Kwesi --, 
      alert(Kwesi);
    }  */

   
   
    /* let Ossy = 10;
    do {
      alert(Ossy);
      Ossy--;
    } while (Ossy > 6); */



/*    let num = 0, sum = 0;
    while(num >= 0) {
      sum += num; 
    num = parseFloat(prompt("Enter a number",""));
  }
  alert(The total sum is ${sum});  */

 /* let sumTotal = 0;
  while (true) {
    value = +prompt("Enter A Value");
    if (!value) break;//(*)
    sum += value;
  }
  alert('sumTotal: ' + sumTotal); */




  /*for (let Lucky = 5; Lucky < 10; Lucky ++) {
    alert (Lucky)
  } let Lucky = 3;
  for ( ; Lucky < 10; Lucky ++) {
    alert(Lucky)
  }
Lucky = 1;
for ( ; Lucky < 10 ;) {
  alert(Lucky++);
}


for (let even = 1; even <10 ; even ++) {
  if (even % 2) { alert(even);
  }
} */


/*for(let even = 2; even <= 20; even += 2) {
  alert(even)
}*/

/*let arr = [12,1,4,44,64,55,24,32,55,19,17,74,22,23]

let oddNumbers = [];
let evenNumbers = [];

for (let newNum = 0; newNum < arr.length; newNum ++) {

  if(arr[newNum] % 2 != 1){
  evenNumbers.push(arr[newNum]);
  } else {
    oddNumbers.push(arr[newNum]);
  }
} 
console.log(evenNumbers);
console.log(oddNumbers);
*/

/*let arr = [12,1,4,44,64,55,24,32,55,19,17,74,22,23]
let mas = 0;

for (let newMax = 0; newMax <arr.length; newMax ++) {
  if (arr[newMax] > max) {
  max = arr[newMax];
}
}
console.log(max);

let Henry = 5;
let shenry = Henry + 3;


switch(shenry) {
  case 6;
  alert('Not up to shenry value')
break;
}
if (6!=shenry){
  alert("Not up to shenry's value")
}  */

// let MinArr = [12,1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
// let min = MinArr[0];

// for(let newMin = 0; newMin < MinArr.length; newMin++){
//     if(MinArr[newMin] < min){
//         min = MinArr[newMin];
//     }
// }
// console.log(min);

//   let arr = [12, 1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];

//   let oddNumbers = arr.filter(num => num % 2 !== 0);
  
//   console.log(oddNumbers);


// using a function to call an alert

// function showMessage(){
//     let name = 'Yvonne'
//     alert(name)
// }
// showMessage();

// let userName = 'John Paul'

// function MyName(){
//     userName = "Sylvia Brown";
//     fullName = 'Hello,' + userName;

//     alert(fullName)
// }
// MyName();
// alert(userName);

function showMessage(text,word){
    alert(text + ':' + word)
}
showMessage('Title','obi is no longer a boy')