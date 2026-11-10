
const products = [
    {
        id: 1,
        name: "True 5G Prepaid SIM Card – 190GB Mobile Internet Package",
        image: "./img/card.jpeg",
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
        image: "./img/tissue.jpeg",
        price: 145,
        discount: 99,
        sold: 239,
        shop: "Preferred",
        description: "High-quality thermal receipt paper roll.",
        badges: ["New User Exclusive", "VIP Exclusive"],
        banner: "./img/promo-banner.png"
    },
    {
        id: 3,
        name: "Vivo V80 Lite 5G Smartphone (Pink)",
        image: "./img/vivov80.jpeg",
        price: 21999,
        discount: 37,
        sold: 289,
        shop: "Mall",
        description: "Vivo V80 Lite 5G Smartphone in Pink.",
        badges: ["New User Exclusive", "VIP Exclusive"],
        banner: "./img/promo-banner.png"
    },
    {
        id: 4,
        name: "LATAMALL Natural Latex Mattress (Rubber Mattress)",
        image: "./img/latamall.jpeg",
        price: 700,
        discount: 40,
        sold: 500,
        shop: "Preferred",
        description: "Natural latex rubber mattress.",
        badges: ["New User Exclusive"],
        banner: "./img/promo-banner.png"
    },
    {
        id: 5,
        name: "Fresh Durian",
        image: "./img/durian.jpeg",
        price: 137,
        discount: 60,
        sold: 289,
        shop: "Mall",
        description: "Fresh durian."
    },
    {
        id: 6,
        name: "Dopamine Baby Three Years",
        image: "./img/keychain.jpeg",
        price: 137,
        discount: 33,
        sold: 289,
        shop: "Preferred",
        description: "Cute Baby Three collectible.",
        badges: ["New User Exclusive", "VIP Exclusive"],
        banner: "./img/promo-banner.png"
    },
    {
        id: 7,
        name: "Y68 / D20 Smart Bracelet",
        image: "./img/watch.jpeg",
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
        image: "./img/cycle.jpeg",
        price: 137,
        discount: 55,
        sold: 289,
        shop: "Preferred",
        description: "Anchi electric bike.",
        badges: ["Cheap On Shopee Trendy"],
        banner: "./img/promotion.webp"
    },
    {
        id: 9,
        name: "Vertical-Ribbed Hard-Shell Rolling Suitcases",
        image: "./img/luggage.jpeg",
        price: 137,
        discount: 35,
        sold: 289,
        shop: "Preferred",
        description: "Vertical-ribbed hard-shell rolling suitcase.",
        badges: ["Cheap On Shopee", "New User Exclusive"],
        banner: "./img/promotion.webp"
    },
    {
        id: 10,
        name: "Light-blue High-waisted Wide-leg Baggy Denim Jeans",
        image: "./img/sweatpant.jpeg",
        price: 133,
        discount: 45,
        sold: 400,
        shop: "Mall",
        description: "Light-blue high-waisted wide-leg denim jeans.",
        badges: ["Cheap On Shopee"],
        banner: "./img/promo-banner.png"
    },
    {
        id: 11,
        name: "WaterLoco (or CIVAGO) 710ml Insulated Stainless Steel Cup",
        image: "./img/cup.jpeg",
        price: 237,
        discount: 50,
        sold: 300,
        shop: "Preferred",
        description: "710ml insulated stainless steel cup.",
        badges: ["VIP Exclusive Price 6% off"],
        banner: "./img/promotion.webp"
    },
    {
        id: 12,
        name: "OUKEYA Blink Blink Blush",
        image: "./img/eyeshadow.jpeg",
        price: 300,
        discount: 50,
        sold: 460,
        shop: "Preferred",
        description: "OUKEYA Blink Blink Blush.",
        banner: "./img/promotion.webp"
    },
    {
        id: 13,
        name: "Korean-style Nothing Letter Embroidery Cotton Baseball Cap",
        image: "./img/cap.jpeg",
        price: 312,
        discount: 35,
        sold: 300,
        shop: "Mall",
        description: "Korean-style embroidered cotton baseball cap.",
        banner: "./img/promo-banner.png"
    },
    {
        id: 14,
        name: "Brown Coffee-colored Stay Humble Zip-up Hoodie",
        image: "./img/hoodie.jpeg",
        price: 234,
        discount: 65,
        sold: 400,
        shop: "Mall",
        description: "Brown coffee-colored zip-up hoodie.",
        badges: ["Cheap On Shopee", "New User Exclusive"],
        banner: "./img/promotion.webp"
    },
    {
        id: 15,
        name: "Crocs Classic Clog",
        image: "./img/crocs.jpeg",
        price: 237,
        discount: 35,
        sold: 300,
        shop: "Preferred",
        description: "Crocs Classic Clog.",
        badges: ["VIP Exclusive Price 5% off"],
        banner: "./img/promo-banner.png"
    },
    {
        id: 16,
        name: "Cartoon Bear-patterned Long-sleeve Pajama",
        image: "./img/pajama.jpeg",
        price: 137,
        discount: 20,
        sold: 300,
        shop: "Mall",
        description: "Cartoon bear-patterned long-sleeve pajama.",
        badges: ["VIP Cheap On Shopee"],
        banner: "./img/promotion.webp"
    },
    {
        id: 17,
        name: "Aconatic Double Door Refrigerator",
        image: "./img/refrigerator.jpeg",
        price: 500,
        discount: 40,
        sold: 400,
        shop: "Mall",
        description: "Aconatic double door refrigerator.",
        banner: "./img/promo-banner.png"
    },
    {
        id: 18,
        name: "White Tote Bag",
        image: "./img/tote.jpeg",
        price: 100,
        discount: 50,
        sold: 200,
        shop: "Preferred",
        description: "Simple white tote bag.",
        banner: "./img/promotion.webp"
    },
    {
        id: 19,
        name: "Purity Thai Gold Rings",
        image: "./img/ring.jpeg",
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
        image: "./img/cycle2.jpeg",
        price: 237,
        discount: 50,
        sold: 300,
        shop: "Mall",
        description: "Mini pocket bike.",
        badges: ["Cheap On Shopee"],
        banner: "./img/promotion.webp"
    },
    {
        id: 21,
        name: "Hisense 40-inch Full HD VIDAA Smart TV",
        image: "./img/superday.jpeg",
        price: 437,
        discount: 50,
        sold: 289,
        shop: "Mall",
        description: "Hisense 40-inch Full HD VIDAA Smart TV.",
        badges: ["Cheap On Shopee"],
        banner: "./img/promo-banner.png"
    },
    {
        id: 22,
        name: "Hisense CE-Series Inverter Air Conditioner",
        image: "./img/hisense.png",
        price: 137,
        discount: 40,
        sold: 289,
        shop: "Mall",
        description: "Hisense CE-Series inverter air conditioner.",
        badges: ["Cheap On Shopee"],
        banner: "./img/promotion.webp"
    },
    {
        id: 23,
        name: "Anchi Electric Bike (E-bike)",
        image: "./img/cycle.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Mall",
        description: "Anchi electric bike.",
        badges: ["Cheap On Shopee"],
        banner: "./img/promotion.webp"
    },
    {
        id: 24,
        name: "Cosmetic and Makeup Gift Set",
        image: "./img/makeup.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Mall",
        description: "Cosmetic and makeup gift set.",
        badges: ["Cheap On Shopee", "New User Exclusive"],
        banner: "./img/promo-banner.png"
    },
    {
        id: 25,
        name: "Tiny Sticker (Size A7, 7.4 x 10.5 cm)",
        image: "./img/tiny.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Mall",
        description: "Tiny decorative sticker.",
        badges: ["Cheap On Shopee", "VIP Exclusive Price 1% off"],
        banner: "./img/promo-banner.png"
    },
    {
        id: 26,
        name: "Yoosee Dual-Lens Wireless Outdoor IP Camera",
        image: "./img/camera.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Mall",
        description: "Yoosee dual-lens wireless outdoor IP camera.",
        badges: ["Cheap On Shopee"],
        banner: "./img/promotion.webp"
    },
    {
        id: 27,
        name: "Pink Cartoon-printed Short-sleeve Pajama",
        image: "./img/pajama1.jpeg",
        price: 137,
        discount: 40,
        sold: 289,
        shop: "Mall",
        description: "Pink cartoon-printed short-sleeve pajama.",
        badges: ["Cheap On Shopee", "VIP Exclusive Price 1% off"],
        banner: "./img/promo-banner.png"
    },
    {
        id: 28,
        name: "FitFlop Sling Sandals",
        image: "./img/flipflot.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Mall",
        description: "FitFlop sling sandals.",
        badges: ["Cheap On Shopee", "VIP Exclusive Price 1% off"],
        banner: "./img/promotion.webp"
    },
    {
        id: 29,
        name: "Thank You Adhesive Packaging Stickers",
        image: "./img/tape.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Preferred",
        description: "Thank You adhesive packaging stickers.",
        badges: ["Shopee On Trendy", "New User Exclusive"],
        banner: "./img/promo-banner.png"
    },
    {
        id: 30,
        name: "Analog Women's Quartz Watch",
        image: "./img/moyenne.jpeg",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Preferred",
        description: "Analog women's quartz watch.",
        badges: ["Cheap On Shopee", "VIP Exclusive Price 1% off"],
        banner: "./img/promo-banner.png"
    },
        {
        id: 3,
        name: "Plus Size Cold Resistance",
        image: "./img/reistance.webp",
        price: 137,
        discount: 50,
        sold: 289,
        shop: "Preferred",
        description: "Analog women's quartz watch.",
        badges: ["Cheap On Shopee", "VIP Exclusive Price 1% off"],
        banner: "./img/promo-banner.png"
    }
];


