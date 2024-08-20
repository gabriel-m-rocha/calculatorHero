// primeiro vamos calcular o saldo de vitorias e definir a function
function rankingPlayer(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    
// determinar o ranking com base na quantidade de vitórias
    let titulo;
    if (vitorias < 10) {
      titulo = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      titulo = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      titulo = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      titulo = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      titulo = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      titulo = "Lendário";
    } else {
      titulo = "Imortal";
    }
  
// vamos retornar o saldo de vitorias e nivel
    return { saldoVitorias, titulo };
  }
  
  function exibirMensagem(players) {
// sobre cada jogador no array criado...
    players.forEach(jogador => {
// agora vamos pegar o saldo e o titulo do jogador
      const { saldoVitorias, titulo } = rankingPlayer(jogador.vitorias, jogador.derrotas);
  
// Exibe a mensagem final para o jogador atual
      console.log(`A pontuação do jogador ${jogador.nome} é de: ${saldoVitorias} pontos, e portanto ele está no nivel: ${titulo}`);
    });
  }
  
  const players = [
    { nome: "Xiquinho", vitorias: 85, derrotas: 10 },
    { nome: "Batedor", vitorias: 30, derrotas: 20 },
    { nome: "Porrada", vitorias: 95, derrotas: 5 }
  ];
  
  exibirMensagem(players);
  