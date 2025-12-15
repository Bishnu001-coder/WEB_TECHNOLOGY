function getproduct() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakestoreapi.in/api/products", true);
    xhr.send();

    xhr.addEventListener("progress", function () {
        document.getElementById('displayele').innerText = "Loading...";
    });

    xhr.addEventListener("load", function () {
        let fecthdata = JSON.parse(xhr.responseText);
        let data = fecthdata.productdetails;
        let eachproduct = ``;

        for (let product of data) {
            eachproduct += `
                <div class="col-md-3 mb-3">
                    <div class="card h-100">
                        <img src="${product.image}" class="card-img-top" style="height:200px; object-fit:contain;">
                        <div class="card-body">
                            <h5 class="card-title text-center">${product.brand}</h5>
                            <p class="card-text text-center">₹${product.price}</p>
                            <button class="btn btn-dark w-100">Buy now</button>
                        </div>
                    </div>
                </div>`;
        }

        document.getElementById('displayele').innerHTML = eachproduct;
    });
}

