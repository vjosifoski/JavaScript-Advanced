console.log("============ Exercises01============");

let countDigits = (number) => Math.abs(number).toString().length;

let isEvenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

let isPositiveOrNegative = (number) => {
  if (number >= 0) {
    return "Positive";
  } else {
    return "Negative";
  }
};

let getNumberStats = (number) => {
  let digits = countDigits(number);
  let parity = isEvenOrOdd(number);
  let sign = isPositiveOrNegative(number);
  console.log(`${digits} Digits, ${parity}, ${sign}`);
};

getNumberStats(-25);

console.log("============ Exercises02============");

let changeTextColor = (element, color = "black") => {
  element.style.color = color;
};

let changeTextSize = (element, textSize = "24px") => {
  element.style.fontSize = textSize;
};

let applyChanges = () => {
  let h1 = document.querySelector("h1");
  let textSize = document.querySelector("#text-size").value + "px";
  let textColor = document.querySelector("#color").value;

  changeTextSize(h1, textSize);
  changeTextColor(h1, textColor);
};

document.querySelector("button").addEventListener("click", applyChanges);

console.log("============ Exercises03============");

let squareElements = function (array) {
  return array.map((element) => element * element);
};
let result = squareElements([1, 8, 3, 9, 5]);
console.log(result);

console.log("============ Exercises04============");

document.getElementById("calculateButton").addEventListener("click", function () {
  let number = document.getElementById("numberInput").value;

  (function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }

    console.log(result);
    document.getElementById("result").textContent = result;
  })(Number(number));
});

console.log("============ Exercises05============");

let reverseWords = (string) => {
  return string
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

document.getElementById("reverseButton").addEventListener("click", function () {
  let inputString = document.getElementById("inputString").value;
  let reversedString = reverseWords(inputString);
  document.getElementById("result2").textContent = reversedString;
});

console.log("============ Exercises06============");

let array = [
  -10,
  5,
  7894,
  NaN,
  "Hello world",
  Infinity,
  false,
  [Object, Object],
  25,
  (name) => `Hello ${name}`,
  -Infinity,
  ["hi", 28, -93, true],
  { name: "Bob", age: 23 },
  undefined,
  14,
  null,
  159,
  0,
  -11,
];

let productOfPositiveNumbers = (function (arr) {
  return arr
    .filter((item) => typeof item === "number" && !isNaN(item) && item > 0 && item !== Infinity)
    .reduce((product, number) => product * number, 1);
})(array);

console.log(productOfPositiveNumbers);

console.log("============ Exercises07============");

let countVowels = (string) => {
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }

  return count;
};

document.getElementById("countButton7").addEventListener("click", function () {
  let inputString = document.getElementById("inputString7").value;
  let vowelsCount = countVowels(inputString);
  document.getElementById("result7").textContent = vowelsCount;
});
