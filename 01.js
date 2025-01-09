function calcularSoma() {
  const INDICE = 13;
  let soma = 0;

  for (let k = 1; k <= INDICE; k++) {
    soma += k;
  }

  return soma;
}

console.log(`O valor de SOMA é: ${calcularSoma()}`);