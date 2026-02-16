// Sample Products Database
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "electronics",
        price: 99.99,
        image: "🎧",
        description: "Premium wireless headphones with noise cancellation"
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "electronics",
        price: 199.99,
        image: "⌚",
        description: "Feature-rich smartwatch with health tracking"
    },
    {
        id: 3,
        name: "Designer T-Shirt",
        category: "fashion",
        price: 29.99,
        image: "👕",
        description: "Premium cotton t-shirt with modern design"
    },
    {
        id: 4,
        name: "Running Shoes",
        category: "sports",
        price: 79.99,
        image: "👟",
        description: "Comfortable running shoes for all terrains"
    },
    {
        id: 5,
        name: "Coffee Maker",
        category: "home",
        price: 149.99,
        image: "☕",
        description: "Automatic coffee maker with timer"
    },
    {
        id: 6,
        name: "Yoga Mat",
        category: "sports",
        price: 34.99,
        image: "🧘",
        description: "Non-slip yoga mat for home workouts"
    },
    {
        id: 7,
        name: "Laptop Backpack",
        category: "electronics",
        price: 59.99,
        image: "🎒",
        description: "Durable backpack with laptop compartment"
    },
    {
        id: 8,
        name: "Sunglasses",
        category: "fashion",
        price: 89.99,
        image: "🕶️",
        description: "UV protection sunglasses with style"
    }
];

// Display products
function displayProducts(productsToShow, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Featured products for homepage
if (document.getElementById('featuredProducts')) {
    const featured = products.slice(0, 4);
    displayProducts(featured, 'featuredProducts');
}

// All products for products page
if (document.getElementById('allProducts')) {
    displayProducts(products, 'allProducts');
    
    // Filter functionality
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', filterProducts);
    }
}

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const sort = document.getElementById('sortFilter').value;
    
    let filtered = [...products];
    
    // Filter by category
    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }
    
    // Sort products
    switch(sort) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    displayProducts(filtered, 'allProducts');
}

// Get product by ID
function getProductById(id) {
    return products.find(p => p.id === id);
}