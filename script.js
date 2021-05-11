let btn = document.getElementById('btn');
let text = document.querySelector('p');
let pesoInput = document.getElementById('peso');
let alturaInput = document.getElementById('altura');
let nomeInput = document.getElementById('nome');
let idadeInput = document.getElementById('idade');



function IMC(peso, altura) {
    peso = pesoInput.value;
    altura = alturaInput.value;
    imc = peso / (altura * altura);
    return imc;
};

function classification(imc) {
    if (imc < 18.5) {
        return "Magreza";
    } else if (imc >= 18.5 && imc <= 24.9){
        return "Normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30.0 && imc <= 39.9){
        return "Obesidade";
    } else {
        return "Obesidade Grave";
    }
};


btn.addEventListener('click', function(event){
    event.preventDefault();
    Table = document.querySelector('tbody');
    TR = document.createElement('tr');
    Table.appendChild(TR);
    TDName = document.createElement('td');
    TDIdade = document.createElement('td');
    TDImc = document.createElement('td');
    TDClassificao = document.createElement('td');
    TDs = [TDName, TDIdade, TDImc, TDClassificao];
    for (var i = 0; i <= 3; i++){
        TR.appendChild(TDs[i]);
    };
    TDs[0].innerHTML = nomeInput.value;
    TDs[1].innerHTML = idadeInput.value;
    IMC(peso, altura);
    TDs[2].innerHTML = imc.toFixed(2).toString().replace(".",",");
    TDs[3].innerHTML = classification(imc);

   


})