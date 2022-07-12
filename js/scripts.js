function generateArray(input) {
  let inputArray = [];
  for (let index = 0; index <= input; index += 1) {
    inputArray.push(index.toString());
  }
  return inputArray;
}

function outPut(array) {
  array.forEach(function (element) {
    if (element.includes('3')) {
      array[element] = '"Won\'t you be my neighbor?"';
    } else if (element.includes('2')) {
      array[element] = '"Boop!"';
    } else if (element.includes('1')) {
      array[element] = '"Beep!"';
    } else {
    }
  });
  return array;
}

//ui logic
function twoInOne(event) {
  event.preventDefault();
  const inputNumber = document.getElementById("userNumber").value;
  const arrayFromNumber = generateArray(inputNumber);
  const outputLine = outPut(arrayFromNumber);
  document.querySelector("div#output").innerText = outputLine;
}
window.addEventListener("load", function () {
  document.getElementById("replace").addEventListener("submit", twoInOne);
});
