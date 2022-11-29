// Objeto console
// console.log("Hello World!!!")
// console.info("Um informativo qualquer!!!")
// console.warn("A requisição foi muito demorada!!!")
// console.error("Um erro muito grave aconteceu agora!!!")

// Imprimir informações para o usuário
let paragraph = document.getElementById("meuPagrafo");
console.log(paragraph);

paragraph.classList.add("text-center", "fw-bold", "text-primary");

paragraph.innerText = "Um texto inserido via JS";

// --------------------- Eventos --------------------------
let image = document.createElement("img");
image.src = "../img/gurias.jpg";
image.width = 300;
image.classList.add("border", "border-primary");

document.body.appendChild(image);

console.log(image);

let change = true;
image.addEventListener("click", () => {
  if (change) {
    image.src = "../img/gato.jpg";
  } else {
    image.src = "../img/gurias.jpg";
  }
  change = !change;
});
