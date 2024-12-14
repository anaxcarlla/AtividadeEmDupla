// Função que será executada quando a página estiver completamente carregada
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    // Função para mostrar uma mensagem de sucesso ou erro
    function mostrarMensagem(tipo, mensagem) {
        const mensagemElemento = document.createElement("div");
        mensagemElemento.classList.add("mensagem", tipo);
        mensagemElemento.textContent = mensagem;
        document.body.appendChild(mensagemElemento);

        // Remove a mensagem após 5 segundos
        setTimeout(() => {
            mensagemElemento.remove();
        }, 5000);
    }

    // Animação de fade-in para o cabeçalho e o conteúdo principal
    const header = document.querySelector("header");
    const main = document.querySelector("main");

    // Atrasar a animação para o conteúdo principal
    setTimeout(() => {
        header.style.opacity = 1;
        main.style.opacity = 1;
    }, 500);

    // Animação de fade-in
    header.style.transition = "opacity 1s ease-in-out";
    main.style.transition = "opacity 1s ease-in-out";

    header.style.opacity = 0;
    main.style.opacity = 0;

    // Validação e envio do formulário
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = document.querySelector("#nome").value;
        const email = document.querySelector("#email").value;
        const mensagem = document.querySelector("#mensagem").value;

        // Validação dos campos do formulário
        if (nome === "" || email === "" || mensagem === "") {
            // Se algum campo estiver vazio, mostrar mensagem de erro
            mostrarMensagem("erro", "Todos os campos são obrigatórios!");
        } else {
            // Se todos os campos estiverem preenchidos corretamente, mostrar sucesso
            mostrarMensagem("sucesso", "Mensagem enviada com sucesso!");

            // Criar um objeto com os dados do formulário
            const dadosFormulario = {
                nome: nome,
                email: email,
                mensagem: mensagem
            };

            fetch('http://localhost:3000/api/formulario', {  // Altere para a URL completa com a porta 3000
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosFormulario)
            })
            .then(response => response.json())
            .then(data => {
                alert('Mensagem enviada com sucesso!');
                form.reset();
            })
            .catch(error => {
                console.error('Erro ao enviar o formulário:', error);
                alert('Erro ao enviar a mensagem.');
            });
        }
    });
});