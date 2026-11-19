
const products = [
    {
        id: 1,
        name: "True 5G Prepaid SIM Card – 190GB Mobile Internet Package",
        image: "./assets/products/card.jpeg",
        price: 13,
        discount: 74,
        sold: 289,
        shop: "Mall",
        description: "True 5G Prepaid SIM Card with 190GB mobile internet package.",
        badges: ["New User Exclusive"]
    },
    {
        id: 2,
        name: "Thermal Paper Roll (Receipt Paper Roll)",
        image: "./assets/products/tissue.jpeg",
        price: 145,
        discount: 99,
        sold: 239,
        shop: "Preferred",
        description: "High-quality thermal receipt paper roll.",
        badges: ["New User Exclusive", "VIP Exclusive"],
        banner: "./assets/products/promo-banner.png"
    },
    {
        id: 3,
        name: "Vivo V80 Lite 5G Smartphone (Pink)",
        image: "./assets/products/vivov80.jpeg",
        price: 21999,
        discount: 37,
        sold: 289,
        shop: "Mall",
        description: "Vivo V80 Lite 5G Smartphone in Pink.",
        badges: ["New User Exclusive", "VIP Exclusive"],
        banner: "./assets/products/promo-banner.png"
    },
    {
        id: 4,
        name: "LATAMALL Natural Latex Mattress (Rubber Mattress)",
        image: "./assets/products/latamall.jpeg",
        price: 700,
        discount: 40,
        sold: 500,
        shop: "Preferred",
        description: "Natural latex rubber mattress.",
        badges: ["New User Exclusive"],
        banner: "./assets/products/promo-banner.png"
    },
    {
        id: 5,
        name: "Fresh Durian",
        image: "./assets/products/durian.jpeg",
        price: 137,
        discount: 60,
        sold: 289,
        shop: "Mall",
        description: "Fresh durian."
    },
    {
        id: 6,
        name: "Dopamine Baby Three Years",
        image: "./assets/products/keychain.jpeg",
        price: 137,
        discount: 33,
        sold: 289,
        shop: "Preferred",
        description: "Cute Baby Three collectible.",
        badges: ["New User Exclusive", "VIP Exclusive"],
        banner: "./assets/products/promo-banner.png"
    },
    {
        id: 7,
        name: "Y68 / D20 Smart Bracelet",
        image: "./assets/products/watch.jpeg",
        price: 137,
        discount: 40,
        sold: 289,
        shop: "Mall",
        description: "Y68 / D20 Smart Bracelet.",
        badges: ["Cheap On Shopee", "New User Exclusive"]
    },
    {
        id: 8,
        name: "Anchi Electric Bike (E-bike)",
        image: "./assets/products/cycle.jpeg",
        price: 137,
        discount: 55,
        sold: 289,
        shop: "Preferred",
        description: "Anchi electric bike.",
        badges: ["Cheap On Shopee Trendy"],
        banner: "./assets/products/promotion.webp"
    },
    {
        id: 9,
        name: "Vertical-Ribbed Hard-Shell Rolling Suitcases",
        image: "./assets/products/luggage.jpeg",
        price: 137,
        discount: 35,
        sold: 289,
        shop: "Preferred",
        description: "Vertical-ribbed hard-shell rolling suitcase.",
        badges: ["Cheap On Shopee", "New User Exclusive"],
        banner: "./assets/products/promotion.webp"
    },
    {
        id: 10,
        name: "Light-blue High-waisted Wide-leg Baggy Denim Jeans",
        image: "./assets/products/sweatpant.jpeg",
        price: 133,
        discount: 45,
        sold: 400,
        shop: "Mall",
        description: "Light-blue high-waisted wide-leg denim jeans.",
        badges: ["Cheap On Shopee"],
        banner: "./assets/products/promo-banner.png"
    },
    {
        id: 11,
        name: "WaterLoco (or CIVAGO) 710ml Insulated Stainless Steel Cup",
        image: "./assets/products/cup.jpeg",
        price: 237,
        discount: 50,
        sold: 300,
        shop: "Preferred",
        description: "710ml insulated stainless steel cup.",
        badges: ["VIP Exclusive Price 6% off"],
        banner: "./assets/products/promotion.webp"
    },
    {
        id: 12,
        name: "OUKEYA Blink Blink Blush",
        image: "./assets/products/eyeshadow.jpeg",
        price: 300,
        discount: 50,
        sold: 460,
        shop: "Preferred",
        description: "OUKEYA Blink Blink Blush.",
        banner: "./assets/products/promotion.webp"
    },
    {
        id: 13,
        name: "Korean-style Nothing Letter Embroidery Cotton Baseball Cap",
        image: "./assets/products/cap.jpeg",
        price: 312,
        discount: 35,
        sold: 300,
        shop: "Mall",
        description: "Korean-style embroidered cotton baseball cap.",
        banner: "./assets/products/promo-banner.png"
    },
    {
        id: 14,
        name: "Brown Coffee-colored Stay Humble Zip-up Hoodie",
        image: "./assets/products/hoodie.jpeg",
        price: 234,
        discount: 65,
        sold: 400,
        shop: "Mall",
        description: "Brown coffee-colored zip-up hoodie.",
        badges: ["Cheap On Shopee", "New User Exclusive"],
        banner: "./assets/products/promotion.webp"
    },
    {
        id: 15,
        name: "Crocs Classic Clog",
        image: "./assets/products/crocs.jpeg",
        price: 237,
        discount: 35,
        sold: 300,
        shop: "Preferred",
        description: "Crocs Classic Clog.",
        badges: ["VIP Exclusive Price 5% off"],
        banner: "./assets/products/promo-banner.png"
    },
    {
        id: 16,
        name: "Cartoon Bear-patterned Long-sleeve Pajama",
        image: "./assets/products/pajama.jpeg",
        price: 137,
        discount: 20,
        sold: 300,
        shop: "Mall",
        description: "Cartoon bear-patterned long-sleeve pajama.",
        badges: ["VIP Cheap On Shopee"],
        banner: "./assets/products/promotion.webp"
    },
    {
        id: 17,
        name: "Aconatic Double Door Refrigerator",
        image: "./assets/products/refrigerator.jpeg",
        price: 500,
        discount: 40,
        sold: 400,
        shop: "Mall",
        description: "Aconatic double door refrigerator.",
        banner: "./assets/products/promo-banner.png"
    },
    {
        id: 18,
        name: "White Tote Bag",
        image: "./assets/products/tote.jpeg",
        price: 100,
        discount: 50,
        sold: 200,
        shop: "Preferred",
        description: "Simple white tote bag.",
        banner: "./assets/products/promotion.webp"
    },
    {
        id: 19,
        name: "Purity Thai Gold Rings",
        image: "./assets/products/ring.jpeg",
        price: 136,
        discount: 50,
        sold: 289,
        shop: "Preferred",
        description: "Purity Thai gold rings.",
        badges: ["Cheap On Shopee"]
    },
    {
        id: 20,
        name: "Mini Pocket Bike",
        image: "./assets/products/cycle2.jpeg",
        price: 237,
        discount: 50,
        sold: 300,
        shop: "Mall",
        description: "Mini pocket bike.",
        badges: ["Cheap On Shopee"],
        banner: "./assets/products/promotion.webp"
    },
    {
        id: 21,
        name: "Hisense 40-inch Full HD VIDAA Smart TV",
        image: "./assets/products/superday.jpeg",
        price: 437,
        discount: 50,
        sold: 289,
        shop: "Mall",
        description: "Hisense 40-inch Full HD VIDAA Smart TV.",
        badges: ["Cheap On Shopee"],
        banner: "./assets/products/promo-banner.png"
    },
    {
        id: 22,
        name: "Hisense CE-Series Inverter Air Conditioner",
        image: "./assets/products/hisense.png",
        price: 137,
        discount: 40,
        sold: 289,
        shop: "Mall",
        description: "Hisense CE-Series inverter air conditioner.",
        badges: ["Cheap On Shopee"],
        banner: "./assets/products/promotion.webp"
    },
    {
        id: 23,
        name: "Anchi Electric Bike (E-bike)",
        image: "./assets/products/cycle.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Mall",
        description: "Anchi electric bike.",
        badges: ["Cheap On Shopee"],
        banner: "./assets/products/promotion.webp"
    },
    {
        id: 24,
        name: "Cosmetic and Makeup Gift Set",
        image: "./assets/products/makeup.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Mall",
        description: "Cosmetic and makeup gift set.",
        badges: ["Cheap On Shopee", "New User Exclusive"],
        banner: "./assets/products/promo-banner.png"
    },
    {
        id: 25,
        name: "Tiny Sticker (Size A7, 7.4 x 10.5 cm)",
        image: "./assets/products/tiny.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Mall",
        description: "Tiny decorative sticker.",
        badges: ["Cheap On Shopee", "VIP Exclusive Price 1% off"],
        banner: "./assets/products/promo-banner.png"
    },
    {
        id: 26,
        name: "Yoosee Dual-Lens Wireless Outdoor IP Camera",
        image: "./assets/products/camera.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Mall",
        description: "Yoosee dual-lens wireless outdoor IP camera.",
        badges: ["Cheap On Shopee"],
        banner: "./assets/products/promotion.webp"
    },
    {
        id: 27,
        name: "Pink Cartoon-printed Short-sleeve Pajama",
        image: "./assets/products/pajama1.jpeg",
        price: 137,
        discount: 40,
        sold: 289,
        shop: "Mall",
        description: "Pink cartoon-printed short-sleeve pajama.",
        badges: ["Cheap On Shopee", "VIP Exclusive Price 1% off"],
        banner: "./assets/products/promo-banner.png"
    },
    {
        id: 28,
        name: "FitFlop Sling Sandals",
        image: "./assets/products/flipflot.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Mall",
        description: "FitFlop sling sandals.",
        badges: ["Cheap On Shopee", "VIP Exclusive Price 1% off"],
        banner: "./assets/products/promotion.webp"
    },
    {
        id: 29,
        name: "Thank You Adhesive Packaging Stickers",
        image: "./assets/products/tape.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Preferred",
        description: "Thank You adhesive packaging stickers.",
        badges: ["Shopee On Trendy", "New User Exclusive"],
        banner: "./assets/products/promo-banner.png"
    },
    {
        id: 30,
        name: "Analog Women's Quartz Watch",
        image: "./assets/products/moyenne.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Preferred",
        description: "Analog women's quartz watch.",
        badges: ["Cheap On Shopee", "VIP Exclusive Price 1% off"],
        banner: "./assets/products/promo-banner.png"
    },
    {
        id: 31,
        name: "Plus Size Cold Resistance",
        image: "./assets/products/resistance.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Preferred",
        description: "Analog women's quartz watch.",
        badges: ["Cheap On Shopee", "VIP Exclusive Price 1% off"],
        banner: "./assets/products/promo-banner.png"
    }
];


