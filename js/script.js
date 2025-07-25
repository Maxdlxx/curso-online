//DOM - document Object Model

//Capturando a janela dialog.
let boxModal = document.getElementById("meuModal");

//Capturando os links dos cursos.
let linkJs = document.getElementById("linkJs");
let linkHtml = document.getElementById("linkHtml");
let linkCss = document.getElementById("linkCss");

//Quando o usuario clicar no link:
//1 devemos abrir o modal !
linkJs.addEventListener("click", function(){
//Abrindo Modal
boxModal.showModal();

//Inserindo o texto do curso no modal via innerHTML.
let boxInner = document.getElementById("box");
  boxInner.innerHTML = "";
  boxInner.innerHTML += "<div><p>JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional).[2][3] Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p><p>JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.[4] É atualmente a principal linguagem para programação client-side em navegadores web. É também bastante utilizada do lado do servidor através de ambientes como o node.js.</p></div>"
});



linkHtml.addEventListener("click", function(){
boxModal.showModal();
let boxInner = document.getElementById("box");
 boxInner.innerHTML = "";
 boxInner.innerHTML += "<div><p>HTML Criada pelo britânico Tim Berners-Lee, o acrônimo HTML significa HiperText Markup Language, traduzindo ao português: Linguagem de Marcação de Hipertexto. O HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website.</p></div>"
});



linkCss.addEventListener("click" , function(){
boxModal.showModal();
let boxInner = document.getElementById("box");
 boxInner.innerHTML = "";
 boxInner.innerHTML += "<div><p>O CSS foi desenvolvido pelo W3C em 1996 por um motivo bastante simples: a linguagem HTML não foi projetada para ter tags que ajudassem a formatar a página — o objetivo era apenas escrever a marcação para o conteúdo da web</p></div>"

});

//Capturando o botão de fechar do modal!
let botaoFecharModal = document.querySelector(".close");

botaoFecharModal.addEventListener("click" , function(){
  boxModal.close();
});
