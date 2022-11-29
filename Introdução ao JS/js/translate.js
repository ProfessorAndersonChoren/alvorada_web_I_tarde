let brazilianText = document.getElementById("textoPortugues");
let usaText = document.getElementById("textoIngles");

document.getElementById("bandeiraBrasil").addEventListener("click", () => {
    brazilianText.style = "display:block";
    usaText.style = "display:none";
});

document.getElementById("bandeiraUSA").addEventListener("click", () => {
  brazilianText.style = "display:none";
  usaText.style = "display:block";
});