// -------------------------- Home work --------------------------
// -------------------------- Еглевский Владислав Александрович --------------------------



// 6. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none.
// При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот
// dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться.
// При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.

let dropDownItem = document.querySelectorAll('.dropdown-item');

let menuHide = document.getElementsByClassName('dropdown-menu');

for (let i = 0; i < dropDownItem.length; i++){

    dropDownItem[i].setAttribute('id', 'menuClick '+[i]);

    menuHide[i].setAttribute('id', 'menuDrop '+[i]);

}

let menuClickFirst = document.getElementById('menuClick 0');

let menuClickSecond = document.getElementById('menuClick 1');

menuClickFirst.addEventListener('click',function () {

    document.getElementById('menuDrop 0').classList.toggle('d-none');

    document.getElementById('menuDrop 1').classList.add('d-none');

});

menuClickSecond.addEventListener('click',function () {

    document.getElementById('menuDrop 1').classList.toggle('d-none');

    document.getElementById('menuDrop 0').classList.add('d-none');

});


