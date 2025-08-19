![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Finalizado-green?style=for-the-badge)
![License](https://img.shields.io/badge/Licença-MIT-blue?style=for-the-badge)

# 🧮 Calculadora de Vitórias Ranqueadas

Este projeto é uma calculadora simples em **JavaScript** que determina o nível de um jogador com base na quantidade de vitórias e derrotas em partidas ranqueadas.

## 📌 Descrição

A lógica é baseada no seguinte critério:

- O **saldo de vitórias** é calculado como: `vitórias - derrotas`
- O **nível** do jogador é definido pela quantidade total de vitórias:

### 📊 Tabela de Níveis

| 🏆 Vitórias | 🧭 Nível    |
|------------|---------------|
| 0–10       | 🪨 Ferro     |
| 11–20      | 🥉 Bronze    |
| 21–50      | 🥈 Prata     |
| 51–80      | 🥇 Ouro      |
| 81–90      | 💎 Diamante  |
| 91–100     | 🐉 Lendário  |
| 101+       | 🔥 Imortal   |

---
## 🛠️ Tecnologias utilizadas

- JavaScript (ES6)
- Node.js (opcional para execução local)

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/charlieribeiro/Calculador-de-partidas-rankeadas.git
   ```
2. Acesse a pasta do projeto:

```bash
cd Calculador-de-partidas-rankeadas
```
3. Execute o arquivo:

```bash
node src/index.js
```
Edite os valores de vitórias e derrotas na função main() para testar diferentes cenários.

## 📋 Exemplo de saída
```bash
O Herói tem de saldo de 25 está no nível de Prata.
```
## 📁 Estrutura do código
calcularPontos(vitorias, derrotas) → Calcula o saldo

determinarNivel(vitorias) → Define o nível com base nas vitórias

main(vitorias, derrotas) → Função principal que exibe a mensagem
## ✍️ Autor
Feito por [Charlie Ferreira](https://www.linkedin.com/in/charlie-ferreira/)
## 📄 Licença
Este projeto está sob a licença MIT.