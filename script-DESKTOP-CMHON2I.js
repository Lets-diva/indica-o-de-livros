function mostrarResumo(card){

  /* ESCONDE O HEADER */

  document.querySelector("header").style.display = "none";

  /* ESCONDE AS OUTRAS CATEGORIAS */

  const categorias = document.querySelectorAll(".categorias");

  categorias.forEach(function(categoria){

    categoria.style.display = "none";

  });

  /* MOSTRA SOMENTE A CATEGORIA DO LIVRO CLICADO */

  const categoriaAtual = card.closest(".categorias");

  categoriaAtual.style.display = "block";

  /* ESCONDE OS OUTROS LIVROS */

  const cards = document.querySelectorAll(".card-livro");

  cards.forEach(function(item){

    if(item !== card){

      item.style.display = "none";

    }

  });

  /* MOSTRA O RESUMO */

  const resumo = card.querySelector(".resumo");

  resumo.classList.add("ativo");

  /* MOSTRA O BOTÃO */

  const botao = card.querySelector(".btn-voltar");

  botao.classList.add("ativo");

}

/* VOLTAR PARA TODOS OS LIVROS */

function voltarLivros(event){

  event.stopPropagation();

  /* MOSTRA O HEADER */

  document.querySelector("header").style.display = "flex";

  /* MOSTRA TODAS AS CATEGORIAS */

  const categorias = document.querySelectorAll(".categorias");

  categorias.forEach(function(categoria){

    categoria.style.display = "block";

  });

  /* MOSTRA TODOS OS LIVROS */

  const cards = document.querySelectorAll(".card-livro");

  cards.forEach(function(card){

    card.style.display = "block";

  });

  /* ESCONDE TODOS OS RESUMOS */

  const resumos = document.querySelectorAll(".resumo");

  resumos.forEach(function(resumo){

    resumo.classList.remove("ativo");

  });

  /* ESCONDE TODOS OS BOTÕES */

  const botoes = document.querySelectorAll(".btn-voltar");

  botoes.forEach(function(botao){

    botao.classList.remove("ativo");

  });

}

/* MENU DOS GÊNEROS */

function abrirMenu(){

  const menu = document.getElementById("menuGeneros");

  menu.classList.toggle("ativo");

}