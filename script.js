let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    totalPrice += price;
    updateCartDisplay();
    alert(`${item} has been added to your cart!`);
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');
    
    cartItems.innerHTML = '';
    cart.forEach(cartItem => {
        const listItem = document.createElement('li');
        listItem.textContent = `${cartItem.item} - $${cartItem.price}`;
        cartItems.appendChild(listItem);
    });
    
    totalPriceDisplay.textContent = `Total: $${totalPrice}`;
}
