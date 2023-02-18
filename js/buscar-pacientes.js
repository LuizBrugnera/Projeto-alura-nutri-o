let botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"
  );
  xhr.addEventListener("load", function () {
    msgErro = document.querySelector("#erro-ajax");
    

    if (xhr.status == 200) {
        
      msgErro.classList.add("invisivel");
      let resposta = xhr.responseText;
      let pacientes = JSON.parse(resposta);
      
      pacientes.forEach((paciente) => {
        adicionaPacientesTabela(paciente);
      });
      
    }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        msgErro.classList.remove("invisivel");
    }
  });

  xhr.send();
});
