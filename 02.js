function pertenceFibonacci(num) {
    let a = 0, b = 1;
  
    while (b < num) {
      [a, b] = [b, a + b];
    }
  
    return num === a || num === b;
  }
  
  const numero = 34;
  console.log(
    pertenceFibonacci(numero)
      ? `O número ${numero} pertence à sequência de Fibonacci.`
      : `O número ${numero} não pertence à sequência de Fibonacci.`
  );
  