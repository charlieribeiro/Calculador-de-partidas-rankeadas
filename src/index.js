
function determinarNivel(win) {
  if (win <= 10) return "Ferro";
  if (win <= 20) return "Bronze";
  if (win <= 50) return "Prata";
  if (win <= 80) return "Ouro";
  if (win <= 90) return "Diamante";
  if (win <= 100) return "Lendário";
  return "Imortal";
}