const productId = Number(new URLSearchParams(window.location.search).get("id"));
const product = products.find(item => item.id === productId) || products[0];
const formatPrice = price => `฿${price.toLocaleString()}`;

function createProductCard(item, compact = false) {
    const card = document.createElement("a");
    card.href = `product-detail.html?id=${item.id}`;
    card.className = compact
        ? "flash-product w-[calc((100%-16px)/2)] sm:w-[calc((100%-48px)/4)] lg:w-[calc((100%-80px)/6)] shrink-0 bg-white border hover:shadow-lg"
        : "bg-white group cursor-pointer border border-transparent hover:border-[#ee4d2d] relative";
    card.setAttribute("aria-label", `View ${item.name}`);

    const imageContainer = document.createElement("div");
    imageContainer.className = "relative overflow-hidden";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;
    image.className = compact
        ? "w-full aspect-square object-cover"
        : "w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105";
    imageContainer.append(image);

    const discount = document.createElement("span");
    discount.className = "absolute top-0 right-0 bg-[#ee4d2d]/80 text-white text-xs px-2 py-1";
    discount.textContent = `-${item.discount}%`;
    imageContainer.append(discount);
    card.append(imageContainer);

    const details = document.createElement("div");
    details.className = compact ? "p-3" : "p-2";

    const name = document.createElement(compact ? "h3" : "div");
    name.className = compact ? "text-sm line-clamp-2" : "line-clamp-2 text-sm";

    const shop = document.createElement("span");
    shop.className = "mr-1 text-xs text-white px-1 bg-[#ee4d2d]";
    shop.textContent = item.shop;
    name.append(shop, document.createTextNode(item.name));
    details.append(name);

    const footer = document.createElement("div");
    footer.className = "flex justify-between items-center mt-3";

    const price = document.createElement("span");
    price.className = "text-[#ee4d2d]";
    price.textContent = formatPrice(item.price);

    const sold = document.createElement("span");
    sold.className = "text-xs text-gray-500";
    sold.textContent = `${item.sold.toLocaleString()} sold`;

    footer.append(price, sold);
    details.append(footer);
    card.append(details);
    return card;
}

