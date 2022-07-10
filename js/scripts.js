
let inputArray = [];
function generateArray(input) {
  for (let index = 0; index <= input; index += 1) {
    inputArray.push(index.toString());
  }
}





function outPut() {

  let finalArray = [];
  inputArray.forEach(function (element) {

    if (element.includes("3")) {

      finalArray.push('"Won\'t you be my neighbor?"');
    } else if (element.includes("2")) {

      finalArray.push('"Boop!"');
    } else if (element.includes("1")) {

      finalArray.push('"Beep!"');
    } else {
      finalArray.push(element);
    }

  });
  return finalArray;
}


//ui logic
function twoInOne(event) {
  event.preventDefault();
  const inputNumber = document.getElementById("userNumber").value;
  const arrayFromNumber = generateArray(inputNumber);
  const outputLine = outPut();
  document.querySelector("div#output").append(outputLine);
}

window.addEventListener("load", function () {
  document.getElementById("replace").addEventListener("submit", twoInOne);

});
