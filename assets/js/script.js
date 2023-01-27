$(document).ready(function() {

    function gerarSenha(tamanho) {
        let caracteres = 'ABCDEFGHIJLMNOPQRSTUVXZYWK~!@#$%^&*()abcdefghijlmnopqrstuvxzywk1234567890';
        let senha = "";
    
        for (let i = 0; i < tamanho; i++) {
            senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }

        return senha;
    }

    $("#btn").click(function() {
        let tamanho = $("#chars").val();
        $("#senha").val(gerarSenha(tamanho));
    })

})
