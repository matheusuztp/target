const fs = require("fs");

fs.readFile("dados.json", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  const faturamento = JSON.parse(data);

  const valores = faturamento
    .filter((item) => item.valor > 0)
    .map((item) => item.valor);

  const menor = Math.min(...valores);
  const maior = Math.max(...valores);

  const media = valores.reduce((acc, curr) => acc + curr, 0) / valores.length;

  const diasAcimaMedia = valores.filter((valor) => valor > media).length;

  console.log(`Menor valor: ${menor.toFixed(2)}`);
  console.log(`Maior valor: ${maior.toFixed(2)}`);
  console.log(`Dias acima da média: ${diasAcimaMedia}`);
});
