class conta{
    constructor(numero,cpf,saldo,ativa){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativa = ativa
    }
    ativarConta(){
        this.ativa = true
        console.log("Conta ativada.")
    }
    debito(){

    }
    credito(){
        
    }
}