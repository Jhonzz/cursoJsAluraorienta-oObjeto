export class contaCorrente {
  agencia;
  // #saldo = 0;
  _saldo = 200;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor > 0) {
      return;
    }
    this._saldo += valor;
  }
}