function renderProductShelves() {
    const recommendations = document.getElementById("productRecommendations");
    const slider = document.getElementById("flashSlider");

    recommendations.replaceChildren(
        ...products
            .filter(item => item.id !== product.id)
            .map(item => createProductCard(item))
    );

    slider.replaceChildren(
        ...products
            .filter(item => item.shop === product.shop && item.id !== product.id)
            .map(item => createProductCard(item, true))
    );
}

function toggleFavorite() {
    const icon = document.getElementById("heartIcon");
    const label = document.getElementById("favoriteText");
    const isFavorite = icon.classList.toggle("fa-solid");
    icon.classList.toggle("fa-regular", !isFavorite);
    label.textContent = isFavorite ? "Favorited" : "Favorite";
}

function changeQuantity(amount) {
    const quantity = document.getElementById("quantity");
    quantity.value = Math.max(1, Number(quantity.value) + amount);
}

function addToCart() {
    let cart;
    try {
        cart = JSON.parse(localStorage.getItem("cart") || "[]");
    } catch {
        alert("Unable to read your saved cart. Please check your cart data and try again.");
        return;
    }

    if (!Array.isArray(cart)) {
        alert("Unable to read your saved cart. Please check your cart data and try again.");
        return;
    }

    const quantity = Number(document.getElementById("quantity").value);
    const cartItem = cart.find(item => item.id === product.id);

    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart`);
}

function buyNow() {
    addToCart();
}


renderProductShelves();
