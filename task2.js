const body = document.querySelector('body');
const col1 = document.getElementById('col1');
const col2 = document.getElementById('col2');
const col3 = document.getElementById('col3');
const showValue = document.getElementById('showValue');

function changeBg() {
    body.style.background = `linear-gradient(to right, ${col1.value}, ${col2.value},${col3.value})`;

    showValue.textContent = "Copy Code: " + `linear-gradient(to right, ${col1.value}, ${col2.value},${col3.value})`;
}

col1.addEventListener('input', changeBg);
col2.addEventListener('input', changeBg);
col3.addEventListener('input',changeBg);