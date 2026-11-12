
const products = [
    {
        id: 1,
        name: "Fashion Women's Crossbody Bag",
        image: "./assets/searchproducts/b1.jpeg",
        price: 199,
        rating: 4.9,
        sold: "20k"
    },
    {
        id: 2,
        name: "Tote Bag",
        image: "./assets/searchproducts/b2.jpeg",
        price: 299,
        rating: 4.8,
        sold: "10k"
    },
    {
        id: 3,
        name: "Leather Bag",
        image: "./assets/searchproducts/b3.jpeg",
        price: 399,
        rating: 4.7,
        sold: "8k"
    },
    {
        id: 4,
        name: "Travel Bag",
        image: "./assets/searchproducts/b4.jpeg",
        price: 499,
        rating: 5.0,
        sold: "12k"
    },
    {
        id: 5,
        name: "Mini Bag",
        image: "./assets/searchproducts/b5.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 6,
        name: "Mini Bag",
        image: "./assets/searchproducts/b6.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 7,
        name: "Anello black canvas tote bag",
        image: "./assets/searchproducts/b7.jpeg",
        price: 200,
        rating: 5.8,
        sold: "10k"
    },

    {
        id: 8,
        name: "Fixie Bicycle Messenger Bag",
        image: "./assets/searchproducts/b8.jpeg",
        price: 100,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 9,
        name: "Laptop and travel backpacks",
        image: "./assets/searchproducts/b9.jpeg",
        price: 200,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 10,
        name: "crossbody or shoulder bag,",
        image: "./assets/searchproducts/b10.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 11,
        name: " Black faux leather crescent hobo ",
        image: "./assets/searchproducts/b11.jpeg",
        price: 200,
        rating: 5.8,
        sold: "11k"
    },

    {
        id: 12,
        name: "Sling shoulder bag",
        image: "./assets/searchproducts/b12.jpeg",
        price: 250,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 13,
        name: "Minimalist canvas messenger bag",
        image: "./assets/searchproducts/b13.jpeg",
        price: 200,
        rating: 6.8,
        sold: "5k"
    },

    {
        id: 14,
        name: " Black canvas tote bag",
        image: "./assets/searchproducts/b14.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 15,
        name: "Messenger crossbody bag",
        image: "./assets/searchproducts/b15.jpeg",
        price: 200,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 16,
        name: "Green-colored canvas tote",
        image: "./assets/searchproducts/b16.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 17,
        name: "Mini Bag",
        image: "./assets/searchproducts/b17.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 18,
        name: " Brown corduroy shoulder/crossbody",
        image: "./assets/searchproducts/b18.jpeg",
        price: 200,
        rating: 4.8,
        sold: "10k"
    },

    {
        id: 19,
        name: "Mini Bag",
        image: "./assets/searchproducts/b19.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 20,
        name: "Mini Bag",
        image: "./assets/searchproducts/b20.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 21,
        name: "Mini Bag",
        image: "./assets/searchproducts/b21.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 22,
        name: "Mini Bag",
        image: "./assets/searchproducts/b22.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 23,
        name: "Mini Bag",
        image: "./assets/searchproducts/b23.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 24,
        name: "Mini Bag",
        image: "./assets/searchproducts/b24.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 25,
        name: "Mini Bag",
        image: "./assets/searchproducts/b25.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 26,
        name: "Mini Bag",
        image: "./assets/searchproducts/b26.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 27,
        name: "Mini Bag",
        image: "./assets/searchproducts/b27.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 28,
        name: "Mini Bag",
        image: "./assets/searchproducts/b28.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 29,
        name: "Mini Bag",
        image: "./assets/searchproducts/b29.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 30,
        name: "Mini Bag",
        image: "./assets/searchproducts/b30.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    }

];

// Repeat products to make 30 products
const allProducts = Array.from({ length: 30 }, (_, index) => {
    const product = products[index % products.length];

    return {
        ...product,
        id: index + 1
    };
});


// Get Grid
const productGrid = document.getElementById("productGrid");


// Display Products
function displayProducts() {

    productGrid.innerHTML = allProducts.map(product => {

        return `
            <div class="bg-white border hover:shadow-lg transition duration-200 group relative">

                <img src="${product.image}"
                     alt="${product.name}"
                     class="w-full h-52 object-cover">

                <div class="p-3">

                    <h3 class="text-sm line-clamp-2">
                        ${product.name}
                    </h3>

                    <p class="text-[#ee4d2d] text-lg font-semibold mt-2">
                        ฿${product.price}
                    </p>

                    <div class="flex justify-between text-xs text-gray-500 mt-2">

                        <span>⭐ ${product.rating}</span>

                        <span>${product.sold} Sold</span>

                    </div>

                </div>

                <!-- Find Similar -->
                <div class="absolute bottom-0 left-0 w-full
                            bg-[#ee4d2d] text-white text-center
                            py-2 text-sm z-30
                            opacity-0 invisible
                            group-hover:opacity-100
                            group-hover:visible
                            transition-all duration-200">

                    Find Similar

                </div>

            </div>
        `;

    }).join("");

}

displayProducts();
