
const campoObrigatorio = document.querySelectorAll(".campo");
const botaoEnviar = document.getElementById("botaoSubmit");
const textoDeErro = document.querySelectorAll(".textoErro");

botaoEnviar.addEventListener("click", function() {
    campoObrigatorio.forEach(function(campo, index) {
        const textoErro = textoDeErro[index];

        if (campo.value.trim() === "") {
            campo.classList.add("bordaErro");
            textoErro.classList.add("textoAtivo");
        } else {
            campo.classList.add("bordaPreenchido");
            textoErro.classList.remove("textoAtivo");
        }
    });
});


