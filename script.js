import { criarTabela, produtoArray } from "./funcoes/criarTabela.js";

const addTabela = document.getElementById("formCadastro");
const addProduto = document.getElementById("adicionarProduto");


addTabela.addEventListener("submit", function (event) {
  event.preventDefault();
  produtoArray();
  criarTabela(event);
});

addProduto.addEventListener("click", function (event) {
  event.preventDefault();
  produtoArray();
});

const reserta = document.getElementById("resertTable");
reserta.addEventListener("click", function resertTable(evento){
  const section = document.querySelector(".tabela");
  section.innerHTML = ""

})


