


// Atividade 1

function detetive() {
  let numero1 = parseFloat(prompt("\nCaramba, você seguiu um monte de pistas e tudo o mais, e agora caiu de paraquedas num cofre, assim, do nada! E, óbvio, esse cofre tá cheio de pistas cruciais que vão resolver todo esse mistério que tá te tirando o sono, sacou?\n\nSabe qual é a parada agora? Você tem que colocar dois números nesse cofre aí, tipo, é uma combinação secreta, saca? E o objetivo é claro: escolhe esses números com a cabeça, mano! Tá na hora da sua missão começar a engrenar. \n\nManda bala e digita aí o primeiro número, de boa, sem parada errada, beleza?"));

  if (isNaN(numero1)) {
      alert("Muito bem, meu chapa, parece que algo não deu muito certo aí. Você precisa digitar um número válido para continuar com a investigação. Cola aí e tenta de novo!");
      return;
  }

  let numero2 = parseFloat(prompt("Digite o segundo número:"));

  if (isNaN(numero2)) {
      alert("Poxa, parceiro, agora você errou de novo! Lembra, é pra digitar um número válido, não tem mistério. Vamos tentar mais uma vez, beleza?");
      return;
  }

  if (numero1 > numero2) {
      alert("Pô, meu camarada, você aí foi mais esperto que o Morty em um dia de sorte! Com uma jogada esperta, você escolheu os números certos, e agora, as pistas vitais pra resolver essa parada maluca são todas suas. A sua investigação tá indo de vento em popa, sucesso total!\n\nE olha só, pra dar aquele toque final, o maior número entre os que você escolheu é o " + numero1 + ".\n\n Você tá arrasando, meu chapa! Mas, óbvio, o mundo interdimensional é cheio de mistérios, então, bora lá, que a próxima parada nos espera!")
  } else if (numero2 > numero1) {
      alert("Você acertou em cheio nos números certos, meu chapa! Agora as pistas vitais para resolver esse caso tão maluco são todas suas. Tá vendo como a investigação tá decolando, né? Isso aí, você é o cara!\n\nAh, e já que a gente tá nesse clima de descobertas, o maior número que você escolheu foi o número " + numero2 + "\n\nVocê tá arrasando, meu camarada! Mas, não vamos perder tempo, né? Tem mais enigmas a serem desvendados por aí!");
  } else {
      alert("Surpreendentemente, quando você enfiou esses números aí, o cofre se abriu, e caramba, revelou um arquivo super valioso de informações! Incrível, não é? \n\nE sabe o que mais? Os números que você escolheu são iguais, cara!");
  }
}



// Atividade 2




function verificarNumero() {
  let valor = parseFloat(prompt("\nUau, astronauta destemido, você tá bem na ação agora! Aí está você, flutuando no espaço, só curtindo a vibe das estrelas, quando, PÁ! Algo completamente insano acontece!\n\nA gravidade na sua nave começa a pirar, meu chapa! É uma verdadeira montanha-russa pelo espaço. E, olha só, você precisa calcular a aceleração exata para devolver as coisas ao normal. O tempo tá passando rápido, e não dá pra perder um segundo!\n\nCorra, corra, corra! Digite o número agora mesmo no painel!"));

  if (isNaN(valor)) {
      alert("Eita, meu chapa, alguma coisa deu errado aí. Você precisa inserir um número válido para continuar essa aventura espacial. Vamos tentar de novo, tá ligado?");
      return;
  }

  if (valor > 0) {
      alert("\nVocê, meu amigo, mandou ver na precisão e determinou que a aceleração tá em " + valor + ", um número positivo!\n\nÉ isso aí, você é um verdadeiro mestre do espaço, decifrando esses números como um profissional. Agora, a missão tá de volta aos trilhos, e você é o cara! O que mais a galáxia tem reservado pra gente?");
  } else if (valor < 0) {
      alert("Você aí, meu camarada, mandou ver na precisão e, olha só, você decidiu que a aceleração tá em " + valor + ", um número negativo!\nCaramba, às vezes o espaço sideral pode ser bem maluco, né? Mas você tá enfrentando isso de boa, como um verdadeiro explorador do cosmos!\nAgora que sabemos que a aceleração é negativa, é hora de continuar desbravando o espaço, porque a aventura não para, meu chapa!");
  } else {
      alert("Cara, você aí mandou ver com precisão e, acredita só, você determinou que a aceleração é... zero!\n\nÉ, meu chapa, às vezes o espaço sideral nos joga essas paradas meio doidas. Mas você tá lidando com isso de boa, como um verdadeiro cientista intergaláctico! Agora que sabemos que a aceleração é zero, o que mais o espaço tem guardado pra gente?");
  }
}


