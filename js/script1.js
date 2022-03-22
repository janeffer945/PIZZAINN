const listenForTypeChange = (e) => {
    if (e.value !== '') {
        pizzaOrder.name = e.value;
    }
}
const listenForSizeChange = (e) => {
    if (!e.value !== '') {
        const size_ = pizzaSizes.find(size => size.name === e.value);
        pizzaOrder.size = size_.name;
        pizzaOrder.price = size_.price;
    }
}
const listenForCrustChange = (e) => {
    if (!e.value !== '') {
        const crust_ = pizzaCrusts.find(crust => crust.name === e.value);
        pizzaOrder.crust = crust_;
    }
}
const listenForQuantityChange = (e) => {
    // pizzaOrder.name = e.value;
}
// const
if (order_form) {
    order_form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (pizzaOrder.name === undefined || pizzaOrder.name === '') {
            alert('Please select a pizza type/flavour');
            return;
        }
        if (pizzaOrder.size === undefined || pizzaOrder.price === undefined) {
            alert('Please select pizza size');
            return;
        }
        if (pizzaOrder.crust === undefined) {
            alert('Please select a crust');
            return;
        }
        makeOrder(pizzaOrder, pizza_quantity.value);
        // console.log('cart total', cart.getTotalPrice())
    });
}
const makeOrder = (pizza_order, quantity) => {
    const singlepizzaInCart = new SinglePizzaInCart(pizza_order, quantity);
    cart.addPizza(singlepizzaInCart);
    window.location.reload();
    window.location.href = './index.html#checkout';
}
if (checkout_form) {
    checkout_form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (name_.value === '') {
            alert('Please enter your name');
            return;
        }
        if (phone.value === '') {
            alert('Please enter your phone number');
            return;
        }
        if (address.value === '') {
            alert('Please enter your address');
            return;
        }
        if (cart.getCart().pizzasincart.length === 0) {
            alert('Please add atleast a pizza to the cart before proceeding to delivery');
            return;
        }
        placeOrder();
    });
}
function placeOrder() {
    order.addOrder(cart.getCart());
    alert('Your order has been placed, thank you for shopping with us.');
    cart.clearCart();
    window.location.reload();
    window.location.href = './index.html#orders';
}
function clearCart() {
    cart.clearCart();
    window.location.reload();
}
const addToCart = (pizza_name) => {
    const pizza_ = pizzas.find(pizza => pizza.name === pizza_name);
    const singlepizzaInCart = new SinglePizzaInCart(pizza_, 1);
    cart.addPizza(singlepizzaInCart);
    window.location.reload();
}