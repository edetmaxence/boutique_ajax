
const li = document.querySelector("li")
fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(cats => {
        // console.log(cats)


        cats.forEach(cat => {

            const a = document.createElement("a")
            a.id = cat
            a.href = "category.php?name=" + cat;
            a.innerText = cat;
            a.classList.add("nav-link")

            li.appendChild(a)
        });

    })
    .catch(error => alert(error));



const btnAll = document.querySelector(".showAll");
btnAll.addEventListener("click", () => {
    tbodyRemove();
    const param = "";
    createTable(param);


})
const btnlimit = document.querySelector(".showLimit-5");
btnlimit.addEventListener("click", () => {

    tbodyRemove();

    const param = "?limit=5";
    createTable(param);


})
const btnDesc = document.querySelector(".desc");
btnDesc.addEventListener("click", () => {

    tbodyRemove();

    const param ="?sort=desc";
    createTable(param);


})





const tbodyRemove = () => {
    const tbody = document.querySelector("tbody")
    tbody.remove();
}


const createTable = (param) => {
    fetch('https://fakestoreapi.com/products' + param)
        .then(res => res.json())
        .then(products => {
            const table=document.querySelector("table")
            let tbody = document.createElement("tbody")
            products.forEach(product => {

          



                let tr = document.createElement("tr")
                let td_title = document.createElement("td");
                let td_prix = document.createElement("td");
                let td_image = document.createElement("td");
                let td_detail = document.createElement("td");
                let img = document.createElement("img");
                img.classList.add('w-50');


                let lien_detail = document.createElement("a")
                lien_detail.href = "product.php?id=" + product.id;
                lien_detail.classList.add("btn", "btn-outline-primary");
                lien_detail.innerText = "detail produit"


                td_title.innerText = product.title
                td_prix.innerText = product.price
                img.src = product.image


                td_detail.appendChild(lien_detail);

                td_image.appendChild(img)

                table.appendChild(tbody)
                tbody.appendChild(tr)
                tr.appendChild(td_image)
                tr.appendChild(td_title)
                tr.appendChild(td_prix)
                tr.appendChild(td_detail)
                


            });

        })
        .catch(error => alert(error));
}

//const tbody = document.querySelector("tbody")
//tbody.remove();
const param = "";
createTable(param);