// Atividade 3



function maiornumero() {
    let numero1;
    let numero2;
    let numero3;

    do {
        numero1 = parseFloat(prompt("Muito bem, parceiro intergaláctico! Estamos explorando um planeta alienígena misterioso, e, olha só, encontramos três artefatos alienígenas protegidos por um campo de energia enigmático. Parece que o universo nos desafiou mais uma vez.\nAqui está o negócio: você precisa declarar três números diferentes, e eu vou verificar qual deles é o maior para desativar o campo e avançar.\nAventureiro, a decisão está nas suas mãos. Digite o primeiro número:"));
        numero2 = parseFloat(prompt("Digite o segundo número (não pode ser igual ao primeiro):"));
        numero3 = parseFloat(prompt("Digite o terceiro número (não pode ser igual aos anteriores):"));

        if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
            alert("Ei, parceiro, os números não podem ser iguais. Tente novamente!");
        }
    } while (numero1 === numero2 || numero1 === numero3 || numero2 === numero3);
    
    let maior = Math.max(numero1, numero2, numero3);
    
    alert("Ótima escolha! O campo de energia alienígena está desativado, e agora podemos explorar esses artefatos misteriosos. O maior número é " + maior);
}


// Atividade 4


function somaDosDoisMaiores() {
    let numero1;
    let numero2;
    let numero3;

    do {
        numero1 = parseFloat(prompt("Bem, parceiro, parece que você e eu acabamos de cair em uma realidade bem estranha, cheia de números malucos e surpresas interdimensionais.\nEncontramos um portal que nos trouxe para este lugar, onde a matemática é diferente de tudo o que já vimos. Agora, a única maneira de prosseguir é decifrar esse enigma doido e calcular a soma dos 2 maiores números que aparecerem por aqui. \n\nEntão, meu camarada, prepare-se para uma jornada matemática interdimensional e digite esses números bizarros.  \nDigite o primeiro número:"));
        numero2 = parseFloat(prompt("Digite o segundo número (não pode ser igual ao primeiro):"));
        numero3 = parseFloat(prompt("Digite o terceiro número (não pode ser igual aos anteriores):"));

        if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
            alert("Ei, acho que você ainda não pegou o jeito dos números dessa dimensão! Eles não podem ser iguais. Tente novamente!");
        }
    } while (numero1 === numero2 || numero1 === numero3 || numero2 === numero3);
    
    let numeros = [numero1, numero2, numero3];
    numeros.sort((a, b) => b - a);
    let somaDosDoisMaiores = numeros[0] + numeros[1];
    
    alert("Você decifrou o enigma dos números bizarros desta dimensão! A soma dos 2 maiores números é " + somaDosDoisMaiores + ". Agora, vamos ver o que mais essa dimensão nos reserva, meu chapa!");
}

// Atividade 5




function calcularMediaAritmetica() {
    let numeros = [];
    let soma = 0;

    for (let i = 1; i <= 6; i++) {
        let numero = parseFloat(prompt("Você e eu estamos em uma viagem interdimensional completamente louca. Desta vez, chegamos a uma dimensão onde os números não são apenas números, eles são seres vivos! É como se os números tivessem vida própria e personalidades únicas.\nParece que esses números-vivos estão organizando uma festa matemática. Para sermos convidados, precisamos calcular a média aritmética de 6 deles. Mas cuidado, cada número tem uma personalidade diferente, e alguns são bem temperamentais!\nVamos lá e veja o que esses números malucos têm a dizer!\nDigite o " + i + "º número-vivo:"));

        if (!isNaN(numero)) {
            numeros.push(numero);
            soma += numero;
        } else {
            alert("Número inválido ou deu um tilt na dimensão. Tente novamente!");
            i--; 
        }
    }

    let media = soma / 6;

    alert("Você digitou os números-vivos: " + numeros.join(", "));
    alert("A média aritmética desses números-vivos é: " + media);

    if (media >= 42) {
        alert("Parabéns! Sua média é mais alta do que a média interdimensional de 42! Você é um matemático intergaláctico!");
        alert("Rick: Isso aí, meu caro! Você é um verdadeiro gênio das dimensões. Agora, vamos ver o que mais essa realidade maluca tem reservado para nós!");
    } else {
        alert("Sua média é menor do que a média interdimensional de 42. Mas não se preocupe, você ainda é incrível nesta realidade!");
        alert("Rick: Ah, não foi dessa vez que ultrapassamos a média, mas a jornada continua, meu caro!");
    }
}


