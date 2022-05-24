class cliente {
  nome;
  cpf;
}

class contaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      console.log("Você não tem saldo suficiente");
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }
}

const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "11122233309";

const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.cpf = "88822233309";

contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);