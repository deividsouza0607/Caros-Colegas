document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário, o que recarregaria a página
    event.preventDefault(); 

    // Define TODAS as senhas corretas em um Array (lista).
    const senhasCorretas = ["mirtilo", "Senha", "skyrim"]; 
    
    // Pega o valor digitado no campo de senha
    const senhaDigitada = document.getElementById('password').value;
    
    // Pega o elemento de mensagem de erro
    const mensagemErro = document.getElementById('errorMessage');

    // Remove a classe 'visible' para esconder a mensagem de erro
    mensagemErro.classList.remove('visible');
    
    // Lógica de verificação
    // O método 'includes()' verifica se a senhaDigitada está na lista de senhasCorretas.
    if (senhasCorretas.includes(senhaDigitada)) {
        
        // SENHA CORRETA (qualquer uma das 3): Redireciona para a próxima página.
        window.location.href = 'src/proximaPagina.html'; 

    } else {
        // SENHA INCORRETA:
        
        // 1. Define a mensagem de erro
        mensagemErro.textContent = 'Senha incorreta. Tente novamente.';
        
        // 2. Adiciona a classe 'visible' para mostrar a mensagem
        mensagemErro.classList.add('visible');
        
        // 3. Limpa o campo de senha para nova tentativa
        document.getElementById('password').value = '';
        document.getElementById('password').focus(); 
    }
});