document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    let cart = [];

    // Function to add item to the cart
    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({...product, quantity: 1});
        }
        renderCartItems();
        calculateTotalPrice();
    }

    // Function to render cart items
    function renderCartItems() {
        cartItemsContainer.innerHTML = ''; // Clear existing items
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>$${item.price}</p>
                    <input type="number" value="${item.quantity}" class="item-quantity" min="1" data-id="${item.id}">
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        // Add event listeners for quantity changes and remove buttons
        document.querySelectorAll('.item-quantity').forEach(input => {
            input.addEventListener('change', updateItemQuantity);
        });
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeItemFromCart);
        });
    }

    // Function to update item quantity
    function updateItemQuantity(event) {
        const itemId = event.target.getAttribute('data-id');
        const newQuantity = parseInt(event.target.value);
        const item = cart.find(item => item.id === itemId);
        if (item && newQuantity > 0) {
            item.quantity = newQuantity;
            calculateTotalPrice();
        }
    }

    // Function to remove item from cart
    function removeItemFromCart(event) {
        const itemId = event.target.getAttribute('data-id');
        cart = cart.filter(item => item.id !== itemId);
        renderCartItems();
        calculateTotalPrice();
    }

    // Function to calculate total price
    function calculateTotalPrice() {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        cartTotalPrice.textContent = total.toFixed(2);
    }

    // Example of adding items to cart (You can replace it with actual button clicks)
    addToCart({id: '1', name: 'Product 1', price: 19.99, image: 'image1.jpg'});
    addToCart({id: '2', name: 'Product 2', price: 29.99, image: 'image2.jpg'});
});
