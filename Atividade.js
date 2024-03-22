///Como trabalhar com Classes?
///Compreender o uso de classes

class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }
  
    trabalhar() {
      console.log(`${this.nome} está trabalhando.`);
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      this.departamento = departamento;
    }
  
    gerenciar() {
      console.log(`${this.nome} está gerenciando o departamento ${this.departamento}.`);
    }
  }
  
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      this.linguagem = linguagem;
    }
  
    programar() {
      console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
  }
  
  /// Criando instâncias
  const gerente = new Gerente("Amanda", 35, "Gerente", "TI");
  const desenvolvedor = new Desenvolvedor("Wellington", 23, "Estágiario", "JavaScript e C#");
  
  // Chamando métodos
  gerente.seApresentar();
  gerente.gerenciar();
  
  desenvolvedor.seApresentar();
  desenvolvedor.programar();