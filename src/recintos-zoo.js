class RecintosZoo {

    analisaRecintos(animal, quantidade) {
    }
    ['macaco',  3]
    ['gazela',  1]
    ['leao',  1]
    
}

//Lista de recintos
let Listarecintos = [
  { recinto: 'savana', tamanho: 10 },
  { recinto: 'floresta', tamanho: 5 },
  { recinto: 'savana e rio', tamanho: 7 },
  { recinto: 'rio', tamanho: 8 },
  { recinto: 'savana-carnivoros', tamanho: 9 },
];

class RecintosZoo {constructor(numero, nome, capacidadeTotal, tipoBioma, animais = []) {
    this.numero = numero;
    this.nome = nome;
    this.capacidadeTotal = capacidadeTotal;
    this.tipoBioma = tipoBioma;
    this.animais = animais;
    this.espacoOcupado = animais.reduce((total, animal) => total + animal.espacosNecessarios, 0);}
}

verificarEspacoSuficiente(espacosNecessarios) ; {

    return this.espacoOcupado + espacosNecessarios <= this.capacidadeTotal;
}
verificarCompatibilidade(animaisNovos) ; {
    const tiposAnimaisPresentes = new Set(this.animais.map(a => a.tipo));
    
    // Verificação de bioma específico para hipopótamos
    if (animaisNovos.some(a => a.tipo === 'hipopotamo') &&
        !this.tipoBioma.includes('savana') && !this.tipoBioma.includes('rio')) {
        return false;
    }
    
    // Verificação de macacos
    if (animaisNovos.some(a => a.tipo === 'macaco') && this.animais.length === 0) {
        return false;
    }
}
 // Verificação de carnívoros
 const carnívoros = new Set(['leão', 'leopardo', 'crocodilo']);
 if (animaisNovos.some(a => carnívoros.has(a.tipo))) {
     if (![...tiposAnimaisPresentes].every(t => carnívoros.has(t))) {
         return false;
     }
 }
 
 // Verificação de espaço extra para múltiplas espécies
 if (animaisNovos.some(a => this.animais.length > 0 && new Set([...this.animais.map(a => a.tipo), a.tipo]).size > 1)) {
     return this.verificarEspacoSuficiente(animaisNovos.reduce((total, animal) => total + animal.espacosNecessarios, 0) + 1);
 }
 
 adicionarAnimais(animais); {
    if (!this.verificarCompatibilidade(animais)) {
        return Animal-nao-compativel; {this.numero};
    }

    const espacosNecessarios = animais.reduce((total, animal) => total + animal.espacosNecessarios, 0) + 
                              (this.animais.length > 0 && new Set([...this.animais.map(a => a.tipo), ...animais.map(a => a.tipo)]).size > 1 ? 1 : 0);

    if (!this.verificarEspacoSuficiente(espacosNecessarios)) {
        return Nao-ha-espaco;
    }

    this.animais.push(...animais);
    this.espacoOcupado += espacosNecessarios;
    return Recinto; 
}
// Criando os animais
const leao = new Animal('leão', 3);
const leopardo = new Animal('leopardo', 2);
const crocodilo = new Animal('crocodilo', 3);
const macaco = new Animal('macaco', 1);
const gazela = new Animal('gazela', 2);
const hipopotamo = new Animal('hipopotamo', 4);

// Criando os recintos
const recintos = [
    new Recinto(1, 'savana', 10, ['savana'], [macaco, macaco, macaco]),
    new Recinto(2, 'floresta', 5, ['floresta']),
    new Recinto(3, 'savana e rio', 7, ['savana', 'rio'], [gazela]),
    new Recinto(4, 'rio', 8, ['rio']),
    new Recinto(5, 'savana2', 9, ['savana'], [leao])
];

// Função para tentar adicionar um lote de animais a cada recinto
function verificarRecintos(recintos, animais) {
    const resultados = [];
    for (const recinto of recintos) {
        const resultado = recinto.adicionarAnimais(animais);
        resultados.push(resultado);
    }
    return resultados;
}

// Adicionando um lote de animais aos recintos
const animaisParaAdicionar = [leopardo, crocodilo, macaco]; // Exemplo de lote de animais

// Verificando os recintos
const resultados = verificarRecintos(recintos, animaisParaAdicionar);

// Exibindo os resultados
console.log(resultados.join('\n'));
    

export { RecintosZoo as RecintosZoo };