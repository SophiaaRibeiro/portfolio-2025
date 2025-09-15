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