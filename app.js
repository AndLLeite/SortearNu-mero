let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
    paragrafo.innerHTML = 'Escolha um número entre 1 a 100';



  function exibirTextoNaTela(tag, texto){
            let campo = document.querySelector(tag);
            campo.innerHTML = texto;
            responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.1});

  }

function exibirMensagemInicial() {

            exibirTextoNaTela('h1', 'Jogo do número secreto');
            exibirTextoNaTela('p', 'Escolha um número de 1 a 100!');

}






const valorMaximo = 100;


let numSort = parseInt(Math.floor(Math.random() * 100)+1);

let numEscolhido = parseInt(document.getElementById('dadosInput'));


let imprime = document.querySelector('h2');
let imprimeh3 = document.querySelector('h3');




function  verificarChute() {

        event.preventDefault(); 

        let numEscolhido = parseInt(document.getElementById('dadosInput').value);

        if (numEscolhido > valorMaximo) {
        //imprimeh3.innerHTML = 'Número inválido !';
        exibirTextoNaTela('h3', 'Número inválido!');

        }
    

        if (numEscolhido == numSort) {

                
               // imprime.innerHTML = 'Acertou!!!';
               // imprimeh3.innerHTML = 'Número sorteado: ' + numSort;
                exibirTextoNaTela('h2', 'Acertou!!!');
                exibirTextoNaTela('h3', `Número sorteado: ${numSort}`);


        }else if(numEscolhido < valorMaximo) {
              //  imprime.innerHTML = 'Errou!!!';
              //  imprimeh3.innerHTML = 'Número Sorteado: ' + numSort;
                 exibirTextoNaTela('h2', 'Errou!!!');
                exibirTextoNaTela('h3', `Número sorteado: ${numSort}`);
            }
           
        }  
           
      

function recarregar() {

        location.reload();

    }
         








 



