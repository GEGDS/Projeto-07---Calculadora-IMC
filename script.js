document.querySelector('#formIMC').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página seja recarregada

    calcIMC(); // Chama a função para calcular o IMC e exibir o resultado
});


function calcIMC() {
    let idade = document.querySelector('.iIdade').value;
    let altura = document.querySelector('.iAltura').value;
    let peso = document.querySelector('.iPeso').value;
    let resultado = document.getElementById('result');

    const IMC = peso /(altura ** 2);

    if(IMC <= 18.5) {
        resultado.textContent = `Seu IMC é ${IMC.toFixed(1)}, Seu peso esta abaixo do ideal`
    } else if (IMC > 18.5 && IMC <= 24.9) {
        resultado.textContent = `Seu IMC é ${IMC.toFixed(1)}, Peso Ideal`
    } else if (IMC > 24.9 && IMC <= 29.9) {
        resultado.textContent = `Seu IMC é ${IMC.toFixed(1)}, Seu peso esta acima do ideal`
    } else if (IMC > 29.9 && IMC <= 34.9) {
        resultado.textContent = `Seu IMC é ${IMC.toFixed(1)}, Seu peso esta em obesidade classe 1`
    } else if (IMC > 34.9 && IMC <= 39.9) {
        resultado.textContent = `Seu IMC é ${IMC.toFixed(1)}, Seu peso esta em obesidade classe 2`
    } else {
        resultado.textContent = `Seu IMC é ${IMC.toFixed(1)}, Seu peso esta em obesidade classe 3`
    }
}