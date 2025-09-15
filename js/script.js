
document.addEventListener("DOMContentLoaded", () => {
const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
   if (window.scrollY > 300)
    {
    btnTopo.style.display = "block";
    } else 
    {
        btnTopo.style.display = "none";
    }
});

// Função para exibir o botão "Voltar ao Topo" quando a página for rolada
btnTopo.addEventListener("click", () => {
    window.scrollTo({ 
        top: 0,
        behavior: "smooth"
    });
});
}); 

const backgrounds = {
  home: url("img/bg-home.jpg") ,
  projetos: url("img/bg-projetos.jpg") ,
  curriculo: url("img/bg-curriculo.jpg") ,
  sobremim: url("img/bg-sobremim.jpg") ,
  contato: url("img/bg-contato.jpg") 
};

window.addEventListener("scroll", function () {
  let atualbg = backgrounds.home;
  for(const id in backgrounds) {
    const secao = document.getElementById(id);

  if(secao) {
    const react = section.getBoundingClientRect();

      if(react.top <= window.innerHeight / 2 && react.bottom >= window.innerHeight / 2) {
      atualbg = backgrounds[id];
      break;
      }
    }
  }
  document.body.style.backgroundImage = atualbg;
});



  // Animação das barras de progresso
  const barras = document.querySelectorAll(".progresso");
  barras.forEach((barra) => {
    const valor = barra.getAttribute("data-valor");
    barra.style.width = valor + "%";
  });


// Função para filtrar os cards de conhecimentos

function filtrar(categoria, btn) {
  const cards = document.querySelectorAll('.caixinha-conhecimento');
  cards.forEach(card => {
    if (categoria === 'todos' || card.classList.contains(categoria)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
  // controla qual botão está ativo
  document.querySelectorAll('.filtros button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}


// Função para criar a interação do acordeão
document.addEventListener('DOMContentLoaded', () => {
  const faq = document.querySelectorAll('.btn-pergunta-sobremim');

  faq.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('ativo');
    });
  });
});

// Função para destacar o link do menu conforme a seção visível

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".menu-cabecalho a[href^='#']");

  function onScroll() {
    let currentId = "";
    const scrollPosition = window.scrollY + 160; // ajuste conforme altura do header

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
  onScroll(); // ativa ao carregar a página
});
