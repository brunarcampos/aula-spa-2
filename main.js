//selecionar todos os cabecalho__lista-item
document.querySelectorAll(".cabecalho_lista-item").forEach(item => {
    //adicionar um ouvinte mouseover
    item.addEventListener("mouseover", () => alternarSubmenu(item, true));

    //adicionar um ouvinte mouseout
    item.addEventListener("mouseout", () => alternarSubmenu(item, false));
})
