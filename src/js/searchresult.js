
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
        rating: 4.80,
        sold: "10k"
    },

    {
        id: 19,
        name: " Cream crescent-shaped nylon crossbody bag",
        image: "./assets/searchproducts/b19.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 20,
        name: "Minimalist black faux-leather crossbody",
        image: "./assets/searchproducts/b20.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 21,
        name: "",
        image: "./assets/searchproducts/b21.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 22,
        name: "Black rectangular travel and laptop backpack",
        image: "./assets/searchproducts/b22.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 23,
        name: "Cylindrical duffel and gym bags",
        image: "./assets/searchproducts/b23.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 24,
        name: " PU leather shoulder hobo bags",
        image: "./assets/searchproducts/b24.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 25,
        name: "Light blue-grey flap backpack",
        image: "./assets/searchproducts/b25.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 26,
        name: "Army-green canvas hobo bag",
        image: "./assets/searchproducts/b26.jpeg",
        price: 200,
        rating: 5.8,
        sold: "5k"
    },

    {
        id: 27,
        name: "Cream tote shoulder bag",
        image: "./assets/searchproducts/b27.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 28,
        name: "Black flap-top backpack ",
        image: "./assets/searchproducts/b28.jpeg",
        price: 200,
        rating: 4.8,
        sold: "10.1k"
    },

    {
        id: 29,
        name: "Brown canvas messenger or crossbody ",
        image: "./assets/searchproducts/b29.jpeg",
        price: 159,
        rating: 4.8,
        sold: "5k"
    },

    {
        id: 30,
        name: "Dumpling Crossbody/Shoulder Bags",
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
            <div class="bg-white border border-transparent
            hover:border-[#ee4d2d]
            hover:shadow-lg transition duration-200
            group relative cursor-pointer">

    <!-- Product Image Container -->
    <div class="relative overflow-hidden">

        <!-- Main Product Image -->
        <img src="${product.image}"
             alt="${product.name}"
             class="w-full aspect-square object-cover
                    transition-transform duration-300
                    group-hover:scale-105">

        <!-- Promotion Banner Image -->
        <img src="./assets/products/promo-banner.png"
             alt="Promotion"
             class="absolute bottom-0 left-0 w-full h-auto
                    object-contain z-10 pointer-events-none">

        <!-- Discount -->
        <span class="absolute top-0 right-0 z-20
                     bg-[#ee4d2d]/80 text-white
                     text-xs px-2 py-1">
            -99%
        </span>

    </div>

    <!-- Product Details -->
    <div class="p-2">

        <!-- Product Name -->
        <h3 class="text-sm line-clamp-2">

            <span class="border border-[#ee4d2d]
                         text-white text-xs
                         bg-[#ee4d2d] px-1 mr-1">
                Preferred
            </span>

            ${product.name}

        </h3>

        <!-- Exclusive Tags -->
        <div class="flex gap-x-2 mt-1">

            <span class="border border-[#ee4d2d]
                         text-[#ee4d2d] text-xs p-1
                         rounded-sm w-30 line-clamp-1">
                New User Exclusive
            </span>

            <span class="border border-[#ee4d2d]
                         text-[#ee4d2d] text-xs p-1
                         rounded-sm w-30 line-clamp-1">
                VIP Exclusive
            </span>

        </div>

        <!-- Price and Sold -->
        <div class="flex justify-between items-center mt-3">

            <span class="text-[#ee4d2d] text-base">
                ฿${product.price}
            </span>

            <span class="text-xs text-gray-500">
                ${product.sold} sold
            </span>

        </div>

    </div>

    <!-- Find Similar -->
    <div class="absolute top-full left-0 w-full
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

    }).join('');

}

displayProducts();
