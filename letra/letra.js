function contarLetraA(texto) {
  const regex = /a/gi;
  const ocorrencias = texto.match(regex);
  const quantidade = ocorrencias ? ocorrencias.length : 0;

  if (quantidade > 0) {
    return `A letra "a" aparece ${quantidade} vezes na string.`;
  } else {
    return 'A letra "a" não foi encontrada na string.';
  }
}

const texto = prompt("Digite seu texto: ");
alert(contarLetraA(texto));