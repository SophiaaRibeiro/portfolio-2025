document.addEventListener("DOMContentLoaded", () => {
  // Botão topo
  const btnTopo = document.getElementById("btnTopo");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({ 
      top: 0,
      behavior: "smooth"
    });
  });

  // Background dinâmico
  const backgrounds = {
    home: "url('img/bg-home.jpg')",
    projetos: "url('img/bg-projetos.jpg')",
    curriculo: "url('img/bg-curriculo.jpg')",
    sobremim: "url('img/bg-sobremim.jpg')",
    contato: "url('img/bg-contato.jpg')"
  };

  window.addEventListener("scroll", function () {
    let atualbg = backgrounds.home;
    for(const id in backgrounds) {
      const secao = document.getElementById(id);
      if(secao) {
        const react = secao.getBoundingClientRect();
        if(react.top <= window.innerHeight / 2 && react.bottom >= window.innerHeight / 2) {
          atualbg = backgrounds[id];
          break;
        }
      }
    }
    document.body.style.backgroundImage = atualbg;
  });

  // Barras de progresso
  const barras = document.querySelectorAll(".progresso");
  barras.forEach((barra) => {
    const valor = barra.getAttribute("data-valor");
    barra.style.width = valor + "%";
  });

  // Filtro cards
  window.filtrar = function(categoria, btn) {
    const cards = document.querySelectorAll('.caixinha-conhecimento');
    cards.forEach(card => {
      if (categoria === 'todos' || card.classList.contains(categoria)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    document.querySelectorAll('.filtros button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  // Acordeão perguntas
  const faq = document.querySelectorAll('.btn-pergunta-sobremim');
  faq.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('ativo');
    });
  });

  // Menu ativo
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".menu-cabecalho a[href^='#']");

  function onScroll() {
    let currentId = "";
    const scrollPosition = window.scrollY + 160;
    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop) {
        currentId = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentId) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
});


const select = document.getElementById('selectCertificados');
const certificados = document.getElementById('selectCertificados');


// Os dados dos seus certificados, organizados por área
const dadosCertificados = {
  // A chave deve ser o 'value' do <option>: minúsculo e sem espaço
  front: [
      {
          nome: "Certificado Alura HTML e CSS: trabalhando com responsividade e publicação de projetos",
          link: "https://cursos.alura.com.br/certificate/537e1bd9-4387-424f-94ac-419f737650d8"
      },
      {
          nome: "Certificado Alura HTML e CSS: praticando HTML/CSS",
          link: "https://cursos.alura.com.br/certificate/4af46192-ad4b-4bdf-ae29-3f91dcc79271"
      },
      {
          nome: "Certificado Alura HTML e CSS: Classes, posicionamento e Flexbox",
          link: "https://cursos.alura.com.br/certificate/5588157f-db36-465a-bfde-803ebb42f0eb"
      }   
  ],
  back: [
      { nome: "C#: Trabalhando com Arrays e Coleções", link: "https://cursos.alura.com.br/certificate/cc9dfcf6-eb44-4f7b-9728-699787fa566c?lang" },
      { nome: "C#: dominando Orientação a Objetos", link: "https://cursos.alura.com.br/certificate/44c7a112-9a53-4957-8e57-48a5e1328d03?lang" }
  ],
  dados: [
      { nome: "Modelagem de dados: desenvolvendo o modelo lógico", link: "https://cursos.alura.com.br/certificate/02c56675-e3ba-4864-b1a6-f01b654d0d27?lang" },
      { nome: "Modelagem de dados: identificando entidades, atributos, relacionamentos", link: "https://cursos.alura.com.br/certificate/3f6f69c8-c6dc-45dc-bf77-585a59358d18?lang" }
  ],
  eventos: [
      { nome: "Redefine Possible - International Women's Day", link: "https://www.linkedin.com/in/sophia-r-mendon%C3%A7a-95105a252/overlay/1744075850575/single-media-viewer/?profileId=ACoAAD5Mvc0Bl_iWZfdrjTRi4mxg8o8iTmcYd1w" }
  ]
};


// As chaves do objeto dadosCertificados são as áreas que queremos no select
const areas = Object.keys(dadosCertificados); 

// NOVO CÓDIGO/AJUSTE: Popular o Select
areas.forEach(areaKey => {
    const novaOpcao = document.createElement('option');
    
    // Define o 'value' (ex: 'front', 'back', 'dados', 'eventos')
    novaOpcao.value = areaKey;
    
    // Define o texto que aparece para o usuário (ex: Front, Back, etc.)
    let areaDisplay;
    if (areaKey === 'dados') {
        areaDisplay = 'Banco de Dados';
    } else if (areaKey === 'front') {
        areaDisplay = 'Front-end';
    } else if (areaKey === 'back') {
        areaDisplay = 'Back-end';
    } else {
        // Para os outros (como 'eventos')
        areaDisplay = areaKey.charAt(0).toUpperCase() + areaKey.slice(1);
    }
    
    novaOpcao.textContent = areaDisplay;
    select.appendChild(novaOpcao);
});

function exibirCertificados(areaSelecionada) {
    // 1. Limpa o conteúdo atual
    containerCertificados.innerHTML = '';

    // 2. Se a área selecionada existe nos nossos dados
    if (dadosCertificados[areaSelecionada]) {
        const certificadosDaArea = dadosCertificados[areaSelecionada];
        
        let htmlParaInserir = '';

        // 3. Loop para criar o HTML de cada certificado
        certificadosDaArea.forEach(cert => {
            htmlParaInserir += `
                <a 
                    class="certificados" 
                    href="${cert.link}" 
                    target="_blank" 
                    title="Abre o certificado em uma nova aba">
                    ${cert.nome}
                </a>
                <br>
            `;
        });
        
        // 4. Insere todos os links de uma vez no container
        containerCertificados.innerHTML = htmlParaInserir;

    } else {
        // Se a área não tiver certificados ou for a opção vazia
        containerCertificados.innerHTML = '<p>Nenhum certificado encontrado para esta área, ou a área selecionada é inválida.</p>';
    }
}

select.addEventListener('change', function() {
    // Pega o 'value' da opção selecionada (ex: 'front')
    const areaSelecionada = select.value;

    // Chama a função de exibição com a área escolhida
    if (areaSelecionada) { 
      exibirCertificados(areaSelecionada);
  } else {
      containerCertificados.innerHTML = '<p>Use o menu acima para filtrar os certificados</p>';
  }
});
