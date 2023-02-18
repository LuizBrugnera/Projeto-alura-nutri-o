const tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function () {
  console.log("double click");
  let linha = event.target.parentNode;
  linha.classList.add("fadeOut");

  setTimeout(function (){
    linha.remove();
    console.log("double click");
  }, 800);
  
});
