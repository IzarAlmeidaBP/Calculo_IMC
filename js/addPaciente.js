var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function (event) {
  event.preventDefault();

  var addPaciente = document.querySelector("#adiciona-paciente");

  var paciente = addDadosPaciente(addPaciente);

  var pacienteTr = criaPaciente(paciente);

  var erros = validaPaciente(paciente);
  console.log(erros);
  if (erros.length > 0) {
    exibeMensagemErro(erros);
    return;
  }

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  addPaciente.reset();
  var mensagemErro = document.querySelector("#paciente-erro");
  mensagemErro.innerHTML = "";
});

function addDadosPaciente(addPaciente) {
  var paciente = {
    nome: addPaciente.nome.value,
    peso: addPaciente.peso.value,
    altura: addPaciente.altura.value,
    gordura: addPaciente.gordura.value,
    imc: calculaImc(addPaciente.peso.value, addPaciente.altura.value),
  };
  return paciente;
}
function criaPaciente(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(infoPaciente(paciente.nome, "info-nome"));
  pacienteTr.appendChild(infoPaciente(paciente.peso, "info-peso"));
  pacienteTr.appendChild(infoPaciente(paciente.altura, "info-altura"));
  pacienteTr.appendChild(infoPaciente(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(infoPaciente(paciente.imc, "imc-paciente"));

  return pacienteTr;
}
function exibeMensagemErro(erros) {
  var ulErro = document.querySelector("#paciente-erro");
  ulErro.innerHTML = "";
  erros.forEach(function (erro) {
    var liErro = document.createElement("li");
    liErro.textContent = erro;
    ulErro.appendChild(liErro);
  });
}

function infoPaciente(dado, classe) {
  var info = document.createElement("td");
  info.textContent = dado;
  info.classList.add(classe);
  return info;
}

function validaPaciente(paciente) {
  var erros = [];
  if (paciente.nome.length == 0) erros.push("O nome está invalido");

  if (!validaPeso(paciente.peso) || paciente.peso.length == 0)
    erros.push("O Peso está invalido");

  if (!validaAltura(paciente.altura) || paciente.altura.length == 0)
    erros.push("O Altura está invalido");

  if (paciente.gordura.length == 0) erros.push("Gordura está invalida");
  return erros;
}
