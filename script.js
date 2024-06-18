document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('products');
    const products = JSON.parse(localStorage.getItem('products')) || [];

    function displayProducts() {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
            `;
            productsContainer.appendChild(productElement);
        });
    }

    displayProducts();
});
