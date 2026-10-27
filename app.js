let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
    paragrafo.innerHTML = 'Escolha um número entre 1 a 100';

if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.2;
        window.speechSynthesis.speak(utterance);
} else {
    console.log("Web Speech API não suportada neste navegador.");
}


const valorMaximo = 100;


let numSort = parseInt(Math.floor(Math.random() * 10)+1);

let numEscolhido = parseInt(document.getElementById('dadosInput'));


let imprime = document.querySelector('h2');
let imprimeh3 = document.querySelector('h3');


function  verificarChute() {

        event.preventDefault(); 

        let numEscolhido = parseInt(document.getElementById('dadosInput').value);

        if (numEscolhido > valorMaximo) {
        imprimeh3.innerHTML = 'Número inválido !';
        }
    

        if (numEscolhido == numSort) {

                
                imprime.innerHTML = 'Acertou!!!';
                imprimeh3.innerHTML = 'Número sorteado: ' + numSort;

        }else if (numEscolhido < valorMaximo) {
                imprime.innerHTML = 'Errou!!!';
                imprimeh3.innerHTML = 'Número Sorteado: ' + numSort;
            }
           
        }  
           
      

function recarregar() {

        location.reload();

    }
         








 



