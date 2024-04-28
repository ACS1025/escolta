// Função para enviar todos os dados dos formulários
function cadastrarTudo() {
    var formDistancia = document.getElementById("form_distancia");
    var formSupersonic = document.getElementById("form_supersonic");
    var formRetornoGrupo = document.getElementById("form_retorno_grupo");

    // Combinar os dados dos formulários
    var formData = new FormData(formDistancia);
    var formDataSupersonic = new FormData(formSupersonic);
    var formDataRetornoGrupo = new FormData(formRetornoGrupo);

    // Adicionar dados dos outros formulários ao primeiro
    for (var pair of formDataSupersonic.entries()) {
        formData.append(pair[0], pair[1]);
    }

    for (var pair of formDataRetornoGrupo.entries()) {
        formData.append(pair[0], pair[1]);
    }

    // Log dos dados antes de enviar para o servidor
    console.log("Dados a serem enviados para o servidor:");
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    // Enviar dados combinados para o servidor
    fetch('cadastro.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert("Cadastro realizado com sucesso!");
            // Limpar os campos após o cadastro
            formDistancia.reset();
            formSupersonic.reset();
            formRetornoGrupo.reset();
        } else {
            alert("Ocorreu um erro ao cadastrar. Por favor, tente novamente.");
        }
    })
    .catch(error => {
        console.error('Erro ao cadastrar:', error);
        alert("Ocorreu um erro ao cadastrar. Por favor, tente novamente.");
    });
}
