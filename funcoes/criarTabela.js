const nomeProduto = document.querySelector("#produto");
const quantidadeProduto = document.querySelector("#quantidade");
const nomeCliente = document.getElementById("cliente");
let listaConsumo = [];

function criarTabela(event) {
  const table = document.getElementById("tabela-cliente");

  // Limpar tabela existente
  table.innerHTML = "";

  // criando a tabela
  const thead = document.createElement("thead");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  const tr = document.createElement("tr");
  th1.textContent = "Produto";
  th2.textContent = "Quantidade";
  th3.textContent = "Valor";

  //  adicionando os elementos na thead
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  thead.appendChild(tr);

  // criando elemento p com nome cliente
  const p = document.createElement("p");
  p.textContent = nomeCliente.value;
  table.insertAdjacentElement("beforebegin", p);

  // adicionando a tabela
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  let valorTotal = 0;

  listaConsumo.forEach(function (item) {
    const tr = document.createElement("tr");

    const tdProduto = document.createElement("td");
    tdProduto.textContent = item.produto;

    const tdQuantidade = document.createElement("td");
    tdQuantidade.textContent = item.quantidade;

    const tdValor = document.createElement("td");
    const valorProduto = obterValorProduto(item.produto);
    tdValor.textContent = valorProduto * item.quantidade;
    valorTotal += valorProduto * item.quantidade;
    tr.appendChild(tdProduto);
    tr.appendChild(tdQuantidade);
    tr.appendChild(tdValor);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  //  footer da tabela
  const checkbox = document.getElementById("pagarTaxa");
// add 10%
  if (checkbox.checked) {
    const desconto = 10;
    valorTotal = valorTotal + valorTotal * (desconto / 100);
  }

  const total = document.createElement("p");
  total.textContent = `Total: R$ ${valorTotal}`;
  table.appendChild(total);
}

function obterValorProduto(produto) {
  const listaProdutos = [
    { produto: "Pizza", valor: 42 },
    { produto: "Refrigerante", valor: 8 },
    { produto: "Suco", valor: 7 },
    { produto: "Rodizio", valor: 70 },
    { produto: "Temaki", valor: 20 },
  ];

  const produtoEncontrado = listaProdutos.find(function (item) {
    return item.produto === produto;
  });

  if (produtoEncontrado) {
    let valorTotal = dividirConta(produtoEncontrado.valor);
    console.log(valorTotal);
    return valorTotal;
    // return produtoEncontrado.valor;

  } else {
    return "valor não encontrado";
  }
}

function dividirConta(valor) {
  const dividirValor = document.querySelector("#divisaoConta").value;
  if (dividirValor < 0) {
    return valor;
  } else {
    return valor / (parseInt(dividirValor) + 1);
  }
}


function produtoArray() {
  const produto = nomeProduto.value;
  const quantidade = quantidadeProduto.value;
  listaConsumo.push({ produto, quantidade });

  nomeProduto.value = "";
  quantidadeProduto.value = "";
}
export { criarTabela, obterValorProduto, produtoArray, dividirConta };
