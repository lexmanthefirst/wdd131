const elements = document.querySelectorAll('.element');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalHeader = modal.querySelector('.modal-header');
const modalContent = modal.querySelector('.modal-content');
const modalClose = modal.querySelector('.modal-close');

elements.forEach(element => {
    element.addEventListener('click', () => {
        const name = element.getAttribute('data-name');
        const symbol = element.getAttribute('data-symbol');
        const atomicNumber = element.getAttribute('data-atomic-number');
        const info = element.getAttribute('data-info');

        modalHeader.textContent = `${name} (${symbol}) - Atomic Number: ${atomicNumber}`;
        modalContent.textContent = info;
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});