const display = document.getElementById('display');
const saved = document.getElementById('saved');
const savedItems = document.getElementById('saveditems');
const nosaved = document.getElementById('nosaved');
const append = (value) => display.value += value;
const calculate = () => display.value = eval(display.value);
const deleteLast = () => display.value = display.value.slice(0, -1);
const clearDisplay = () => display.value = '';
const init = () => {
    if (localStorage.getItem('saved') !== null) {
        nosaved.style.display = 'none';
    }
    // every saved item gets a nice div element
    // <div class="saved-item">1 + 1 = 2</div> for example
    savedItems.innerHTML = localStorage.getItem('saved').split(',').map((item) => {
        return `<div class="saved-item">${item}</div>`;
    }).join('');
}
const save = () => {
    if (localStorage.getItem('saved') === null) {
        localStorage.setItem('saved', display.value);
    } else {
        localStorage.setItem('saved', `${localStorage.getItem('saved')}, ${display.value}`);
    }
}
const viewSaved = () => {
    init();
    saved.style.display = 'block';
}
const closeSaved = () => saved.style.display = 'none';