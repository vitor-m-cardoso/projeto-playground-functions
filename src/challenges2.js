function techList(array, myName) {
  let techName = [];
  // Nessa parte, para resolver o problema do lint ('Guarding for-in (guard-for-in)') utilizei este material: https://eslint.org/docs/2.0.0/rules/guard-for-in
  for (let index in array.sort()) {
    if ({}.hasOwnProperty.call(array, index)) {
      techName[index] = {
        tech: array[index],
        name: myName,
      };
    }
  }
  if (techName.length === 0) {
    return 'Vazio!';
  }
  return techName;
}

function countNum(array, num) {
  let repeatValue = 0;

  for (let countIndex = 0; countIndex < array.length; countIndex += 1) {
    if (num === array[countIndex]) {
      repeatValue += 1;
    }
  }
  return repeatValue;
}

function checkNum(checkArray) {
  for (let checkIndex = 0; checkIndex < checkArray.length; checkIndex += 1) {
    let check = checkArray[checkIndex];
    if (check < 0 || check > 9 || countNum(checkArray, check) > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function generatePhoneNumber(array) {
  // Para resolver esta parte, utilizei o conceito de 'Regular expression' com base neste site: https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
  let regexNum = /(\d{2})(\d{5})(\d{4})/;
  let genNum = '';
  let check = checkNum(array);

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (check) {
    return check;
  }

  for (let genIndex = 0; genIndex < array.length; genIndex += 1) {
    genNum += array[genIndex];
    genNum = genNum.replace(regexNum, '($1) $2-$3');
  }
  return genNum;
}

function triangleCheck(lineA, lineB, lineC) {
  let measure1 = Math.abs(lineB + lineC);
  let measure2 = Math.abs(lineB - lineC);
  let sum = false;

  if (lineA < measure1 && lineA > measure2) {
    sum = true;
  }

  return sum;
}

// Para resolver o problema de encontrar valores numericos com o objeto
// 'Number()' foi utilizado o material do seguinte local: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number
function hydrate(string) {
  string = string.replace(/\D/g, '');
  let num = 0;

  for (let index = 0; index < string.length; index += 1) {
    num += Number(string[index]);
  }

  if (num === 1) {
    return `${num} copo de água`;
  }

  return `${num} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
