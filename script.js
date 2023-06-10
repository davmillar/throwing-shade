const letters = 'ABCDEFGHIJKLMNOPQRABCDEFGHIJKLMNOPQRABCDEFGHIJKLMNOPQRABCDEFGHIJKLMNOPQRABCDEFGHI';
const image = document.getElementById('mainSvg');

(() => {
    for (let j=0; j<9; j++) {
        for (let i=0; i<9; i++) {
            let rectEl = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectEl.setAttribute('x', 10 * i + 5);
            rectEl.setAttribute('y', 10 * j + 5);
            rectEl.setAttribute('width', 10);
            rectEl.setAttribute('height', 10);
            rectEl.classList.add('square');
            image.appendChild(rectEl);
            let textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            textEl.setAttribute('x', 10 * i + 10);
            textEl.setAttribute('y', 10 * j + 12);
            textEl.textContent = letters[9 * j + i];
            image.appendChild(textEl);
        }
    }
    image.addEventListener('click', (e) => {
        console.log(e);
    });
})();