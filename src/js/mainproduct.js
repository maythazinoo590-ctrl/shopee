const product = {
    name: "Samsung Galaxy Phone",
    shop: "Official Store",
    price: 159,
    discount: 20,
    sold: 69,
    description: "Samsung phone description",

    image: "./assets/main/phone.png", // Main image

    images: [
        "./assets/main/phone.png",
        "./assets/main/phone.png",
        "./assets/main/phone.png",
        "./assets/main/phone.png",
        "./assets/main/phone.png"
    ]
};

function renderProduct() {
    const originalPrice = product.price / (1 - product.discount / 100);

    const gallery = document.getElementById("productGallery");
    const mainImage = document.getElementById("mainImage");


    const images = product.images?.length
        ? product.images
        : [product.image];

    document.title = `${product.name} | Shopee`;

    document.getElementById("productBreadcrumb").textContent = product.name;
    document.getElementById("productShopBadge").textContent = product.shop;
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productSold").textContent =
        product.sold.toLocaleString();

    document.getElementById("productPrice").textContent =
        formatPrice(product.price);

    document.getElementById("productOriginalPrice").textContent =
        formatPrice(Math.round(originalPrice));

    document.getElementById("productDiscount").textContent =
        `-${product.discount}%`;

    document.getElementById("productDescription").textContent =
        product.description;

    document.getElementById("longDescription").textContent =
        product.description;


    mainImage.src = images[0];
    mainImage.alt = product.name;
    gallery.replaceChildren();


    images.forEach((image, index) => {

        const thumbnail = document.createElement("img");

        thumbnail.src = image;
        thumbnail.alt = `${product.name} thumbnail ${index + 1}`;

        thumbnail.className = `
            w-full
            aspect-square
            object-cover
            cursor-pointer
            border-2
            transition
            ${index === 0
                ? "border-[#ee4d2d]"
                : "border-transparent"}
        `;


        thumbnail.addEventListener("click", () => {

            mainImage.src = image;


            gallery.querySelectorAll("img").forEach(img => {
                img.classList.remove("border-[#ee4d2d]");
                img.classList.add("border-transparent");
            });

            thumbnail.classList.remove("border-transparent");
            thumbnail.classList.add("border-[#ee4d2d]");
        });

        gallery.appendChild(thumbnail);
    });
}



