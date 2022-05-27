



    
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const lienCat = urlParams.get('name')

console.log(lienCat);

 const tbody = document.querySelector("tbody")
fetch('https://fakestoreapi.com/products/category/'+ lienCat)
    .then(res => res.json())
    .then(products => {
        products.forEach(product => {
           
           
            let tr = document.createElement("tr")
            let td_title = document.createElement("td");
            let td_prix = document.createElement("td");
            let td_image = document.createElement("td");
            let td_detail = document.createElement("td");
            let img = document.createElement("img");
            img.classList.add('w-50');


            let lien_detail = document.createElement("a")
           lien_detail.href="product.php?id="+product.id;
            lien_detail.classList.add("btn","btn-outline-primary");
            lien_detail.innerText= "detail produit"
            

            td_title.innerText = product.title
            td_prix.innerText = product.price
            img.src = product.image

            
            td_detail.appendChild(lien_detail);

            td_image.appendChild(img)
            
            tr.appendChild(td_image)
            tr.appendChild(td_title)
            tr.appendChild(td_prix)
            tr.appendChild(td_detail)
            tbody.appendChild(tr)
        })
    })