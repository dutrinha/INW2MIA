class Joias {
    constructor(id, descricao, ativo, estoque, preco, cor, pedra) {
      this.id = id;
      this.descricao = descricao;
      this.ativo = ativo;
      this.estoque = estoque;
      this.preco = preco;
      this.cor = cor;
      this.pedra = pedra;
    }
  
    ativar() {
      this.ativo = true;
    }
  
    retirarEstoque(quantidade) {
      if (quantidade <= this.estoque) {
        this.estoque -= quantidade;
      } else {
        console.log("Quantidade indisponível no estoque.");
      }
    }
  
    incluirEstoque(quantidade) {
      const estoqueTotal = this.estoque + quantidade;
      if (estoqueTotal <= 10) {
        this.estoque += quantidade;
      } else {
        console.log("O estoque máximo é de 10 unidades.");
      }
    }
  }
  
  // Criando uma instância da classe Joias
  const joia = new Joias(1, "Anel de ouro", true, 10, 45000, "amarelada/ouro", "ouro");
  
  // Solicitando movimentos de compra
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function solicitarCompra() {
    rl.question("Deseja realizar uma compra? (s/n) ", (resposta) => {
      if (resposta.toLowerCase() === "s") {
        realizarCompra();
      } else if (resposta.toLowerCase() === "n") {
        console.log("Movimentações finalizadas.");
        rl.close();
      } else {
        console.log("Resposta inválida. Por favor, digite 's' ou 'n'.");
        solicitarCompra();
      }
    });
  }
  
  function realizarCompra() {
    rl.question("Digite a descrição do produto: ", (descricao) => {
      rl.question("Digite o ID do produto: ", (id) => {
        rl.question("Digite a quantidade que deseja comprar: ", (quantidade) => {
          quantidade = parseInt(quantidade);
          const totalCompra = quantidade * joia.preco;
          console.log(
            `Produto: ${descricao}\nID: ${id}\nQuantidade: ${quantidade}\nValor Total da Compra: R$${totalCompra}`
          );
          joia.retirarEstoque(quantidade);
          console.log(`Saldo Atual do Estoque: ${joia.estoque}\n`);
  
          solicitarCompra();
        });
      });
    });
  }
  
  solicitarCompra();