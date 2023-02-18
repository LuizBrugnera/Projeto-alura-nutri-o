function obtemValores(form)
{
    let paciente = 
    {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}
function montaTr(paciente)
{
    let pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}
function montaTd(dado, classe)
{
    let td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
function validaPaciente(paciente)
{
    let erros = [];

    if(!validaPeso(paciente.peso))
    {
        erros.push("Peso inválido!");
    }if(!validaAltura(paciente.altura))
    {
        erros.push("Altura inválida!");
    }if(paciente.nome.length === 0)
    {
        erros.push("Preencha o Nome!");
    }if(paciente.gordura.length === 0)
    {
        erros.push("Preencha a % de gordura!");
    }
    
    
    return erros;
}
function msgErros(erros)
{
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(erro => {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaPacientesTabela(paciente)
{
    let pacienteTr = montaTr(paciente);
    let table = document.querySelector("#tabela-pacientes");
    table.appendChild(pacienteTr);
}


const bnt_add_paciente = document.querySelector("#bt-adicionar");

bnt_add_paciente.addEventListener("click", function (event) {
    event.preventDefault();
    const form = document.querySelector("#form-adiciona");

    let paciente = obtemValores(form);

    let erros = validaPaciente(paciente);

    if(erros.length > 0)
    {
        console.log(erros)
        msgErros(erros)
        return;
    }

    adicionaPacientesTabela(paciente);
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    form.reset();
    attTabela();

});





    /*
    bnt_add_paciente.addEventListener("click", function (event) {
        let table = document.querySelector("#tabela-pacientes");
        let nome = document.querySelector("#ipt-nome");
        let peso = document.querySelector("#ipt-peso");
        let altura = document.querySelector("#ipt-altura");
        let gordura = document.querySelector("#ipt-gordura");
        let linha = table.insertRow(-1);
        linha.classList.add(".paciente");

        let cell1 = linha.insertCell(0);
        cell1.classList.add("info-nome");
        let cell2 = linha.insertCell(1);
        cell2.classList.add("info-peso");
        let cell3 = linha.insertCell(2);
        cell3.classList.add("info-altura");
        let cell4 = linha.insertCell(3);
        cell4.classList.add("info-gordura");
        let cell5 = linha.insertCell(4);
        cell5.classList.add("info-imc");

        cell1.innerHTML = nome.value;
        cell2.innerHTML = peso.value;
        cell3.innerHTML = altura.value;
        cell4.innerHTML = gordura.value;
        nome.value = "";
        peso.value = "";
        altura.value = "";
        gordura.value = "";
        calculaIMC(linha);
  });
  */