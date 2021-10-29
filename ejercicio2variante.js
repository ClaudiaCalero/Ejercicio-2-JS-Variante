//  Desarrollar una función que con ésta misma escriba títulos y subtitulos 

function printTitleH1(title, h) {
    let placeToPrint = document.getElementById("test");
    placeToPrint.innerHTML += `<${h}> ${title} </${h}>`;
}
printTitleH1("Hello World", "h1");
printTitleH1("Gracias Facu", "h2");
printTitleH1("Adiós", "h3"); 