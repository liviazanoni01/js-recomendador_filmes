// Idade 18 anos;
// 1) As tranças do Careca, romance (indicação felipe de moraes)
// 2) Bastardos Inglórios, ação
// 3) Anbabelle, terror

// Idade 12 anos;
// 1) As branquelas, ação
// 2) Caroline e o Mundo Secreto, terror
// 3) A barraca do beijo, romance

// Idade livre;
// 1) Enrolados, romance
// 2) Orion e o Escuro, terror
// 3) Carros, ação

let campoIdade;
let campoAcao;
let campoTerror;
let campoRomance;
let filme

function setup() {
  createCanvas(600, 400);
  createElement('h2', 'Recomendador de Filmes')
  createSpan('Idade: ');
  campoIdade = createInput('15');
  createElement('h4', 'Escolha somente um gênero:')
  campoAcao = createCheckbox('Ação');
  campoTerror = createCheckbox('Terror');
  campoRomance = createCheckbox('Romance')
  
}

function draw() {
  background('pink');
  textAlign(CENTER, CENTER);
  textSize(40);
  fill('purple')

  let idade = campoIdade.value();
  let acao = campoAcao.checked();
  let terror = campoTerror.checked();
  let romance = campoRomance.checked();
  
  filme = geraRecomendacao(idade, acao, terror, romance);
  
 text(filme, width/2, height/2);
}

function geraRecomendacao(idade, acao, terror, romance){
  if(idade >= 18){
    if(acao){
   return 'Bastardos Inglórios';
  }else if(terror){
    return 'Anabelle';
  }else if(romance){
  return 'As tranças do Careca';
  }else{
  return 'Bastardos Inglórios'
  }
  }else if(idade >= 12){
    if (acao){
      return 'As Branquelas'
    }else if(terror){
      return 'Coraline e o Mundo Segreto';
    }else if(romance){
      return 'A barraca do beijo';
    }else{
      return 'As Branquelas';
    }
  }else{
    if(acao){
      return 'Carros'
    }else if(terror){
      return 'Orion e o Escuro';
    }else if(romance){
      return 'Enrolados';
    }else{
      return 'Carros';
    }
  }
}
      
