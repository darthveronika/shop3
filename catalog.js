document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, title: 'Диван SOLANA', price: '59 999 ₽', image: './images/sofa1.jpg' },
        { id: 2, title: 'Диван DREAMMART', price: '62 999 ₽', image: './images/sofa2.jpg' },
        { id: 3, title: 'Диван LOVE', price: '129 999 ₽', image: './images/sofa3.jpg' },
        { id: 4, title: 'Кресло Зефир', price: '5 999 ₽', image: './images/chair1.jpg' }
    ];

    const productContainer = document.getElementById('product-container');

    // Функция для отображения товаров
    const renderProducts = () => {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="card-image">

                <div class="card-content">
                    <h3 class="card-title">${product.title}</h3>
                    <p class="card-price">${product.price}</p>
                    <div class="card-buttons">
                        <button class="card-button">Добавить в корзину</button>
                        <button class="card-favorite" aria-label="Добавить в избранное">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
            productContainer.appendChild(card);
        });
    };

    renderProducts();
});
