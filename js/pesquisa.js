var campoPesquisa = document.querySelector("#filtrar-tabela");

campoPesquisa.addEventListener("input", function () {
  var pacientes = document.querySelectorAll(".paciente");
  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var nomePesquisa = paciente.querySelector(".info-nome");
      var nome = nomePesquisa.textContent;
      var expressao = new RegExp(this.value, "i")
      if (!expressao.test(nome)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});
