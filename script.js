function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/img/close_white_36dp.svg";
    }
}

function redirectPage(url) {
    window.location.href = url;
}
function redirecionarParaPaginaDois() {
    window.location.href = 'pagina2.html'; // Substitua 'pagina2.html' pelo caminho real da sua página dois
}
// Seleciona o botão "Quero Resgatar" quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    var btnResgatar = document.getElementById('btnResgatar');

    // Adiciona um evento de clique ao botão
    btnResgatar.addEventListener('click', function() {
        // Redireciona para a página desejada ao clicar no botão
        window.location.href = 'resgate.html'; // Substitua 'pagina_de_resgate.html' pelo URL da sua página de resgate
    });
});

/*sobre*/
document.getElementById('linkSobre').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    const sobreSection = document.getElementById('sobre');
    const offsetTop = sobreSection.offsetTop; // Obtém a posição vertical da seção "Sobre"

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Adiciona uma animação de scroll suave
    });
});
/*sobre na pagina resgate*/
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se a página atual é 'resgate.html'
    if (window.location.href.includes('resgate.html')) {
        const sobreLink = document.getElementById('linkSobre');
        
        // Adiciona um evento de clique ao link "Sobre"
        sobreLink.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            
            // Redireciona de volta para a página 'index.html' e rola suavemente até a seção 'sobre'
            window.location.href = 'index.html#sobre';
        });
    }
});
/*quero adotar*/
document.addEventListener('DOMContentLoaded', function() {
    var btnQueroAdotar = document.querySelector('.quero-adotar-button');

    btnQueroAdotar.addEventListener('click', function() {
        window.location.href = 'abrigo.html'; // Substitua 'instituicoes.html' pelo URL da sua página de instituições
    });
});
/*quero doar*/
document.addEventListener('DOMContentLoaded', function() {
    var btnQueroDoar = document.querySelector('.quero-doar-button');

    btnQueroDoar.addEventListener('click', function() {
        window.location.href = 'abrigo.html'; // Substitua 'instituicoes.html' pelo URL da sua página de instituições
    });
});

/*pagina abrigo-sobre */
document.addEventListener('DOMContentLoaded', function() {
    const openFormButton = document.getElementById('openFormButton');
    const uploadForm = document.getElementById('uploadForm');
    const postagensDiv = document.getElementById('postagens');
  
    openFormButton.addEventListener('click', function() {
      uploadForm.style.display = 'block';
    });
    closeFormButton.addEventListener('click', function() {
        uploadForm.style.display = 'none';
      });
  
    uploadForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      const imageFile = this.querySelector('input[name="imageFile"]').files[0]; // Obtém o arquivo de imagem
      const caption = this.querySelector('textarea[name="caption"]').value;
      const address = this.querySelector('input[name="address"]').value;
  
      if (!imageFile || caption === '' || address === '') {
        alert('Preencha todos os campos do formulário.');
        return;
      }
  
      const reader = new FileReader();
      reader.onload = function(event) {
        const imgSrc = event.target.result;
  
        const postagemDiv = document.createElement('div');
        postagemDiv.classList.add('postagem');
        postagemDiv.innerHTML = `
          <img src="${imgSrc}" alt="Imagem postada">
          <p><strong>Legenda:</strong> ${caption}</p>
          <p><strong>Endereço:</strong> ${address}</p>
        `;
  
        postagensDiv.appendChild(postagemDiv);
  
        // Limpa o formulário
        uploadForm.reset();
        // Oculta o popup após a postagem
        uploadForm.style.display = 'none';
      };
  
      reader.readAsDataURL(imageFile); // Converte o arquivo de imagem para base64
    });
  });
  
  