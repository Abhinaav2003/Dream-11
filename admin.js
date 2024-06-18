document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const productForm = document.getElementById('productForm');
    const addProductSection = document.getElementById('add-product');
    const adminLoginSection = document.getElementById('admin-login');
    const adminCredentials = {
        username: 'admin',
        password: 'admin123'
    };

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === adminCredentials.username && password === adminCredentials.password) {
            adminLoginSection.style.display = 'none';
            addProductSection.style.display = 'block';
        } else {
            alert('Invalid credentials!');
        }
    });

    productForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('product-name').value;
        const price = parseFloat(document.getElementById('product-price').value);
        const image = document.getElementById('product-image').value;

        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push({ name, price, image });
        localStorage.setItem('products', JSON.stringify(products));

        alert('Product added successfully!');
        productForm.reset();
    });
});
