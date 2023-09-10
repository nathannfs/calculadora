// pegar os elementos HTML pelo DOM
let resultSum = document.getElementById('resultSum');
let resultSub1 = document.getElementById('resultSub1');
let resultSub2 = document.getElementById('resultSub2');
let resutMulti = document.getElementById('resultMulti');
let resultDivisao1 = document.getElementById('resultDivisao1');
let resultDivisao2 = document.getElementById('resultDivisao2');
let resultPotA = document.getElementById('resultPotA');
let resultPotB = document.getElementById('resultPotB');
let resultRaizA = document.getElementById('resultRaizA');
let resultRaizB = document.getElementById('resultRaizB');
let resultFatorialA = document.getElementById('resultFatorialA');
let resultFatorialB = document.getElementById('resultFatorialB');
let resultPorcentA = document.getElementById('resultPorcentA');
let resultPorcentB = document.getElementById('resultPorcentB');
let resultMedia = document.getElementById('resultMedia');

// atribuir o valor 0 para eles inicialmente
resultSum.innerHTML = 0;
resultSub1.innerHTML = 0;
resultSub2.innerHTML = 0;
resultMulti.innerHTML = 0;
resultDivisao1.innerHTML = 0;
resultDivisao2.innerHTML = 0;
resultPotA.innerHTML = 0;
resultPotB.innerHTML = 0;
resultRaizA.innerHTML = 0;
resultRaizB.innerHTML = 0;
resultFatorialA.innerHTML = 0;
resultFatorialB.innerHTML = 0;
resultPorcentA.innerHTML = 0;
resultPorcentB.innerHTML = 0;
resultMedia.innerHTML = 0;

// realizar os cálculos

//soma
function calculateSum(a, b) {
  return a + b;
}

//subtração A
const calculateSub1 = (a, b) => a - b;

//subtração B
const calculateSub2 = (a, b) => b - a;

//multiplicaçao
const calculateMulti = (a, b) => a * b;

//divisao A
const calculateDivisao1 = (a, b) => (a / b).toFixed(2);

//divisao B
const calculateDivisao2 = (a, b) => (b / a).toFixed(2);

//potência A
const calculatePotA = (a, b) => Math.pow(b, a);

//potência B
const calculatePotB = (a, b) => Math.pow(a, b);

//raiz A
const calculateRaizA = a => Math.sqrt(a).toFixed(2);

//raiz B
const calculateRaizB = b => Math.sqrt(b).toFixed(2);

//porcentagem de A
const calculatePorcentA = (a, b) => `${((a * 100) / b).toFixed(2)}%`;

//porcentagem de B
const calculatePorcentB = (a, b) => `${((b * 100) / a).toFixed(2)}%`;

//média
const calculateMedia = (a, b) => (a + b) / 2;

//fatorial A
function calculateFatorialA(a) {
  if (a === 0) { return 1 };
  for (var i = a - 1; i >= 1; i--) {
    a *= i;
  }
  return a;
}

//fatorial B
function calculateFatorialB(b) {
  if (b === 0) { return 1 };
  for (var j = b - 1; j >= 1; j--) {
    b *= j;
  }
  return b;
}

// criar a função para executar os cálculos
function calculate() {

  // recebe os valores passados nos dois inputs
  let inputA = document.getElementById('firstNumber').value;
  let inputB = document.getElementById('secondNumber').value;

  // converte os valores recebidos em números
  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  // realiza as funções de cálculo referente a cada um
  resultSum.innerHTML = calculateSum(a, b);
  resultSub1.innerHTML = calculateSub1(a, b);
  resultSub2.innerHTML = calculateSub2(a, b);
  resultMulti.innerHTML = calculateMulti(a, b);
  resultDivisao1.innerHTML = calculateDivisao1(a, b);
  resultDivisao2.innerHTML = calculateDivisao2(a, b);
  resultPotA.innerHTML = calculatePotA(a, b);
  resultPotB.innerHTML = calculatePotB(a, b);
  resultRaizA.innerHTML = calculateRaizA(a);
  resultRaizB.innerHTML = calculateRaizB(b);
  resultPorcentA.innerHTML = calculatePorcentA(a, b);
  resultPorcentB.innerHTML = calculatePorcentB(a, b);
  resultMedia.innerHTML = calculateMedia(a, b);
  resultFatorialA.innerHTML = calculateFatorialA(a);
  resultFatorialB.innerHTML = calculateFatorialB(b);

}
