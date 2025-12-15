function ajaxcall() {
    let xhr = new XMLHttpRequest(); 
    xhr.open("GET", "https://fakestoreapi.com/products", true); // Also corrected URL
    xhr.send();
    return xhr;
}

function displaydata(products) {
    if (products.length === 0) return;
    let eachproduct = ``;

    for (let product of products) { 
        eachproduct += `
            <div class="col-md-3 mb-3">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" style="height:200px; object-fit:contain;">
                    <div class="card-body">
                        <h5 class="card-title text-center">${product.title}</h5>
                        <p class="card-text text-center">₹${product.price}</p>
                        <button class="btn btn-dark w-100">Buy now</button>
                    </div>
                </div>
            </div>`;
    }
    document.getElementById('displayele').innerHTML = eachproduct;
}

let items = [];

function fetchdata() {
    let req = ajaxcall();
    req.addEventListener('load', function () {
        let getdata = JSON.parse(req.responseText);
        items = getdata; 
        displaydata(items);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    fetchdata(); 

    let searchBox = document.getElementById('search-box');
    let searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', function () {
        let searchText = searchBox.value.toLowerCase();
        let updatedArr = items.filter(item => {
            return item.title.toLowerCase().includes(searchText);
        });
        displaydata(updatedArr);
    });
});
