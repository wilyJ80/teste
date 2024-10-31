function pertenceFibonacci(numero) {
  if (numero < 0) return `O número ${numero} não pertence à sequência de Fibonacci.`;

  let a = 0;
  let b = 1;

  while (a <= numero) {
    if (a === numero) {
      return `O número ${numero} pertence à sequência de Fibonacci.`;
    }
    let temp = a;
    a = b;
    b = temp + b;
  }

  return `O número ${numero} não pertence à sequência de Fibonacci.`;
}

const input = prompt("Digite o numero: ");
const numero = parseInt(input, 10);
alert(pertenceFibonacci(numero));