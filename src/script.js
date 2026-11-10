const productList = document.getElementById("productList");

productList.innerHTML = products.map(product => `
    <div onclick="openProduct(${product.id})"
         class="bg-white cursor-pointer border border-transparent
                hover:border-[#ee4d2d]">

        <div class="relative overflow-hidden">

            <img src="${product.image}"
                 class="w-full aspect-square object-cover">

            <span class="absolute top-0 right-0 bg-[#ee4d2d]/80
                         text-white text-xs px-2 py-1">
                -${product.discount}%
            </span>

        </div>

        <div class="p-2">

            <div class="line-clamp-2 text-sm">
                <span class="bg-[#ee4d2d] text-white text-xs">
                    ${product.shop}
                </span>
    
                ${product.name}
            </div>

            <div class="flex justify-between items-center mt-3">

                <span class="text-[#ee4d2d]">
                    ฿${product.price.toLocaleString()}
                </span>

                <span class="text-xs text-gray-500">
                    ${product.sold} sold
                </span>

            </div>

        </div>

    </div>
`).join("");

function openProduct(id) {
    window.location.href = `product-detail.html?id=${id}`;
}