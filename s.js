const restaurants = [
    {
        name: "Pizza Place",
        image: "https://via.placeholder.com/150",
        description: "Delicious pizzas made fresh.",
    },
    {
        name: "Sushi Spot",
        image: "https://via.placeholder.com/150",
        description: "Fresh sushi and sashimi.",
    },
    {
        name: "Burger Joint",
        image: "https://via.placeholder.com/150",
        description: "Juicy burgers with a variety of toppings.",
    },
];

function displayRestaurants(restaurants) {
    const restaurantList = document.getElementById("restaurant-list");
    restaurantList.innerHTML = '';
    restaurants.forEach(restaurant => {
        const div = document.createElement("div");
        div.className = "restaurant";
        div.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <h3>${restaurant.name}</h3>
            <p>${restaurant.description}</p>
            <button onclick="order('${restaurant.name}')">Order Now</button>
        `;
        restaurantList.appendChild(div);
    });
}

function order(name) {
    alert(`Order placed for ${name}!`);
}

document.getElementById("search").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchTerm)
    );
    displayRestaurants(filteredRestaurants);
});

// Initial display
displayRestaurants(restaurants);
