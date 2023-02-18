let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {

  let pacientes = document.querySelectorAll(".paciente");
  
   
    pacientes.forEach((paciente) => {
      tdNome = paciente.querySelector(".info-nome");
      let nome = tdNome.textContent;
      let expressao = new RegExp(this.value, "i");
      if (expressao.test(nome)) {
        paciente.classList.remove("invisivel");
      } else {
        paciente.classList.add("invisivel");
      }
      if (this.value.length < 1) {
        paciente.classList.remove("invisivel");
      }
    });
  
});
