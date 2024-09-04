let elList = document.querySelector(".card__wrapper")
let elTemplate = document.querySelector(".template").content
let cardHome = document.querySelector(".card__home")

function renderusers(arr, list) {
    arr?.map(item => {
        let cloneTeplate = elTemplate.cloneNode(true)
        let productsImg = cloneTeplate.querySelector(".products__img")
        let productsTitle = cloneTeplate.querySelector(".products__title")
        let narx = cloneTeplate.querySelector(".narx")

        productsImg.src = item.image
        productsTitle.textContent = item?.title
        narx.textContent = item?.price + " $"


        list.appendChild(cloneTeplate)
    })
}


function renderPopulars(arr, list) {
    arr?.filter(i => i.id <= 4)?.map(item => {
        let cloneTeplate = elTemplate.cloneNode(true)
        let productsImg = cloneTeplate.querySelector(".products__img")
        let productsTitle = cloneTeplate.querySelector(".products__title")
        let narx = cloneTeplate.querySelector(".narx")

        productsImg.src = item.image
        productsTitle.textContent = item?.title
        narx.textContent = item?.price + " $"


        list.appendChild(cloneTeplate)
    })
}

fetch("https://fakestoreapi.com/products/")
    .then(res => res.json())
    .then(data => {
        renderusers(data, elList)
        renderPopulars(data, cardHome)
    })