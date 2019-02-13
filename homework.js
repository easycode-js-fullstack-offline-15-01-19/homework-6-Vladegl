// -------------------------- Home work --------------------------
// -------------------------- Еглевский Владислав Александрович --------------------------


//1.

let btn = document.getElementById('btn-msg');
let btnContent = btn.getAttribute('data-text');

btn.onclick = function () { console.log('btn-msg message alerted'); };
btn.addEventListener('click', function () { alert(btnContent); });


//2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку,
// она становится прежнего цвета. Цвет менять можно через добавление класса.

function addRedColor(el) { el.target.classList.add('redColor') }
function removeRedColor(el) { el.target.classList.remove('redColor') }

btn.onmouseover = function () { console.log('btn-msg mouseover'); };
btn.addEventListener('mouseover', addRedColor);

btn.onmouseleave = function() { console.log('btn-msg mouseleave'); };
btn.addEventListener('mouseleave', removeRedColor);

//3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

let tagId = document.getElementById('tag');

document.onclick = function() { console.log('clicked tag name was shown in tagId element')};
function showTagName(el) { tagId.textContent = el.target.tagName; }

document.addEventListener('click', showTagName);

//4. При нажатии на кнопку btn-generate добавлять в список ul
// элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д

let btnGener = document.getElementById('btn-generate');
let ul = document.querySelector('ul');
let liElms = ul.getElementsByTagName('li');

function addLiToUl() {

    let createLi = document.createElement('li');

    ul.insertAdjacentElement('beforeend', createLi);

    createLi.textContent = `Item ${liElms.length}`;

}

btnGener.onclick = function () { console.log(`item ${liElms.length + 1} was added to UL`) };
btnGener.addEventListener('click', addLiToUl);









