const monitor = document.querySelector(".monitorr"); //monitor.
const button = document.querySelectorAll(".b");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const operator = document.querySelectorAll(".o");

//--------------------------------------------------------------------------------------------------------------------

//here we have considered all of the buttons, and entered them in a 'for' loop, and . . .
//we access inside of each button.(what is written on each).
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (e) {
    var value = e.target.innerHTML;
    monitor.textContent += value;
  });
}

//here we define how does the 'c' button work; the 'c' button clears the digit in monitor.
//for that, we change the string on the monitor into an array, then we delete the last cell of the array, then . . .
//the new array (which its last cell has been deleted) will be changed into a string again, to be shown on monitor.
clear.addEventListener("click", function () {
  var monitorArray = [...monitor.textContent];
  var lastCharCleared = monitorArray.slice(0, monitorArray.length - 1);
  monitor.textContent = lastCharCleared.join("");
});

//operators can not be written one after the other, they must come exactly after a number; so we have written the code:
for (i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    let monitorArray = [...monitor.textContent];
    if (
      !Number(
        monitorArray.slice(monitorArray.length - 2, monitorArray.length - 1)
      )
    ) {
      monitorArray = monitorArray.slice(0, monitorArray.length - 1);
      monitor.textContent = monitorArray.join("");
    }
  });
}

//when we press 'equal', the monitor string becomes an array, in the array breaks into 2 arrays :
//one of them array of numbers, and the other array of symbols . . .
equal.addEventListener("click", function () {
  let numbers = monitor.textContent.split(/[-*+/]+/);

  var symbols = [];
  for (i = 0; i < monitor.textContent.length; i++) {
    if (!Number(monitor.textContent[i])) {
      var symbol = monitor.textContent[i];
      symbols.push(symbol);
    }
  }
  console.log(numbers);
  console.log(symbols);
});

//we have progressed up to here: numbers and symbols of the expression on the monitor have been separated;
//numbers are in an array, and symbols are in another array.
