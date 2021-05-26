// VARIÁVEIS GLOBAIS

let btn = document.getElementById('btn');
let text = document.querySelector('p');

/**
 * Cálcula o imc
 * 
 * @param {Number} x Peso
 * @param {Number} y Altura
 * @returns {Number} imc = índice de massa corporal
 */


function IMC(x, y) {
  
  return imc = x / y**2;
   
};

/**
 * Define a classificação do imc
 * 
 * @param {Number} z  imc
 * @returns {String} a classificação do imc
 */

function classification(z) {
    if (z < 18.5) {
        return "Magreza";
    } else if (z >= 18.5 && z <= 24.9){
        return "Normal";
    } else if (z >= 25.0 && z <= 29.9) {
        return "Sobrepeso";
    } else if (z >= 30.0 && z <= 39.9){
        return "Obesidade";
    } else {
        return "Obesidade Grave";
    }
};


btn.addEventListener('click', function(event){
    
    event.preventDefault();
    
    let person ={}
    person.peso = +document.getElementById('peso').value;
    person.altura = +document.getElementById('altura').value;
    person.nome = document.getElementById('nome').value;
    person.idade = +document.getElementById('idade').value;

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
    TDs[0].innerHTML = person.nome;
    TDs[1].innerHTML = person.idade;
    IMC(person.peso, person.altura);
    TDs[2].innerHTML = imc.toFixed(2).replace(".",",");
    TDs[3].innerHTML = classification(imc);

})