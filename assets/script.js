// Pega o formulário
const form = document.getElementById('contato');

// Adiciona um ouvinte de evento 'submit' para o formulário
form.addEventListener('submit', function(event) {
    // Pega os inputs do formulário
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');

    // Verifica se os campos estão vazios
    if(nomeInput.value === '' || emailInput.value === '') {
        // Previne o comportamento padrão do formulário (envio)
        event.preventDefault();
        // Mostra um alerta se os campos estiverem vazios
        alert('Por favor, preencha todos os campos do formulário antes de enviar.');
    }else{
        alert("Formulário enviado com sucesso!");
    }
});