// Atividade 6


function encontrarValoresAlienigenas() {
    let numeros = [];

    for (let i = 1; i <= 4; i++) {
        let numero = parseFloat(prompt("T-Terráqueo, se prepare! Estamos prestes a entrar em uma dimensão intergaláctica completamente insana. Aqui, os números são mais do que números, eles são como... pequenos aliens com habilidades especiais!\nNesta dimensão, os números são alienígenas que vieram de todos os cantos do universo. Cada um deles tem uma habilidade única e nós precisamos encontrar o número mais poderoso, o primeiro número que chegou e o último a sair.\nAgora, você vai digitar quatro números diferentes, e esses números-vivos, quero dizer, números alienígenas, vão nos mostrar suas habilidades únicas.\nDigite o " + i + "º número alienígena:"));

        if (!isNaN(numero) && !numeros.includes(numero)) {
            numeros.push(numero);
        } else {
            alert("Número inválido ou já existe na dimensão intergaláctica. Tente novamente!");
            i--; 
        }
    }

    let primeiro = numeros[0];
    let ultimo = numeros[3];
    let maisPoderoso = Math.max(...numeros);

    alert("Rick: Incrível! Você enfrentou com sucesso a dimensão intergaláctica dos números alienígenas. O número mais poderoso foi " + maisPoderoso + ", o primeiro a aparecer foi " + primeiro + ", e o último a sair foi " + ultimo + ". Isso só prova que você é um verdadeiro aventureiro interdimensional. E agora, quem sabe qual será nossa próxima loucura? Continuemos explorando!")}


// Atividade 7


    function encontrarNumerosMagicos() {
        let numeros = [];
        let soma = 0;
    
        for (let i = 1; i <= 6; i++) {
            let numero = parseFloat(prompt("Meu camarada, prepare-se para outra aventura interdimensional! Desta vez, estamos em uma dimensão onde os números são como... eu não sei, amigo, algo mágico!\nAqui, cada número é como uma pequena parte de um grande feitiço cósmico, meu chapa. Nossa missão é encontrar os números mágicos\nDigite o " + i + "º número mágico:"));
    
            if (!isNaN(numero)) {
                numeros.push(numero);
                if (numero < 72) {
                    soma += numero;
                }
            } else {
                alert("Número inválido. Tente novamente!");
                i--; 
            }
        }
    
        alert("Números mágicos informados: " + numeros.join(", "));
        alert("Soma dos números mágicos menores que 72: " + soma);
    
        if (soma > 0) {
            alert("Rick: Incrível, meu chapa! Você conseguiu desvendar o mistério dos números mágicos e ainda somou aqueles que eram menores que 72. Você é realmente um aventureiro interdimensional de respeito! A próxima dimensão nos aguarda, vamos nessa!");
        } else {
            alert("Rick: Ah, parece que nesta dimensão os números mágicos não estavam muito a fim de colaborar, né? Mas não se preocupe, meu camarada, ainda temos muitas aventuras interdimensionais pela frente. Vamos continuar explorando!");
        }}


// Atividade 8


        function calcularMediaExigente() {
            let numeros = [];
            let soma = 0;
          
            for (let i = 1; i <= 4; i++) {
              let numero = parseFloat(prompt("Caramba, você não vai acreditar na dimensão que encontramos\n Aqui, os números têm personalidades super exigentes. Eles só gostam de números entre 0 e 10! Se a média dos números que você escolher for maior que 5, eles vão te elogiar, mas se não for, vão dizer para você tentar novamente! \nVamos nessa!\nDigite o " + i + "º número (entre 0 e 10) na Dimensão dos Números Exigentes:"));
          
              if (!isNaN(numero) && numero >= 0 && numero <= 10) {
                numeros.push(numero);
                soma += numero;
              } else {
                alert("Uau, parece que um dos números não atendeu às altas expectativas desta dimensão! Lembre-se de escolher números entre 0 e 10 para satisfazer as demandas dos números exigentes. Vamos tentar novamente e ver se você consegue impressioná-los!");
                return;
              }
            }
          
            let media = soma / 4;
          
            if (media > 5) {
              alert("Média calculada: " + media.toFixed(2));
              alert("Parabéns, viajante destemido, você conseguiu impressionar os números exigentes da Dimensão! Sua média está acima do esperado. Agora, siga sua jornada interdimensional com confiança!");
            } else {
              alert("Média calculada: " + media.toFixed(2));
              alert("Oh, não! Parece que a média não atingiu o padrão exigente desta dimensão. Os números são realmente críticos aqui. Mas não desanime, tente novamente e quem sabe na próxima vez você alcance a média desejada!");
            }
          }

