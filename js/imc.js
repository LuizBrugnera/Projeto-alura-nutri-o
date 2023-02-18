function calculaIMC(peso, altura) {
    return peso / (altura * altura);
}
function removeInvalido(paciente) {
  if (true) {
    console.log("Altura ou peso inválidos!");
    paciente.querySelector(".info-imc").textContent =
      "Altura ou peso inválidos!";
    console.log(paciente.getAttribute("class"));
  }
}
function validaPeso(peso)
{
    if (peso <= 500 && peso > 0) {
        return true;
    }
    return false;
}
function validaAltura(altura)
{
    if (altura <= 3 && altura > 0) {
        return true;
    }
    return false;
}
function attTabela()
{
    const lista_de_pacientes = document.querySelectorAll(".paciente");
    let peso;
    let altura;

    lista_de_pacientes.forEach(paciente => {
    peso = paciente.querySelector(".info-peso").textContent;
    altura = paciente.querySelector(".info-altura").textContent;
    
    if (!validaPeso(peso)) {
        console.log("Peso inválido!");
        paciente.querySelector(".info-imc").textContent =
          "Peso inválido!";
        paciente.classList.add("paciente-invalido");
      } 
    else if(!validaPeso(altura))
    {
        console.log("Altura inválida!");
        paciente.querySelector(".info-imc").textContent =
          "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    else {
        paciente.querySelector(".info-imc").textContent = (calculaIMC(peso, altura).toFixed(2));
      }
});
}
attTabela();
