$(document).ready(function () {

    function render() {
        let arr = [1];

        $("#numero").prop('checked') ? arr.push(1) : arr.pop();

        $("#maiuscula").prop('checked') ? arr.push(1) : arr.pop();

        $("#minuscula").prop('checked') ? arr.push(1) : arr.pop();

        $("#especiais").prop('checked') ? arr.push(1) : arr.pop();

        let status = document.querySelector(".status");
        let substatus = document.querySelector(".status-text");
        let bgcolor = document.querySelector(".content-status");

        if (arr.length < 3) {
            status.innerHTML = "Fraco";
            substatus.innerHTML = "Esta senha é bastante vunerável!";
            bgcolor.style.background = "#ff3030";
        }
        if (arr.length >= 3 && arr.length < 4) {
            status.innerHTML = "Médio";
            substatus.innerHTML = "Esta senha é moderada, mas ainda vunerável!";
            bgcolor.style.background = "#ffc107";
        }
        if (arr.length >= 4) {
            status.innerHTML = "Forte";
            substatus.innerHTML = "Esta senha é segura!";
            bgcolor.style.background = "#04aa6d";
        }
    }

    window.setInterval(render, 500);

    function charObrigatorios() {
        const numeros = "1234567890";
        const maiusculas = "ABCDEFGHIJLMNOPQRSTUVXZYWK";
        const minusculas = "abcdefghijlmnopqrstuvxzywk";
        const especiais = "!@#$%&*,.;:?><[]{}-_()";
        let caracteres = "";

        if ($("#numero").prop('checked')) {
            caracteres += numeros;
        }

        if ($("#maiuscula").prop('checked')) {
            caracteres += maiusculas;
        }

        if ($("#minuscula").prop('checked')) {
            caracteres += minusculas;
        }

        if ($("#especiais").prop('checked')) {
            caracteres += especiais;
        }

        return caracteres;
    }

    function gerarSenha() {
        let caracteres = charObrigatorios();
        let senha = "";

        for (let i = 0; i < 13; i++) {
            senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }

        return senha;
    }

    $("#btn").click(function () {
        $("#senha").val(gerarSenha());
    });

    $("#copy-to-clip").click(function () {
        let textArea = document.querySelector('#senha');
        textArea.select();
        document.execCommand('copy');
        
        let el = document.querySelector('#copy-to-clip');
        el.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon>`;

        alert("Copiado!");
    });

})
