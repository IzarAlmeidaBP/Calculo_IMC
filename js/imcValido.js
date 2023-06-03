var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var peso_paciente = paciente.querySelector(".info-peso");
  var peso = peso_paciente.textContent;
  var pesoValido = validaPeso(peso);

  var altura_paciente = paciente.querySelector(".info-altura");
  var altura = altura_paciente.textContent;
  var alturaValida = validaAltura(altura);

  var imc_paciente = paciente.querySelector(".info-imc");

  if (!validaPeso) {
    pesoValido = false;
    peso_paciente.textContent = "Peso Inválido";
    peso_paciente.classList.add("paciente-invalido");
  }

  if (!validaAltura) {
    alturaValida = false;
    altura_paciente.textContent = "Altura Inválida";
    altura_paciente.classList.add("paciente-invalido");
  }
  if (alturaValida && pesoValido) {
    var imc = calculaImc(peso, altura);
    imc_paciente.textContent = imc;
  } else {
    imc_paciente.textContent = "IMC Inválido";
    imc_paciente.classList.add("paciente-invalido");
  }
}

function validaPeso(peso) {
  if (peso > 0 && peso < 300) {
    return true;
  } else {
    return false;
  }
}
function validaAltura(altura) {
  if (altura > 0 && altura < 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
function classificarPaciente(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Sobrepeso";
  } else if (imc >= 30 && imc < 35) {
    return "Obesidade grau 1";
  } else if (imc >= 35 && imc < 40) {
    return "Obesidade grau 2";
  } else {
    return "Obesidade grau 3";
  }
}
