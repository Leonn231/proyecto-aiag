function downloadFile() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('Hello, this is a test file.'));
    element.setAttribute('download', 'testfile.txt');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
document.addEventListener('DOMContentLoaded', () => {
    const catalogo = document.getElementById('catalogo');

    catalogo.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const item = e.target.parentElement;
            const itemId = item.getAttribute('data-id');
            const itemTitle = item.getAttribute('data-title');

            const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push({ id: itemId, title: itemTitle });
            localStorage.setItem('carrito', JSON.stringify(carrito));
            
            alert(`${itemTitle} agregado al carrito!`);
        }
    });
});
