function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

function rank(vitorias, derrotas) {
  const saldo = calcularSaldo(vitorias, derrotas);
  let nivel = "";

  const niveis = [
    { limite: 10, nome: "Ferro" },
    { limite: 20, nome: "Bronze" },
    { limite: 50, nome: "Prata" },
    { limite: 80, nome: "Ouro" },
    { limite: 90, nome: "Diamante" },
    { limite: 100, nome: "Lendário" },
    { limite: Infinity, nome: "Imortal" }
  ];

  for (const nivelAtual of niveis) {
    if (saldo <= nivelAtual.limite) {
      nivel = nivelAtual.nome;
      break;
    }
  }

  return `O Herói tem um saldo de ${saldo} e está no nível ${nivel}`;
}

console.log(rank(50, 20));
