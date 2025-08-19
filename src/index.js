//Calculadora de Vitórias Ranqueadas

//Função que calcula a diferença entre vitorias e derrotas
function calcularPontos(vitorias, derrotas) {
  return vitorias - derrotas;
}

//Função que determina o nível do héroi
function determinarNivel(vitorias) {
  if (vitorias <= 10)
    return "Ferro";
  if (vitorias <= 20)
    return "Bronze";
  if (vitorias <= 50)
    return "Prata";
  if (vitorias <= 80)
    return "Ouro";
  if (vitorias <= 90)
    return "Diamante";
  if (vitorias <= 100)
    return "Lendário";
  return "Imortal";
}

//Função principal
function main(vitorias, derrotas) {
  const pontos = calcularPontos(vitorias, derrotas);
  const nivel = determinarNivel(vitorias);

  console.log(`O Herói tem de saldo de ${pontos} está no nível de ${nivel}.`);
}

//Teste da função principal com diferentes valores
main(30,5)
main(150,40)
main(85,20)