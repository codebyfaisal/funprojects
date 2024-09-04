const cartBtnInNav = document.querySelector(".cart-btn")
const favoriteBtnInNav = document.querySelector(".favorite-btn")
const cartMenu = document.querySelector(".cart-menu")
const favoriteMenu = document.querySelector(".favorite-menu")
const cartsContainer = cartMenu.querySelector(".carts")
const favoritesContainer = favoriteMenu.querySelector(".favorites")

const items = document.querySelectorAll("#products .items .item")

cartBtnInNav.addEventListener("click", () => {
    cartMenu.classList.toggle("none")
    if (!favoriteMenu.classList.contains("none")) favoriteMenu.classList.toggle("none");
})

favoriteBtnInNav.addEventListener("click", () => {
    favoriteMenu.classList.toggle("none")
    if (!cartMenu.classList.contains("none")) cartMenu.classList.toggle("none");
})

const cartTotalPrice = document.querySelector(".cart-total-price")
let totalPrice = 0;

items.forEach(item => {
    const itemId = item.getAttribute("item-id")
    const itemName = item.querySelector(".item-title").innerText;
    let itemImg = item.querySelector(".item-img").innerHTML;

    const addToCartBtn = item.querySelector(".add-to-cart-btn")
    addToCartBtn.addEventListener("click", () => {
        const carts = cartsContainer.querySelectorAll(".cart")

        let isItemPresent = false
        if (carts.length == 0) isItemPresent;
        else {
            carts.forEach(cart => {
                if (cart.getAttribute("item-id") == itemId) isItemPresent = true
            })
        }
        if (!isItemPresent) addToCartEvent(item, itemId, itemName, itemImg)
    })

    const addToFavoriteBtn = item.querySelector(".add-to-favorite-btn")
    addToFavoriteBtn.addEventListener("click", () => {
        const favorites = favoritesContainer.querySelectorAll(".favorite")
        let isItemPresent = false
        if (favorites.length == 0) isItemPresent;
        else {
            favorites.forEach(favorite => {
                if (favorite.getAttribute("item-id") == itemId) isItemPresent = true
            })
        }
        if (!isItemPresent) addToFavoriteEvent(item, itemId, itemName)
    })
});

let emptyLabelVisibility = (visibilityOf, itemsInMenu) => {
    const emptyMenuLabel = visibilityOf.querySelector(".empty-menu")
    if (itemsInMenu.length <= 0) {
        emptyMenuLabel.classList.remove("none")
    } else {
        emptyMenuLabel.classList.add("none")
    }
}

let addToCartEvent = (item, itemId, itemName, itemImg) => {
    let itemPrice = parseInt(item.querySelector(".item-price").innerText.slice(1).trim());

    const node = document.createElement("div");
    node.classList.add("cart");
    node.setAttribute("item-id", itemId)

    node.innerHTML = `
    <div class="cart-img">${itemImg}</div>
    <p class="item-name">${itemName}</p>
    <p class="item-price">$ ${itemPrice}</p>
    <div class="cart-icons">
    <i class="las la-minus-circle"></i>
    <span class="no-of-items">&nbsp;${1}&nbsp;</span>
    <i class="las la-plus-circle">&nbsp;&nbsp;&nbsp;</i>
    <i class="lar la-trash-alt"></i>
    </div>`;
    cartsContainer.appendChild(node);

    totalPrice += itemPrice
    cartTotalPrice.innerHTML = `$ ${totalPrice}`

    emptyLabelVisibility(cartMenu, cartsContainer.querySelectorAll(".cart"))

    const deleteIcon = node.querySelector(".la-trash-alt");
    deleteIcon.addEventListener("click", () => {
        totalPrice -= itemPrice;
        cartTotalPrice.innerHTML = `$ ${totalPrice}`;
        node.remove();
        emptyLabelVisibility(cartMenu, cartsContainer.querySelectorAll(".cart"));
    });
}

let addToFavoriteEvent = (item, itemId, itemName) => {
    const itemImgSrc = item.querySelector(".item-img img").src;
    const node = document.createElement("div");
    node.classList.add("favorite");
    node.setAttribute("item-id", itemId)

    node.innerHTML = `
    <img src="${itemImgSrc}" alt="">
    <p class="favorite-title">${itemName}</p>
    <i class="las la-times"></i>`;
    favoritesContainer.appendChild(node);
    item.querySelector(".lar.la-heart").classList.replace("lar", "las")
    emptyLabelVisibility(favoriteMenu, favoritesContainer.querySelectorAll(".favorite"))

    const deleteIcon = node.querySelector(".la-times");
    deleteIcon.addEventListener("click", () => {
        node.remove();
        item.querySelector(".las.la-heart").classList.replace("las", "lar")
        emptyLabelVisibility(favoriteMenu, favoritesContainer.querySelectorAll(".favorite"));
    });
}

// let addToFavoriteReverseEvent = (itemId) => {
//     // itemId =
//     cartsContainer.querySelectorAll(".cart").forEach(element => {
//         if (element.getAttribute("item-id") == itemId) {
//             element.remove()
//             // item.querySelector(".las.la-heart").classList.replace("las", "lar")
//             emptyLabelVisibility(favoriteMenu, favoritesContainer.querySelectorAll(".favorite"));
//         }
//     });
// }