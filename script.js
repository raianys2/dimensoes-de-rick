
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

function maiornumero () {
    let numero1;
    let numero2;
    let numero3;

    while (isNaN(numero1)) {
        numero1 = parseFloat(prompt("Muito bem, parceiro intergaláctico! Estamos explorando um planeta alienígena misterioso, e, olha só, encontramos três artefatos alienígenas protegidos por um campo de energia enigmático. Parece que o universo nos desafiou mais uma vez.\nAqui está o negócio: você precisa declarar três números, e eu vou verificar qual deles é o maior para desativar o campo e avançar.\nA tarefa é clara: escolha os números com sabedoria, e eu vou determinar qual é o maior.\nAventureiro, a decisão está nas suas mãos. Digite o primeiro número:"));
        if (isNaN(numero1)) {
            alert("Ei, parceiro, esse não é um número válido. Tente novamente!");
        }
    }

    while (isNaN(numero2)) {
        numero2 = parseFloat(prompt("Digite o segundo número:"));
        if (isNaN(numero2)) {
            alert("Ei, parceiro, esse não é um número válido. Tente novamente!");
        }
    }

    while (isNaN(numero3)) {
        numero3 = parseFloat(prompt("Digite o terceiro número:"));
        if (isNaN(numero3)) {
            alert("Ei, parceiro, esse não é um número válido. Tente novamente!");
        }
    }
    
    let maior = Math.max(numero1, numero2, numero3);
    
    alert("Ótima escolha! O campo de energia alienígena está desativado, e agora podemos explorar esses artefatos misteriosos. O maior número é " + maior);
}
