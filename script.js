

addEventListener('click', (event) => {
    const menuItemList = {
        paginaInicial: document.getElementById("paginaInicial"),
        sobre: document.getElementById("sobre"),
        formacao: document.getElementById("formacao"),
        atuacao: document.getElementById("atuacao"),
        contato: document.getElementById("contato"),
        portfolio: document.getElementById("portfolio"),
        descTecnologia: document.getElementById("descTecnologia")
    }
    Object.values(menuItemList).forEach((item) => {
        item.classList.remove("menuIluminado");
    })
    menuItemList[event.target.name].classList.add("menuIluminado");
    console.log(menuItemList[event.target.name]);
});
