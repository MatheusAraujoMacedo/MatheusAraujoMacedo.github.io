
        const backToTopButton = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

    <a href="https://wa.me/5511934069176?text=Olá Matheus, vi seu portfólio e gostaria de conversar!" 
       class="whatsapp-float" 
       target="_blank">
        <i class="fab fa-whatsapp"></i>
    </a>

        // Script do Loader
        window.addEventListener("load", function () {
            const loader = document.getElementById("loader");
            // Espera 2 segundos para dar tempo de ler o efeito "hacker"
            setTimeout(function() {
                loader.classList.add("loader-hidden");
            }, 1000); 
        });
  
        // Espera 2500ms (2.5 segundos) antes de começar, para dar tempo do Loader sumir
        setTimeout(() => {
            
            const hackerNameElement = document.getElementById('hacker-name');
            const finalName = "Matheus Araújo"; // Definimos o nome fixo aqui para garantir
            const hackerChars = '0101011001ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
            
            let iterations = 0;

            const interval = setInterval(() => {
                hackerNameElement.innerText = finalName
                    .split('')
                    .map((letter, index) => {
                        if(index < iterations) {
                            return finalName[index];
                        }
                        return hackerChars[Math.floor(Math.random() * hackerChars.length)];
                    })
                    .join('');

                if(iterations >= finalName.length) {
                    clearInterval(interval);
                }

                iterations += 1 / 3; 

            }, 50);

        }, 2500); 
  
        // Lógica da Modal
        const modal = document.getElementById('project-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');
        const modalLink = document.getElementById('modal-link');
        const closeModal = document.querySelector('.close-modal');

        // Função chamada pelo botão HTML
        function openModal(title, description, link) {
            modalTitle.innerText = title;
            modalDesc.innerText = description;
            modalLink.href = link; // Define o link do GitHub nesse botão
            
            modal.classList.add('show'); // Mostra a janela
        }

        // Fechar ao clicar no X
        closeModal.onclick = function() {
            modal.classList.remove('show');
        }

        // Fechar ao clicar fora da caixa
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.classList.remove('show');
            }
        }
