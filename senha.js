onst senha = document.getElementById("senha");

const mostrarSenha = document.getElementById("mostrarSenha");

const tamanho = document.getElementById("tamanho");
const maiuscula = document.getElementById("maiuscula");
const minuscula = document.getElementById("minuscula");
const numero = document.getElementById("numero");
const especial = document.getElementById("especial");

const progresso = document.getElementById("progresso");
const nivel = document.getElementById("nivel");
const resultado = document.getElementById("resultado");


const caracteresEspeciais = "!@#$%&*?+-_=()[]{}";


senha.addEventListener("input", verificarSenha);


mostrarSenha.addEventListener("click", function () {

    if (senha.type === "password") {

        senha.type = "text";

        mostrarSenha.textContent = "Ocultar";

    } else {

        senha.type = "password";

        mostrarSenha.textContent = "Mostrar";
    }

});


function verificarSenha() {

    const valor = senha.value;

    let pontos = 0;


    // Verificar quantidade de caracteres

    if (valor.length >= 8) {

        tamanho.classList.add("valido");
        tamanho.classList.remove("invalido");

        tamanho.textContent = "✅ Pelo menos 8 caracteres";

        pontos++;

    } else {

        tamanho.classList.add("invalido");
        tamanho.classList.remove("valido");

        tamanho.textContent = "❌ Pelo menos 8 caracteres";
    }


    // Verificar letra maiúscula

    if (/[A-Z]/.test(valor)) {

        maiuscula.classList.add("valido");
        maiuscula.classList.remove("invalido");

        maiuscula.textContent = "✅ Pelo menos uma letra maiúscula";

        pontos++;

    } else {

        maiuscula.classList.add("invalido");
        maiuscula.classList.remove("valido");

        maiuscula.textContent = "❌ Pelo menos uma letra maiúscula";
    }


    // Verificar letra minúscula

    if (/[a-z]/.test(valor)) {

        minuscula.classList.add("valido");
        minuscula.classList.remove("invalido");

        minuscula.textContent = "✅ Pelo menos uma letra minúscula";

        pontos++;

    } else {

        minuscula.classList.add("invalido");
        minuscula.classList.remove("valido");

        minuscula.textContent = "❌ Pelo menos uma letra minúscula";
    }


    // Verificar número

    if (/[0-9]/.test(valor)) {

        numero.classList.add("valido");
        numero.classList.remove("invalido");

        numero.textContent = "✅ Pelo menos um número";

        pontos++;

    } else {

        numero.classList.add("invalido");
        numero.classList.remove("valido");

        numero.textContent = "❌ Pelo menos um número";
    }


    // Verificar caractere especial

    let possuiEspecial = false;


    for (let caractere of valor) {

        if (caracteresEspeciais.includes(caractere)) {

            possuiEspecial = true;

            break;
        }
    }


    if (possuiEspecial) {

        especial.classList.add("valido");
        especial.classList.remove("invalido");

        especial.textContent = "✅ Pelo menos um caractere especial";

        pontos++;

    } else {

        especial.classList.add("invalido");
        especial.classList.remove("valido");

        especial.textContent = "❌ Pelo menos um caractere especial";
    }


    // Atualizar barra de progresso

    const porcentagem = (pontos / 5) * 100;

    progresso.style.width = porcentagem + "%";


    // Limpar classes anteriores

    progresso.classList.remove(
        "fraca",
        "media",
        "forte",
        "muito-forte"
    );


    // Verificar nível da senha

    if (valor === "") {

        nivel.textContent = "";
        resultado.textContent = "";

        progresso.style.width = "0%";

        return;
    }


    if (pontos <= 2) {

        progresso.classList.add("fraca");

        nivel.textContent = "🔴 Senha fraca";

        resultado.textContent =
            "A senha precisa ser melhorada.";

    } else if (pontos === 3) {

        progresso.classList.add("media");

        nivel.textContent = "🟠 Senha média";

        resultado.textContent =
            "A senha atende a alguns requisitos.";

    } else if (pontos === 4) {

        progresso.classList.add("forte");

        nivel.textContent = "🟢 Senha forte";

        resultado.textContent =
            "A senha atende a maioria dos requisitos.";

    } else {

        progresso.classList.add("muito-forte");

        nivel.textContent = "🟢 Senha muito forte";

        resultado.textContent =
            "A senha atende a todos os requisitos!";
    }

}
