function inverterString(input) {
    let invertida = "";
  
    for (let i = input.length - 1; i >= 0; i--) {
      invertida += input[i];
    }
  
    return invertida;
  }
  
  const texto = "Target";
  console.log(`Original: ${texto}`);
  console.log(`Invertido: ${inverterString(texto)}`);
  