// Format Price
// const formatPrice = price => `฿${price.toLocaleString()}`;


// Create Product Card
function createProductCard(item) {

    const card = document.createElement("a");

    card.href = `./product-detail.html?id=${item.id}`;

    card.className = `
        bg-white group cursor-pointer
        border border-transparent
        hover:border-[#ee4d2d]
        relative block
    `;

    // Product Image Container
    const imageContainer = document.createElement("div");

    imageContainer.className = "relative overflow-hidden";

    // Main Image
    const image = document.createElement("img");

    image.src = item.image;
    image.alt = item.name;

    image.className = `
        w-full aspect-square object-cover
        transition-transform duration-300
        group-hover:scale-105
    `;

    imageContainer.appendChild(image);


    // Promotion Banner
    if (item.banner) {

        const banner = document.createElement("img");

        banner.src = item.banner;

        banner.className = `
            absolute bottom-0 left-0 w-full
            h-auto object-contain z-10
            pointer-events-none
        `;

        imageContainer.appendChild(banner);
    }


    // Discount
    const discount = document.createElement("span");

    discount.className = `
        absolute top-0 right-0 z-20
        bg-[#ee4d2d]/80 text-white
        text-xs px-2 py-1
    `;

    discount.textContent = `-${item.discount}%`;

    imageContainer.appendChild(discount);

    card.appendChild(imageContainer);


    // Product Details
    const details = document.createElement("div");

    details.className = "p-2";


    // Product Name
    const name = document.createElement("div");

    name.className = "line-clamp-2 text-sm text-gray-700";


    // Shop Badge
    const shop = document.createElement("span");

    shop.className = `
        inline-block mr-1 px-1
        text-xs text-white
        ${item.shop === "Mall"
            ? "bg-red-700"
            : "bg-[#ee4d2d]"
        }
    `;

    shop.textContent = item.shop;

    name.append(shop, document.createTextNode(item.name));

    details.appendChild(name);


    // Promotion Labels
    if (item.badges && item.badges.length > 0) {

        const badges = document.createElement("div");

        badges.className = "flex flex-wrap gap-1 mt-2";

        item.badges.forEach(label => {

            const badge = document.createElement("span");

            badge.className = `
                border border-[#ee4d2d]
                text-[#ee4d2d] text-xs
                p-1 rounded-sm
            `;

            badge.textContent = label;

            badges.appendChild(badge);
        });

        details.appendChild(badges);
    }


    // Price and Sold
    const footer = document.createElement("div");

    footer.className = `
        flex justify-between items-center mt-3
    `;

    const price = document.createElement("span");

    price.className = "text-[#ee4d2d] text-base";

    price.textContent = formatPrice(item.price);


    const sold = document.createElement("span");

    sold.className = "text-xs text-gray-500";

    sold.textContent = `${item.sold.toLocaleString()} sold`;


    footer.append(price, sold);

    details.appendChild(footer);

    card.appendChild(details);


    // Find Similar
    const similar = document.createElement("div");

    similar.className = `
        absolute top-full left-0 w-full
        bg-[#ee4d2d] text-white text-center
        py-2 text-sm z-30
        opacity-0 invisible
        group-hover:opacity-100
        group-hover:visible
        transition-all duration-200
    `;

    similar.textContent = "Find Similar";

    card.appendChild(similar);


    return card;
}
