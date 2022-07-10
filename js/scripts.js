// words = 0, 1, 2 elements
// 0  "Beep!" will be used if we have 1 in number from inpuArray and no 2, 3
// 1  "Boop!" will be used if we have 2 in number from inpuArray and no 3
// 2 "Won't you be my neighbor?" will be used if we have 3 in number from inpuArray (1 and 2 does't effect the result)
// if inputArray has
//

function generateArray(input) {
  let inputArray = [];

  for (let index = 0; index <= input; index += 1) {
    inputArray.push(index);

  }
  let newArray = inputArray.toString().split(',');
  //outPut(newArray);
  return newArray;

}

//once you return you will have something like this [1,2,3,4]

//another helper function here youFunct(array) that will loop through and 



// function outPut() {
//   let finalArray = [];
//   newArray.forEach(function (element) {

//     if (element.includes("3")) {
//       string.replace("Won't you be my neighbor?");
//       finalArray.push(element);
//     } else if (element.includes("2")) {
//       string.replace("Boop!");
//       finalArray.push(element);
//     } else if (element.includes("1")) {
//       string.replace("Beep!");
//       finalArray.push(element);
//     } else {
//       finalArray.push(element);
//     }
//     //this will look like [0, beep, boop, wybmn, 4,5,6....]
//   });
//   return finalArray;
// }


//ui logic
function twoInOne() {
  event.preventDefault();
  const inputNumber = document.getElementById("userNumber").value;
  const arrayFromNumber = generateArray(inputNumber);
  document.querySelector("div#output").append(arrayFromNumber);
}

window.addEventListener("load", function () {
  document.getElementById("replace").addEventListener("submit", twoInOne);

})
// when you do your page load and submit
//get value from form input= input.value
// let inputArray = generateArray(input);
//let finalarray= yourfunction(inputArray);
// post and clear results to DOM