const form = document.getElementById('form-confirm');

function validateNumbers() {
    const ValA = parseFloat(document.getElementById('valor-a').value);
    const ValB = parseFloat(document.getElementById('valor-b').value);
    return ValB > ValA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o carregamento da página após o envio

    if (validateNumbers()) {
        const containerMensagemSucesso = document.querySelector(".succes-message")
        const mensagemSucesso ='Formulário enviado com sucesso! Verificando: <b>Valor B maior que Valor A!</b>'
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        document.getElementById('valor-a').value = ''; // Limpa o campo A
        document.getElementById('valor-b').value = ''; // Limpa o campo B
    } else {
        document.querySelector('.error-message').style.display = 'block';
    }
});