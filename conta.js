class contaCliente {
    constructor(numeroConta, saldo, debito, credito) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    }

    calcularSaldoAtual() {
        return this.saldo - this.debito + this.credito
    }

    verificarSaldo() {
        let saldoAtual = this.calcularSaldoAtual();
        if (saldoAtual >= 0) {
            alert("Saldo Positivo R$ " + saldoAtual)
        } else {
            alert("Saldo Negativo R$ " + saldoAtual)
        }
    }

}

let numeroConta = prompt("Digite o numero da conta do cliente")

let saldo = parseFloat(prompt("Digite o Saldo do Cliente"))

let debito = parseFloat(prompt("Digite o Debito do Cliente"))

let credito = parseFloat(prompt("Digite o credito do cliente"))


let conta = new contaCliente(numeroConta, saldo, debito, credito)

cont a.verificarSaldo();
