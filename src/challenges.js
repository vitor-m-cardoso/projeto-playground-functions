function compareTrue(value1, value2) {
  return value1 && value2;
}

function calcArea(base, height) {
  return ((base * height) / 2);
}

function splitSentence(string) {
  let array = string.split(' ');

  return array;
}

function concatName(array) {
  // para resolver o problema de concatenacao, utilizei este material: https://eslint.org/docs/rules/prefer-template.
  let newArray = `${array[array.length - 1]}, ${array[0]}`;

  return newArray;
}

function footballPoints(wins, ties) {
  let finalPoints = (wins * 3) + ties;

  return finalPoints;
}

function anotherCount(array) {
  let higherValue = 0;
  for (let highestIndex = 0; highestIndex < array.length; highestIndex += 1) {
    if (higherValue < array[highestIndex]) {
      higherValue = array[highestIndex];
    }
  }
  return higherValue;
}

function highestCount(array) {
  let higherValue = anotherCount(array);
  let repeatValue = 0;

  for (let countIndex = 0; countIndex < array.length; countIndex += 1) {
    if (higherValue === array[countIndex]) {
      repeatValue += 1;
    }
  }
  return repeatValue;
}

function catAndMouse(mouse, cat1, cat2) {
  let distance;
  // para resolver o calculo da distancia, utilizei este material: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let calc1 = Math.abs(cat1 - mouse);
  let calc2 = Math.abs(cat2 - mouse);

  if (calc2 < calc1) {
    distance = 'cat2';
  } else if (calc1 < calc2) {
    distance = 'cat1';
  } else {
    distance = 'os gatos trombam e o rato foge';
  }

  return distance;
}

function wordFinder(number) {
  let word = '';

  if (number % 15 === 0) {
    word = 'fizzBuzz';
  } else if (number % 3 === 0) {
    word = 'fizz';
  } else if (number % 5 === 0) {
    word = 'buzz';
  } else {
    word = 'bug!';
  }
  return word;
}

function fizzBuzz(array) {
  let division = [];
  for (let index = 0; index < array.length; index += 1) {
    division.push(wordFinder(array[index]));
  }
  return division;
}

// Para resolver este desafio, utilizei o seguinte material como base: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
function encode(string) {
  for (let index = 0; index < string.length; index += 1) {
    string = string.replace('a', '1');
    string = string.replace('e', '2');
    string = string.replace('i', '3');
    string = string.replace('o', '4');
    string = string.replace('u', '5');
  }
  return string;
}

function decode(string) {
  for (let index = 0; index < string.length; index += 1) {
    string = string.replace('1', 'a');
    string = string.replace('2', 'e');
    string = string.replace('3', 'i');
    string = string.replace('4', 'o');
    string = string.replace('5', 'u');
  }
  return string;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