// Atividade 9


          function verificarElegibilidadeParaVotar() {
            let anoNascimento = parseInt(prompt("Desta vez, caímos em uma dimensão totalmente diferente, onde a galera está toda ligada nas eleições interdimensionais! Aqui, a parada é séria, e a gente precisa saber se as pessoas podem votar.\nAs regras variam de dimensão para dimensão, então, precisamos considerar apenas o ano de nascimento.\nInforme o ano de nascimento:"));
          
            if (!isNaN(anoNascimento)) {
              let anoAtual = new Date().getFullYear();
              let idade = anoAtual - anoNascimento;
          
              if (idade >= 16) {
                alert("Você tem " + idade + " anos. Portanto, você é elegível para votar nesta Dimensão do Portal Eleitoral!");
              } else {
                alert("Você tem " + idade + " anos, mas a idade mínima para votar nesta dimensão é de 16 anos. Infelizmente, você ainda não pode votar, meu chapa.");
              }
            } else {
              alert("Ano de nascimento inválido. Por favor, insira um ano válido.");
            }
          }

// Atividade 10

          function calcularPesoIdeal() {
            let altura = parseFloat(prompt("Rick: Meu chapa, a próxima dimensão para onde estamos indo é realmente especial. \nAqui, as pessoas têm uma abordagem única para a saúde e o bem-estar. Elas calculam o peso ideal de uma forma muito peculiar! Parece que o cálculo é baseado na altura e no sexo da pessoa.\nInforme a altura (em metros ex: 1.90):"));
            let sexo = parseInt(prompt("Informe o sexo (1 para feminino ou 2 para masculino):"));
          
            if (!isNaN(altura) && (sexo === 1 || sexo === 2)) {
              let pesoIdeal;
          
              if (sexo === 1) {
                pesoIdeal = (62.1 * altura) - 44.7;
              } else {
                pesoIdeal = (72.7 * altura) - 58;
              }
          
              alert("O peso ideal é: " + pesoIdeal.toFixed(2) + " kg. Na Dimensão do Cálculo Interdimensional de Peso, é assim que eles fazem para calcular o peso ideal com base na altura e sexo!");
            } else {
              alert("Entrada inválida. Por favor, insira uma altura em metros e o sexo (1 para feminino ou 2 para masculino).");
            }
          }

          function calcularReacoesQuimicasInterGalacticas() {
            let numero1 = parseFloat(prompt("Rick: Meu chapa, parece que eu inventei algo revolucionário! Prepare-se para conhecer a minha Calculadora Interdimensional Multiverso-2.0!\nIsso é uma Calculadora maluca, super avançada, interdimensional, com um toque de... ciência estranha! Vou pedir para você testá-la, e, com certeza, isso vai ser incrível!\nInsira o primeiro número:"));
            let numero2 = parseFloat(prompt("Insira o segundo número:"));
          
            if (!isNaN(numero1) && !isNaN(numero2)) {
              let operacao = parseInt(prompt("Escolha a operação:\n1. Adição\n2. Subtração\n3. Divisão\n4. Multiplicação"));
          
              switch (operacao) {
                case 1:
                  alert("Calculando resultados malucos... Preparado para a Adição Interdimensional!");
                  alert("Resultado: " + (numero1 + numero2) + " Plutônicos");
                  break;
                case 2:
                  alert("Calculando resultados incríveis... Agora é a Subtração de Quarks!");
                  alert("Resultado: " + (numero1 - numero2) + " Partículas de Energia Negativa");
                  break;
                case 3:
                  alert("Realizando cálculos em outra dimensão... Divisão Fractal!");
                  if (numero2 !== 0) {
                    alert("Resultado: " + (numero1 / numero2) + " Moléculas de Divisão");
                  } else {
                    alert("Operação impossível! Divisão por zero é proibida em todas as dimensões conhecidas!");
                  }
                  break;
                case 4:
                  alert("Iniciando experimento de multiplicação... Multiplicação Hiperespacial!");
                  alert("Resultado: " + (numero1 * numero2) + " Quásares Multiplicados");
                  break;
                default:
                  alert("Operação inválida! Esta calculadora é exclusiva para operações 1, 2, 3 ou 4. Tente novamente!");
              }
            } else {
              alert("Número(s) inválido(s). Por favor, insira números válidos para continuar.");
            }
          }          
          