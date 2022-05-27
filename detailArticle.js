const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const detail = urlParams.get('id')


fetch('https://fakestoreapi.com/products/' + detail)
            .then(res=>res.json())
            .then(product =>{
                console.log(product.title);

                const tbody = document.querySelector("tbody")

                let tr = document.createElement("tr")
            let td_title = document.createElement("td");
            let td_prix = document.createElement("td");
            let td_image = document.createElement("td");
            let td_description = document.createElement("td");
            let td_category = document.createElement("td");
            let img = document.createElement("img");
            img.classList.add('w-50');


           
            
            td_description.innerText= product.description
            td_category.innerText= product.category
            td_title.innerText = product.title
            td_prix.innerText = product.price
            img.src = product.image

           

            td_image.appendChild(img)
            
            tr.appendChild(td_image)
            tr.appendChild(td_title)
            tr.appendChild(td_prix)
            tr.appendChild(td_description)
            tr.appendChild(td_category)
         
            tbody.appendChild(tr)

            })